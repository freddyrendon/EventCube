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
                    {<input className="navbar-search" type="search" placeholder="Search Events" onClick={() => { window.location.href = `/#/events` }} />}

                    {/* <input className="navbar-search" type="search" placeholder="Search Events" onClick={() => { window.location.href = `/#/events` }} />
                    {
                        currentUser ? `Welcome ${currentUser.email}` : 
                    <> */}
                    <Link to="/login" className="signup-login-link">Log in</Link>
                    <Link to="/signup" className="signup-login-link">Sign Up</Link>
                        {/* </> */}
                    {/* } */}
                
                </div>
            </>
        )

        const personalGreeting = () => ( // can have this render splash page component instead
            <>
                <div className="navBar">
                    <Link to='/' className={"logo"} >
                        eventcube
                    </Link>

                     {/* { <div className="nav-search-bar-wrapper">
                <input type="text" className="nav-search-bar"/>
              </div> } */}
                    {<input className="navbar-search" type="search" placeholder="Search Events" onClick={() => { window.location.href = `/#/events` }} /> }
                        
                        

                    <div className="nav-bar-links">
                        <Link to="/events/create" className="create link-button">
                            {/* <i className="fas fa-plus-circle link-image"></i> */}
                            Create Event
                        </Link>
                        <Link to={`/users/${currentUser.id}/bookmarks`} className="link-button">
                            {/* <i className="far fa-heart link-image"></i> */}
                            Likes
                        </Link>
                        <Link to={`/users//registrations/`} className="link-button">
                            {/* <i className="fas fa-ticket-alt link-image"></i> */}
                            Tickets
                        </Link>
                        <div className="dropdown">
                            <a className="signup-login-link dropbtn">    {/* change this to Link when I create userShow --> */}
                                {/* <i className="far fa-smile profilePic"></i> */}
                                {currentUser.email}
                            </a>
                            <div className="dropdown-content">
                                <Link to={`/users/${currentUser.id}/events`}>
                                    Manage my events
                                </Link>
                                <a onClick={logout}>Log Out</a>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );



        return (
            <>
                {currentUser ? personalGreeting() : sessionLinks()}
            </>
        )
    }



}

export default navBar