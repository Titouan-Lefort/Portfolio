import React from 'react';
import { ArrowLeft, Calendar, Users, Code, CheckCircle } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './ProjectDetailPage.css';

const KidsEduSiteDetail = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const fromHomePage = location.state?.from === 'home';
    const backPath = fromHomePage ? '/' : '/projects';
    const backText = fromHomePage ? 'Retour à l\'accueil' : 'Retour aux projets';

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="project-detail-page">
            <Navbar />

            <main className="project-detail-container container">
                <div className="project-detail-header fade-in-up">
                    <Link to={backPath} className="back-link">
                        <ArrowLeft size={20} /> {backText}
                    </Link>
                    <h1 className="project-detail-title">
                        Site Éducatif pour <span className="text-accent">Enfants</span>
                    </h1>
                    <p className="project-detail-subtitle">
                        Plateforme éducative interactive avec jeux pédagogiques, quiz, animations et suivi de progression.
                    </p>
                </div>

                {/* Image principale dans une télévision */}
                <div className="project-hero-image fade-in-up" style={{ animationDelay: '0.1s' }}>
                    <div className="tv-frame">
                        <div className="tv-antenna"></div>
                        <div className="tv-top"></div>
                        <div className="tv-screen-container">
                            <div className="tv-screen">
                                <img src="/assets/kids-math-app.png" alt="Site Éducatif pour Enfants - Super Matos" />
                            </div>
                            <div className="tv-controls">
                                <div className="tv-knob"></div>
                                <div className="tv-knob"></div>
                                <div className="tv-speaker">
                                    <span></span><span></span><span></span><span></span>
                                </div>
                            </div>
                        </div>
                        <div className="tv-bottom"></div>
                    </div>
                </div>

                {/* Vue d'ensemble */}
                <section className="project-section fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <h2 className="section-title">Vue d'ensemble</h2>
                    <p className="section-text">
                        Ce projet est une plateforme web interactive conçue spécifiquement pour les enfants.
                        Son but est d'allier apprentissage et divertissement à travers des mini-jeux, des quiz
                        et un environnement visuellement stimulant et coloré. Elle est spécialisé dans l'apprentissage des mathématiques.
                    </p>
                </section>

                {/* Informations du projet */}
                <div className="project-info-grid fade-in-up" style={{ animationDelay: '0.3s' }}>
                    <div className="info-card">
                        <Calendar className="info-icon" size={24} />
                        <div className="info-content">
                            <h3 className="info-title">Durée</h3>
                            <p className="info-value">Projet académique</p>
                        </div>
                    </div>
                    <div className="info-card">
                        <Users className="info-icon" size={24} />
                        <div className="info-content">
                            <h3 className="info-title">Équipe</h3>
                            <p className="info-value">2 développeurs</p>
                        </div>
                    </div>
                    <div className="info-card">
                        <Code className="info-icon" size={24} />
                        <div className="info-content">
                            <h3 className="info-title">Technologies</h3>
                            <p className="info-value">PHP/HTML/CSS, JavaScript, MySQL </p>
                        </div>
                    </div>
                </div>

                {/* Stack Technique */}
                <section className="project-section fade-in-up" style={{ animationDelay: '0.4s' }}>
                    <h2 className="section-title">Stack Technique</h2>
                    <div className="tech-stack-grid" style={{ '--stack-cols': 4 }}>
                        <div className="tech-stack-item">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="PHP" />
                            <h4>PHP</h4>
                            <p>Langage côté serveur pour la gestion de la logique backend.</p>
                        </div>
                        <div className="tech-stack-item">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML/CSS" />
                            <h4>HTML/CSS</h4>
                            <p>Structure et style adaptés aux enfants avec des interfaces immersives.</p>
                        </div>
                        <div className="tech-stack-item">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />
                            <h4>JavaScript</h4>
                            <p>Langage utilisé pour l'interactivité des jeux et quiz.</p>
                        </div>
                        <div className="tech-stack-item">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" />
                            <h4>MySQL</h4>
                            <p>Base de données pour stocker la progression et les scores.</p>
                        </div>
                    </div>
                </section>

                {/* Fonctionnalités principales */}
                <section className="project-section fade-in-up" style={{ animationDelay: '0.5s' }}>
                    <h2 className="section-title">Fonctionnalités Principales</h2>
                    <div className="features-list">
                        <div className="feature-item">
                            <CheckCircle className="feature-icon" size={20} />
                            <div className="feature-content">
                                <h4>Jeux Éducatifs</h4>
                                <p>Mini-jeux basés sur de l'aléatoire pour que ça ne soit jamais répétitif.</p>
                            </div>
                        </div>
                        <div className="feature-item">
                            <CheckCircle className="feature-icon" size={20} />
                            <div className="feature-content">
                                <h4>Statistiques</h4>
                                <p>Système de statistiques pour suivre la progression de l'enfant.</p>
                            </div>
                        </div>
                        <div className="feature-item">
                            <CheckCircle className="feature-icon" size={20} />
                            <div className="feature-content">
                                <h4>Interface Adaptée</h4>
                                <p>Navigation simplifiée, icônes larges et charte graphique colorée pour les plus jeunes.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Objectif */}
                <section className="project-section fade-in-up" style={{ animationDelay: '0.6s' }}>
                    <h2 className="section-title">Objectif du projet</h2>
                    <p className="section-text">
                        Le but de cette application était de se mettre en adéquation avec le language PHP et l'utilisation des bases de données. <br />
                        Mais également d'apprendre à utiliser les bases de données et à les relier avec le language PHP.<br />
                        Il s'agissait du premier projet effecuté en équipe, ce qui à permis d'apprendre à travailler à plusieurs et à gérer un projet en collaboration.
                    </p>
                </section>

                {/* Liens du projet */}
                <section className="project-section fade-in-up" style={{ animationDelay: '0.7s' }}>
                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                        {/* Placeholder for future links 
                        <a href="#" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                            <Code size={20} style={{ marginRight: '8px' }} />
                            Code source complet
                        </a>
                        */}
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default KidsEduSiteDetail;
