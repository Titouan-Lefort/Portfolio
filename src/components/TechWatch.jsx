import React from 'react';
import { ExternalLink, BookOpen } from 'lucide-react';
import './TechWatch.css';

const watchItems = [
    {
        id: 1,
        tag: "Assistants & IA",
        title: "Intelligence Artificielle",
        description: "Utilisation quotidienne d'assistants IA (ChatGPT, Copilot, etc.) pour explorer rapidement de nouveaux concepts, analyser des architectures et accélérer l'apprentissage.",
        date: "Quotidien",
        link: "#"
    },
    {
        id: 2,
        tag: "Réseau Pro",
        title: "LinkedIn",
        description: "Suivi des experts de l'industrie, des retours d'expérience en entreprise et des actualités de l'écosystème tech pour anticiper les tendances du marché.",
        date: "Régulier",
        link: "https://www.linkedin.com/"
    },
    {
        id: 3,
        tag: "Vidéos",
        title: "YouTube",
        description: "Visionnage de conférences techniques, de tutoriels d'architecture logicielle et de chaînes spécialisées en ingénierie pour approfondir des sujets complexes.",
        date: "Hebdomadaire",
        link: "https://www.youtube.com/"
    },
    {
        id: 4,
        tag: "Agrégateur",
        title: "Flux RSS",
        description: "Centralisation et suivi actif des blogs d'ingénierie, des notes de version (release notes) et des médias spécialisés en développement via des lecteurs RSS.",
        date: "Quotidien",
        link: "#"
    }
];

const TechWatch = () => {
    return (
        <section id="veille" className="section techwatch-section">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">// veille technologique</span>
                    <h2 className="section-title">Outils de veille</h2>
                    <p className="section-subtitle">
                        Les outils et plateformes que j'utilise pour me tenir informé des évolutions de l'écosystème tech.
                    </p>
                </div>

                <div className="techwatch-grid">
                    {watchItems.map((item) => (
                        <article key={item.id} className="tech-card">
                            <div className="tech-card-header">
                                <span className="tech-tag">{item.tag}</span>
                                <span className="tech-date">{item.date}</span>
                            </div>
                            <h3 className="tech-title">{item.title}</h3>
                            <p className="tech-description">{item.description}</p>
                            {item.link !== "#" && (
                                <a href={item.link} target="_blank" rel="noopener noreferrer" className="tech-link">
                                    <ExternalLink size={16} />
                                    Visiter le site
                                </a>
                            )}
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechWatch;
