import React from "react";
import { Helmet } from "react-helmet";
import EditGame from "../components/edit-game";

function EditGamePage() {
  return (
    <main>
      <Helmet>
        <title>Edit</title>
      </Helmet>
      <EditGame />
    </main>
  );
}

export default EditGamePage;
