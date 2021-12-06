import React, { useState, useEffect, useRef } from "react";

import "./snakeBoard.css";

const SnakeBoard = ({ score, setScore }) => {
  const width = 10;
  const height = 10;
  let initialRows = [];
  for (let i = 0; i < height; i++) {
    initialRows.push([]);
    for (let k = 0; k < width; k++) {
      initialRows[i].push("blank");
    }
  }

  const randomPosition = () => {
    const position = {
      x: Math.floor(Math.random() * width),
      y: Math.floor(Math.random() * height),
    };
    return position;
  };

  const [board, setBoard] = useState(initialRows);

  const [snake, setSnake] = useState([
    { x: 0, y: 0 },
    { x: 1, y: 0 },
  ]);
  const [direction, setDirection] = useState("right");
  const [food, setFood] = useState(randomPosition);

  const changeDirectionWithKeys = (e) => {
    var { keyCode } = e;
    switch (keyCode) {
      case 37:
        setDirection("left");
        break;
      case 38:
        setDirection("top");
        break;
      case 39:
        setDirection("right");
        break;
      case 40:
        setDirection("bottom");
        break;
      default:
        break;
    }
  };

  const displaySnake = () => {
    const newRows = initialRows;
    snake.forEach((cell) => {
      newRows[cell.x][cell.y] = "snake";
    });
    newRows[food.x][food.y] = "food";
    setBoard(newRows);
  };

  const moveSnake = () => {
    const newSnake = [...snake];
    switch (direction) {
      case "right":
        newSnake.unshift({ x: snake[0].x, y: (snake[0].y + 1) % width });
        break;
      case "left":
        newSnake.unshift({
          x: snake[0].x,
          y: (snake[0].y - 1 + width) % width,
        });
        break;
      case "top":
        newSnake.unshift({
          x: (snake[0].x - 1 + height) % height,
          y: snake[0].y,
        });
        break;
      case "bottom":
        newSnake.unshift({ x: (snake[0].x + 1) % height, y: snake[0].y });
    }
    if (snake[0].x === food.x && snake[0].y === food.y) {
      setFood(randomPosition);
      setScore(score + 1);
    } else {
      newSnake.pop();
    }
    setSnake(newSnake);
    displaySnake();
  };

  useInterval(moveSnake, 100);

  document.addEventListener("keydown", changeDirectionWithKeys, false);

  function useInterval(callback, delay) {
    const savedCallback = useRef();

    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

  return (
    <div className="board">
      {board.map((row, row_index) => (
        <div key={row_index} className="row">
          {row.map((cell, cell_index) => (
            <div key={cell_index} className={`cell ${cell}`}></div>
          ))}
        </div>
      ))}
    </div>
  );
};
export default SnakeBoard;
