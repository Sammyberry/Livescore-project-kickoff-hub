function MatchCard({ home, away, score, status, time }) {
  return (
    <div className="bg-[#1E1F29] rounded-xl p-4 shadow-md border border-gray-700 hover:border-blue-500 transition-colors">
      <div className="flex justify-between mb-2">
        <span className="font-semibold">{home}</span>
        <span className="text-blue-400 font-bold">
          {score !== "–" ? score : "vs"}
        </span>
        <span className="font-semibold">{away}</span>
      </div>
      <p className="text-gray-400 text-sm">
        {status} • {time}
      </p>
    </div>
  );
}

export default MatchCard;
