export default function Summary() {
  const listItems = ["Reaction", "Memory", "Verbal", "Visual"];

  const scoreValue = [76, 80, 90, 70];

  return (
    <div className="summary">
      <h1 className="summary__title">Summary</h1>
      <div className="summary__boxes">
        <ul className="summary__list">
          {listItems.map((item, index) => (
            <li className={`summary__item item-${index}`} key={index}>
              <span className="summary__item--text">{item}</span>
              <span className="summary__item--score">{scoreValue[index]} </span>
            </li>
          ))}
        </ul>
      </div>
      <button className="summary__btn">Continue</button>
    </div>
  );
}
