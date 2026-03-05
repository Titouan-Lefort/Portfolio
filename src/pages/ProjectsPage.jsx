import React from 'react';
import { ArrowLeft, Github, ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './ProjectsPage.css';

const projects = [
    {
        id: 1,
        title: "Atlantis Montaza — ERP",
        description: "Système de gestion complet pour une entreprise de logistique : suivi des stocks, gestion des employés, facturation.",
        tags: ["Laravel", "JavaScript", "PostgreSQL", "Linux"],
        image: "/assets/hero-dashboard.png",
        github: null,
        demo: "/projects/montaza"
    },
    {
        id: 2,
        title: "Application Bureau de Gestion de cabinet médical",
        description: "Application desktop pour la gestion d'un cabinet médical : patients, médicaments, ordonnances.",
        tags: ["C#", ".NET", "WPF", "MariaDB"],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600",
        github: "https://github.com/Jules-pecquereau/MedicamentMihnC-",
        demo: "/projects/medical-cabinet"
    },
    {
        id: 3,
        title: "Application web de Gestion de Cabinet Médical",
        description: "Application web de gestion pour un cabinet médical : patients, rendez-vous, dossiers médicaux, ordonnances.",
        tags: ["Laravel", "PHP", "PostgreSQL"],
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1600",
        github: "https://github.com/Titouan-Lefort/Gestion-cabinet-medical",
        demo: "/projects/medical-cabinet-web"
    },
    {
        id: 4,
        title: "Site Éducatif pour Enfants",
        description: "Plateforme éducative interactive avec jeux pédagogiques, quiz, animations et suivi de progression.",
        tags: ["React", "JavaScript", "HTML/CSS", "API"],
        image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=1600",
        github: null,
        demo: null
    },
];

const ProjectsPage = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="projects-page">
            <Navbar />

            <main className="projects-container container">
                <div className="projects-header fade-in-up">
                    <Link to="/" className="back-link">
                        <ArrowLeft size={16} /> retour
                    </Link>
                    <span className="section-label">// projets</span>
                    <h1 className="projects-title">Mes réalisations</h1>
                    <p className="projects-subtitle">
                        Sélection de mes projets récents en développement web et application.
                    </p>
                </div>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className="project-card fade-in-up"
                            style={{ animationDelay: `${index * 0.08}s` }}
                        >
                            {/* Window chrome bar */}
                            <div className="card-chrome">
                                <span className="chrome-dot red"></span>
                                <span className="chrome-dot yellow"></span>
                                <span className="chrome-dot green"></span>
                                <span className="chrome-filename">projet-{String(index + 1).padStart(2, '0')}.tsx</span>
                                <span className="chrome-line-count">{12 + index * 7} lignes</span>
                            </div>

                            <div className="project-image-container">
                                <img src={project.image} alt={project.title} className="project-image" />
                                <div className="project-overlay">
                                    <div className="project-links">
                                        {project.github && (
                                            <a href={project.github} className="icon-btn" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                                                <Github size={20} />
                                            </a>
                                        )}
                                        {project.demo && (
                                            project.demo.startsWith('/') ? (
                                                <Link to={project.demo} className="icon-btn" aria-label="Live Demo">
                                                    <ExternalLink size={20} />
                                                </Link>
                                            ) : (
                                                <a href={project.demo} className="icon-btn" aria-label="Live Demo" rel="noopener noreferrer">
                                                    <ExternalLink size={20} />
                                                </a>
                                            )
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="project-content">
                                {/* Line gutter */}
                                <div className="code-gutter">
                                    {Array.from({ length: 5 }, (_, i) => (
                                        <span key={i} className="gutter-line">{i + 1}</span>
                                    ))}
                                </div>
                                <div className="project-content-inner">
                                    <div className="project-tags">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="tag">{tag}</span>
                                        ))}
                                    </div>
                                    <h3 className="project-title">{project.title}</h3>
                                    <p className="project-description">{project.description}</p>
                                    {project.demo && (
                                        project.demo.startsWith('/') ? (
                                            <Link to={project.demo} className="project-link-text">
                                                Voir le projet <ArrowRight size={14} />
                                            </Link>
                                        ) : (
                                            <a href={project.demo} className="project-link-text" target="_blank" rel="noopener noreferrer">
                                                Voir le projet <ArrowRight size={14} />
                                            </a>
                                        )
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default ProjectsPage;
