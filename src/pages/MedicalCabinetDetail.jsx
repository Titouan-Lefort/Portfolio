import React from 'react';
import { ArrowLeft, Calendar, Users, Code, CheckCircle } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './ProjectDetailPage.css';

const MedicalCabinetDetail = () => {
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
                        Application <span className="text-accent">Cabinet Médical</span>
                    </h1>
                    <p className="project-detail-subtitle">
                        Application desktop pour la gestion complète d'un cabinet médical : patients, médicaments, ordonnances.
                    </p>
                </div>

                {/* Image principale */}
                <div className="project-hero-image fade-in-up" style={{ animationDelay: '0.1s' }}>
                    <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600" alt="Cabinet Médical Dashboard" />
                </div>

                {/* Vue d'ensemble */}
                <section className="project-section fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <h2 className="section-title">Vue d'ensemble</h2>
                    <p className="section-text">
                        Cette application de bureau a été conçue pour administrer efficacement un cabinet médical.
                        Elle permet de centraliser la base de données des patients, la gestion des médicaments,
                        et la création d'ordonnances directement depuis l'interface.
                    </p>
                </section>

                {/* Informations du projet */}
                <div className="project-info-grid fade-in-up" style={{ animationDelay: '0.3s' }}>
                    <div className="info-card">
                        <Calendar className="info-icon" size={24} />
                        <div className="info-content">
                            <h3 className="info-title">Durée</h3>
                            <p className="info-value">Projet académique sur une journée</p>
                        </div>
                    </div>
                    <div className="info-card">
                        <Users className="info-icon" size={24} />
                        <div className="info-content">
                            <h3 className="info-title">Équipe</h3>
                            <p className="info-value">4 développeurs</p>
                        </div>
                    </div>
                    <div className="info-card">
                        <Code className="info-icon" size={24} />
                        <div className="info-content">
                            <h3 className="info-title">Technologies</h3>
                            <p className="info-value">C#, WPF, MariaDB</p>
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
                            <p>Framework pour la création d'interfaces utilisateur Windows riches.</p>
                        </div>
                        <div className="tech-stack-item">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MariaDB" />
                            <h4>MariaDB</h4>
                            <p>Système de gestion de base de données relationnelle.</p>
                        </div>
                    </div>
                </section>
                {/* But du projet */}
                <section className="project-section fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <h2 className="section-title">Objectif du projet</h2>
                    <p className="section-text">
                        Cette application a été conçue dans le cadre d'un projet académique. <br />
                        Le but était de finaliser nos connaissance en C# en créant une application complète. <br />
                        Nous étions une équipe de 4 développeurs, les taches était départager et nous avons centralisé le code en utilisant GitHub.
                    </p>
                </section>
                <section className="project-section fade-in-up" style={{ animationDelay: '0.6s' }}>
                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                        <a href="https://github.com/Jules-pecquereau/MedicamentMihnC-" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
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

export default MedicalCabinetDetail;
