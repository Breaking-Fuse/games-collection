import React from "react";
import { Helmet } from "react-helmet";
import AddGame from "../components/add-game";

function AddGamePage() {
  return (
    <main>
      <Helmet>
        <title>Add</title>
      </Helmet>
      <AddGame />
    </main>
  );
}

export default AddGamePage;
