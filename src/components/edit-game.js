import React, { useState, useEffect } from "react";
import { gamesCollection } from "../data/firebase";
import "./edit-game.css";
import ErrorMessage from "./error-message";
import LoadingSpinner from "./loading-spinner";
import GameForm from "./game-form";

function EditGame(props) {
  const { id } = props;

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [gameData, setGameData] = useState(null);
  const [isSaving, setIsSaving] = useState(false);
  const [formMessage, setFormMessage] = useState("");

  useEffect(() => {
    async function getGame() {
      setIsLoading(true);
      try {
        const gameSnapshot = await gamesCollection.doc(id).get();

        if (!gameSnapshot.exists) {
          throw new Error("No such game exists!");
        }

        const data = gameSnapshot.data();
        setGameData(data);
      } catch (error) {
        setErrorMessage("Something went wrong. Please try again.");
        console.error(error);
      }
      setIsLoading(false);
    }

    getGame();
  }, [id]);

  const onGameSubmit = async (title, publisher, releaseYear, genres, hasBeaten, hasCompleted, rating, platforms) => {

    setIsSaving(true);
    setFormMessage("");

    try {
      await gamesCollection.doc(id).set({
        title, 
        publisher, 
        releaseYear, 
        genres, 
        hasBeaten, 
        hasCompleted, 
        rating, 
        platforms
      });
      setFormMessage("Saved successfully!");
    } catch (error) {
      setFormMessage("Something went wrong editing this game. Please try again.");
      console.error(error);
    }

    setIsSaving(false);
  };

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
      {errorMessage && <ErrorMessage displayAsCard>{errorMessage}</ErrorMessage>}
      {gameData && (
        <GameForm
          initialState={gameData}
          onSubmit={onGameSubmit}
          isSaving={isSaving}
          message={formMessage}
        />
      )}
    </div>
  );
}

export default EditGame;
