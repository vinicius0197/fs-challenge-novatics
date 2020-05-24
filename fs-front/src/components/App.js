import React from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import history from "../history";
import Login from "./Login";
import SignUp from "./SignUp";
import Main from "./Main";

import "./App.css";

const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Redirect exact from="/" to="/app/board" />
        <Route path="/app" component={Main} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    </Router>
  );
};

export default App;
