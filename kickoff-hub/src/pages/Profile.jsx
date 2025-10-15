import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// Logos
import premier from "../assets/logos/premier.png";
import laliga from "../assets/logos/laliga.png";
import ligue1 from "../assets/logos/ligue1.png";
import bundesliga from "../assets/logos/bundesliga.png";
import seriea from "../assets/logos/seriea.jpg";
import champions from "../assets/logos/champions.jpg";

function Profile() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white flex flex-col items-center px-4 py-6">
      {/* Header */}
      <header className="w-full max-w-6xl flex justify-between items-center mb-10">
        <Header />
        <div className="flex items-center gap-6">
          <button
            onClick={() => navigate("/dashboard")}
            className="cursor-pointer hover:bg-[#1E1F29] hover:underline text-white font-medium py-2 px-6 rounded-lg transition"
          >
            HOME
          </button>
        </div>
      </header>

      {/* Main Content */}
      <motion.main
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-6xl rounded-2xl shadow-2xl flex flex-col md:flex-row items-center md:items-start justify-between p-30 gap-10"
      >
        {/* Left section */}
        <div className="flex flex-col items-center w-full md:w-1/3 text-center">
          <div className="w-32 h-32 bg-gray-600 rounded-full mb-5 mt-10 border-4 border-gray-700 hover:border-blue-500 transition-all duration-300"></div>
          <h2 className="text-lg font-semibold mb-4 text-blue-400 tracking-wide">
            Username
          </h2>

          <p className="text-sm text-gray-400 mb-3 italic">About Us</p>
          <div className="text-sm text-gray-400 mb-4">
            <p>
              KickOffHub is a modern football insights and fan-engagement
              platform that connects supporters with the heart of the game. We
              provide real-time updates, in-depth stats, and a space for fans to
              share their passion. Our goal is simple, to make every fan feel
              closer to their teams, their leagues, and the global football
              community.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-[2px] bg-gray-500 mx-8 rounded-full opacity-90"></div>

        {/* Right section */}
        <div className="w-full md:w-2/3 text-center md:text-left">
          <h1 className="text-2xl md:text-3xl font-semibold mt-10 mb-10 text-gray-200 text-center md:text-left">
            Check Your Favourite Leagues
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { logo: premier, name: "Premier League" },
              { logo: laliga, name: "LaLiga" },
              { logo: ligue1, name: "Ligue 1" },
              { logo: bundesliga, name: "Bundesliga" },
              { logo: seriea, name: "Serie A" },
              { logo: champions, name: "Champions League" },
            ].map((league) => (
              <div
                key={league.name}
                className="flex items-center justify-start gap-3 bg-[#2A2A2A] hover:bg-[#323232] 
                transition-all duration-300 rounded-xl p-4 shadow-md 
                hover:shadow-lg hover:shadow-blue-500/20 hover:scale-[1.03] cursor-pointer"
              >
                <img
                  src={league.logo}
                  alt={league.name}
                  className="w-12 h-12"
                />
                <div className="text-left">
                  <h3 className="font-semibold text-lg">{league.name}</h3>
                  <p className="text-gray-400 text-sm">3 matches today</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.main>

      {/* Footer */}
      <footer className="w-full py-4 mt-12 text-center text-gray-500 text-xs bg-gradient-to-t from-[#0A0A0F] to-transparent">
        © 2025 BerrySport Limited. All rights reserved.
      </footer>
    </div>
  );
}

export default Profile;
