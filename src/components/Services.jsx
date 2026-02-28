import React from 'react';
import './Services.css';
import { ShieldCheck, FileText, BarChart3, Briefcase } from 'lucide-react';

const serviceData = [
    {
        title: "Income Tax Services",
        icon: <FileText size={32} />,
        items: ["ITR Filing", "Tax Planning", "Capital Gains Advisory", "TDS Compliance"]
    },
    {
        title: "GST Services",
        icon: <ShieldCheck size={32} />,
        items: ["GST Registration", "GSTR-1 / 3B Filing", "GST Notices & Replies", "GST Audit Support"]
    },
    {
        title: "Audit & Assurance",
        icon: <BarChart3 size={32} />,
        items: ["Tax Audit", "Internal Audit", "Bank Stock Audit", "Financial Statement Preparation"]
    },
    {
        title: "Business Advisory",
        icon: <Briefcase size={32} />,
        items: ["Company / Firm Registration", "Project Reports", "Bank Loan Assistance", "Financial Planning"]
    }
];

const Services = () => {
    return (
        <section id="services" className="services-section section-padding">
            <div className="container">
                <h2 className="section-title text-center">Our Professional Services</h2>
                <p className="section-description text-center" style={{ marginTop: '1rem', color: '#64748b', maxWidth: '600px', margin: '1rem auto 3rem auto' }}>
                    We offer a comprehensive suite of financial and advisory services designed to help your business thrive and remain compliant.
                </p>
                <div className="services-grid">
                    {serviceData.map((service, index) => (
                        <div className="service-card" key={index}>
                            <div className="service-icon">{service.icon}</div>
                            <h3>{service.title}</h3>
                            <ul>
                                {service.items.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
