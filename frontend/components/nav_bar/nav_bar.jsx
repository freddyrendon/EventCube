import React from 'react';
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPlus, faHeart as farHeart, faUserCircle } from "@fortawesome/free-solid-svg-icons";


class navBar extends React.Component {
    constructor(props) {
        super(props)

    }


    /// onclick redirct to /events 


    render() {


        const { currentUser, logout } = this.props

        const sessionLinks = () => (
            <>
                <div className="navBar">
                    <Link to='/' className="logo" >
                        eventcube
                    </Link>
                    <input className="navbar-search" type="search" placeholder="Search Events" onClick={() => { window.location.href = `/#/events` }} />
                    {
                        currentUser ? `Welcome ${currentUser.email}` : 
                        <>
                    <Link to="/login" className="signup-login-link">Log in</Link>
                    <Link to="/signup" className="signup-login-link">Sign Up</Link>
                        </>
                    }
                
                    <div>
                        <button className="btn create form-logout" onClick={logout}>Log Out</button>
                    </div>
                </div>
            </>
        )


        return (
            <>
                {sessionLinks()}
            </>
        )
    }



}

export default navBar