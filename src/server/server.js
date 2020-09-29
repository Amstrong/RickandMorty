import React from "react";
import { renderToString } from "react-dom/server";
import { Provider } from "react-redux";
import { createStore } from "redux";
import  {renderRoutes}  from "react-router-config";
import { StaticRouter } from "react-router-dom";
import routes from "../frontend/routes/serverRoutes";
import reducer from "../frontend/reducers/index";
import initialState from "../frontend/reducers/initialState";
import express from "express";
import dotenv from "dotenv";
import webpack from "webpack";

dotenv.config();

const { ENV, PORT } = process.env;
const app = express();

if (ENV === "development") {
  console.log("Development config");
  const webpackConfig = require("../../webpack.config.dev");
  const webpackDevMiddleware = require("webpack-dev-middleware");
  const webpackHotMiddleware = require("webpack-hot-middleware");
  const compiler = webpack(webpackConfig);
  const serverConfig = { port: PORT, hot: true };

  app.use(webpackDevMiddleware(compiler, serverConfig));
  app.use(webpackHotMiddleware(compiler));
}
const setResponse = (html, preloadedState) => {
  return `
    <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="assets/app.css" type="text/css"/>
      <title>Rick & Morty</title>
  
  </head>
  <body>
      <div id="app">${html}</div>
      <script>
      window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
        /</g,
        "\\u003c"
      )}
      </script>
      <link href="https://fonts.googleapis.com/css2?family=Jost:wght@100;200;300;400;500;600&display=swap" rel="stylesheet">
      <script src="assets/app.js"></script>
  </body>
  </html>
  `;
};

const renderApp = (req, res) => {
  const store = createStore(reducer, initialState);
  const preloadedState = store.getState();
  const html = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={{}}>
          {renderRoutes(routes)}
      </StaticRouter>
    </Provider>
  );
  console.log("las rutas son", routes);
  res.send(setResponse(html, preloadedState));
};

app.get("*", renderApp);

app.listen(PORT, (err) => {
  if (err) console.log(err);
  else console.log("Server running on port 3000");
});
