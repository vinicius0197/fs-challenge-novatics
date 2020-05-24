import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getUsers } from "../../actions";

import Avatar from "../Avatar/";

import "./index.css";

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
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.usersReducer.users,
  };
};

export default connect(mapStateToProps, { getUsers })(ParticipantsGrid);
