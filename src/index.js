import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";
import db, { gamesCollection } from "./data/firebase";
import loadSampleData from "./data/load-sample-data";
import "./index.css";

ReactDOM.render(<App />, document.getElementById("root"));

// async function getAllGames(){
//     try{
//         const snapshot = await db.collection("games").get();
//         const docs = snapshot.docs;
//         for(const doc of docs) {
//             console.log(doc.id);
//             console.log(doc.data());
//         }
//     }
//     catch(error){
//         console.log(error);
//     }
// }

// getAllGames();

//loadSampleData();