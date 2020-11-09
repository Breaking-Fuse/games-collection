import React, { useState } from "react";
import "./edit-game.css";
import ErrorMessage from "./error-message";
import LoadingSpinner from "./loading-spinner";
import GameForm from "./game-form";

function EditGame(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [gameData, setGameData] = useState(null);

  const onGameSubmit = async (title, rating, releaseYear) => {};

  return (
    <div className="edit-container">
      <h2>Edit Game</h2>
      {isLoading && (
        <LoadingSpinner
          size="50px"
          spinnerColor="white"
          backgroundColor="rgb(255, 255, 255, 0.2)"
        />
      )}
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      {gameData && <GameForm />}
    </div>
  );
}

export default EditGame;
