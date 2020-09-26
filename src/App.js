import React from "react";
import { hot } from "react-hot-loader/root";
import { Router } from "@reach/router";
import Home from "./pages/home";
import Characters from "./pages/characters/characters";

function App() {
  return (
    <Router>
      <Home path="/" />
      <Characters path="/characters" />
    </Router>
  );
}

export default hot(App);
