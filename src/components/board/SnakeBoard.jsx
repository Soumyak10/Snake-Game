import React, { useEffect, useState, useInterval } from "react";
import Snake from "../snake/Snake";

import "./snakeBoard.css";
const Board_size = 10;

const SnakeBoard = () => {
  const [board, setBoard] = useState(
    new Array(Board_size).fill(0).map((row) => new Array(Board_size).fill(0))
  );

  const [snakeDots, setSnakeDots] = useState([
    [0, 0],
    [2, 0],
  ]);

  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      handleKeyDown(e);
    });
  }, []);

  const handleKeyDown = (e) => {
    let dots = [...snakeDots];
    let head = dots[dots.length - 1];

    switch (e.key) {
      case "ArrowRight":
        // head = [head[0] + 2, head[1]];
        dots.push([head[0] + 2, head[1]]);
        dots.shift();
        setSnakeDots(dots);
        console.log(snakeDots);
        console.log(dots);
        console.log("right");
        break;
      case "ArrowLeft":
        head = [head[0] - 2, head[1]];
        console.log("left");
        break;
      case "ArrowDown":
        head = [head[0], head[1] + 2];
        console.log("down");
        break;
      case "ArrowUp":
        head = [head[0], head[1] - 2];
        console.log("up");
        break;

      default:
        break;
    }
  };

  return (
    <div className="board">
      {board.map((row, row_index) => (
        <div key={row_index} className="row">
          {row.map((cell, cell_index) => (
            <div key={cell_index} className="cell"></div>
          ))}
        </div>
      ))}
    </div>
  );
};
export default SnakeBoard;
