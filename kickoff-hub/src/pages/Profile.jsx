import ProfileCard from "../components/ProfileCard";
import LeagueCard from "../components/LeagueCard";

function Profile() {
  return (
    <div className="bg-gray-900 min-h-screen text-white p-4">
      <ProfileCard />
      <div className="grid grid-cols-2 gap-4 mt-4">
        <LeagueCard />
        <LeagueCard />
        <LeagueCard />
      </div>
    </div>
  );
}

export default Profile;
