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
    formType: 'Sign up',
    navLink: <Link to="/login" className="signin-text">log in</Link>,
})

const mDTP = dispatch => ({
    processForm: (user) => dispatch(signup(user)),
    removeErrors: () => dispatch(removeErrors())
})

export default connect(mSTP, mDTP)(SessionForm)