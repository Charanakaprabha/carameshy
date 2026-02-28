import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import './BackToTop.css';

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [inFooter, setInFooter] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

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
                window.removeEventListener('scroll', handleScroll);
                observer.unobserve(footer);
            };
        }

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <button
            className={`back-to-top ${isVisible ? 'visible' : ''} ${inFooter ? 'over-footer' : ''}`}
            onClick={scrollToTop}
            aria-label="Back to top"
        >
            <ArrowUp size={24} />
        </button>
    );
};

export default BackToTop;
