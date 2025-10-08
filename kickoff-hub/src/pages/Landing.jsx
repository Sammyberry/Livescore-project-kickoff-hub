import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

import arsenal from "../assets/logos/arsenal.png";
import chelsea from "../assets/logos/chelsea.png";
import barcelona from "../assets/logos/barcelona.png";
import realmadrid from "../assets/logos/realmadrid.png";
import psg from "../assets/logos/psg.png";
import marseille from "../assets/logos/marseille.png";


function Landing() {
  const navigate = useNavigate();

const previewMatches = [
  {
    id: 1,
    home: "Arsenal",
    away: "Chelsea",
    homeLogo: arsenal,
    awayLogo: chelsea,
    score: "1–2",
    status: "LIVE",
    time: "Sat 7:30 PM",
  },
  {
    id: 2,
    home: "Barcelona",
    away: "Real Madrid",
    homeLogo: barcelona,
    awayLogo: realmadrid,
    score: "–",
    status: "Upcoming",
    time: "Sat 9:30 PM",
  },
  {
    id: 3,
    home: "PSG",
    away: "Marseille",
    homeLogo: psg,
    awayLogo: marseille,
    score: "–",
    status: "Upcoming",
    time: "Sun 8:00 PM",
  },
];

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0A0F] to-[#121420] text-white flex flex-col items-center">
      <header className="w-full flex justify-start px-6 py-4">
        <Header />
      </header>

      <main className="flex flex-col items-center justify-center text-center mt-10 px-6 w-full max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
          Your Hub for Match Insights <br /> & Live Scores
        </h1>

        <form
          onSubmit={handleLogin}
          className="w-full bg-[#1E1F29] rounded-2xl p-6 shadow-lg flex flex-col gap-4"
        >
          <input
            type="email"
            placeholder="Email"
            className="p-3 rounded-lg bg-transparent border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 rounded-lg bg-transparent border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="mt-2 bg-blue-600 hover:bg-blue-700 transition-colors text-white font-semibold py-2 rounded-lg"
          >
            Login / Sign Up
          </button>
        </form>

        <section className="mt-10 w-full max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-4 text-left">
            Featured Matches
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-[#1E1F29] p-5 rounded-xl text-center shadow-md hover:shadow-lg transition-all">
              <h3 className="text-white font-semibold mb-1">
                Arsenal vs Chelsea
              </h3>
              <p className="text-gray-400 text-sm mb-2">Sat 7:30 PM</p>
              <span className="bg-green-500 text-black text-xs font-semibold px-2 py-1 rounded">
                LIVE
              </span>
            </div>

            {/* Card 2 */}
            <div className="bg-[#1E1F29] p-5 rounded-xl text-center shadow-md hover:shadow-lg transition-all">
              <h3 className="text-white font-semibold mb-1">
                Barcelona vs Real Madrid
              </h3>
              <p className="text-gray-400 text-sm mb-2">Sat 9:30 PM</p>
              <span className="bg-gray-600 text-white text-xs font-semibold px-2 py-1 rounded">
                Upcoming
              </span>
            </div>

            {/* Card 3 */}
            <div className="bg-[#1E1F29] p-5 rounded-xl text-center shadow-md hover:shadow-lg transition-all">
              <h3 className="text-white font-semibold mb-1">
                PSG vs Marseille
              </h3>
              <p className="text-gray-400 text-sm mb-2">Sun 8:00 PM</p>
              <span className="bg-gray-600 text-white text-xs font-semibold px-2 py-1 rounded">
                Upcoming
              </span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Landing;
