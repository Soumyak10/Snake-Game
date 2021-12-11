import { useState, useEffect } from "react";
import { MdMusicNote, MdMusicOff } from "react-icons/md";
import "./header.css";

var audio = new Audio("music/theme.mp3");

const Music = () => {
  const [play, setPlay] = useState(0);

  play ? audio.play() : audio.pause();

  useEffect(() => {
    setPlay(1);
    audio.volume = 0.5;
    audio.loop = true;
  }, []);

  return (
    <div
      className="music"
      style={{ cursor: "pointer" }}
      onClick={() => setPlay(!play)}
    >
      {play ? (
        <MdMusicNote className="icon-hover" />
      ) : (
        <MdMusicOff className="icon-hover" />
      )}
      <p className="suffix">Music</p>
    </div>
  );
};

export default Music;
