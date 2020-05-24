import React from "react";
import { connect } from "react-redux";

import { ReactComponent as LearnIcon } from "../../assets/learn.svg";
import { ReactComponent as ClapIcon } from "../../assets/awesome.svg";
import { ReactComponent as GratefulIcon } from "../../assets/grateful.svg";

import "./index.css";

const KudosBoard = (props) => {
  return (
    <div className="board-container">
      <div className="info-panel">
        <p className="title">Selos disponíveis</p>
        <p className="date">Atualizado em</p>
      </div>

      <div className="icons-board">
        <div className="counter">
          <LearnIcon className="icon" />
          <div>{props.kudos.learned_kudos}</div>
        </div>

        <div className="counter">
          <GratefulIcon className="icon" />
          <div>{props.kudos.grateful_kudos}</div>
        </div>

        <div className="counter">
          <ClapIcon className="icon" />
          <div>{props.kudos.awesome_kudos}</div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    kudos: state.kudosReducer,
  };
};

export default connect(mapStateToProps)(KudosBoard);
