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
import EventIndexContainer from "./events/event_index_container"
import EventShow from "./events/events_show_container";
import CreateEventFormContainer from "./events/create_form_event_container"
import EditEventFormContainer from "./events/edit_form_event_container"
import LikeContainer from "./likes/likes_container"


import Home from "./homepage/home";



const App = (props) => {

  return (
    <div className="main-content">
      <NavBarContainer />
      <Switch>
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <Route exact path="/" component={Home} />

        <ProtectedRoute exact path='/events/form' component={CreateEventFormContainer} />
        <ProtectedRoute exact path='/events/Editform/:eventId' component={EditEventFormContainer} />
        <ProtectedRoute exact path="/events" component={EventIndexContainer} />
        <ProtectedRoute path="/events/:eventId" component={EventShow} />
        <ProtectedRoute path="/:myId/likes/events" component={LikeContainer} />

      </Switch>
    </div>
  )
};

export default App;

