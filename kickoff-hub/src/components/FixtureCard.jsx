function FixtureCard({ home, away, time, homeLogo, awayLogo }) {
  return (
    <div className="bg-[#1E1F29] rounded-2xl p-7 border border-gray-700 hover:border-blue-500 transition shadow-lg shadow-black/40 flex items-center justify-between min-h-[130px]">
      <div className="flex items-center gap-5">
        <div className="w-10 h-10">
          <img
            src={homeLogo}
            alt={home}
            className="w-full h-full object-contain"
          />
        </div>
        <span className="font-semibold text-lg">{home}</span>
        <span className="text-gray-400 text-base">vs</span>
        <span className="font-semibold text-lg">{away}</span>
        <div className="w-10 h-10">
          <img
            src={awayLogo}
            alt={away}
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      <p className="text-gray-400 text-sm">{time}</p>
    </div>
  );
}

export default FixtureCard;
