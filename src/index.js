import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles.styl";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import reducers from "../src/reducers/index";
import reduxThunk from "redux-thunk";
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  {},
  composeEnhancer(applyMiddleware(reduxThunk))
);

var mountNode = document.getElementById("app");
document.body.innerHTML = '<div id="app"></div>';
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
