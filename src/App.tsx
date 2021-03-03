import React, { FunctionComponent } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import Home from "./pages/Home";
import Game from "./pages/Game";
import client from "./client";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App: FunctionComponent = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Route path="/game">
            <Game />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </ApolloProvider>
  );
};

export default App;
