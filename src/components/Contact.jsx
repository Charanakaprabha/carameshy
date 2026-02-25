import React from 'react';
import './Contact.css';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact-us" className="contact-section section-padding">
            <div className="container">
                <h2 className="section-title text-center">Contact Us</h2>
                <div className="contact-grid">
                    <div className="contact-info">
                        <h3 className="info-title">Global Contact Info</h3>
                        <div className="info-item">
                            <div className="info-icon"><MapPin /></div>
                            <div>
                                <h3>Address</h3>
                                <p>50-92-31/1, 1st Floor, Shantipuram, Visakhapatnam, Andhra Pradesh 530016</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <div className="info-icon"><Phone /></div>
                            <div>
                                <h3>Phone</h3>
                                <p>+91 7416770618</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <div className="info-icon"><Mail /></div>
                            <div>
                                <h3>Email</h3>
                                <p>cayramesh333@gmail.com</p>
                            </div>
                        </div>

                        <div className="map-container-mini">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.7423376541585!2d83.21603727521568!3d17.75284608319694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3967c179b8785b%3A0x2341e8f1c7efa873!2sRAMESH%20YALAMANCHILI%20%26%20CO!5e0!3m2!1sen!2sin!4v1740477548000!5m2!1sen!2sin"
                                width="100%"
                                height="250"
                                style={{ border: 0, borderRadius: '15px' }}
                                allowFullScreen=""
                                loading="lazy"
                                title="CA Ramesh Office Location"
                            ></iframe>
                        </div>
                    </div>

                    <div className="contact-form-container">
                        <form className="contact-form">
                            <div className="form-group">
                                <label>Full Name</label>
                                <input type="text" placeholder="Ramesh" required />
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Email Address</label>
                                    <input type="email" placeholder="ramesh@example.com" required />
                                </div>
                                <div className="form-group">
                                    <label>Phone Number</label>
                                    <input type="tel" placeholder="+91 74167 70618" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Subject</label>
                                <input type="text" placeholder="Inquiry about Tax Filing" required />
                            </div>
                            <div className="form-group">
                                <label>How can we help you?</label>
                                <textarea rows="5" placeholder="Your message here..." required></textarea>
                            </div>
                            <button type="submit" className="submit-btn" onClick={(e) => e.preventDefault()}>Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
