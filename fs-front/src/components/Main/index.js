import React from "react";

import PrivateRoute from "../shared/PrivateRoute";
import ParticipantsGrid from "../ParticipantsGrid";
import Navbar from "../Navbar";
import Timeline from "../Timeline";
import MyKudos from "../MyKudos";
import Stats from "../Stats";

const Main = () => {
  return (
    <div>
      <Navbar />
      <PrivateRoute path="/app/board" component={ParticipantsGrid} />
      <PrivateRoute path="/app/timeline" component={Timeline} />
      <PrivateRoute path="/app/mykudos" component={MyKudos} />
      <PrivateRoute path="/app/stats" component={Stats} />
    </div>
  );
};

export default Main;
