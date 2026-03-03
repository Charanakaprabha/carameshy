import React from 'react';
import './Footer.css';
import Logo from '../assets/ca_india_logo.svg';
import { Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-column">
                        <h3>Who We Help</h3>
                        <ul>
                            <li><a href="#who-we-help">View Industries</a></li>
                            <li><a href="#who-we-help">Individuals</a></li>
                            <li><a href="#who-we-help">Startups & SMEs</a></li>
                            <li><a href="#who-we-help">Corporations</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>Services</h3>
                        <ul>
                            <li><a href="#services">Income Tax Services</a></li>
                            <li><a href="#services">GST Services</a></li>
                            <li><a href="#services">Audit & Assurance</a></li>
                            <li><a href="#services">Business Advisory</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>Resources</h3>
                        <ul>
                            <li><a href="#resources">Guides & Templates</a></li>
                            <li><a href="#resources">Tax Calculators</a></li>
                            <li><a href="#resources">Blog</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>About</h3>
                        <ul>
                            <li><a href="#about-us">About Us</a></li>
                            <li><a href="#why-choose-us">Why Choose Us</a></li>
                            <li><a href="#contact-us">Contact Us</a></li>
                            <li><a href="#resources">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div className="footer-column contact-column">
                        <h3>Contact</h3>
                        <div className="contact-info">
                            <p>Telephone: +91 7416770618</p>
                            <p>
                                LinkedIn: <a href="https://www.linkedin.com/in/ca-ramesh-yalamanchili-172859134/?originalSubdomain=in" target="_blank" rel="noopener noreferrer" className="linkedin-link">
                                    Connect with us <Linkedin size={16} inline="true" />
                                </a>
                            </p>
                            <p><a href="mailto:cayramesh333@gmail.com" className="email-link">cayramesh333@gmail.com</a></p>

                            <div className="footer-logo-container">
                                <img src={Logo} alt="CA India Logo" className="footer-logo" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom-info">
                    <p className="copyright">&copy; Ramesh Yalamanchili & Co 2026</p>
                    <p className="address">Address: near HP petrol bunk , Gopalapatnam , beside lenkart , 530027 | D no: 3-52</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
