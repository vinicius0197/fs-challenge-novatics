import React from "react";
import { connect } from "react-redux";

import Modal from "../shared/Modal";
import Form from "./Form";

import { sendKudo } from "../../actions";

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
    <Modal modalName="kudoForm">
      <div>Send new Kudo</div>
      <Form onSubmit={onSubmit} />
    </Modal>
  );
};

export default connect(null, { sendKudo })(KudoForm);
