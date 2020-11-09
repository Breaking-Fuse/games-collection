import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDJ8iCgqnvp4fqQnLrQxhAmN2CdAseAldA",
  authDomain: "ccc-codesprintb.firebaseapp.com",
  databaseURL: "https://ccc-codesprintb.firebaseio.com",
  projectId: "ccc-codesprintb",
  storageBucket: "ccc-codesprintb.appspot.com",
  messagingSenderId: "478948029746",
  appId: "1:478948029746:web:ac0108bb1ba3b6fc4ad32b"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const gamesCollection = db.collection("games");

export default db;
export { gamesCollection };
