import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AddGamePage from "../pages/add-game-page";
import EditGamePage from "../pages/edit-game-page";
import GamesPage from "../pages/games-page";
import NotFoundPage from "../pages/not-found-page";
import Nav from "./nav";

function App() {
  return (
    <BrowserRouter>
      <Nav />

      <Switch>
        <Route path="/" exact>
          <GamesPage />
        </Route>

        <Route path="/add">
          <AddGamePage />
        </Route>

        <Route path="/edit/:id">
          <EditGamePage />
        </Route>

        <Route path="*">
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
