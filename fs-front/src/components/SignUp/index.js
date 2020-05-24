import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import SignUpForm from "./SignUpForm";

import { signup } from "../../actions";

import "./index.css";

const SignUp = (props) => {
  const onSubmit = (formValues) => {
    props.signup({ ...formValues });
  };

  return (
    <div className="form">
      <h1>Cadastro</h1>
      <SignUpForm onSubmit={onSubmit} />

      <Link to="/login">Login</Link>
    </div>
  );
};

export default connect(null, { signup })(SignUp);
