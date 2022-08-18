import React from "react";
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
  } from 'react-router-dom';
import SignupFormContainer from "./session_form/signup_contain";
import LoginFormContainer from "./session_form/login_form_container";
import { AuthRoute, ProtectedRoute } from "../util/route_util";

const App = () => (
                <div className="main-content">

                      <h1>Event Cube</h1>
                      <AuthRoute exact path="/login" component={LoginFormContainer} />
                      <AuthRoute exact path="/signup" component={SignupFormContainer} />
                </div>

);

export default App; 