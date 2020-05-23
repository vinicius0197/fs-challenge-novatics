import React from "react";
import { connect } from "react-redux";

import LoginForm from "./LoginForm";

import { login } from "../../actions";

const Login = (props) => {
  const onSubmit = (formValues) => {
    props.login({ ...formValues });
  };

  return (
    <div>
      <h1>Login</h1>
      <LoginForm onSubmit={onSubmit} />
    </div>
  );
};

export default connect(null, { login })(Login);
