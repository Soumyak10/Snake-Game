import "./App.css";
import Snake from "./components/snake/Snake";
import SnakeBoard from "./components/board/SnakeBoard";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <SnakeBoard />
    </div>
  );
}

export default App;
