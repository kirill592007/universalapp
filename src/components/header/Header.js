import React from 'react';
import './Header.css'
import Link from "../link/Link";

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <nav className="header__nav">
                    <ul className="header__list">
                        <li><Link to="/" text="Home"/></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;