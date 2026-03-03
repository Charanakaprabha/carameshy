import React, { useState, useEffect } from 'react';
import './Hero.css';
import ProfileImage from '../assets/ProfileImage.png';
import { Calculator, Check, Plus, X, ArrowRight } from 'lucide-react';

const Hero = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [curveRadius, setCurveRadius] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            // max curve radius capped carefully to match header (30px)
            const newRadius = Math.min(window.scrollY / 2, 30);
            setCurveRadius(newRadius);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const services = [
        "Your own dedicated accountant",
        "Unlimited support via phone, email, and video call",
        "MTD-ready accounting software (Pandle)",
        "A full set of accounts each year",
        "Tax return completed and submitted",
        "Client Hub to manage your account and documents",
        "Personalised timeline and deadline reminders in Client Hub",
        "Live Chat support from our admin & bookkeeping teams",
        "Annual tax efficiency reviews to reduce your tax bill",
        "Proactive checks of your bookkeeping in Pandle",
        "Automated bank feeds to speed up your bookkeeping",
        "Pandle Mobile to invoice customers & upload receipts",
        "Free incorporation of a limited company",
        "Free representation during a HMRC investigation"
    ];

    return (
        <section
            className="hero-section"
            style={{
                borderBottomLeftRadius: `50% ${curveRadius}px`,
                borderBottomRightRadius: `50% ${curveRadius}px`,
                transition: 'border-radius 0.1s ease-out'
            }}
        >
            <div className="hero-content">
                <h1 className="hero-title">
                    Expert Financial <br />
                    <span>Solutions for You</span>
                </h1>

                <div className="hero-points">
                    <div className="hero-point">
                        <span className="about-tick-style">✓</span>
                        <span>Your own dedicated online accountant</span>
                    </div>
                    <div className="hero-point">
                        <span className="about-tick-style">✓</span>
                        <span>Completion of your accounts and tax returns</span>
                    </div>
                    <div className="hero-point">
                        <span className="about-tick-style">✓</span>
                        <span>MTD-ready accounting software (Pandle)</span>
                    </div>
                    <button className="view-details-link" onClick={() => setIsModalOpen(true)}>
                        <Plus size={18} /> View <span>full details</span>
                    </button>
                </div>

                <div className="hero-cta">
                    <button className="get-started-btn" onClick={() => setIsModalOpen(true)}>
                        Get Started <ArrowRight size={20} style={{ display: 'inline', marginLeft: '8px', verticalAlign: 'middle' }} />
                    </button>
                </div>
            </div>

            <div className="hero-profile-container">
                <img src={ProfileImage} alt="Profile" className="hero-profile-img" />
            </div>

            {/* Service Modal */}
            {isModalOpen && (
                <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={() => setIsModalOpen(false)}>
                            <X size={24} />
                        </button>

                        <div className="modal-header">
                            <h2>What is included in our accountancy packages?</h2>
                            <p>If you have any questions about our services please call us on <span>7416770618</span></p>
                        </div>

                        <div className="services-grid">
                            {services.map((service, index) => (
                                <div key={index} className="modal-service-item">
                                    <Check size={20} className="modal-check-icon" />
                                    <span>{service}</span>
                                </div>
                            ))}
                        </div>


                    </div>
                </div>
            )}
        </section>
    );
};

export default Hero;
