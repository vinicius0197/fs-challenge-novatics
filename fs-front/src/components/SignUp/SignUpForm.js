import React from "react";
import { Field, reduxForm } from "redux-form";
import history from "../../history";

const renderInput = (formProps) => {
  return (
    <div>
      <label> {formProps.label} </label>
      <input
        type={formProps.type}
        data-testid={formProps.dataTestid}
        {...formProps.input}
      />
    </div>
  );
};

const SignUpForm = (props) => {
  const onSubmit = (formValues) => {
    props.onSubmit(formValues);
    redirect();
  };

  const redirect = () => {
    history.push("/app");
  };

  return (
    <form onSubmit={props.handleSubmit(onSubmit)}>
      <Field
        name="username"
        dataTestid="username"
        type="text"
        component={renderInput}
        label="Nome de usuário"
      />

      <Field
        name="password"
        dataTestid="password"
        type="password"
        component={renderInput}
        label="Senha"
      />

      <Field
        name="avatar"
        dataTestid="avatar"
        type="text"
        component={renderInput}
        label="Link para um avatar"
      />

      <button data-testid="finishButton">Cadastrar</button>
    </form>
  );
};

export default reduxForm({ form: "SignUpForm" })(SignUpForm);
