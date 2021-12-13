import Card from "./Card";
import css from "../../styles/GridLayout.module.css";

const GridLayout = () => {
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
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default GridLayout;
