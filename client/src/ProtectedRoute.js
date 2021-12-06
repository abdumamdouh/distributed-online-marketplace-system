import React from "react";
import { Redirect, Route } from "react-router";

import { useSelector } from "react-redux";

const ProtectedRoute = ({ component: Component, exact, path }) => {
  const { userInfo } = useSelector((state) => state.user);

  return (
    <Route
      exact={exact}
      path={path}
      render={(props) =>
        // this.props.authedUser
        //TODO: add condition for Protected Route
        true ? (
          <Component {...props} />
        ) : (
          <Redirect
            // to property pass info to be used in withRouter props
            // we will pass from state represnts the location of the current route
            to={{
              pathname: "/login",
              state: {
                from: props.location
              }
            }}
          />
        )
      }
    />
  );
};

export default ProtectedRoute;
