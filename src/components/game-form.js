import React, { useState } from "react";
import ErrorMessage from "./error-message";
import "./game-form.css";

function GameForm(props) {
  const { initialState = {}, message, isSaving, onSubmit } = props;

  if (initialState.title === undefined) initialState.title = "";
  if (initialState.releaseYear === undefined) initialState.releaseYear = 2020;
  if (initialState.publisher === undefined) initialState.publisher = "";
  if (initialState.genres === undefined) initialState.genres = "";
  if (initialState.hasBeaten === undefined) initialState.hasBeaten = false;
  if (initialState.hasCompleted === undefined) initialState.hasCompleted = false;
  if (initialState.rating === undefined) initialState.rating = 5;
  if (initialState.platforms === undefined) initialState.platforms = "";

  const [title, setTitle] = useState(initialState.title);
  const [releaseYear, setReleaseYear] = useState(initialState.releaseYear);
  const [publisher, setPublisher] = useState(initialState.publisher);
  const [genres, setGenres] = useState(initialState.genres);
  const [hasBeaten, setHasBeaten] = useState(initialState.hasBeaten);
  const [hasCompleted, setHasCompleted] = useState(initialState.hasCompleted);
  const [rating, setRating] = useState(initialState.rating);
  const [platforms, setPlatforms] = useState(initialState.platforms);

  const [errorMessage, setErrorMessage] = useState("");

  const onTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const onYearReleasedChange = (event) => {
    setReleaseYear(event.target.value);
  };
  const onPublisherChange = (event) => {
    setPublisher(event.target.value);
  };
  const onGenresChange = (event) => {
    setGenres(event.target.value);
  };
  const onHasBeatenChange = (event) => {
    setHasBeaten(event.target.value);
  };
  const onHasCompletedChange = (event) => {
    setHasCompleted(event.target.value);
  };
  const onRatingChange = (event) => {
    setRating(event.target.value);
  };
  const onPlatformsChange = (event) => {
    setPlatforms(event.target.value);
  };


  const onGameSumbit = async (event) => {
    event.preventDefault();
    onSubmit(title, releaseYear, publisher, genres, hasBeaten, hasCompleted, rating, platforms);
  };

  return (
    <form className="game-form" onSubmit={onGameSumbit}>
      <h2 className="game-form__title">Game Details</h2>
      {message && <p className="game-form__message">{message}</p>}
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      <fieldset className="game-form__controls" disabled={isSaving}>
        <label className="game-form__label">Game Title:</label>
        <input className="game-form__input" type="text" value={title} onChange={onTitleChange} />
        <label className="game-form__label">Year Released:</label>
        <input
          className="game-form__input"
          type="number"
          value={releaseYear}
          onChange={onYearReleasedChange}
        />
        <label className="game-form__label">Publisher:</label>
        <input
          className="game-form__input"
          value={publisher}
          onChange={onPublisherChange}
        />
        <label className="game-form__label">Genres:</label>
        <input
          className="game-form__input"
          value={genres}
          onChange={onGenresChange}
        />
        <label className="game-form__label">Beaten? </label>
        <input
          className="game-form__input"
          type="checkbox"
          value={hasBeaten}
          onChange={onHasBeatenChange}
        />
        <label className="game-form__label">Completed? </label>
        <input
          className="game-form__input"
          type="checkbox"
          value={hasCompleted}
          onChange={onHasCompletedChange}
        />
        <label className="game-form__label">Rating:</label>
        <div>
          <input
            className="game-form__input"
            type="number"
            value={rating}
            onChange={onRatingChange}
          /> /10
        </div>
        <label className="game-form__label">Platforms:</label>
        <input
          className="game-form__input"
          value={platforms}
          onChange={onPlatformsChange}
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
