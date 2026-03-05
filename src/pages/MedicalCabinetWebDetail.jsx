import React from 'react';
import { ArrowLeft, Calendar, Users, Code, CheckCircle } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './ProjectDetailPage.css';

const MedicalCabinetWebDetail = () => {
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
                        Application web de <span className="text-accent">Gestion de Cabinet Médical</span>
                    </h1>
                    <p className="project-detail-subtitle">
                        Application web de gestion pour un cabinet médical : patients, rendez-vous, dossiers médicaux, ordonnances.
                    </p>
                </div>

                {/* Image principale */}
                <div className="project-hero-image fade-in-up" style={{ animationDelay: '0.1s' }}>
                    <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1600" alt="Cabinet Médical Web" />
                </div>

                {/* Vue d'ensemble */}
                <section className="project-section fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <h2 className="section-title">Vue d'ensemble</h2>
                    <p className="section-text">
                        Ce projet est une solution web complète pour faciliter le quotidien d'un cabinet médical.
                        Il permet au personnel de santé de centraliser la gestion des rendez-vous, d'accéder
                        rapidement aux dossiers partagés des patients et de dématérialiser la création d'ordonnances.
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
                            <p className="info-value">Laravel, PHP, PostgreSQL</p>
                        </div>
                    </div>
                </div>

                {/* Stack Technique */}
                <section className="project-section fade-in-up" style={{ animationDelay: '0.4s' }}>
                    <h2 className="section-title">Stack Technique</h2>
                    <div className="tech-stack-grid" style={{ '--stack-cols': 3 }}>
                        <div className="tech-stack-item">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" alt="Laravel" />
                            <h4>Laravel</h4>
                            <p>Framework PHP robuste pour le backend de l'application.</p>
                        </div>
                        <div className="tech-stack-item">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="PHP" />
                            <h4>PHP</h4>
                            <p>Langage de script généraliste côté serveur.</p>
                        </div>
                        <div className="tech-stack-item">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" />
                            <h4>PostgreSQL</h4>
                            <p>Gestion mature de la base de données relationnelle.</p>
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
                                <h4>Dossiers Médicaux</h4>
                                <p>Gestion et historique complet des patients accessibles depuis n'importe quel navigateur.</p>
                            </div>
                        </div>
                        <div className="feature-item">
                            <CheckCircle className="feature-icon" size={20} />
                            <div className="feature-content">
                                <h4>Rendez-vous</h4>
                                <p>Calendrier interactif pour la planification et le suivi des visites.</p>
                            </div>
                        </div>
                        <div className="feature-item">
                            <CheckCircle className="feature-icon" size={20} />
                            <div className="feature-content">
                                <h4>Prescriptions</h4>
                                <p>Création rapide d'ordonnances avec accès direct au registre des médicaments.</p>
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
                <section className="project-section fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <h2 className="section-title">Objectif du projet</h2>
                    <p className="section-text">
                        Cette application web à été conçue dans le cadre d'un projet académique. <br />
                        Le but était de finaliser nos connaissance en Laravel et d'apprendre à utiliser le PostgreSQL en créant une application complète. <br />
                    </p>
                </section>

                {/* Liens du projet */}
                <section className="project-section fade-in-up" style={{ animationDelay: '0.6s' }}>
                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                        <a href="https://github.com/Titouan-Lefort/Gestion-cabinet-medical" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                            <Code size={20} style={{ marginRight: '8px' }} />
                            Code source complet
                        </a>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default MedicalCabinetWebDetail;
