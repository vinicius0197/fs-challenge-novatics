import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

import { getUsers, getRemainingKudos } from "../../actions";
import Avatar from "../Avatar/";
import KudoForm from "../KudoForm";
import KudosBoard from "../KudosBoard";
import "./index.css";

// Main board. Allows users to send kudos to each others
const ParticipantsGrid = (props) => {
  useEffect(() => {
    props.getUsers();
    props.getRemainingKudos();
  }, []);

  const createGrid = () => {
    return (
      <div>
        <KudosBoard />
        <div data-testid="participantsGrid" className="participants_container">
          {props.users.map((user) => {
            if (props.currentUser != user.id) {
              return <Avatar user={user} />;
            }
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="container">
      <h1 className="title">Dê um kudo!</h1>
      {createGrid()}
      <Route path="/app/board/send_kudo" exact component={KudoForm} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.usersReducer.users,
    currentUser: state.authReducer.currentUser,
  };
};

export default connect(mapStateToProps, { getUsers, getRemainingKudos })(
  ParticipantsGrid
);
