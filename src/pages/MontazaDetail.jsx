import React, { useState } from 'react';
import { ArrowLeft, Calendar, Users, Code, CheckCircle, FileText, Download, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './ProjectDetailPage.css';

const base = import.meta.env.BASE_URL;

const carouselImages = [
    { src: `${base}assets/erp-web-accueil.png`, alt: 'Accueil — Navigation principale' },
    { src: `${base}assets/erp-web-dashboard.png`, alt: 'Tableau de bord — Aperçu de l\'activité' },
    { src: `${base}assets/erp-web-affaires.png`, alt: 'Affaires — Suivi des projets en cours' },
    { src: `${base}assets/erp-web-devis.png`, alt: 'Devis — Gestion des propositions commerciales' },
    { src: `${base}assets/erp-web-matieres.png`, alt: 'Matières — Catalogue et gestion des stocks' },
];

const MontazaDetail = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);

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

                {/* Carrousel d'images */}
                <section className="project-section fade-in-up" style={{ animationDelay: '0.1s' }}>
                    <div className="project-carousel">
                        <button className="carousel-btn carousel-btn-prev" onClick={prevSlide} aria-label="Image précédente">
                            <ChevronLeft size={22} />
                        </button>
                        <div className="carousel-viewport">
                            <img
                                src={carouselImages[currentSlide].src}
                                alt={carouselImages[currentSlide].alt}
                                className="carousel-image"
                            />
                            <p className="carousel-caption">{carouselImages[currentSlide].alt}</p>
                        </div>
                        <button className="carousel-btn carousel-btn-next" onClick={nextSlide} aria-label="Image suivante">
                            <ChevronRight size={22} />
                        </button>
                    </div>
                    <div className="carousel-dots">
                        {carouselImages.map((_, index) => (
                            <button
                                key={index}
                                className={`carousel-dot ${index === currentSlide ? 'active' : ''}`}
                                onClick={() => setCurrentSlide(index)}
                                aria-label={`Aller à l'image ${index + 1}`}
                            />
                        ))}
                    </div>
                </section>

                {/* Vue d'ensemble */}
                <section className="project-section fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <h2 className="section-title">Vue d'ensemble</h2>
                    <p className="section-text">
                        L'entreprise de chaudronnerie Atlantis Montaza avait besoin d'un système de gestion pour optimiser ses opérations.
                        J'ai donc été recruté en tant qu'alternant pour continuer le développement développer ce système.
                    </p>
                </section>

                {/* Informations du projet */}
                <div className="project-info-grid fade-in-up" style={{ animationDelay: '0.3s' }}>
                    <div className="info-card">
                        <Calendar className="info-icon" size={24} />
                        <div className="info-content">
                            <h3 className="info-title">Durée</h3>
                            <p className="info-value">1 an (2025-2026)</p>
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
                            <p className="info-value">Laravel, PostgreSQL, JavaScript</p>
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
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" />
                            <h4>PostgreSQL</h4>
                            <p>Base de données relationnelle robuste</p>
                        </div>
                        <div className="tech-stack-item">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />
                            <h4>JavaScript</h4>
                            <p>Langage pour le dynamisme côté client</p>
                        </div>
                        <div className="tech-stack-item">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" alt="Linux" />
                            <h4>Linux</h4>
                            <p>Environnement de développement et déploiement du serveur</p>
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
                                <p>Création de devis et suivi des paiements</p>
                            </div>
                        </div>
                        <div className="feature-item">
                            <CheckCircle className="feature-icon" size={20} />
                            <div className="feature-content">
                                <h4>Ressources Humaines</h4>
                                <p>Gestion des employés, planning des équipes et suivi des congés</p>
                            </div>
                        </div>
                        <div className="feature-item">
                            <CheckCircle className="feature-icon" size={20} />
                            <div className="feature-content">
                                <h4>Tableaux de Bord</h4>
                                <p>Visualisation des commandes et demandes de prix, du materiels, des employés et des devis pour chaque affaire</p>
                            </div>
                        </div>
                        <div className="feature-item">
                            <CheckCircle className="feature-icon" size={20} />
                            <div className="feature-content">
                                <h4>Responsive et adapté</h4>
                                <p>Adapté à tous les écrans et à tout type d'utilisateur</p>
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
                            <h4>Défi : Visibilité</h4>
                            <p>
                                <strong>Problème :</strong> Avoir un visuel rapide sur l'ensemble des éléments de l'entreprise
                            </p>
                            <p>
                                <strong>Solution :</strong> Mise en place de tableaux de bord clair qui offre un accès à toute les informations.
                            </p>
                        </div>
                        <div className="challenge-card">
                            <h4>Défi : Facturation</h4>
                            <p>
                                <strong>Problème :</strong> Pouvoir rapidement faire des devis et les envoyer au client.
                            </p>
                            <p>
                                <strong>Solution :</strong> Mise en place d'un module de facturation qui permet de créer des devis et de les envoyer directement au client depuis l'application.
                            </p>
                        </div>
                        <div className="challenge-card">
                            <h4>Défi : Centralisation</h4>
                            <p>
                                <strong>Problème :</strong> Que les informations soit centralisées en un seul endroit.
                            </p>
                            <p>
                                <strong>Solution :</strong> Mise en place d'un système de base de données centralisée qui permet de stocker toutes les informations de l'entreprise.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Documentation */}
                <section className="project-section fade-in-up" style={{ animationDelay: '0.7s' }}>
                    <h2 className="section-title">Documentation</h2>
                    <p className="section-text" style={{ marginBottom: '1.5rem' }}>
                        Consultez la documentation technique et utilisateur de l'application web ERP.
                    </p>
                    <div className="doc-cards-grid">
                        <div className="doc-card">
                            <div className="doc-card-icon">
                                <FileText size={32} />
                            </div>
                            <div className="doc-card-content">
                                <h4>Documentation Technique</h4>
                                <p>Architecture, base de données, API et détails d'implémentation de l'application web.</p>
                            </div>
                            <div className="doc-card-actions">
                                <a
                                    href={`${import.meta.env.BASE_URL}assets/Documentation Techique application legere.pdf`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="doc-btn doc-btn-outline"
                                >
                                    <ExternalLink size={16} />
                                    <span>Ouvrir en ligne</span>
                                </a>
                                <a
                                    href={`${import.meta.env.BASE_URL}assets/Documentation Techique application legere.pdf`}
                                    download="Documentation Technique application legere.pdf"
                                    className="doc-btn doc-btn-primary"
                                >
                                    <Download size={16} />
                                    <span>Télécharger</span>
                                </a>
                            </div>
                        </div>
                        <div className="doc-card">
                            <div className="doc-card-icon">
                                <FileText size={32} />
                            </div>
                            <div className="doc-card-content">
                                <h4>Documentation Utilisateur</h4>
                                <p>Guide d'utilisation complet : navigation, fonctionnalités et cas d'usage de l'ERP.</p>
                            </div>
                            <div className="doc-card-actions">
                                <a
                                    href={`${import.meta.env.BASE_URL}assets/Documentation Utilisateur application legere.pdf`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="doc-btn doc-btn-outline"
                                >
                                    <ExternalLink size={16} />
                                    <span>Ouvrir en ligne</span>
                                </a>
                                <a
                                    href={`${import.meta.env.BASE_URL}assets/Documentation Utilisateur application legere.pdf`}
                                    download="Documentation Utilisateur application legere.pdf"
                                    className="doc-btn doc-btn-primary"
                                >
                                    <Download size={16} />
                                    <span>Télécharger</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default MontazaDetail;
