import React from "react";
import { connect } from "react-redux";

import SignUpForm from "./SignUpForm";

import { signup } from "../../actions";

const SignUp = (props) => {
  const onSubmit = (formValues) => {
    props.signup({ ...formValues });
  };

  return (
    <div>
      <h1>Cadastro</h1>
      <SignUpForm onSubmit={onSubmit} />
    </div>
  );
};

export default connect(null, { signup })(SignUp);
