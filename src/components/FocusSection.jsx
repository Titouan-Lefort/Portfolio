import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Github, ExternalLink } from 'lucide-react';
import './FocusSection.css';

const FocusSection = () => {
    // Rebranded Case Studies to Specific Project Showcases
    return (
        <section className="section focus-section">
            <div className="container">
                {/* Project 1: Finance App */}
                <div className="focus-block">
                    <div className="focus-content">
                        <div className="badge">Laravel</div>
                        <h2 className="focus-title">Atlantis Montaza - ERP</h2>
                        <p className="focus-text">
                            Développement d'un ERP pour Atlantis Montaza. Mise en place de l'infrastructure afin de gérer les entrées des employés de l'entreprise.
                        </p>
                        <ul className="focus-list">
                            <li>
                                <CheckCircle2 className="focus-icon" size={20} />
                                <span>Utilisation de Laravel pour le backend</span>
                            </li>
                            <li>
                                <CheckCircle2 className="focus-icon" size={20} />
                                <span>Frontend adapté aux besoins de l'entreprise et à tout les types d'utilisateurs</span>
                            </li>
                            <li>
                                <CheckCircle2 className="focus-icon" size={20} />
                                <span>Mise en place d'une base de données pour stocker les données de l'entreprise</span>
                            </li>
                        </ul>
                        <div className="project-links" style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
                            <Link to="/projects/montaza" state={{ from: 'home' }} className="btn btn-primary">
                                <ExternalLink size={18} style={{ marginRight: '8px' }} /> En savoir plus
                            </Link>
                        </div>
                    </div>
                    <div className="focus-image-wrapper">
                        <img src="/assets/erp-dashboard.png" alt="Atlantis Montaza ERP Interface" className="focus-img" />
                    </div>
                </div>

                {/* Project 2: SaaS Management */}
                <div className="focus-block reverse">
                    <div className="focus-image-wrapper">
                        <img src="/assets/medical-dashboard-closeup.png" alt="Interface Gestion Cabinet Médical" className="focus-img" />
                    </div>
                    <div className="focus-content">
                        <div className="badge">Gestion</div>
                        <h2 className="focus-title">Site de gestion de cabinet médical</h2>
                        <p className="focus-text">
                            Site internet permettant de gérer un cabinet médical, des rendez-vous aux ordonnances
                        </p>
                        <ul className="focus-list">
                            <li>
                                <CheckCircle2 className="focus-icon" size={20} />
                                <span>Intégration de l'ensemble des médicaments présents sur le site du gouvernement</span>
                            </li>
                            <li>
                                <CheckCircle2 className="focus-icon" size={20} />
                                <span>Intégration d'une IA pour créer un assistant médical</span>
                            </li>
                            <li>
                                <CheckCircle2 className="focus-icon" size={20} />
                                <span>Une interface clair et simple d'utilisation</span>
                            </li>
                        </ul>
                        <div className="project-links" style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
                            <a href="https://github.com/Titouan-Lefort/Gestion-cabinet-medical" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                                <Github size={18} style={{ marginRight: '8px' }} /> Code
                            </a>
                            <button className="btn btn-primary">
                                <ExternalLink size={18} style={{ marginRight: '8px' }} /> En savoir plus
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FocusSection;
