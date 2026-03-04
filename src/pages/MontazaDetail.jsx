import React from 'react';
import { ArrowLeft, Calendar, Users, Code, CheckCircle } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './ProjectDetailPage.css';

const MontazaDetail = () => {
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
                        Atlantis <span className="text-accent">Montaza</span> - ERP
                    </h1>
                    <p className="project-detail-subtitle">
                        Système de gestion d'entreprise complet pour optimiser les opérations logistiques
                    </p>
                </div>

                {/* Image principale */}
                <div className="project-hero-image fade-in-up" style={{ animationDelay: '0.1s' }}>
                    <img src="/assets/hero-dashboard.png" alt="Atlantis Montaza Dashboard" />
                </div>

                {/* Vue d'ensemble */}
                <section className="project-section fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <h2 className="section-title">Vue d'ensemble</h2>
                    <p className="section-text">
                        Atlantis Montaza est un système ERP (Enterprise Resource Planning) conçu pour moderniser et automatiser
                        la gestion d'une entreprise de logistique. Ce projet ambitieux intègre plusieurs modules essentiels
                        pour gérer efficacement les stocks, la facturation, les ressources humaines et bien plus encore.
                    </p>
                </section>

                {/* Informations du projet */}
                <div className="project-info-grid fade-in-up" style={{ animationDelay: '0.3s' }}>
                    <div className="info-card">
                        <Calendar className="info-icon" size={24} />
                        <div className="info-content">
                            <h3 className="info-title">Durée</h3>
                            <p className="info-value">6 mois (2024)</p>
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
                            <p className="info-value">Laravel, Vue.js, MySQL</p>
                        </div>
                    </div>
                </div>

                {/* Technologies utilisées */}
                <section className="project-section fade-in-up" style={{ animationDelay: '0.4s' }}>
                    <h2 className="section-title">Stack Technique</h2>
                    <div className="tech-stack-grid">
                        <div className="tech-stack-item">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" alt="Laravel" />
                            <h4>Laravel</h4>
                            <p>Framework PHP pour le backend et l'architecture MVC</p>
                        </div>
                        <div className="tech-stack-item">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" alt="Vue.js" />
                            <h4>Vue.js</h4>
                            <p>Framework JavaScript pour une interface réactive</p>
                        </div>
                        <div className="tech-stack-item">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" />
                            <h4>MySQL</h4>
                            <p>Base de données relationnelle robuste</p>
                        </div>
                        <div className="tech-stack-item">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" />
                            <h4>Docker</h4>
                            <p>Conteneurisation pour déploiement simplifié</p>
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
                                <h4>Gestion des Stocks</h4>
                                <p>Suivi en temps réel des inventaires, alertes de réapprovisionnement automatiques et historique des mouvements</p>
                            </div>
                        </div>
                        <div className="feature-item">
                            <CheckCircle className="feature-icon" size={20} />
                            <div className="feature-content">
                                <h4>Module de Facturation</h4>
                                <p>Création de devis, facturation automatisée, suivi des paiements et génération de rapports financiers</p>
                            </div>
                        </div>
                        <div className="feature-item">
                            <CheckCircle className="feature-icon" size={20} />
                            <div className="feature-content">
                                <h4>Ressources Humaines</h4>
                                <p>Gestion des employés, planning des équipes, suivi des congés et gestion de la paie</p>
                            </div>
                        </div>
                        <div className="feature-item">
                            <CheckCircle className="feature-icon" size={20} />
                            <div className="feature-content">
                                <h4>Tableaux de Bord</h4>
                                <p>Visualisation des KPIs en temps réel, graphiques interactifs et rapports personnalisables</p>
                            </div>
                        </div>
                        <div className="feature-item">
                            <CheckCircle className="feature-icon" size={20} />
                            <div className="feature-content">
                                <h4>API RESTful</h4>
                                <p>Architecture API complète pour intégrations tierces et applications mobiles futures</p>
                            </div>
                        </div>
                        <div className="feature-item">
                            <CheckCircle className="feature-icon" size={20} />
                            <div className="feature-content">
                                <h4>Système de Rôles</h4>
                                <p>Gestion fine des permissions utilisateurs avec différents niveaux d'accès</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Défis et Solutions */}
                <section className="project-section fade-in-up" style={{ animationDelay: '0.6s' }}>
                    <h2 className="section-title">Défis & Solutions</h2>
                    <div className="challenges-grid">
                        <div className="challenge-card">
                            <h4>Défi : Performance</h4>
                            <p>
                                <strong>Problème :</strong> Le système devait gérer des milliers de transactions simultanées sans ralentissement.
                            </p>
                            <p>
                                <strong>Solution :</strong> Mise en place de cache Redis, optimisation des requêtes SQL avec des index appropriés,
                                et utilisation de queues pour les tâches lourdes.
                            </p>
                        </div>
                        <div className="challenge-card">
                            <h4>Défi : Sécurité</h4>
                            <p>
                                <strong>Problème :</strong> Protection des données sensibles (finances, RH) contre les accès non autorisés.
                            </p>
                            <p>
                                <strong>Solution :</strong> Authentification multi-facteurs, chiffrement des données sensibles, audit logs complets
                                et validation stricte des entrées utilisateur.
                            </p>
                        </div>
                        <div className="challenge-card">
                            <h4>Défi : Scalabilité</h4>
                            <p>
                                <strong>Problème :</strong> L'application devait pouvoir évoluer avec l'entreprise.
                            </p>
                            <p>
                                <strong>Solution :</strong> Architecture modulaire avec Docker, séparation des services, et conception
                                permettant l'ajout facile de nouveaux modules.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Résultats */}
                <section className="project-section fade-in-up" style={{ animationDelay: '0.7s' }}>
                    <h2 className="section-title">Résultats & Impact</h2>
                    <div className="results-grid">
                        <div className="result-card">
                            <div className="result-number">40%</div>
                            <p className="result-text">Gain de temps sur les tâches administratives</p>
                        </div>
                        <div className="result-card">
                            <div className="result-number">100%</div>
                            <p className="result-text">Traçabilité des opérations logistiques</p>
                        </div>
                        <div className="result-card">
                            <div className="result-number">30%</div>
                            <p className="result-text">Réduction des erreurs de facturation</p>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default MontazaDetail;
