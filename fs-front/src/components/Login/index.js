import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import LoginForm from "./LoginForm";

import { login } from "../../actions";

const Login = (props) => {
  const onSubmit = (formValues) => {
    props.login({ ...formValues });
  };

  return (
    <div className="form">
      <h1>Login</h1>
      <LoginForm onSubmit={onSubmit} />
      <Link to="/signup">Signup</Link>
    </div>
  );
};

export default connect(null, { login })(Login);
