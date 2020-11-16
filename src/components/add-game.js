import React, { useState } from "react";
import { gamesCollection } from "../data/firebase";
import "./add-game.css";
import GameForm from "./game-form";

function AddGame() {
  const [isSaving, setIsSaving] = useState(false);
  const [formMessage, setFormMessage] = useState("");

  const onGameSumbit = async (
    title, 
    releaseYear, 
    publisher, 
    genres, 
    hasBeaten, 
    hasCompleted, 
    rating, 
    platforms) => {
    
    setIsSaving(true);
    setFormMessage("");

    try {
      await gamesCollection.add({
        title,
        releaseYear,
        publisher,
        genres,
        hasBeaten,
        hasCompleted,
        rating,
        platforms
      });
      setFormMessage("Saved successfully!");
      console.log("Saved!");
    } catch (error) {
      setFormMessage("Something went wrong. Please try again!");
      console.error(error);
    }

    setIsSaving(false);
  };

  return (
    <div className="add-container">
      <h1>Add Game</h1>
      <GameForm onSubmit={onGameSumbit} isSaving={isSaving} message={formMessage} />
    </div>
  );
}

export default AddGame;
