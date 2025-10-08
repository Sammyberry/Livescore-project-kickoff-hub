import Header from "../components/Header";
import MatchCard from "../components/MatchCard";

function Landing() {
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
    <div className="min-h-screen bg-gradient-to-b from-[#0A0A0F] to-[#121420] text-white flex flex-col items-center">
      {/* Header */}
      <header className="w-full flex justify-start px-6 py-4">
        <Header />
      </header>

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center text-center mt-10 px-6 w-full max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
          Your Hub for Match Insights <br /> & Live Scores
        </h1>
        <p className="text-gray-400 mb-6">
          Stay updated with live matches, stats, and your favorite leagues.
        </p>

        {/* Auth Form */}
        <form
          onSubmit={(e) => e.preventDefault()}
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

        {/* Featured Matches */}
        <section className="mt-10 w-full">
          <h2 className="text-2xl font-semibold mb-4 text-left">
            Featured Matches
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {previewMatches.map((match) => (
              <MatchCard key={match.id} {...match} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Landing;
