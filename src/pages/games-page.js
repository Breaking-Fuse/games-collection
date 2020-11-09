import React from "react";
import { Helmet } from "react-helmet";
import GameListing from "../components/game-listing";

function GamesPage() {
  return (
    <main>
      <Helmet>
        <title>Games</title>
      </Helmet>
      <GameListing />
    </main>
  );
}

export default GamesPage;
