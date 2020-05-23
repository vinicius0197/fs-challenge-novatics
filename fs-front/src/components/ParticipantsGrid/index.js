import React from "react";

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