import React from 'react';
import './Footer.css';
import Logo from '../assets/Logo.svg';
import { Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-column">
                        <h3>Who We Help</h3>
                        <ul>
                            <li><a href="#">Limited companies</a></li>
                            <li><a href="#">Sole traders</a></li>
                            <li><a href="#">Partnerships</a></li>
                            <li><a href="#">Limited liability partnerships</a></li>
                            <li><a href="#">Freelancers</a></li>
                            <li><a href="#">Contractors</a></li>
                            <li><a href="#">Small businesses</a></li>
                            <li><a href="#">Startups</a></li>
                            <li><a href="#">Self employed</a></li>
                            <li><a href="#">View industries</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>Services</h3>
                        <ul>
                            <li><a href="#">Year-end accounts</a></li>
                            <li><a href="#">Tax returns</a></li>
                            <li><a href="#">VAT returns</a></li>
                            <li><a href="#">Bookkeeping</a></li>
                            <li><a href="#">Payroll</a></li>
                            <li><a href="#">Self Assessment</a></li>
                            <li><a href="#">CIS Returns</a></li>
                            <li><a href="#">Company formations</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>Resources</h3>
                        <ul>
                            <li><a href="#">Plans and pricing</a></li>
                            <li><a href="#">Free bookkeeping software</a></li>
                            <li><a href="#">Guides & templates</a></li>
                            <li><a href="#">Tax calculators</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Instant quote</a></li>
                            <li><a href="#">Making Tax Digital for Income Tax</a></li>
                            <li><a href="#">Changing accountants</a></li>
                            <li><a href="#">Ask an accountant</a></li>
                            <li><a href="#">Tax year dates</a></li>
                            <li><a href="#">Help centre</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>About</h3>
                        <ul>
                            <li><a href="#">About us</a></li>
                            <li><a href="#">Meet the team</a></li>
                            <li><a href="#">Contact us</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Client Stories</a></li>
                            <li><a href="#">Press and media</a></li>
                            <li><a href="#">Affiliate scheme</a></li>
                            <li><a href="#">Privacy policy</a></li>
                            <li><a href="#">Terms and conditions</a></li>
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
                    <p className="address">Address: 50-92-31/1, 1st Floor, Shantipuram, Visakhapatnam, Andhra Pradesh 530016</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
