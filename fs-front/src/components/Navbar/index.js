import React from "react";
import { Link } from "react-router-dom";

import Logout from "../Logout";

import "./index.css";

const Navbar = () => {
  return (
    <div className="container nav-container">
      <Link className="link" to="/app/board">
        Dê um kudo
      </Link>
      <Link className="link" to="/app/timeline">
        Timeline
      </Link>
      <Link className="link" to="/app/mykudos">
        Meus kudos
      </Link>
      <Link className="link" to="/app/stats">
        Estatísticas
      </Link>
      <Logout />
    </div>
  );
};

export default Navbar;
