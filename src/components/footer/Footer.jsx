import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                </div>
                <div className="socialIcons">
                    <span className="icon">
                        <Link to={'https://www.facebook.com/vikas.Khangrawat.x4'} >
                        <FaFacebookF />
                        </Link>
                    </span>
                    <span className="icon">
                        <Link to={'https://instagram.com/x4_vikas.js'}>
                        <FaInstagram />
                        </Link>
                    </span>
                    <span className="icon">
                        <FaTwitter />
                    </span>
                    
                    <span className="icon" >
                        <Link to={'https://www.linkedin.com/in/vikas-rajput-38b1ba194/'}>
                        <FaLinkedin />
                        </Link>
                    </span>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
