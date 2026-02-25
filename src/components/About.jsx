import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="about-us" className="about-section section-padding">
            <div id="who-we-help" style={{ position: 'absolute', top: '-100px' }}></div>
            <div className="container">
                <div className="about-grid">
                    <div className="about-content">
                        <h2 className="section-title">About Ramesh Yalamanchili & Co</h2>
                        <p className="lead-text">
                            Ramesh Yalamanchili & Co is a Chartered Accountancy firm providing professional services in the areas of Income Tax, GST, Audit, Financial Advisory and Compliance Management.
                        </p>
                        <p>
                            The firm is led by <strong>CA Y. Ramesh</strong>, a dedicated professional committed to delivering practical, timely and reliable financial solutions to businesses and individuals. With <strong>5 years of experience</strong>, we bring a wealth of knowledge and expertise to every client engagement.
                        </p>
                        <div className="stats-grid">
                            <div className="stat-item">
                                <h3>5+</h3>
                                <p>Years Experience</p>
                            </div>
                            <div className="stat-item">
                                <h3>500+</h3>
                                <p>Tax Filings</p>
                            </div>
                            <div className="stat-item">
                                <h3>Expert</h3>
                                <p>GST & Income Tax</p>
                            </div>
                        </div>
                    </div>
                    <div className="about-highlights">
                        <div className="highlight-card">
                            <h3>Our Specialization</h3>
                            <ul>
                                <li>GST & Income Tax Management</li>
                                <li>Capital Gains Advisory</li>
                                <li>Strategic Financial Planning</li>
                                <li>Audit & Compliance Assurance</li>
                            </ul>
                        </div>
                        <div className="highlight-card">
                            <h3>Client Sectors</h3>
                            <p>We serve a diverse range of clients across various sectors including Retail, Manufacturing, Professional Services, and Individuals seeking specialized tax advice.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
