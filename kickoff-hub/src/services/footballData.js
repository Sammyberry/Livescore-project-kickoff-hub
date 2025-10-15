// src/services/footballData.js
const BASE_URL = "https://api.football-data.org/v4";
const TOKEN = import.meta.env.VITE_FD_TOKEN;

// football-data.org uses the X-Auth-Token header for auth.
const headers = { "X-Auth-Token": TOKEN };

function buildUrl(path, params) {
  const url = new URL(BASE_URL + path);
  if (params) {
    Object.entries(params).forEach(([k, v]) => {
      if (v !== undefined && v !== null && v !== "") url.searchParams.set(k, v);
    });
  }
  return url.toString();
}

async function request(path, params) {
  const res = await fetch(buildUrl(path, params), { headers });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`API ${res.status}: ${text}`);
  }
  return res.json();
}

/** Get today's matches (API defaults to today in UTC). */
export async function getTodayMatches() {
  // You can add filters later like { date: "YESTERDAY" } or dateFrom/dateTo.
  return request("/matches");
}

// ---- Helpers to map API -> your store shape ----
const LIVE = new Set(["IN_PLAY", "PAUSED", "EXTRA_TIME", "PENALTY_SHOOTOUT"]);
const UPCOMING = new Set(["SCHEDULED", "TIMED"]);
// Status values are defined by the API. :contentReference[oaicite:1]{index=1}

export function mapMatchesToStore(json) {
  const items = json?.matches ?? [];
  const liveMatches = items.filter((m) => LIVE.has(m.status)).map(toLiveCard);

  const upcomingFixtures = items
    .filter((m) => UPCOMING.has(m.status))
    .map(toFixtureCard);

  return { liveMatches, upcomingFixtures };
}

function toLiveCard(m) {
  return {
    id: m.id,
    home: m.homeTeam?.name || "Home",
    away: m.awayTeam?.name || "Away",
    score: formatScore(m),
    status: m.status,
    utcDate: m.utcDate,
  };
}

function toFixtureCard(m) {
  return {
    id: m.id,
    home: m.homeTeam?.name || "Home",
    away: m.awayTeam?.name || "Away",
    time: formatLocalTime(m.utcDate),
    utcDate: m.utcDate,
  };
}

function formatScore(m) {
  const ft = m?.score?.fullTime;
  if (ft && ft.home != null && ft.away != null)
    return `${ft.home} - ${ft.away}`;
  const ht = m?.score?.halfTime;
  if (ht && ht.home != null && ht.away != null)
    return `${ht.home} - ${ht.away}`;
  return "— : —";
}

function formatLocalTime(utc) {
  try {
    const d = new Date(utc);
    return d.toLocaleString(undefined, {
      weekday: "short",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return "";
  }
}
