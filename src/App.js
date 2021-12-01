import "./App.css";
import Snake from "./components/snake/Snake";
import SnakeBoard from "./components/board/SnakeBoard";
import { useState } from "react";

function App() {
  const [snakeDots, setSnakeDots] = useState([
    [0, 0],
    [0, 0],
  ]);
  return (
    <div className="App">
      <SnakeBoard />
      <Snake snakeDots={snakeDots} />
    </div>
  );
}

export default App;
