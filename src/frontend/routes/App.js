import React from "react";
import { hot } from "react-hot-loader/root";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../pages/home/homePage";
import Characters from "../pages/characters/charactersPage";
import NotFound from "../components/NotFound/NotFoundComponent";

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
// export default App;
