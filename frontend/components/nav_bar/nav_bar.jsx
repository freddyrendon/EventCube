import React from 'react';
import { Link } from 'react-router-dom';


class navBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchInput: ""
        };

        this.handleSearchInput = this.handleSearchInput.bind(this);
    }

    handleSearchInput(e) {
        this.setState({ searchInput: e.target.value });
    }





    render() {


        const { currentUser, logout } = this.props

        const sessionLinks = () => (
            <>
                <div className="navBar">
                    <Link to='/' className="logo" >
                        eventcube
                    </Link>
                    <input
                        className="navbar-search"
                        type="search"
                        placeholder="Search Events"
                        value={this.state.searchInput}
                        onChange={this.handleSearchInput}
                        onClick={() => { window.location.href = `/#/events?search=${this.state.searchInput}` }}
                    />

                    <Link to="/login" className="signup-login-link">Log in</Link>
                    <Link to="/signup" className="signup-login-link">Sign Up</Link>
                </div>
            </>
        )

        const personalGreeting = () => ( 
            <>
                <div className="navBar">
                    <Link to='/' className={"logo"} >
                        eventcube
                    </Link>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            window.location.href = `/#/events?search=${this.state.searchInput}`;
                        }}
                    >
                        <input
                            className="navbar-search"
                            type="search"
                            placeholder="Search Events"
                            value={this.state.searchInput}
                            onChange={this.handleSearchInput}
                        />
                        <button type="submit">Search</button>
                    </form>

                        
                        

                    <div className="nav-bar-links">
                        <Link to="/events/form" className="create link-button">
                            Create Event
                        </Link>
                        <div className="dropdown">
                            <a className="signup-login-link dropbtn"> 
                                {currentUser.email}
                            </a>
                            <div className="dropdown-content">
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