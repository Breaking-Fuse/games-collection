import React, { useState } from "react";
import ErrorMessage from "./error-message";
import "./game-form.css";

function GameForm(props) {
  const { message, isSaving } = props;

  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(3);
  const [releaseYear, setReleaseYear] = useState(2020);
  const [errorMessage, setErrorMessage] = useState("");

  const onTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const onRatingChange = (event) => {
    setRating(event.target.value);
  };
  const onYearReleasedChange = (event) => {
    setReleaseYear(event.target.value);
  };

  const onGameSumbit = async (event) => {
    event.preventDefault();
  };

  return (
    <form className="game-form" onSubmit={onGameSumbit}>
      <h2 className="game-form__title">Game Details</h2>
      {message && <p className="game-form__message">{message}</p>}
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      <fieldset className="game-form__controls" disabled={isSaving}>
        <label className="game-form__label">Game Title:</label>
        <input className="game-form__input" type="text" value={title} onChange={onTitleChange} />
        <label className="game-form__label">Rating:</label>
        <input
          className="game-form__input"
          type="number"
          value={rating}
          onChange={onRatingChange}
        />
        <label className="game-form__label">Year Released:</label>
        <input
          className="game-form__input"
          type="number"
          value={releaseYear}
          onChange={onYearReleasedChange}
        />
        <input
          className="game-form__submit"
          type="submit"
          value={isSaving ? "Saving..." : "Save"}
        />
      </fieldset>
    </form>
  );
}

export default GameForm;
