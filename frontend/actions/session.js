import {
    logIn, 
    logOut,
    signUp
} from '../util/session';

/// const 
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER'; 
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS';

/// action creators 

export const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
});

export const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

export const clearErrors = () => ({
    type: CLEAR_SESSION_ERRORS,
});

//// thunks 

export const signup = user => dispatch => (
    signUp(user).then(user => (
        dispatch(receiveCurrentUser(user))
    ), err => (
        dispatch(receiveErrors(err.responseJSON))
    ))
);

export const login = user => dispatch => (
    logIn(user).then(user => { 
        dispatch(receiveCurrentUser(user))
    }, err => (
        dispatch(receiveErrors(err.responseJSON))
    ))
);

export const logout = () => dispatch => (
    logOut().then(() => (
        dispatch(logoutCurrentUser())
    ))
);

export const removeErrors = () => dispatch => (
    dispatch(receiveErrors([]))
)