import React from 'react'
import { Link } from 'react-router-dom'


export const Footer = () => {
    return (
        <div className="footer">
            <a href='https://www.linkedin.com/' >
                <i className="fab fa-linkedin-in footer-logo" ></i>
            </a>
            <a href='https://github.com/' >
                <i className="fab fa-github footer-logo"></i>
            </a>
        </div>
    )
}