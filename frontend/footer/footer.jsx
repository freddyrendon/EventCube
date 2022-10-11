import React from 'react';
import { Link } from 'react-router-dom'


const Footer = () => {
    return (
        <div className="footer">
            <a target="_blank" href='https://www.linkedin.com/' >
                {/* <i className="fab fa-linkedin-in footer-logo" ></i> */}
                link
            </a>
            <a target="_blank" href='https://github.com/' >
                {/* <i className="fab fa-github footer-logo"></i> */}
                text
            </a>
        </div>
    )
};

export default Footer;