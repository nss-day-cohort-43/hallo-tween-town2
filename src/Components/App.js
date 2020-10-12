import React from "react";
import { Route, Redirect } from "react-router-dom";
import { ApplicationViews } from "./ApplicationView";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";


export const App = () => (
  <>
  <Route
    render={() => {
      if (localStorage.getItem("werewolf_user")) {
        return (
          <>
            <ApplicationViews />
          </>
        );
      } else {
        return <Redirect to="/login" />;
      }
    }}
  />

  <Route path="/login">
    <Login />
  </Route>
  <Route path="/register">
    <Register />
  </Route>
</>
);