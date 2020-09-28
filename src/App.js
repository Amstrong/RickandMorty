import React from "react";
import { hot } from "react-hot-loader/root";
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Home from "./pages/home";
import Characters from "./pages/characters/characters";
import NotFound from "./components/NotFound/NotFound";


function App() {
  return (
    <BrowserRouter>
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/characters" component={Characters} />
      <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default hot(App);

