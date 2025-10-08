function MatchCard({ home, away, score, homeLogo, awayLogo }) {
  return (
    <div className="bg-[#1E1F29] rounded-2xl p-5 border border-gray-700 hover:border-blue-500 transition text-center shadow-lg shadow-black/40">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 min-w-0">
          <div className="w-10 h-10 shrink-0">
            <img
              src={homeLogo}
              alt={home}
              className="w-full h-full object-contain"
            />
          </div>
          <span className="font-semibold truncate">{home}</span>
        </div>

        <span className="text-blue-400 font-extrabold text-xl">{score}</span>

        <div className="flex items-center gap-2 min-w-0">
          <span className="font-semibold truncate">{away}</span>
          <div className="w-10 h-10 shrink-0">
            <img
              src={awayLogo}
              alt={away}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MatchCard;
