function MatchCard({ home, away, score, homeLogo, awayLogo }) {
  return (
    <div
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

        {/* Score */}
        <span className="text-blue-400 font-extrabold text-lg sm:text-2xl">
          {score}
        </span>

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
