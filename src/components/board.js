import { useState } from "react";
import "./board.css";
import Square from "./square";

export default function Board() {
  const [isX, setIsX] = useState(1);
  const [val, setVal] = useState(Array(9).fill(null));

  function onSClick(i) {
    if (val[i] || checkForWin(val)) return;
    const nextSquares = val.slice();
    console.log(nextSquares);
    if (isX) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setVal(nextSquares);
    setIsX(!isX);
  }
  const winner = checkForWin(val);
  let status;
  if (winner) {
    status = "Winner : " + winner;
  } else {
    status = "Next Player : " + (isX ? "X" : "O");
  }

  return (
    <>
      <div className="container">
        <div className="status">{status}</div>
        <div className="main">
          <div className="row">
            <Square
              value={val[0]}
              handleClick={() => {
                onSClick(0);
              }}
            />
            <Square
              value={val[1]}
              handleClick={() => {
                onSClick(1);
              }}
            />
            <Square
              value={val[2]}
              handleClick={() => {
                onSClick(2);
              }}
            />
          </div>
          <div className="row">
            <Square
              value={val[3]}
              handleClick={() => {
                onSClick(3);
              }}
            />
            <Square
              value={val[4]}
              handleClick={() => {
                onSClick(4);
              }}
            />
            <Square
              value={val[5]}
              handleClick={() => {
                onSClick(5);
              }}
            />
          </div>
          <div className="row">
            <Square
              value={val[6]}
              handleClick={() => {
                onSClick(6);
              }}
            />
            <Square
              value={val[7]}
              handleClick={() => {
                onSClick(7);
              }}
            />
            <Square
              value={val[8]}
              handleClick={() => {
                onSClick(8);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

function checkForWin(val) {
  const winning_patterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [2, 4, 7],
  ];
  for (let i = 0; i < winning_patterns.length; i++) {
    const [a, b, c] = winning_patterns[i];
    if (val[a] && val[a] === val[b] && val[a] === val[c]) {
      return val[a];
    }
  }
  return null;
}
