import React, { useState } from "react";

import { Link } from "react-router-dom";

import { ReactComponent as LearnIcon } from "../../assets/closed-book.svg";
import { ReactComponent as ClapIcon } from "../../assets/clap.svg";
import { ReactComponent as GratefulIcon } from "../../assets/pray.svg";

import "./index.css";

const Avatar = (props) => {
  const [selected, setSelected] = useState(false);

  const updateKudos = (userId, kudoType) => {
    alert(userId + kudoType);
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
        src={props.user.avatar}
        alt={props.user.userName}
      />
      <div className={selected ? "middle_selected" : "middle"}>
        <Link
          to={{
            pathname: "app/send_kudo",
            kudoData: {
              senderId: 1,
              recipientId: 2,
              kudoType: "learn",
            },
          }}
        >
          <LearnIcon className="icon" />
        </Link>

        <Link to={"app/send_kudo"}>
          <GratefulIcon
            className="icon"
            // onClick={() => updateKudos(props.user.id, "grateful")}
          />
        </Link>

        <Link to={"app/send_kudo"}>
          <ClapIcon
            className="icon"
            // onClick={() => updateKudos(props.user.id, "clap")}
          />
        </Link>
      </div>
    </div>
  );
};

export default Avatar;
