import Result from "./Result.jsx";
import Summary from "./Summary.jsx";
import "./App.scss";

export default function App() {
  const listItems = ["Reaction", "Memory", "Verbal", "Visual"];
  const scoreValue = [26, 2, 30, 70];
  const avgValue = scoreValue.reduce((a, b) => a + b, 0) / scoreValue.length;

  return (
    <div className="main">
      <Result avgValue={avgValue} />
      <Summary
        listItems={listItems}
        scoreValue={scoreValue}
        avgValue={avgValue}
      />
    </div>
  );
}
