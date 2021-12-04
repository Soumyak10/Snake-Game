import { FiMusic } from "react-icons/fi";
import "./header.css";

var audio = new Audio("../public/music/theme.mp3");

const Music = () => {
  return (
    <div
      className="music"
      style={{ cursor: "pointer" }}
      onClick={() => audio.play()}
    >
      <FiMusic />
      <p className="suffix">Music</p>
    </div>
  );
};

export default Music;
