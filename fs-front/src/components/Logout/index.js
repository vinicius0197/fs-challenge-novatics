import React from "react";

import { Link } from "react-router-dom";

const Logout = () => {
  return (
    <Link
      data-testid="logout"
      className="link"
      to="/login"
      onClick={() => localStorage.removeItem("token")}
    >
      Logout
    </Link>
  );
};

export default Logout;
