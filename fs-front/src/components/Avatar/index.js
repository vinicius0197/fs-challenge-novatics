import React, { useState } from "react";
import { connect } from "react-redux";
import ReactTooltip from "react-tooltip";

import { Link } from "react-router-dom";

import { ReactComponent as LearnIcon } from "../../assets/learn.svg";
import { ReactComponent as ClapIcon } from "../../assets/awesome.svg";
import { ReactComponent as GratefulIcon } from "../../assets/grateful.svg";

import "./index.css";

const Avatar = (props) => {
  const [selected, setSelected] = useState(false);

  const capitalize = (s) => {
    if (typeof s !== "string") return "";
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  return (
    <div
      className="avatar_container"
      onMouseEnter={() => setSelected(true)}
      onMouseLeave={() => setSelected(false)}
    >
      <img
        className={selected ? "avatar dark" : "avatar"}
        key={props.user.id}
        src={props.user.avatar}
        alt={props.user.username}
      />
      <div className="img-info">
        <p
          className={
            selected ? "hidden_group selected text" : "hidden_group text"
          }
        >
          Dê um kudo para
        </p>
        <div
          className={
            selected
              ? "hidden_group selected username"
              : "hidden_group username"
          }
        >
          {capitalize(props.user.username)}
        </div>
        <div
          className={
            selected
              ? "hidden_group selected icon-group"
              : "hidden_group icon-group"
          }
        >
          <Link
            to={{
              pathname: "app/send_kudo",
              kudoData: {
                senderId: props.currentUser,
                recipientId: props.user.id,
                kudoType: "learn",
              },
            }}
          >
            <div>
              <ReactTooltip />
              <LearnIcon data-tip="I've learned" className="icon" />
            </div>
          </Link>

          <Link
            to={{
              pathname: "app/send_kudo",
              kudoData: {
                senderId: props.currentUser,
                recipientId: props.user.id,
                kudoType: "grateful",
              },
            }}
          >
            <div>
              <ReactTooltip />
              <GratefulIcon data-tip="I'm grateful" className="icon" />
            </div>
          </Link>

          <Link
            to={{
              pathname: "app/send_kudo",
              kudoData: {
                senderId: props.currentUser,
                recipientId: props.user.id,
                kudoType: "awesome",
              },
            }}
          >
            <div>
              <ReactTooltip />
              <ClapIcon data-tip="Was awesome" className="icon" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.authReducer.currentUser,
  };
};

export default connect(mapStateToProps)(Avatar);
