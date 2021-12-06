import { FaQuestion } from "react-icons/fa";
import {
  AiOutlineArrowDown,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineArrowUp,
} from "react-icons/ai";
import { useState } from "react";
import "./header.css";

const HowToplay = () => {
  const [PopUp, setPopUp] = useState(false);

  return (
    <div className="howToplay">
      <div
        style={{ border: "0px", fontSize: "30px" }}
        onClick={() => setPopUp(true)}
      >
        <FaQuestion className="icon-hover" />
      </div>
      <div className={`${PopUp ? "blur" : ""}`}></div>
      <div className={`overlay ${PopUp === true ? "show" : ""} `} id="popup">
        <button
          className="close_btn"
          onClick={() => {
            setPopUp(false);
          }}
        >
          X
        </button>
        <h3 style={{ textDecoration: "underline", color: "#efcb66" }}>
          How To Play:{" "}
        </h3>
        <h5>
          Use arrow keys to move snake in diffrent directions.if snake eats
          apple it's size will increase or else if it's own body it will die
        </h5>
        <h4>
          <AiOutlineArrowUp style={{ color: "#efcb66" }} /> - MoveUp
        </h4>
        <h4>
          <AiOutlineArrowDown style={{ color: "#efcb66" }} /> - MoveDown
        </h4>
        <h4>
          <AiOutlineArrowRight style={{ color: "#efcb66" }} /> - MoveRight
        </h4>
        <h4>
          <AiOutlineArrowLeft style={{ color: "#efcb66" }} /> - MoveLeft
        </h4>
      </div>
      <p className="suffix">Howtoplay</p>
    </div>
  );
};

export default HowToplay;
