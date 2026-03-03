import React, { useState, useEffect } from 'react';
import './WhatsAppContact.css';

const WhatsAppContact = () => {
    const [inFooter, setInFooter] = useState(false);

    useEffect(() => {
        // Footer intersection observer
        const footer = document.querySelector('footer');
        if (footer) {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    setInFooter(entry.isIntersecting);
                },
                { threshold: 0 }
            );
            observer.observe(footer);
            return () => {
                observer.unobserve(footer);
            };
        }
    }, []);

    const phoneNumber = "917416770618";
    const message = "Hello Ramesh Yalamanchili & Co, I would like to get in touch with you.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`whatsapp-contact ${inFooter ? 'over-footer' : ''}`}
            aria-label="Contact us on WhatsApp"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
            </svg>
            <span className="whatsapp-text">WhatsApp</span>
        </a>
    );
};

export default WhatsAppContact;
