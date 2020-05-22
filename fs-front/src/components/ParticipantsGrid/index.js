import React from "react";

import Avatar from "../Avatar/";

import "./index.css";

const mockData = [
  {
    userName: "Carlos",
  },
  {
    userName: "Mariana",
  },
  {
    userName: "Mateus",
  },
  {
    userName: "Jorge",
  },
  {
    userName: "Gilberto",
  },
  {
    userName: "Gustavo",
  },
  {
    userName: "Marta",
  },
  {
    userName: "Joana",
  },
];

const ParticipantsGrid = () => {
  const createGrid = () => {
    return (
      <div className="participants_container">
        {mockData.map((user) => {
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

export default ParticipantsGrid;
