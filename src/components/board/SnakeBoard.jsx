import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { newHead } from "../../actions";

import "./snakeBoard.css";

const SnakeBoard = () => {
  // redux
  const snake = useSelector((state) => state.snake);
  const head = useSelector((state) => state.head);
  const dispatch = useDispatch();

  // board config
  const Board_size = 10;
  const foodCord = [[], []];
  const [board, setBoard] = useState(
    new Array(Board_size).fill(0).map((row) => new Array(Board_size).fill(0))
  );

  snake.forEach((cord) => {
    board[cord[0]][cord[1]] = 1;
  });

  // genearting food
  const getRandom = () => {
    return Math.floor(Math.random() * 9);
  };

  const generateFood = () => {
    foodCord[0] = getRandom();
    foodCord[1] = getRandom();

    board[foodCord[0]][foodCord[1]] = 2;
  };

  // generateFood();

  // handling key down i.e moving the snake
  const handleKeyDown = (e) => {
    // let dots = [...snake];
    // let len = dots.length;
    // console.log("key", snake);

    switch (e.key) {
      case "ArrowRight":
        dispatch(newHead([head[0], head[1] + 1]));
        // console.log(snake);
        break;
      case "ArrowLeft":
        dispatch(newHead([head[0], head[1] - 2]));
        break;
      case "ArrowUp":
        dispatch(newHead([head[0] - 1, head[1]]));
        break;
      case "ArrowDown":
        dispatch(newHead([head[0] + 1, head[1]]));
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      handleKeyDown(e);
    });
  }, []);

  return (
    <div className="board">
      {board.map((row, row_index) => (
        <div key={row_index} className="row">
          {row.map((cell, cell_index) => (
            <div
              key={cell_index}
              className={`cell ${
                cell === 1 ? "snake" : cell === 2 ? "food" : ""
              }`}
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
};
export default SnakeBoard;
