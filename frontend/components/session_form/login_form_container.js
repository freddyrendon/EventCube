import { connect } from "react-redux";
import { Link } from "react-router-dom";
import SessionForm from "./session_form";
import { login, removeErrors } from "../../actions/session";
import React from "react";

const mSTP = ({ errors }) => ({
    information: {
        email: '',
        password: '',
        first_name: '',
        last_name: '',
    },
    errors: errors.session,
    formType: 'Log in',
    navLink: <Link to="/signup" className="signin-text">sign up</Link>,
})

const mDTP = dispatch => ({
    processForm: (user) => dispatch(login(user)),
    removeErrors: () => dispatch(removeErrors())
})

export default connect(mSTP, mDTP)(SessionForm)