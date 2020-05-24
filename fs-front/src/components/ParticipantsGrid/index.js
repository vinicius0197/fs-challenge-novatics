import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

import { getUsers } from "../../actions";

import Avatar from "../Avatar/";

import "./index.css";
import KudoForm from "../KudoForm";

const ParticipantsGrid = (props) => {
  useEffect(() => {
    props.getUsers();
  }, []);

  const createGrid = () => {
    return (
      <div className="participants_container">
        {props.users.map((user) => {
          return <Avatar user={user} />;
        })}
      </div>
    );
  };

  return (
    <div className="container">
      <h1>Dê um kudo!</h1>
      {createGrid()}
      <Route path="/app/send_kudo" exact component={KudoForm} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.usersReducer.users,
  };
};

export default connect(mapStateToProps, { getUsers })(ParticipantsGrid);
