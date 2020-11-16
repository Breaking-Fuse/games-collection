import React, { useState } from "react";
import { Delete, Edit } from "@material-ui/icons";
import {useHistory} from "react-router-dom";
import ErrorMessage from "./error-message";
import { gamesCollection } from "../data/firebase";
import "./game.css";

function Game(props) {
  const { id, data } = props;
  const { title, releaseYear, publisher, genres, hasBeaten, hasCompleted, rating, platforms} = data;

  const ratingString = "User Rating: " + rating + " / 10";

  const history = useHistory();
  const [isDeleting, setIsDeleting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const deleteGame = async () => {
    setIsDeleting(true);
    setErrorMessage("");
    try {
      const docRef = gamesCollection.doc(id);
      await docRef.delete();
    } catch (error) {
      console.error(error);
      setErrorMessage("Something went wrong while deleting. Please try again.");
      setIsDeleting(false);
    }
  };

  return (
    <div className="game">
      <div className="game__contents">
        <div className="game__title">{title}</div>
        <div className="game__publisher">{publisher}</div>
        <div className="game__year"> - {releaseYear}</div>
        <div className="game__genres">Genre: {genres}</div>
        
        <div className="game__hasBeaten">{hasBeaten ? "✔ Beaten" : "✖ Not Beaten"}</div>
        
        <div className="game__hasCompleted">{hasCompleted ? "✔ Completed" : "✖ Not Completed"}</div>
        <div className="game__rating">{ratingString}</div>
        <div className="game__platforms">Platforms: {platforms}</div>


        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </div>
      <div>
        <button className="game__button" disabled={isDeleting} onClick={deleteGame}>
          <Delete />
        </button>
        <button className="game__button" onClick={() => history.push(`/edit/${id}`)}>
          <Edit />
        </button>
      </div>
    </div>
  );
}

export default Game;
