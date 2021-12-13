import Card from "./Card";
import css from "./GridLayout.module.css";

function GridLayout(props) {
  return (
    <div>
      <div>
        <h1>Cards</h1>
      </div>
      <div className={css.container}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default GridLayout;
