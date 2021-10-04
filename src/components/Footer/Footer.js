// 
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMapMarked, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div>

            <footer className="footer-distributed">

                <div className="footer-left">

                    <h3>Knowledge <span> is Power </span></h3>

                    <p className="footer-links">
                        <Link to="/home">Home</Link>

                        <Link to="/about">About</Link>

                        <Link to="/service">Service</Link>
                        <Link to="/controller">Director</Link>


                    </p>

                    <p className="footer-company-name">Company Name © 2015</p>
                </div>

                <div className="footer-center">

                    <div >
                        <FontAwesomeIcon className="icon" icon={faMapMarked} size='2x' />
                        <p className="d-inline-block"><span>444 S. Cedros Ave</span> Solana Beach, California</p>
                    </div>

                    <div >
                        <FontAwesomeIcon className="icon" icon={faPhone} size='2x' />
                        <p>+1.555.555.5555</p>
                    </div>

                    <div >
                        <FontAwesomeIcon className="icon" icon={faEnvelope} size='2x' />
                        <p><a href="mailto:support@company.com">support@company.com</a></p>
                    </div>

                </div>

                <div className="footer-right">

                    <p className="footer-company-about">
                        <span>About Us</span>
                        Knowledge is power means that a person has education and a complete control on his life by using that knowledge.
                    </p>

                    <div className="footer-icons">
                        <FontAwesomeIcon className="icon" icon={faFacebook} size='3x' />
                        <FontAwesomeIcon className="icon" icon={faInstagram} size='3x' />
                        <FontAwesomeIcon className="icon" icon={faLinkedinIn} size='3x' />


                    </div>

                </div>

            </footer>
        </div>
    );
};

export default Footer;