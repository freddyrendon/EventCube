import React from 'react';
import { Link } from 'react-router-dom'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { FaAngellist } from 'react-icons/fa'


const Footer = () => {
    return (
        <div className="footer">
            <div className='websites'>
                <a target="_blank" href='https://github.com/freddyrendon' >
                    <AiFillGithub/>
            </a>
            </div>
            <div className='websites'>
                <a target="_blank" href='https://www.linkedin.com/in/freddy-rendon-3302a9234/' >
                    <AiFillLinkedin/>
            </a>
            </div>
            <div className='websites'>
                <a target="_blank" href='https://angel.co/u/freddy-rendon' >
                    <FaAngellist />
                </a>
            </div>
            
        </div>
    )
};

export default Footer;