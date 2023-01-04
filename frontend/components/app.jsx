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

// import { Footer } from "../footer/footer";
import Home from "./homepage/home";


// index is /events 
// show is /events/:eventid

const App = (props) => {

  return ( <div className="main-content">
    <NavBarContainer />
      <Switch>
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <Route exact path="/" component={Home} />
      <Route exact path='/events/form' component={CreateEventFormContainer} />
      <Route exact path='/events/Editform/:eventId' component={EditEventFormContainer} />
        <Route exact path="/events" component={EventIndexContainer} />
        <Route path="/events/:eventId" component={EventShow}/>

      </Switch>
  </div>  
)};

export default App