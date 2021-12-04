import "./App.css";
import SnakeBoard from "./components/board/SnakeBoard";
import Header from "./components/Header/Header";
import Score from "./components/Score";

function App() {
  return (
    <div className="App" style={{ backgroundImage: "url(/images/bg.jpg)" }}>
      <Header />
      <Score />
      <SnakeBoard />
    </div>
  );
}

export default App;
