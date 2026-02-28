import React from 'react';
import './Contact.css';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

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
                                <p>near HP petrol bunk , Gopalapatnam , beside lenkart , 530027<br />D no: 3-52</p>
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
                                <input type="text" id="name" placeholder=" " required />
                                <label htmlFor="name">Full Name</label>
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <input type="email" id="email" placeholder=" " required />
                                    <label htmlFor="email">Email Address</label>
                                </div>
                                <div className="form-group">
                                    <input type="tel" id="phone" placeholder=" " />
                                    <label htmlFor="phone">Phone Number</label>
                                </div>
                            </div>
                            <div className="form-group">
                                <input type="text" id="subject" placeholder=" " required />
                                <label htmlFor="subject">Subject</label>
                            </div>
                            <div className="form-group">
                                <textarea id="message" rows="5" placeholder=" " required></textarea>
                                <label htmlFor="message">How can we help you?</label>
                            </div>
                            <button type="submit" className="submit-btn" onClick={(e) => e.preventDefault()}>
                                Send Message <ArrowRight size={20} style={{ marginLeft: '8px' }} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
