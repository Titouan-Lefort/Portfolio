import React, { useRef } from 'react';
import './FeaturesGrid.css';

const services = [
    {
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
        title: "C# / .NET",
        description: "Développement d'applications back-end robustes et performantes."
    },
    {
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg',
        title: "Laravel",
        description: "Conception d'architectures MVC élégantes."
    },
    {
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
        title: "SQL & Bases de données",
        description: "Modélisation de données et administration."
    },
    {
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
        title: "Docker",
        description: "Conteneurisation d'applications."
    },
    {
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
        title: "Linux",
        description: "Gestion d'environnement serveur, scripting Bash et administration système."
    },
    {
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
        title: "GitHub & Git",
        description: "Gestion de version, collaboration en équipe."
    }
];

// Interactive Card Component
const FeatureCard = ({ feature }) => {
    const cardRef = useRef(null);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const card = cardRef.current;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    };

    return (
        <div
            className="feature-card"
            ref={cardRef}
            onMouseMove={handleMouseMove}
        >
            <div className="card-border-gradient"></div>
            <div className="card-content">
                <div className="feature-icon-wrapper">
                    <img src={feature.logo} alt={feature.title} className="feature-icon" />
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
            </div>
        </div>
    );
};

const FeaturesGrid = () => {
    return (
        <section id="competences" className="section features-section">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title">Mes Domaines d'Expertise</h2>
                    <p className="section-subtitle">
                        Une approche technique complète pour transformer vos idées en produits numériques performants.
                    </p>
                </div>

                <div className="features-grid">
                    {services.map((feature, idx) => (
                        <FeatureCard key={idx} feature={feature} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesGrid;
