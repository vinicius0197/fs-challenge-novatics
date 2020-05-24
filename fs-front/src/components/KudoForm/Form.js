import React from "react";
import { Field, reduxForm } from "redux-form";
import history from "../../history";

const renderInput = (formProps) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <label> {formProps.label} </label>
      <textarea
        placeholder="Porquê você está mandando um kudos?"
        style={{ resize: "none" }}
        data-testid={formProps.dataTestid}
        {...formProps.input}
      />
    </div>
  );
};

const Form = (props) => {
  const onSubmit = (formValues) => {
    props.onSubmit(formValues);
    redirect();
  };

  const redirect = () => {
    history.push("/app/board");
  };

  return (
    <form onSubmit={props.handleSubmit(onSubmit)}>
      <Field
        name="kudoDescription"
        dataTestid="kudoDescription"
        component={renderInput}
        label="Descrição do Kudo"
      />

      <button className="button right" data-testid="finishButton">
        Enviar
      </button>
    </form>
  );
};

export default reduxForm({ form: "Form" })(Form);
