import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getKudos, getUsers } from "../../actions";

import { ReactComponent as LearnIcon } from "../../assets/learn.svg";
import { ReactComponent as ClapIcon } from "../../assets/awesome.svg";
import { ReactComponent as GratefulIcon } from "../../assets/grateful.svg";

import "./index.css";

const Timeline = (props) => {
  useEffect(() => {
    props.getUsers();
    props.getKudos();
  }, []);

  const getUsername = (id) => {
    const user = props.users.find((user) => user.id === id);
    return user.username;
  };

  const getIcon = (icon_type) => {
    switch (icon_type) {
      case "learn":
        return <LearnIcon className="icon" />;
      case "grateful":
        return <GratefulIcon className="icon" />;
      case "awesome":
        return <ClapIcon className="icon" />;
      default:
        break;
    }
  };

  return (
    <div className="container">
      <h1 className="title">Timeline</h1>
      {props.users.length === 0 ? (
        <div>Vazio</div>
      ) : (
        <div>
          {props.kudos.map((kudo) => {
            return (
              <div className="timeline-row" key={kudo.id}>
                <p>{getUsername(kudo.sender_id)} enviou um </p>&emsp;
                <p>{getIcon(kudo.kudo_type)}</p>&emsp;
                <p> para {getUsername(kudo.recipient_id)}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    kudos: state.kudosReducer.kudos,
    users: state.usersReducer.users,
  };
};

export default connect(mapStateToProps, { getKudos, getUsers })(Timeline);
