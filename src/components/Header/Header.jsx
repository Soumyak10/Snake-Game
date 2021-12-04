import HowToPlay from "./HowToPlay";
import { useState } from "react";
import "./header.css";
import Music from "./Music";

const Header = () => {
  return (
    <div className="header">
      <div>
        <Music />
      </div>
      <div>
        <HowToPlay />
      </div>
    </div>
  );
};

/*
 <div class="overlay" id="popup">
      <h1>How to Play</h1>
      <h3>Use arrow keys to move snake up , down left right </h3>
      <button class="new">Exit</button>
    </div> 

    css

    .overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  transition: opacity 500ms;
  opacity: 0;
  visibility: hidden;
}

#popup {
  padding: 40px;
  border-radius: 5px;
  background: black;
  height: 231px;
  width: 312px;
  text-align: center;
  color: white;
  position: absolute;
  left: 31%;
  top: 16%;
}

.new {
  height: 34px;
  width: 37%;
  margin: 20px;
  border-right: none;
  border-left: none;
  border-radius: 16%;
  font-family: "Lobster", cursive;
  font-family: "Otomanopee One", sans-serif;
}
*/

export default Header;
