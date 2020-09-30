import React from "react";
import ReactDOM from "react-dom";
import App from "./routes/App";
import "./styles.styl";
import { createBrowserHistory } from "history";
import { createStore, applyMiddleware, compose } from "redux";
import { Router } from "react-router";
import { Provider } from "react-redux";
import reducers from "../frontend/reducers/index";
import reduxThunk from "redux-thunk";
const preloadedState = window.__PRELOADED_STATE__;
const history = createBrowserHistory();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, preloadedState, composeEnhancer());
delete window.__PRELOADED_STATE__;

ReactDOM.hydrate(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById("app")
);
