import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getUsers } from "../../actions";

import Avatar from "../Avatar/";

import "./index.css";

const mockData = [
  {
    id: 1,
    userName: "Carlos",
  },
  {
    id: 8,
    userName: "Mariana",
  },
  {
    id: 2,
    userName: "Mateus",
  },
  {
    id: 3,
    userName: "Jorge",
  },
  {
    id: 4,
    userName: "Gilberto",
  },
  {
    id: 5,
    userName: "Gustavo",
  },
  {
    id: 6,
    userName: "Marta",
  },
  {
    id: 7,
    userName: "Joana",
  },
];

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
