import React, { useState } from "react";
import Faker from "faker";

import { ReactComponent as LearnIcon } from "../../assets/closed-book.svg";
import { ReactComponent as ClapIcon } from "../../assets/clap.svg";
import { ReactComponent as GratefulIcon } from "../../assets/pray.svg";

import "./index.css";

const Avatar = (props) => {
  const [selected, setSelected] = useState(false);
  const getAvatar = () => {
    return Faker.image.avatar();
  };

  const updateKudos = (userId, kudoType) => {
    // TODO: send action with userId and kudoType
  };

  return (
    <div
      className="avatar_container"
      onMouseEnter={() => setSelected(true)}
      onMouseLeave={() => setSelected(false)}
    >
      <img
        className={selected ? "avatar-selected" : "avatar"}
        key={props.user.id}
        src="https://s3.amazonaws.com/uifaces/faces/twitter/suribbles/128.jpg"
        alt={props.user.userName}
      />
      <div className={selected ? "middle_selected" : "middle"}>
        <LearnIcon
          className="icon"
          onClick={() => updateKudos(props.user.id, "learn")}
        />
        <ClapIcon
          className="icon"
          onClick={() => updateKudos(props.user.id, "clap")}
        />
        <GratefulIcon
          className="icon"
          onClick={() => updateKudos(props.user.id, "grateful")}
        />
      </div>
    </div>
  );
};

export default Avatar;
