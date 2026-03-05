import React from 'react';
import { ArrowLeft, Calendar, Users, Code, CheckCircle } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './ProjectDetailPage.css';

const ErpDesktopDetail = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // Déterminer d'où l'utilisateur vient
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
                        Application <span className="text-accent">Bureau ERP</span>
                    </h1>
                    <p className="project-detail-subtitle">
                        Application desktop C# pour l'administration et la gestion du système ERP Atlantis Montaza.
                    </p>
                </div>

                {/* Image principale */}
                <div className="project-hero-image fade-in-up" style={{ animationDelay: '0.1s' }}>
                    <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600" alt="ERP Desktop Dashboard" />
                </div>

                {/* Vue d'ensemble */}
                <section className="project-section fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <h2 className="section-title">Vue d'ensemble</h2>
                    <p className="section-text">
                        Cette application de bureau a été conçue pour administrer efficacement un système ERP.
                        Elle sert d'interface d'administration avancée pour les gérants, permettant de centraliser la base de données, la gestion des stocks, la facturation
                        et la gestion des ressources humaines de manière fluide et sécurisée.
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
                            <p className="info-value">Projet individuel</p>
                        </div>
                    </div>
                    <div className="info-card">
                        <Code className="info-icon" size={24} />
                        <div className="info-content">
                            <h3 className="info-title">Technologies</h3>
                            <p className="info-value">C#, WPF, PostgreSQL</p>
                        </div>
                    </div>
                </div>

                {/* Stack Technique */}
                <section className="project-section fade-in-up" style={{ animationDelay: '0.4s' }}>
                    <h2 className="section-title">Stack Technique</h2>
                    <div className="tech-stack-grid" style={{ '--stack-cols': 3 }}>
                        <div className="tech-stack-item">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" alt="C#" />
                            <h4>C# & .NET</h4>
                            <p>Langage orienté objet robuste et environnement d'exécution.</p>
                        </div>
                        <div className="tech-stack-item">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg" alt="WPF" />
                            <h4>WPF</h4>
                            <p>Framework pour la création d'interfaces utilisateur Windows adaptées aux logiciels de gestion.</p>
                        </div>
                        <div className="tech-stack-item">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" />
                            <h4>PostgreSQL</h4>
                            <p>Base de données relationnelle partagée avec la version web de l'ERP.</p>
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
                                <h4>Gestion des utilisateurs</h4>
                                <p>Gestion des utilisateurs ainsi que de l'ensemble des rôles et permissions données à chacun.</p>
                            </div>
                        </div>
                        <div className="feature-item">
                            <CheckCircle className="feature-icon" size={20} />
                            <div className="feature-content">
                                <h4>Information de l'entreprise</h4>
                                <p>Gestion des informations de l'entreprise.</p>
                            </div>
                        </div>
                        <div className="feature-item">
                            <CheckCircle className="feature-icon" size={20} />
                            <div className="feature-content">
                                <h4>Gestion des stocks</h4>
                                <p>Gestion des stocks, ajout de nouveau produit, modification de produit, suppression de produit, mise à jour des stocks.</p>
                            </div>
                        </div>
                        <div className="feature-item">
                            <CheckCircle className="feature-icon" size={20} />
                            <div className="feature-content">
                                <h4>Authentification</h4>
                                <p>Système de connexion sécurisé garantissant la confidentialité des données des patients.</p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Objectif du projet */}
                <section className="project-section fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <h2 className="section-title">Objectif du projet</h2>
                    <p className="section-text">
                        Cette application a été conçue dans le cadre de l'épreuve E6 de mon BTS SIO. <br />
                        Le but étant de concevoir une application lourde (C#) en lien avec une application légère, j'ai décidé de le faire en lien avec l'ERP web de mon entreprise. <br />
                        Cela m'a permis d'affiner mes compétences en développement d'applications de bureau et en gestion de bases de données.
                    </p>
                </section>

                {/* Link deleted for now since the old link was for a medical cabinet 
                <section className="project-section fade-in-up" style={{ animationDelay: '0.6s' }}>
                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                        <a href="#" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                            <Code size={20} style={{ marginRight: '8px' }} />
                            Code source complet
                        </a>
                    </div>
                </section>
                */}

            </main>

            <Footer />
        </div>
    );
};

export default ErpDesktopDetail;
