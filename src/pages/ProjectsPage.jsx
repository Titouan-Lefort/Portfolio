import React from 'react';
import { ArrowLeft, Github, ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './ProjectsPage.css';

const projects = [
    {
        id: 1,
        title: "Atlantis Montaza - ERP",
        description: "Système de gestion complet pour une entreprise de logistique, incluant suivi des stocks, facturation et RH.",
        tags: ["Laravel", "Vue.js", "MySQL", "Docker"],
        image: "/assets/hero-dashboard.png",
        github: null, // Pas de lien GitHub pour ce projet
        demo: "/projects/montaza"
    },
    {
        id: 2,
        title: "Application Bureau de Gestion Web",
        description: "Application de bureau pour la gestion complète d'un site web : administration de contenu, suivi des utilisateurs, gestion des médias et tableau de bord analytique.",
        tags: ["C#", ".NET", "WPF", "PostgreSQL"],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600",
        github: null,
        demo: null
    },
    {
        id: 3,
        title: "Gestion Cabinet Médical",
        description: "Application web de gestion complète pour un cabinet médical : gestion des patients, rendez-vous, dossiers médicaux et suivi des consultations.",
        tags: ["Laravel", "PHP", "MySQL", "Bootstrap"],
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1600",
        github: "https://github.com/Titouan-Lefort/Gestion-cabinet-medical",
        demo: "https://github.com/Titouan-Lefort/Gestion-cabinet-medical"
    },
    {
        id: 4,
        title: "E-Commerce Mobile App",
        description: "Application mobile cross-platform pour une marque de vêtements urbains, avec paiement Stripe intégré.",
        tags: ["React Native", "Firebase", "Redux"],
        image: "https://images.unsplash.com/photo-1512428559087-560fa0db7f59?auto=format&fit=crop&q=80&w=1600",
        github: "#",
        demo: "#"
    },
    {
        id: 5,
        title: "Finance Dashboard",
        description: "Tableau de bord financier temps réel pour traders, avec graphiques interactifs et alertes personnalisées.",
        tags: ["Next.js", "TypeScript", "D3.js"],
        image: "https://images.unsplash.com/photo-1611974765215-fadbf4c375d8?auto=format&fit=crop&q=80&w=1600",
        github: "#",
        demo: "#"
    },
    {
        id: 6,
        title: "Task Master Pro",
        description: "Outil de gestion de projet collaboratif type Trello, avec fonctionnalités de chat et partage de fichiers.",
        tags: ["Vue 3", "Socket.io", "PostgreSQL"],
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1600",
        github: "#",
        demo: "#"
    },
    {
        id: 7,
        title: "EcoTrack",
        description: "Application web pour calculer et réduire son empreinte carbone, avec gamification et défis sociaux.",
        tags: ["React", "Tailwind", "Node.js"],
        image: "https://images.unsplash.com/photo-1542601906990-b4d3fb7d5fa5?auto=format&fit=crop&q=80&w=1600",
        github: "#",
        demo: "#"
    },
    {
        id: 8,
        title: "Site Éducatif pour Enfants",
        description: "Plateforme éducative interactive pour enfants avec jeux pédagogiques, quiz, animations ludiques et suivi de progression.",
        tags: ["React", "JavaScript", "HTML/CSS", "API"],
        image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=1600",
        github: null,
        demo: null
    }
];

const ProjectsPage = () => {
    // Scroll to top on mount
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="projects-page">
            <Navbar />

            <main className="projects-container container">
                <div className="projects-header fade-in-up">
                    <Link to="/" className="back-link">
                        <ArrowLeft size={20} /> Retour à l'accueil
                    </Link>
                    <h1 className="projects-title">Mes <span className="text-accent">Réalisations</span></h1>
                    <p className="projects-subtitle">
                        Une sélection de mes travaux les plus récents, démontrant mon expertise en développement web et mobile.
                    </p>
                </div>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className="project-card fade-in-up"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="project-image-container">
                                <img src={project.image} alt={project.title} className="project-image" />
                                <div className="project-overlay">
                                    <div className="project-links">
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                className="icon-btn"
                                                aria-label="GitHub"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <Github size={24} />
                                            </a>
                                        )}
                                        <a
                                            href={project.demo}
                                            className="icon-btn"
                                            aria-label="Live Demo"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <ExternalLink size={24} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="project-content">
                                <div className="project-tags">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="tag">{tag}</span>
                                    ))}
                                </div>
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                <a
                                    href={project.demo}
                                    className="project-link-text"
                                >
                                    Voir le projet <ArrowRight size={16} />
                                </a>
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
