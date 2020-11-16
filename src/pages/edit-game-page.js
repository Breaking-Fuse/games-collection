import React from "react";
import { Helmet } from "react-helmet";
import {useParams} from "react-router-dom";
import EditGame from "../components/edit-game";

function EditGamePage() {

  const {id} = useParams();

  return (
    <main>
      <Helmet>
        <title>Edit</title>
      </Helmet>
      <EditGame id={id}/>
    </main>
  );
}

export default EditGamePage;
