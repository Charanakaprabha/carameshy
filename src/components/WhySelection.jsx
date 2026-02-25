import React from 'react';
import './WhySelection.css';
import { UserCheck, Zap, Eye, Target, Lock } from 'lucide-react';

const features = [
    { title: "Personalized Attention", icon: <UserCheck />, color: "#3B82F6" },
    { title: "Quick Response", icon: <Zap />, color: "#10B981" },
    { title: "Transparent Fee Structure", icon: <Eye />, color: "#F59E0B" },
    { title: "Compliance Focused", icon: <Target />, color: "#8B5CF6" },
    { title: "Ethical & Confidential", icon: <Lock />, color: "#EF4444" }
];

const WhyChooseUs = () => {
    return (
        <section id="why-choose-us" className="why-choose-us section-padding">
            <div className="container">
                <div className="why-grid">
                    <div className="why-header">
                        <h2 className="section-title">Why Choose Us?</h2>
                        <p className="description">
                            We understand that every client has unique financial needs. Our firm is built on the foundation of trust, integrity, and professional excellence.
                        </p>
                    </div>
                    <div className="features-list">
                        {features.map((feature, index) => (
                            <div className="feature-item" key={index}>
                                <div className="feature-icon" style={{ backgroundColor: `${feature.color}15`, color: feature.color }}>
                                    {feature.icon}
                                </div>
                                <h3>{feature.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
