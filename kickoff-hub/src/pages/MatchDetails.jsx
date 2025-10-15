// src/pages/MatchDetails.jsx
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { useStore } from "../store/useStore";

export default function MatchDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { state } = useLocation(); // match object if passed via navigate(..., { state })
  const { liveMatches, upcomingFixtures, trending } = useStore();

  // Try to find the match if user refreshed or opened link directly
  const numericId = isNaN(Number(id)) ? id : Number(id);
  const fallback =
    liveMatches.find((m) => m.id === numericId) ||
    upcomingFixtures.find((m) => m.id === numericId) ||
    (trending && trending.id === numericId ? trending : null);

  const match = state || fallback;

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

  // Temporary placeholder stats — swap with API later
  const stats = [
    { label: "Possession", value: "55% - 45%" },
    { label: "Shots", value: "12 - 7" },
    { label: "Shots on Target", value: "6 - 3" },
    { label: "Passes", value: "580 - 520" },
    { label: "Corners", value: "6 - 5" },
    { label: "Fouls", value: "10 - 8" },
    { label: "Yellow Cards", value: "2 - 1" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0A0F] to-[#121420] text-white px-4 py-6">
      <div className="max-w-6xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="text-yellow-400 underline hover:text-yellow-500 mb-6"
        >
          ← Back
        </button>

        <div className="flex items-center justify-center gap-5 mb-6">
          {/* Home */}
          <div className="flex items-center gap-2">
            {match.homeLogo ? (
              <img
                src={match.homeLogo}
                alt={match.home}
                className="w-10 h-10 object-contain"
              />
            ) : null}
            <p className="font-bold text-xl">{match.home}</p>
          </div>

          <span className="text-3xl font-extrabold text-blue-400">
            {match.score || "— : —"}
          </span>

          {/* Away */}
          <div className="flex items-center gap-2">
            <p className="font-bold text-xl">{match.away}</p>
            {match.awayLogo ? (
              <img
                src={match.awayLogo}
                alt={match.away}
                className="w-10 h-10 object-contain"
              />
            ) : null}
          </div>
        </div>

        {match.status ? (
          <div className="text-center mb-10">
            <span className="text-green-400 text-xs font-semibold bg-green-900/70 px-4 py-1 rounded-md">
              {match.status}
            </span>
          </div>
        ) : null}

        <h2 className="text-2xl font-bold text-yellow-400 mb-4">
          Match Statistics
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-[#1E1F29] rounded-2xl p-6 border border-gray-700 
                         hover:border-yellow-500 hover:shadow-yellow-500/30 hover:scale-[1.02]
                         transition-transform duration-300 ease-out shadow-lg shadow-black/40"
            >
              <p className="text-gray-400 text-sm">{s.label}</p>
              <p className="text-2xl font-bold">{s.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
