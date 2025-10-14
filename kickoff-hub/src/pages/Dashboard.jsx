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
    <div className="min-h-screen bg-[#0A0A0F] text-white flex flex-col items-center px-4 py-6">
      {/* Header */}
      <header className="w-full max-w-6xl flex justify-between items-center mb-10">
        <Header />
        <span className="font-light italic text-gray-200 text-lg animate-goldGlow">
          Stay Ahead of Every Kick!
        </span>

        <div className="flex items-center gap-6">
          {/* {Profile Button} */}
          <button
            onClick={() => navigate("/profile")}
            className="cursor-pointer hover:bg-[#1E1F29] hover:underline text-white font-medium py-2 px-6 rounded-lg transition"
          >
            Profile
          </button>

          {/* {Logout Button} */}
          <button
            onClick={() => {
              localStorage.removeItem("lastUser");
              navigate("/");
            }}
            className="text-red-500 hover:text-red-400 font-semibold transition"
          >
            Logout
          </button>
        </div>
      </header>

      <main className="w-full max-w-6xl space-y-12">
        {/* Live Matches */}
        <section>
          <h2 className="text-xl font-semibold mb-6 text-gray-200">
            Live Matches
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
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

        {/* Upcoming Fixtures */}
        <section>
          <h2 className="text-xl font-semibold mb-6 text-gray-200">
            Upcoming Fixtures
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-items-center">
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
          <h2 className="text-xl font-semibold mb-6 flex items-center gap-2 text-gray-200">
            Trending Match <span className="text-red-500 text-lg">🔥</span>
          </h2>
          <div className="bg-[#1E1F29] rounded-2xl p-10 border border-gray-700 hover:border-blue-500 hover:shadow-blue-500/30 transition-all flex flex-col items-center text-center shadow-lg shadow-black/40 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-6 mb-4">
              <div className="flex items-center gap-2">
                <img
                  src={logoMap[trending.home]}
                  alt={trending.home}
                  className="w-12 h-12 object-contain"
                />
                <p className="font-bold text-lg">{trending.home}</p>
              </div>

              <span className="text-3xl font-extrabold text-blue-400">
                {trending.score}
              </span>

              <div className="flex items-center gap-2">
                <p className="font-bold text-lg">{trending.away}</p>
                <img
                  src={logoMap[trending.away]}
                  alt={trending.away}
                  className="w-12 h-12 object-contain"
                />
              </div>
            </div>

            <div className="flex flex-col items-center">
              <span className="text-green-400 text-xs font-semibold bg-green-900/70 px-4 py-1 rounded-md mb-2">
                {trending.status}
              </span>
              <button className="underline text-sm text-gray-400 hover:text-white">
                STAT
              </button>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section>
          <h2 className="text-xl font-semibold mb-6 text-gray-200">
            Quick Stats
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
            {quickStats.map((s) => (
              <div
                key={s.id}
                className="bg-[#1E1F29] rounded-2xl p-6 text-center border border-gray-700 hover:border-blue-500 hover:shadow-blue-500/20 transition-all shadow-lg shadow-black/40 w-full"
              >
                <p className="text-gray-400 text-sm">{s.label}</p>
                <p className="text-2xl font-bold text-white">{s.value}</p>
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
