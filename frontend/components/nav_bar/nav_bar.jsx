import React from 'react';
import { Link } from 'react-router-dom';


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

                    {<input className="navbar-search" type="search" placeholder="Search Events" onClick={() => { window.location.href = `/#/events` }} /> }
                        
                        

                    <div className="nav-bar-links">
                        <Link to="/events/form" className="create link-button">
                            Create Event
                        </Link>
                        {/* <Link to={`/users/${currentUser.id}/bookmarks`} className="link-button">
                            Likes
                        </Link>
                        <Link to={`/users//registrations/`} className="link-button">
                            Tickets
                        </Link> */}
                        <div className="dropdown">
                            <a className="signup-login-link dropbtn"> 
                                {currentUser.email}
                            </a>
                            <div className="dropdown-content">
                                {/* <Link to={`/users/${currentUser.id}/events`}> */}
                                <Link to={`/events`}>
                                    events index
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