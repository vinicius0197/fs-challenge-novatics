import React from "react";
import Faker from "faker";

import "./index.css";

const Avatar = (props) => {
  const getAvatar = () => {
    return Faker.image.avatar();
  };

  return (
    <img
      className="avatar"
      key={props.user.userName}
      src={getAvatar()}
      alt={props.user.userName}
    />
  );
};

export default Avatar;
