import Card from "./Card";
import "../../styles/GridLayout.css";

const GridLayout = () => {
  // Return grid
  return (
    <div>
      <div>
        <h1>Cards</h1>
      </div>
      <div className="container">
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
