import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div className="modal_background" data-testid="modal">
      <div className="modal_container" onClick={(e) => e.stopPropagation()}>
        {props.children}
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
