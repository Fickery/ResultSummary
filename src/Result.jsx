export default function Result(props) {
  const scoreText =
    props.avgValue < 50
      ? "Poor"
      : props.avgValue < 70
      ? "Average"
      : props.avgValue < 90
      ? "Good"
      : "Excellent";

  return (
    <div className="result">
      <h3 className="result__label">Your Result</h3>
      <div className="result__allscore">
        <span className="result__score">{props.avgValue}</span>
        <span className="result__score"> of 100</span>
      </div>
      <div className="result__downtext">
        <h1 className="result__congrats">Great</h1>
        <p className="result__longtext">
          {scoreText} job! You have completed the test.{" "}
        </p>
      </div>
    </div>
  );
}
