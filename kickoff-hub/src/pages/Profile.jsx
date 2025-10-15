import React, { useState, useEffect } from "react";
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
  const [username, setUsername] = useState("");
  const [avatar, setAvatar] = useState(
    localStorage.getItem("userAvatar") || null
  );

  useEffect(() => {
    const storedUser = localStorage.getItem("lastUser");
    if (storedUser) {
      setUsername(storedUser);
    }
  }, []);

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result);
        localStorage.setItem("userAvatar", reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white flex flex-col items-center px-4 py-6">
      {/* Header */}
      <header className="w-full max-w-6xl flex flex-col sm:flex-row justify-between items-center gap-4 mb-10 px-2">
        <Header />
        <button
          onClick={() => navigate("/dashboard")}
          className="cursor-pointer bg-transparent hover:bg-[#1E1F29] hover:underline text-white font-medium py-2 px-6 rounded-lg transition"
        >
          HOME
        </button>
      </header>

      {/* Main Content */}
      <motion.main
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-6xl rounded-2xl shadow-2xl flex flex-col md:flex-row items-center md:items-start justify-between p-6 sm:p-10 gap-10 mt-20 lg:mt-28"
      >
        {/* Left section */}
        <div className="flex flex-col items-center w-full md:w-1/3 text-center">
          {/* Avatar */}
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 mb-5 mt-5 group">
            <label
              htmlFor="avatar-upload"
              className="cursor-pointer block relative"
            >
              <div className="w-full h-full rounded-full border-4 border-gray-700 hover:border-blue-500 overflow-hidden transition-all duration-300 bg-[#1E1F29] flex items-center justify-center">
                {avatar ? (
                  <img
                    src={avatar}
                    alt="User Avatar"
                    className="w-full h-full object-cover rounded-full transition-all duration-300 group-hover:opacity-80"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center text-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-10 h-10 opacity-70"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 7.5a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 19.5a8.25 8.25 0 1115 0"
                      />
                    </svg>
                  </div>
                )}

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.8}
                    stroke="currentColor"
                    className="w-8 h-8 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 16V8m0 0l-3.5 3.5M12 8l3.5 3.5M4 16a8 8 0 1116 0v2H4v-2z"
                    />
                  </svg>
                </div>
              </div>
            </label>
            <input
              id="avatar-upload"
              type="file"
              accept="image/*"
              onChange={handleAvatarChange}
              className="hidden"
            />
          </div>

          {/* Username */}
          <h2 className="text-lg sm:text-xl font-semibold mb-2 text-blue-400 tracking-wide">
            {username || "Guest User"}
          </h2>

          {/* About Us */}
          <p className="text-sm text-gray-400 mb-2 italic">About Us</p>
          <p className="text-sm sm:text-base text-gray-400 mb-4 leading-relaxed max-w-xs sm:max-w-sm">
            KickOffHub is a modern football insights and fan-engagement platform
            that connects supporters with the heart of the game. We provide
            real-time updates, in-depth stats, and a space for fans to share
            their passion. Our goal is simple — to make every fan feel closer to
            their teams, their leagues, and the global football community.
          </p>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-[2px] bg-gray-600 mx-8 rounded-full opacity-80"></div>

        {/* Right section */}
        <div className="w-full md:w-2/3 text-center md:text-left">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-6 mb-6 text-gray-200 text-center md:text-left">
            Check Your Favourite Leagues
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
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
                className="flex items-center justify-start gap-3 bg-[#2A2A2A] hover:bg-[#323232] transition-all duration-300 rounded-xl p-4 shadow-md hover:shadow-lg hover:shadow-blue-500/20 hover:scale-[1.03] cursor-pointer"
              >
                <img
                  src={league.logo}
                  alt={league.name}
                  className="w-10 h-10 sm:w-12 sm:h-12"
                />
                <div className="text-left">
                  <h3 className="font-semibold text-base sm:text-lg">
                    {league.name}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm">
                    3 matches today
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.main>

      {/* Footer */}
      <footer className="w-full py-6 mt-12 text-center text-gray-500 text-xs sm:text-sm bg-gradient-to-t from-[#0A0A0F] to-transparent">
        © 2025 BerrySport Limited. All rights reserved.
      </footer>
    </div>
  );
}

export default Profile;
