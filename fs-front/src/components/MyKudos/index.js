import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getUsers } from "../../actions";

import { ReactComponent as LearnIcon } from "../../assets/learn.svg";
import { ReactComponent as ClapIcon } from "../../assets/awesome.svg";
import { ReactComponent as GratefulIcon } from "../../assets/grateful.svg";
import "./index.css";

// Displays kudos received from other users
const MyKudos = (props) => {
  useEffect(() => {
    props.getUsers();
  }, []);

  const getUser = (id) => {
    const user = props.users.find((user) => user.id === id);
    return user;
  };

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
      <h1 className="title">Meus kudos</h1>
      {props.users.length === 0 ? (
        <div>Vazio</div>
      ) : (
        <div className="kudo-container">
          {getUser(props.currentUser).received_kudos.map((kudo) => {
            return (
              <div className="kudo">
                <img
                  className="avatar"
                  src={getUser(kudo.sender_id).avatar}
                ></img>

                <div className="kudo-info">
                  <div className="kudo-title">
                    <b>{getUsername(kudo.sender_id)}</b>&emsp;
                    {getIcon(kudo.kudo_type)}
                  </div>
                  <p>{kudo.description}</p>
                </div>
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
    users: state.usersReducer.users,
    currentUser: state.authReducer.currentUser,
  };
};

export default connect(mapStateToProps, { getUsers })(MyKudos);
