import React from 'react';
import { Link } from 'react-router-dom'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { FaAngellist } from 'react-icons/fa'


const Footer = () => {
    return (
        <div className="footer">
            <div className='websites'>
            <a target="_blank" href='https://www.linkedin.com/' >
                    <AiFillGithub/>
            </a>
            </div>
            <div className='websites'>
            <a target="_blank" href='https://github.com/' >
                    <AiFillLinkedin/>
            </a>
            </div>
            <div className='websites'>
                <a target="_blank" href='https://angel.co/' >
                    <FaAngellist />
                </a>
            </div>
            
        </div>
    )
};

export default Footer;