import React from "react";
import "./add-game.css";
import GameForm from "./game-form";

function AddGame() {
  const onGameSumbit = async (title, rating, releaseYear) => {};

  return (
    <div className="add-container">
      <h1>Add Game</h1>
      <GameForm />
    </div>
  );
}

export default AddGame;
