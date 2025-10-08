import Header from "../components/Header";
import MatchCard from "../components/MatchCard";
import FixtureCard from "../components/FixtureCard";
import { useNavigate } from "react-router-dom";
import { useStore } from "../store/useStore";

// Logos
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

const logoMap = {
  Arsenal: arsenal,
  Chelsea: chelsea,
  Barcelona: barcelona,
  "Real Madrid": realmadrid,
  "Man City": mancity,
  Liverpool: liverpool,
  Bayern: bayern,
  Dortmund: dortmund,
  Napoli: napoli,
  Inter: inter,
};

function Dashboard() {
  const navigate = useNavigate();
  const { liveMatches, upcomingFixtures, trending, quickStats } = useStore();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0A0F] to-[#121420] text-white flex flex-col items-center px-4 py-6">
      {/* Header */}
      <header className="w-full max-w-6xl flex justify-between items-center mb-10">
        <Header />
        <div className="flex items-center gap-6">
          <button
            onClick={() => navigate("/")}
            className="text-gray-300 cursor-pointer hover:text-white underline transition"
          >
            Go to Landing Page
          </button>
          <button
            onClick={() => navigate("/profile")}
            className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition"
          >
            Profile
          </button>
        </div>
      </header>

      <main className="w-full max-w-6xl space-y-10">
        {/* Live Matches (3 cards) */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Live Matches</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {liveMatches.map((m) => (
              <MatchCard
                key={m.id}
                home={m.home}
                away={m.away}
                score={m.score}
                homeLogo={logoMap[m.home]}
                awayLogo={logoMap[m.away]}
              />
            ))}
          </div>
        </section>

        {/* Upcoming Fixtures (large cards) */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Upcoming Fixtures</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingFixtures.map((fx) => (
              <FixtureCard
                key={fx.id}
                home={fx.home}
                away={fx.away}
                time={fx.time}
                homeLogo={logoMap[fx.home]}
                awayLogo={logoMap[fx.away]}
              />
            ))}
          </div>
        </section>

        {/* Trending Match */}
        <section>
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            Trending Match <span className="text-red-500 text-lg">🔥</span>
          </h2>
          <div className="bg-[#1E1F29] rounded-2xl p-8 border border-gray-700 hover:border-blue-500 transition flex flex-col items-center shadow-lg shadow-black/40">
            <div className="flex items-center justify-center gap-6 mb-3">
              <div className="flex items-center gap-2">
                <img
                  src={logoMap[trending.home]}
                  alt={trending.home}
                  className="w-10 h-10 object-contain"
                />
                <p className="font-bold text-lg">{trending.home}</p>
              </div>

              <span className="text-2xl font-extrabold">{trending.score}</span>

              <div className="flex items-center gap-2">
                <p className="font-bold text-lg">{trending.away}</p>
                <img
                  src={logoMap[trending.away]}
                  alt={trending.away}
                  className="w-10 h-10 object-contain"
                />
              </div>
            </div>

            <div className="flex flex-col items-center mt-2">
              <span className="text-green-400 text-xs font-semibold bg-green-900/70 px-3 py-1 rounded-md mb-1">
                {trending.status}
              </span>
              <button className="underline text-sm text-gray-400 mt-6 hover:text-white">
                STAT
              </button>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Quick Stats</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {quickStats.map((s) => (
              <div
                key={s.id}
                className="bg-[#1E1F29] rounded-2xl p-5 text-center border border-gray-700 shadow-lg shadow-black/40"
              >
                <p className="text-gray-400 text-sm">{s.label}</p>
                <p className="text-lg font-bold">{s.value}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="text-gray-500 text-xs mt-12 mb-4 text-center">
        Copyright © 2025 BerrySport Limited. All rights reserved.
      </footer>
    </div>
  );
}

export default Dashboard;
