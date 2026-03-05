import React from 'react';
import { ArrowLeft, Calendar, Users, Code, CheckCircle, Server } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './ProjectDetailPage.css';

const NetworkInfraDetail = () => {
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
                        Mise en place d'une <span className="text-accent">Infrastructure Réseau</span>
                    </h1>
                    <p className="project-detail-subtitle">
                        Conception, déploiement et sécurisation d'une infrastructure réseau complète (VLAN, Routage, Services d'annuaire, Pare-feu).
                    </p>
                </div>

                {/* Image principale */}
                <div className="project-hero-image fade-in-up" style={{ animationDelay: '0.1s' }}>
                    <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1600" alt="Infrastructure Réseau" />
                </div>

                {/* Vue d'ensemble */}
                <section className="project-section fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <h2 className="section-title">Vue d'ensemble</h2>
                    <p className="section-text">
                        Ce projet d'infrastructure s'est déroulé entièrement sur un environnement virtualisé (Machines Virtuelles). L'objectif était de créer un système cloisonné et sécurisé permettant d'héberger du code, d'assurer des sauvegardes automatiques de bases de données et de garantir des connexions parfaitement sécurisées entre les différents éléments.
                    </p>
                </section>

                {/* Informations du projet */}
                <div className="project-info-grid fade-in-up" style={{ animationDelay: '0.3s' }}>
                    <div className="info-card">
                        <Calendar className="info-icon" size={24} />
                        <div className="info-content">
                            <h3 className="info-title">Type</h3>
                            <p className="info-value">Projet académique / infrastructure</p>
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
                        <Server className="info-icon" size={24} />
                        <div className="info-content">
                            <h3 className="info-title">Technologies</h3>
                            <p className="info-value">Linux, Virtualisation, Git, SSH</p>
                        </div>
                    </div>
                </div>

                {/* Stack Technique */}
                <section className="project-section fade-in-up" style={{ animationDelay: '0.4s' }}>
                    <h2 className="section-title">Stack Technique et Matériel</h2>
                    <div className="tech-stack-grid" style={{ '--stack-cols': 3 }}>
                        <div className="tech-stack-item">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" alt="Linux" />
                            <h4>Environnement Linux</h4>
                            <p>Déploiement de multiples machines virtuelles sous Linux pour séparer les différents services.</p>
                        </div>
                        <div className="tech-stack-item">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" />
                            <h4>Hébergement Git</h4>
                            <p>Stockage et versioning du code source gérés de façon centralisée sur une machine dédiée.</p>
                        </div>
                        <div className="tech-stack-item">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ssh/ssh-original.svg" alt="SSH" />
                            <h4>Protocole SSH</h4>
                            <p>Gestion sécurisée des configurations, de l'administration et des transferts de données entre les machines.</p>
                        </div>
                    </div>
                </section>

                {/* Fonctionnalités principales */}
                <section className="project-section fade-in-up" style={{ animationDelay: '0.5s' }}>
                    <h2 className="section-title">Points Clés de l'Infrastructure</h2>
                    <div className="features-list">
                        <div className="feature-item">
                            <CheckCircle className="feature-icon" size={20} />
                            <div className="feature-content">
                                <h4>Virtualisation Complète</h4>
                                <p>Toute l'infrastructure reposait uniquement sur un réseau de machines virtuelles interconnectées, simulant un environnement professionnel.</p>
                            </div>
                        </div>
                        <div className="feature-item">
                            <CheckCircle className="feature-icon" size={20} />
                            <div className="feature-content">
                                <h4>Sauvegarde Automatisée</h4>
                                <p>Mise en place de scripts et de tâches planifiées (cron) effectuant une sauvegarde d'une base de données et l'exportant vers une seconde VM allouée uniquement au stockage.</p>
                            </div>
                        </div>
                        <div className="feature-item">
                            <CheckCircle className="feature-icon" size={20} />
                            <div className="feature-content">
                                <h4>Stockage de Code Source</h4>
                                <p>Déploiement d'un repository Git sur une machine dédiée pour assurer le travail collaboratif de façon interne et sécurisée.</p>
                            </div>
                        </div>
                        <div className="feature-item">
                            <CheckCircle className="feature-icon" size={20} />
                            <div className="feature-content">
                                <h4>Connexions Sécurisées</h4>
                                <p>Authentification robuste à clés SSH entre l'ensemble des administrateurs et des serveurs/VM éliminant l'échange de mots de passe en clair.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Objectif du projet */}
                <section className="project-section fade-in-up" style={{ animationDelay: '0.6s' }}>
                    <h2 className="section-title">Objectif du projet</h2>
                    <p className="section-text">
                        Ce projet démontre ma capacité à gérer non seulement l'aspect "code" (logiciel), mais surtout de comprendre et mettre en œuvre les fondations qui le sous-tendent au quotidien : des environnements virtualisés, des sauvegardes fiables, l'utilisation de Git pour le dépôt, et le maintien perpétuel de la sécurité réseau en utilisant SSH.
                    </p>
                </section>

                {/* Liens du projet */}
                <section className="project-section fade-in-up" style={{ animationDelay: '0.7s' }}>
                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                        {/* Placeholder for future specific links related to packet tracer or report
                        <a href="#" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                            <Code size={20} style={{ marginRight: '8px' }} />
                            Voir le schéma (Packet Tracer)
                        </a>
                        */}
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
};

export default NetworkInfraDetail;
