// src/pages/MatchDetails.jsx
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { useStore } from "../store/useStore";

// optional: local logos so refresh still shows them
import arsenal from "../assets/logos/arsenal.png";
import chelsea from "../assets/logos/chelsea.png";
import barcelona from "../assets/logos/barcelona.png";
import realmadrid from "../assets/logos/realmadrid.png";
import mancity from "../assets/logos/mancity.png";
import liverpool from "../assets/logos/liverpool.png";
import bayern from "../assets/logos/bayern.png";
import dortmund from "../assets/logos/dortmund.png";
import napoli from "../assets/logos/napoli.png";
import inter from "../assets/logos/inter.png";

const getLogo = (teamName = "") => {
  const n = teamName.toLowerCase();
  if (n.includes("arsenal")) return arsenal;
  if (n.includes("chelsea")) return chelsea;
  if (n.includes("barcelona")) return barcelona;
  if (n.includes("real madrid")) return realmadrid;
  if (n.includes("manchester city")) return mancity;
  if (n.includes("liverpool")) return liverpool;
  if (n.includes("bayern")) return bayern;
  if (n.includes("dortmund")) return dortmund;
  if (n.includes("napoli")) return napoli;
  if (n.includes("inter")) return inter;
  return undefined;
};

export default function MatchDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { state } = useLocation();
  const { liveMatches, upcomingFixtures, trending } = useStore();

  const numericId = Number(id);
  const fallback =
    liveMatches.find((m) => m.id === numericId) ||
    upcomingFixtures.find((m) => m.id === numericId) ||
    (trending?.id === numericId ? trending : null);

  const match = state || fallback;

  // handle missing data
  if (!match) {
    return (
      <div className="min-h-screen bg-[#0A0A0F] text-white flex flex-col items-center justify-center p-6">
        <p className="text-gray-400 mb-4">No match data found for ID: {id}</p>
        <button
          onClick={() => navigate(-1)}
          className="text-yellow-400 underline hover:text-yellow-500"
        >
          Go Back
        </button>
      </div>
    );
  }

  // fallback logos if not passed in state
  const homeLogo = match.homeLogo || getLogo(match.home);
  const awayLogo = match.awayLogo || getLogo(match.away);

  // placeholder stats
  const stats = [
    { label: "Possession", value: "55% - 45%" },
    { label: "Shots", value: "12 - 7" },
    { label: "Shots on Target", value: "6 - 3" },
    { label: "Passes", value: "580 - 520" },
    { label: "Corners", value: "6 - 5" },
    { label: "Fouls", value: "10 - 8" },
    { label: "Yellow Cards", value: "2 - 1" },
  ];

  const lineups = match.lineups ?? null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0A0F] to-[#121420] text-white px-4 py-6">
      <div className="max-w-6xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="text-white underline hover:text-gray-300 cursor-pointer mb-6"
        >
          ← Back
        </button>

        {/* Teams */}
        <div className="flex items-center justify-center gap-5 mb-6">
          <div className="flex items-center gap-2">
            {homeLogo && (
              <img
                src={homeLogo}
                alt={match.home}
                className="w-10 h-10 object-contain"
              />
            )}
            <p className="font-bold text-xl">{match.home}</p>
          </div>

          <span className="text-3xl font-extrabold text-blue-400">
            {match.score || "— : —"}
          </span>

          <div className="flex items-center gap-2">
            <p className="font-bold text-xl">{match.away}</p>
            {awayLogo && (
              <img
                src={awayLogo}
                alt={match.away}
                className="w-10 h-10 object-contain"
              />
            )}
          </div>
        </div>

        {match.status && (
          <div className="text-center mb-10">
            <span className="text-green-400 text-xs font-semibold bg-green-900/70 px-4 py-1 rounded-md">
              {match.status}
            </span>
          </div>
        )}

        {/* Stats grid */}
        <h2 className="text-2xl font-bold text-green-400 mb-4">
          Match Statistics
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-[#1E1F29] rounded-2xl p-6 border border-gray-700 
              hover:shadow-green-500/30 hover:scale-[1.02]
              transition-transform duration-300 ease-out shadow-lg shadow-black/40"
            >
              <p className="text-gray-400 text-sm">{s.label}</p>
              <p className="text-2xl font-bold">{s.value}</p>
            </div>
          ))}
        </div>

        {/* Lineups */}
        {lineups && lineups.home && lineups.away && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-yellow-400 mb-6">Lineups</h2>
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="bg-[#1E1F29] p-6 rounded-2xl shadow-md hover:shadow-yellow-500/30 transition">
                <h3 className="text-lg font-semibold mb-2">
                  {match.home} ({lineups.home.formation})
                </h3>
                <ul className="space-y-1 text-gray-300">
                  {lineups.home.players?.map((p, i) => (
                    <li key={i}>• {p}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#1E1F29] p-6 rounded-2xl shadow-md hover:shadow-yellow-500/30 transition">
                <h3 className="text-lg font-semibold mb-2">
                  {match.away} ({lineups.away.formation})
                </h3>
                <ul className="space-y-1 text-gray-300">
                  {lineups.away.players?.map((p, i) => (
                    <li key={i}>• {p}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
