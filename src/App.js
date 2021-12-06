import { useState } from "react";
import "./App.css";
import SnakeBoard from "./components/board/SnakeBoard";
import Header from "./components/Header/Header";

function App() {
  const [score, setScore] = useState(0);

  return (
    <div className={`App`} style={{ backgroundImage: "url(/images/bg.jpg)" }}>
      <Header score={score} />
      <SnakeBoard score={score} setScore={setScore} />
    </div>
  );
}

export default App;
