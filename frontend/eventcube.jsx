import React from "react";
import ReactDOM from "react-dom";

import Root from './components/root';
import configureStore from './store/store';
import { login, logout, signup } from './actions/session'

document.addEventListener("DOMContentLoaded", () => {


    window.login = login
    window.signup = signup
    window.logout = logout

    // window.getState = store.getState;
    // window.dispatch = store.dispatch;
    
    const store = configureStore();

    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store} />, root);
});