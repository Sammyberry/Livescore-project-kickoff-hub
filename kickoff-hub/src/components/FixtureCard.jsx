function FixtureCard({ home, away, time, homeLogo, awayLogo }) {
  return (
    <div className="bg-[#1E1F29] rounded-2xl p-6 border border-gray-700 hover:border-blue-500 hover:shadow-blue-500/20 transition-all shadow-lg shadow-black/40 flex flex-col justify-center items-center min-h-[150px] w-full max-w-[420px] mx-auto text-center">
      <div className="flex items-center justify-center gap-4 flex-wrap mb-3">
        {/* Home */}
        <div className="flex items-center gap-2 min-w-0">
          <div className="w-8 h-8 sm:w-10 sm:h-10 shrink-0">
            <img
              src={homeLogo}
              alt={home}
              className="w-full h-full object-contain"
            />
          </div>
          <span className="font-semibold text-sm sm:text-base truncate">
            {home}
          </span>
        </div>

        <span className="text-gray-400 font-medium text-base">vs</span>

        {/* Away */}
        <div className="flex items-center gap-2 min-w-0">
          <span className="font-semibold text-sm sm:text-base truncate">
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

      <p className="text-gray-400 text-xs sm:text-sm">{time}</p>
    </div>
  );
}

export default FixtureCard;
