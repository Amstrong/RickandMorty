import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles.styl";

var mountNode = document.getElementById("app");
document.body.innerHTML = '<div id="app"></div>';
ReactDOM.render(<App />, document.getElementById("app"));
