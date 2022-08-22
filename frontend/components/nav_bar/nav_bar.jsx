import React from 'react';
import { Link } from 'react-router-dom';


class navBar extends React.Component {
    constructor(props) {
        super(props)

    }


    render() {


        const { currentUser, logout } = this.props

        const sessionLinks = () => (
            <>
                <div className="navBar">
                    <Link to='/' className="logo" >
                        eventcube
                    </Link>
                    <input className="navbar-search" type="search" placeholder="Search Events"/>
                    <Link to="/login" className="signup-login-link">Log in</Link>
                    <Link to="/signup" className="signup-login-link">Sign Up</Link>
                </div>
            </>
        )



        return (
            <>
                {currentUser ? personalGreeting() : sessionLinks()}
            </>
        )
    }



}

export default navBar