import MatchCard from "../components/MatchCard";
import FixtureCard from "../components/FixtureCard";
import StatsCard from "../components/StatsCard";

function Dashboard() {
  return (
    <div className="bg-gray-900 min-h-screen text-white p-4">
      <h1 className="text-2xl mb-4">Dashboard</h1>
      <MatchCard />
      <FixtureCard />
      <StatsCard />
    </div>
  );
}

export default Dashboard;
