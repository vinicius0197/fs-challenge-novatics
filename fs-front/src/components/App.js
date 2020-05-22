import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import history from "../history";

import ParticipantsGrid from "./ParticipantsGrid";

const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/">
          <div data-testid="ParticipantsGrid">
            <ParticipantsGrid />
          </div>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
