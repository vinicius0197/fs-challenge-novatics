import React from "react";
import { connect } from "react-redux";

import Modal from "../shared/Modal";
import Form from "./Form";
import history from "../../history";

import { sendKudo } from "../../actions";

import "./index.css";

const KudoForm = (props) => {
  const onSubmit = (formValues) => {
    const { senderId, recipientId, kudoType } = props.location.kudoData;
    props.sendKudo({
      description: formValues.kudoDescription,
      sender_id: senderId,
      recipient_id: recipientId,
      kudo_type: kudoType,
    });
  };

  return (
    <Modal onDismiss={() => history.push("/")} modalName="kudoForm">
      <h2 className="title">Enviar um novo kudo</h2>
      <Form onSubmit={onSubmit} />
    </Modal>
  );
};

export default connect(null, { sendKudo })(KudoForm);
