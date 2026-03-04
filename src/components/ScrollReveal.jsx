import { useEffect } from 'react';

const ScrollReveal = () => {
    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        // Observe all elements with .section class
        const sections = document.querySelectorAll('.section');
        sections.forEach(section => observer.observe(section));

        // Cleanup
        return () => {
            sections.forEach(section => observer.unobserve(section));
        };
    }, []);

    return null;
};

export default ScrollReveal;
