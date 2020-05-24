import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

import { isAuth } from "../../../actions";

const PrivateRoute = ({
  component: Component,
  auth,
  isLoading,
  isAuth,
  ...rest
}) => {
  useEffect(() => {
    const token = localStorage.getItem("token");
    isAuth(token);
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  } else {
    return (
      <Route
        {...rest}
        render={(props) =>
          auth === true ? <Component {...props} /> : <Redirect to="/login" />
        }
      />
    );
  }
};

const mapStateToProps = (state) => {
  return {
    auth: state.authReducer.auth,
    isLoading: state.authReducer.isLoading,
  };
};

export default connect(mapStateToProps, { isAuth })(PrivateRoute);
