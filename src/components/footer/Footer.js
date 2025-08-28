import React from 'react';
import Link from "../link/Link";
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <nav className="footer__nav">
                    <ul className="footer__list">
                        <li><Link to="/" text="Home"/></li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;