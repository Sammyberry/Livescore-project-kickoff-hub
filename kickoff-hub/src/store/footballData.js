// ✅ src/store/footballData.js
// Handles fetching football match data from the Football-Data.org API

const API_BASE = "https://api.football-data.org/v4";
const PROXY = "https://cors-anywhere.herokuapp.com/"; // 👈 Temporary fix for browser CORS
const API_KEY = "6a0980553f8c42d8882bfc541c942917"; // ⚠️ Your token — keep private if you ever deploy

// --- 1️⃣ Generic Request Helper ---
async function request(endpoint) {
  const res = await fetch(`${PROXY}${API_BASE}${endpoint}`, {
    headers: {
      "X-Auth-Token": API_KEY,
    },
  });

  if (!res.ok) {
    const errText = await res.text();
    console.error(`❌ API ${res.status}: ${errText}`);
    throw new Error(`API ${res.status}: ${errText}`);
  }

  return res.json();
}

// --- 2️⃣ Fetch Today’s Matches ---
export async function getTodayMatches() {
  const today = new Date().toISOString().split("T")[0];
  const endpoint = `/matches?dateFrom=${today}&dateTo=${today}`;
  return request(endpoint);
}

// --- 3️⃣ Transform API Data into App Format ---
export function mapMatchesToStore(apiData) {
  if (!apiData || !apiData.matches) return { liveMatches: [], upcomingFixtures: [] };

  const liveMatches = apiData.matches
    .filter((m) => m.status === "IN_PLAY" || m.status === "LIVE")
    .map((m) => ({
      id: m.id,
      home: m.homeTeam?.name || "Unknown",
      away: m.awayTeam?.name || "Unknown",
      score: `${m.score?.fullTime?.home ?? 0} - ${m.score?.fullTime?.away ?? 0}`,
      status: m.status,
    }));

  const upcomingFixtures = apiData.matches
    .filter((m) => m.status === "SCHEDULED")
    .map((m) => ({
      id: m.id,
      home: m.homeTeam?.name || "Unknown",
      away: m.awayTeam?.name || "Unknown",
      time: new Date(m.utcDate).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    }));

  return { liveMatches, upcomingFixtures };
}
