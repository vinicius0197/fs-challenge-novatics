import React from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import history from "../history";
import PrivateRoute from "./shared/PrivateRoute";
import Login from "./Login";
import SignUp from "./SignUp";
import ParticipantsGrid from "./ParticipantsGrid";

const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Redirect exact from="/" to="/app" />
        <PrivateRoute path="/app" component={ParticipantsGrid} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    </Router>
  );
};

export default App;
