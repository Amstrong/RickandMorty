import React from "react";
import { hot } from "react-hot-loader/root";
import { Router } from "@reach/router";
import Home from "./pages/home";
import Characters from "./pages/characters/characters";
import NotFound from "./components/NotFound/NotFound";
import Error from "./components/ErrorComp/ErrorComp"

function App() {
  return (
    <Router>
      <Home path="/" />
      <Characters path="/characters" />
      <NotFound default/>
      <Error path ="error"/>
    </Router>
  );
}

export default hot(App);
