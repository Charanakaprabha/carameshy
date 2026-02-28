import React, { useEffect } from 'react';
import './WhySelection.css';
import { UserCheck, Zap, Eye, Target, Lock } from 'lucide-react';

const features = [
    { title: "Personalized Attention", icon: UserCheck, color: "#10B981", bgColor: "#D1FAE5" },
    { title: "Quick Response", icon: Zap, color: "#F59E0B", bgColor: "#FEF3C7" },
    { title: "Transparent Fee Structure", icon: Eye, color: "#3B82F6", bgColor: "#DBEAFE" },
    { title: "Compliance Focused", icon: Target, color: "#8B5CF6", bgColor: "#EDE9FE" },
    { title: "Ethical & Confidential", icon: Lock, color: "#EF4444", bgColor: "#FEE2E2" }
];

const WhyChooseUs = () => {
    useEffect(() => {
        const handleScroll = () => {
            if (window.innerWidth > 768) return; // Only apply on mobile where slide-in occurs

            const items = document.querySelectorAll('.feature-item');
            const windowHeight = window.innerHeight;

            items.forEach((item) => {
                const rect = item.getBoundingClientRect();
                // We want progress to be 0 when top is at bottom of screen
                // We want progress to be 1 when top is near middle of screen
                const startPoint = windowHeight;
                const endPoint = windowHeight * 0.7; // fully settled slightly above bottom

                let progress = 0;
                if (rect.top <= endPoint) {
                    progress = 1;
                } else if (rect.top >= startPoint) {
                    progress = 0;
                } else {
                    progress = 1 - ((rect.top - endPoint) / (startPoint - endPoint));
                }

                item.style.setProperty('--item-progress', progress);
            });
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Initial check

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section id="why-choose-us" className="why-choose-us section-padding">
            <div className="container">
                <div className="why-grid">
                    <div className="why-header text-center">
                        <h2 className="section-title text-center">Why Choose Us?</h2>
                        <p className="description">
                            We understand that every client has unique financial needs. Our firm is built on the foundation of trust, integrity, and professional excellence.
                        </p>
                    </div>
                    <div className="features-list">
                        {features.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <div className="feature-item" key={index}>
                                    <div className="feature-icon" style={{ backgroundColor: feature.bgColor }}>
                                        <Icon size={24} color={feature.color} />
                                    </div>
                                    <h3>{feature.title}</h3>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
