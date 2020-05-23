import React from "react";
import { Field, reduxForm } from "redux-form";
import history from "../../history";

const renderInput = (formProps) => {
  return (
    <div>
      <label> {formProps.label} </label>
      <textarea data-testid={formProps.dataTestid} {...formProps.input} />
    </div>
  );
};

const Form = (props) => {
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
        name="kudoDescription"
        dataTestid="kudoDescription"
        component={renderInput}
        label="Descrição do Kudo"
      />

      <button data-testid="finishButton">Finalizar</button>
    </form>
  );
};

export default reduxForm({ form: "Form" })(Form);
