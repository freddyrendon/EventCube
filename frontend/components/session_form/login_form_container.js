import { connect } from "react-redux";
import { Link } from "react-router-dom";
import SessionForm from "./session_form";
import { signup, removeErrors } from "../../actions/session";
import React from "react";

const mSTP = ({ errors }) => ({
    information: {
        email: '',
        password: '',
        first_name: '',
        last_name: '',
    },
    errors: errors.session,
    formType: 'log in',
    navLink: <Link to="/login" className="signin-text">sign up instead</Link>,
})

const mDTP = dispatch => ({
    processForm: (user) => dispatch(signup(user)),
    removeErrors: () => dispatch(removeErrors())
})

export default connect(mSTP, mDTP)(SessionForm)