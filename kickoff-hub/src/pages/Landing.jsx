import Header from "../components/Header";
import MatchCard from "../components/MatchCard";

function Landing() {
  // Temporary mock match data
  const previewMatches = [
    {
      id: 1,
      home: "Arsenal",
      away: "Chelsea",
      score: "1–2",
      status: "LIVE",
      time: "Sat 7:30 PM",
    },
    {
      id: 2,
      home: "Barcelona",
      away: "Real Madrid",
      score: "–",
      status: "Upcoming",
      time: "Sat 9:30 PM",
    },
    {
      id: 3,
      home: "PSG",
      away: "Marseille",
      score: "–",
      status: "Upcoming",
      time: "Sun 8:00 PM",
    },
  ];

  return (
    <div>
      {/* Header */}
      <Header/>

      {/* Hero section */}
      <main>
        <section>
          <h2>Your Hub for Match Insights & Live Scores</h2>

          {/* Login form */}
          <form onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="submit">Login/Sign Up</button>
          </form>
        </section>

        {/* Preview Matches */}
        <section>
          <h3>Featured Matches</h3>
          <div>
            {previewMatches.map((match) => (
              <MatchCard
                key={match.id}
                home={match.home}
                away={match.away}
                score={match.score}
                status={match.status}
                time={match.time}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Landing;
