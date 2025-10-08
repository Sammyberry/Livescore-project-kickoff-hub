function MatchCard({ home, away, score, status, time }) {
  return (
    <div>
      <p>
        {home} {score !== "–" ? score : "vs"} {away}
      </p>
      <p>{status}</p>
      <p>{time}</p>
    </div>
  );
}

export default MatchCard;
