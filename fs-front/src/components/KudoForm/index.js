import React from "react";
import { connect } from "react-redux";

import Modal from "../shared/Modal";
import Form from "./Form";

import { sendKudo } from "../../actions";

const KudoForm = (props) => {
  const onSubmit = (formValues) => {
    // TODO: get ID from sending and receiving user and add it to formValues here
    props.sendKudo({ ...formValues });
  };

  return (
    <Modal modalName="kudoForm">
      <div>Send new Kudo</div>
      <Form onSubmit={onSubmit} />
    </Modal>
  );
};

export default connect(null, { sendKudo })(KudoForm);
