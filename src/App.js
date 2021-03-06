import GridLayout from "./components/ui/GridLayout";

const App = () => {
  // Return header, footer, and grid
  return (
    <div className="Project 2">
      <header className="Project 2">Challenge 2</header>
      <GridLayout />
      <footer>
        <div className="circle" />
        <div className="triangle" />
        <div className="square" />
      </footer>
    </div>
  );
}

export default App;
