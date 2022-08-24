import React from "react";
import ReactDOM from "react-dom";

import Root from './components/root';
import configureStore from './store/store';
import { login, logout, signup } from './actions/session'
import { fetchEvents } from "./util/event_util";

document.addEventListener("DOMContentLoaded", () => {

    let preloadedstate = {}

    if (window.currentUser) {
         preloadedstate = {
            session: { currentUser: window.currentUser }
        };

        delete window.currentUser
    } 
    window.login = login
    window.signup = signup
    window.logout = logout
    window.fetchEvents = fetchEvents

    // window.getState = store.getState;
    // window.dispatch = store.dispatch;
    
    const store = configureStore(preloadedstate);
    window.store = store

    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store} />, root);
});