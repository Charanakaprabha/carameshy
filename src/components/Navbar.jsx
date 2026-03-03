import React, { useState, useEffect } from 'react';
import './Navbar.css';
import Logo from '../assets/ca_india_logo.svg';
import { Calculator, Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isNavVisible, setIsNavVisible] = useState(true);
    const [isScrolled, setIsScrolled] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsNavVisible(false); // Scrolling down
            } else {
                setIsNavVisible(true); // Scrolling up
            }

            if (currentScrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
    const closeMenu = () => setIsMobileMenuOpen(false);

    return (
        <nav className={`sticky-nav ${!isNavVisible ? 'nav-hidden' : ''} ${isScrolled ? 'nav-scrolled' : ''}`}>
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
                            <span className="quote-text">Get An Instant Quote</span>
                        </button>
                    </div>
                </div>

                <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle navigation">
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Navigation Menu */}
            <div className={`mobile-nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
                <ul className="mobile-links">
                    <li><a href="#about-us" onClick={closeMenu}>About us</a></li>
                    <li><a href="#services" onClick={closeMenu}>Services</a></li>
                    <li><a href="#resources" onClick={closeMenu}>Resources</a></li>
                    <li><a href="#why-choose-us" onClick={closeMenu}>Why choose us</a></li>
                    <li><a href="#contact-us" onClick={closeMenu}>Contact Us</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
