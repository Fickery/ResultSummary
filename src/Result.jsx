export default function Result() {
  return (
    <div className="result">
      <h3 className="result__label">Your Result</h3>
      <div className="result__allscore">
        <span className="result__score">76</span>
        <span className="result__score"> of 100</span>
      </div>
      <div className="result__downtext">
        <h1 className="result__congrats">Great</h1>
        <p className="result__longtext">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. corrupti est.
        </p>
      </div>
    </div>
  );
}
