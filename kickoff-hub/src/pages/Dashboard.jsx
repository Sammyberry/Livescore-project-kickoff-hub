import Header from "../components/Header";
import MatchCard from "../components/MatchCard";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const liveMatches = [
    {
      id: 1,
      home: "Liverpool",
      away: "Man City",
      score: "2–1",
      status: "LIVE",
      time: "78'",
    },
    {
      id: 2,
      home: "Juventus",
      away: "Milan",
      score: "1–1",
      status: "LIVE",
      time: "65'",
    },
    {
      id: 3,
      home: "Dortmund",
      away: "Bayern",
      score: "3–2",
      status: "LIVE",
      time: "82'",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0A0F] to-[#121420] text-white flex flex-col items-center">
      {/* Header */}
      <header className="w-full flex justify-between items-center px-6 py-4">
        <Header />
        <button
          onClick={() => navigate("/profile")}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-5 rounded-lg transition-colors"
        >
          View Profile
        </button>
      </header>

      {/* Main Section */}
      <main className="w-full max-w-6xl px-4 mt-10">
        <h2 className="text-3xl font-bold mb-6">Live Matches</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {liveMatches.map((match) => (
            <MatchCard key={match.id} {...match} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
