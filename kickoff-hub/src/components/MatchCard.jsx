function MatchCard({ home, away, score, minute, homeLogo, awayLogo, onClick }) {
  // Calculate how much of the match has passed (0–100%)
  const progress =
    minute && minute.includes("’")
      ? Math.min((parseInt(minute) / 90) * 100, 100)
      : 0;

  return (
    <div
      onClick={onClick}
      className="bg-[#1E1F29] rounded-2xl p-6 border border-gray-700 
      hover:border-blue-500 hover:shadow-blue-500/30 hover:scale-[1.03]
      transition-transform duration-300 ease-out text-center 
      shadow-lg shadow-black/40 w-full max-w-[260px] sm:max-w-[320px]
      cursor-pointer"
    >
      <div className="flex items-center justify-between gap-3 flex-wrap">
        {/* Home Team */}
        <div className="flex items-center gap-2 min-w-0">
          <div className="w-8 h-8 sm:w-10 sm:h-10 shrink-0">
            <img
              src={homeLogo}
              alt={home}
              className="w-full h-full object-contain"
            />
          </div>
          <span className="font-semibold truncate text-sm sm:text-base">
            {home}
          </span>
        </div>

        {/* Score + Minute */}
        <div className="flex flex-col items-center justify-center">
          <span className="text-blue-400 font-extrabold text-lg sm:text-2xl">
            {score}
          </span>
          <span className="text-yellow-400 text-xs sm:text-sm mt-1">
            {minute}
          </span>

          {/* Timeline Progress Bar */}
          <div className="w-20 sm:w-24 bg-gray-800 rounded-full h-1 mt-1 overflow-hidden">
            <div
              className="bg-gradient-to-r from-yellow-400 to-green-400 h-1 transition-all duration-500 ease-in-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Away Team */}
        <div className="flex items-center gap-2 min-w-0">
          <span className="font-semibold truncate text-sm sm:text-base">
            {away}
          </span>
          <div className="w-8 h-8 sm:w-10 sm:h-10 shrink-0">
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
