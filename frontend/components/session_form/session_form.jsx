import React from 'react'
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';


class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.information
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    demoUserSignin(demoUser) {
        return e => {
            e.preventDefault();
            this.props.processForm(demoUser)
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state)
        this.setState(this.newState)
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    componentWillUnmount() {
        this.props.removeErrors()
    }

    render() {
        const { formType, navLink } = this.props

        const demoUser = {
            email: "demo@user.com",
            password: "demouser"
        }


        const signupNames = () => {
            return (
                <>
                    <div className={"inputGroup"}>
                        <input
                            type="text"
                            placeholder="First name"
                            value={this.state.first_name}
                            onChange={this.update('first_name')}
                            className={"formInput"}
                        />
                        <label className={"formInputLabel"}>First name:</label>
                    </div>
                    <br />

                    <div className={"inputGroup"}>
                        <input
                            type="text"
                            placeholder="Last name"
                            value={this.state.last_name}
                            onChange={this.update('last_name')}
                            className={"formInput"}
                        />
                        <label className={"formInputLabel"}>Last name:</label>
                    </div>
                    <br />
                </>
            )
        }

        const splitRight = () => {
            return (
                <>
                    <div className="split right">
                        <p>
                            
                        </p>
                    </div>
                </>
            )
        }


        return (
            <div className={"split left container session-form"}>
                <form onSubmit={this.handleSubmit} className={"centered"}>
                    <h2>
                        <Link to='/' className={"signin-logo"} >
                            eventcube
                        </Link>
                    </h2>

                    <h3 className="Log-in">
                        {formType}
                    </h3>
                    <div className='errors'>
                    {this.renderErrors()}
                    </div>
                    <div className={"inputGroup"}>
                        <input
                            type="text"
                            placeholder="Email"
                            value={this.state.email}
                            onChange={this.update('email')}
                            className={"formInput"}
                            />
                        <label className={"formInputLabel"}>Email:</label>
                    </div>
                    <br />

                    <div className={"inputGroup"}>
                        <input
                            type="password"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            className={"formInput"}
                            />
                        <label className="formInputLabel">Password:</label>
                    </div>
                    <br />
                    {formType === 'Sign up' ? signupNames() : ''}
                    <input className="formButton" type="submit" value={formType} />
                    <br />
                    {formType === 'Log in' ?
                        <button
                        onClick={this.demoUserSignin(demoUser)}
                        className={"inputGroup formButton"}
                        >Demo User</button> : ''
                    }
                            {navLink}

                </form>
                {splitRight()}
            </div>
        )
    }
}

export default SessionForm