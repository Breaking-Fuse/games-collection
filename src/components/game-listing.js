import React, { useState, useEffect } from "react";
import LoadingSpinner from "./loading-spinner";
import ErrorMessage from "./error-message";
import { gamesCollection } from "../data/firebase";
import Game from "./game";
import "./game-listing.css";

// useEffect Hook:
// > Guide, https://reactjs.org/docs/hooks-effect.html
// > API Docs, https://reactjs.org/docs/hooks-reference.html#useeffect

function GameListing() {
  const [games, setGames] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setIsLoading(true);
    const onNext = (snapshot) => {
      setIsLoading(false);
      const docs = snapshot.docs;
      setGames(docs);
    };
    const onError = (error) => {
      setErrorMessage("There was a problem loading your game ratings. Please try again.");
      console.error(error);
    };
    
    //Getting the collection ordered Alphabetically
    const unsubscribe = gamesCollection.orderBy("title").onSnapshot(onNext, onError);
    return unsubscribe;
  }, []);

  return (
    <div className="games-container">
      <h1>Games</h1>
      {isLoading && (
        <LoadingSpinner
          size="50px"
          spinnerColor="white"
          backgroundColor="rgb(255, 255, 255, 0.2)"
        />
      )}
      {errorMessage && <ErrorMessage displayAsCard>{errorMessage}</ErrorMessage>}
      <ul className="game-list">
        {games.map((gameDoc) => {
          const gameId = gameDoc.id;
          const gameData = gameDoc.data();
          return (
            <li key={gameId}>
              <Game id={gameId} data={gameData} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default GameListing;
