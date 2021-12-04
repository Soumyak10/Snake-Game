import React from "react";
import { useSelector } from "react-redux";

const Score = () => {
  const score = useSelector((state) => state.score);
  return <div> SCORE: {score}</div>;
};

export default Score;
