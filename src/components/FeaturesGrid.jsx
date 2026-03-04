import React, { useRef } from 'react';
import './FeaturesGrid.css';

const services = [
    {
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
        title: "C# / .NET",
        description: "Applications back-end robustes et performantes."
    },
    {
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg',
        title: "Laravel",
        description: "Architectures MVC et APIs RESTful."
    },
    {
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
        title: "SQL & BDD",
        description: "Modélisation de données, requêtes complexes, administration."
    },
    {
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
        title: "Docker",
        description: "Conteneurisation et déploiement d'applications."
    },
    {
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
        title: "Linux",
        description: "Administration système, scripting Bash, gestion serveur."
    },
    {
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
        title: "Git & GitHub",
        description: "Versioning, collaboration, workflows CI/CD."
    }
];

const FeatureCard = ({ feature, index }) => {
    return (
        <div className="feature-card">
            <div className="card-content">
                <span className="feature-line-number">{String(index + 1).padStart(2, '0')}</span>
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
                {/* Git-style activity bar */}
                <div className="dev-activity-bar">
                    <div className="activity-dot active"></div>
                    <span className="activity-text">6 modules chargés</span>
                    <span className="activity-separator">·</span>
                    <span className="activity-text">stack stable</span>
                    <span className="activity-separator">·</span>
                    <span className="activity-branch">main</span>
                </div>

                <div className="section-header">
                    <span className="section-label">// compétences</span>
                    <h2 className="section-title">Stack technique</h2>
                </div>

                <div className="features-grid">
                    {services.map((feature, idx) => (
                        <FeatureCard key={idx} feature={feature} index={idx} />
                    ))}
                </div>

                <div className="dev-footer-line">
                    <span className="line-prompt">$</span>
                    <span className="line-command">npm run build</span>
                    <span className="line-result">✓ compiled successfully</span>
                </div>
            </div>
        </section>
    );
};

export default FeaturesGrid;
