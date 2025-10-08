import Header from "../components/Header";
import MatchCard from "../components/MatchCard";
import { useNavigate } from "react-router-dom";


// import team logos
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



function Dashboard() {
  const navigate = useNavigate();

 const liveMatches = [
   {
     id: 1,
     home: "Arsenal",
     away: "Chelsea",
     score: "1 - 2",
     homeLogo: arsenal,
     awayLogo: chelsea,
   },
   {
     id: 2,
     home: "Bayern",
     away: "Dortmund",
     score: "0 - 2",
     homeLogo: bayern,
     awayLogo: dortmund,
   },
   {
     id: 3,
     home: "Napoli",
     away: "Inter",
     score: "2 - 0",
     homeLogo: napoli,
     awayLogo: inter,
   },
   {
     id: 4,
     home: "Dortmund",
     away: "Inter",
     score: "0 - 3",
     homeLogo: dortmund,
     awayLogo: inter,
   },
 ];

 const upcomingFixtures = [
   {
     id: 1,
     home: "Barcelona",
     away: "Real Madrid",
     time: "Sat 7:30 PM",
     homeLogo: barcelona,
     awayLogo: realmadrid,
   },
   {
     id: 2,
     home: "Man City",
     away: "Liverpool",
     time: "Sun 4:30 PM",
     homeLogo: mancity,
     awayLogo: liverpool,
   },
 ];


  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white flex flex-col items-center px-4 py-6">
      {/* Header */}
      <header className="w-full max-w-6xl flex justify-between items-center mb-8">
        <Header />
        <p className="italic text-gray-300 text-sm">
          Stay Ahead of Every Kick!
        </p>
        <button
          onClick={() => navigate("/profile")}
          className="border-b border-transparent hover:border-white transition-all text-white"
        >
          Profile
        </button>
      </header>

      <main className="w-full max-w-6xl space-y-10">
        {/* Live Matches */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Live Matches</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {liveMatches.map((match) => (
              <div
                key={match.id}
                className="bg-[#1E1F29] rounded-xl p-4 flex flex-col items-center text-center border border-gray-700 hover:border-blue-500 transition"
              >
                <div className="flex items-center gap-2 mb-2">
                  <img
                    src={match.homeLogo}
                    alt={match.home}
                    className="w-8 h-8"
                  />
                  <p className="font-semibold text-lg">{match.home}</p>
                </div>
                <p className="text-blue-400 font-bold text-xl mb-2">
                  {match.score}
                </p>
                <div className="flex items-center gap-2">
                  <img
                    src={match.awayLogo}
                    alt={match.away}
                    className="w-8 h-8"
                  />
                  <p className="font-semibold text-lg">{match.away}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Upcoming Fixtures */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Upcoming Fixtures</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {upcomingFixtures.map((fixture) => (
              <div
                key={fixture.id}
                className="bg-[#1E1F29] rounded-xl p-4 flex justify-between items-center border border-gray-700 hover:border-blue-500 transition"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={fixture.homeLogo}
                    alt={fixture.home}
                    className="w-8 h-8"
                  />
                  <p className="font-semibold text-lg">{fixture.home}</p>
                  <span className="text-gray-400">vs</span>
                  <p className="font-semibold text-lg">{fixture.away}</p>
                  <img
                    src={fixture.awayLogo}
                    alt={fixture.away}
                    className="w-8 h-8"
                  />
                </div>
                <p className="text-gray-400 text-sm">{fixture.time}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Trending Match */}
        <section>
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            Trending Match <span className="text-red-500 text-lg">🔥</span>
          </h2>

          <div className="bg-[#1E1F29] rounded-xl p-6 flex flex-col items-center border border-gray-700 hover:border-blue-500 transition">
            {/* Teams and Score */}
            <div className="flex items-center justify-center gap-4 mb-3">
              <div className="flex items-center gap-2">
                <img src={arsenal} alt="Arsenal" className="w-10 h-10" />
                <p className="font-bold text-lg">Arsenal</p>
              </div>

              <span className="text-2xl font-bold">1 : 2</span>

              <div className="flex items-center gap-2">
                <p className="font-bold text-lg">Chelsea</p>
                <img src={chelsea} alt="Chelsea" className="w-10 h-10" />
              </div>
            </div>

            {/* LIVE + STAT below */}
            <div className="flex flex-col items-center mt-2">
              <span className="text-green-400 text-sm font-semibold bg-green-900 px-3 py-1 rounded-md mb-1">
                LIVE
              </span>
              <a
                href="#"
                className="underline text-sm text-gray-400 py-4 hover:text-white"
              >
                STAT
              </a>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Quick Stats</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-[#1E1F29] rounded-xl p-4 text-center border border-gray-700">
              <p className="text-gray-400 text-sm">Possession</p>
              <p className="text-lg font-bold">55% - 45%</p>
            </div>
            <div className="bg-[#1E1F29] rounded-xl p-4 text-center border border-gray-700">
              <p className="text-gray-400 text-sm">Shots</p>
              <p className="text-lg font-bold">2 - 7</p>
            </div>
            <div className="bg-[#1E1F29] rounded-xl p-4 text-center border border-gray-700">
              <p className="text-gray-400 text-sm">Fouls</p>
              <p className="text-lg font-bold">10 - 8</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="text-gray-500 text-sm mt-10 mb-4">
        Copyright © 2025 BerrySport Limited. All rights reserved.
      </footer>
    </div>
  );
}

export default Dashboard;
