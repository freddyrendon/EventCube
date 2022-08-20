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
import NavBarContainer from './nav_bar/nav_bar_container'
import { Footer } from "../footer/footer";
import Home from "./homepage/home";

const App = (props) => {

  return ( <div className="main-content">
    <NavBarContainer />
      <Switch>
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
      </Switch>
      <Route exact path="/" component={Home} />
    {/* <Footer /> */}
  </div>
  
)};



export default App