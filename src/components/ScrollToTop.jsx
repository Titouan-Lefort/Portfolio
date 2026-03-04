import React, { useState, useEffect } from 'react';
import './ScrollToTop.css';

const ScrollToTop = () => {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollTop = window.scrollY;

            // Calculer la progression du scroll (0 à 100)
            const totalScroll = documentHeight - windowHeight;
            const progress = (scrollTop / totalScroll) * 100;

            setScrollProgress(progress);

            // Afficher le bouton après 300px de scroll
            setIsVisible(scrollTop > 300);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial call

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className={`scroll-to-top ${isVisible ? 'visible' : ''}`} onClick={scrollToTop}>
            <svg className="progress-ring" viewBox="0 0 48 48">
                <circle
                    className="progress-ring-circle-bg"
                    cx="24"
                    cy="24"
                    r="22"
                />
                <circle
                    className="progress-ring-circle"
                    cx="24"
                    cy="24"
                    r="22"
                    style={{
                        strokeDasharray: `${2 * Math.PI * 22}`,
                        strokeDashoffset: `${2 * Math.PI * 22 * (1 - scrollProgress / 100)}`
                    }}
                />
            </svg>
            <svg className="arrow-icon" viewBox="0 0 24 24" fill="none">
                <path d="M12 19V5M12 5L5 12M12 5L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </div>
    );
};

export default ScrollToTop;
