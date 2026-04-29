import React from 'react';
import { Link } from 'react-router-dom';
import { Github, ExternalLink } from 'lucide-react';
import './FocusSection.css';

const FocusSection = () => {
    const base = import.meta.env.BASE_URL;

    return (
        <section className="section focus-section">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">// projets récents</span>
                    <h2 className="section-title">Ce sur quoi j'ai travaillé</h2>
                </div>

                {/* Project 1 */}
                <div className="focus-block">
                    <div className="focus-content">
                        <div className="focus-file-tab">
                            <span className="file-dot"></span>
                            montaza.config
                        </div>
                        <span className="focus-tag">Laravel — ERP</span>
                        <h3 className="focus-title">Atlantis Montaza</h3>
                        <p className="focus-text">
                            Développement d'un ERP pour Atlantis Montaza. Mise en place de l'infrastructure
                            pour gérer les entrées des employés de l'entreprise.
                        </p>
                        <ul className="focus-list">
                            <li><span className="list-line-num">01</span> Utilisation de Laravel pour le backend</li>
                            <li><span className="list-line-num">02</span> Frontend adapté aux besoins de l'entreprise</li>
                            <li><span className="list-line-num">03</span> Base de données pour stocker les données métier</li>
                        </ul>
                        <div className="focus-actions">
                            <Link to="/projects/montaza" state={{ from: 'home' }} className="btn btn-primary">
                                <ExternalLink size={15} style={{ marginRight: '6px' }} /> En savoir plus
                            </Link>
                        </div>
                    </div>
                    <div className="focus-image-wrapper">
                        <div className="image-tab-bar">
                            <span className="tab-dot red"></span>
                            <span className="tab-dot yellow"></span>
                            <span className="tab-dot green"></span>
                            <span className="tab-filename">preview.png</span>
                        </div>
                        <img src={`${base}assets/erp-web-accueil.png`} alt="Atlantis Montaza ERP" className="focus-img" />
                    </div>
                </div>

                {/* Project 2 */}
                <div className="focus-block reverse">
                    <div className="focus-image-wrapper">
                        <div className="image-tab-bar">
                            <span className="tab-dot red"></span>
                            <span className="tab-dot yellow"></span>
                            <span className="tab-dot green"></span>
                            <span className="tab-filename">desktop-app.xaml</span>
                        </div>
                        <img src={`${base}assets/erp-desktop-admin.png`} alt="Application C#" className="focus-img" />
                    </div>
                    <div className="focus-content">
                        <div className="focus-file-tab">
                            <span className="file-dot"></span>
                            app.config
                        </div>
                        <span className="focus-tag">C# — Desktop</span>
                        <h3 className="focus-title">Application Bureau ERP</h3>
                        <p className="focus-text">
                            Application WPF pour l'administration du système ERP Atlantis Montaza.
                        </p>
                        <ul className="focus-list">
                            <li><span className="list-line-num">01</span> Architecture en C# et .NET avec interface WPF</li>
                            <li><span className="list-line-num">02</span> Connexion à la base de données PostgreSQL de l'ERP</li>
                            <li><span className="list-line-num">03</span> Gestion performante des ressources et employés</li>
                        </ul>
                        <div className="focus-actions">
                            <Link to="/projects/erp-desktop" state={{ from: 'home' }} className="btn btn-primary">
                                <ExternalLink size={15} style={{ marginRight: '6px' }} /> En savoir plus
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Dev-style commit line */}
                <div className="commit-line">
                    <span className="commit-hash">#a3f8d2b</span>
                    <span className="commit-msg">feat: ajout des projets principaux</span>
                    <span className="commit-time">il y a 2 mois</span>
                </div>
            </div>
        </section>
    );
};

export default FocusSection;
