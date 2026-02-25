import React from 'react';
import './Navbar.css';
import Logo from '../assets/Logo.svg';
import { Calculator } from 'lucide-react';

const Navbar = () => {
    return (
        <nav className="sticky-nav">
            <div className="nav-container">
                <div className="nav-logo-container">
                    <img src={Logo} alt="CA India Logo" className="nav-logo" />
                </div>

                <ul className="nav-links">
                    <li><a href="#about-us">About us</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#resources">Resources</a></li>
                    <li><a href="#why-choose-us">Why choose us</a></li>
                </ul>

                <div className="nav-cta">
                    <div className="cta-action">
                        <button className="quote-button" onClick={() => window.location.href = '#contact-us'}>
                            <Calculator className="calc-icon" size={20} />
                            Get An Instant Quote
                        </button>
                        <p className="nav-phone">or call today <span>7416770618</span></p>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
