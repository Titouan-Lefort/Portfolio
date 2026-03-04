import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Twitter, Linkedin, Github, Mail, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleSkillsClick = (e) => {
        e.preventDefault();
        if (location.pathname !== '/') {
            navigate('/');
            setTimeout(() => {
                const element = document.getElementById('competences');
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        } else {
            const element = document.getElementById('competences');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    // Updated Footer to be personal
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-col brand-col">
                        <h3 className="footer-brand">Titouan Lefort</h3>
                        <p className="footer-desc">
                            Développeur Fullstack passionné par la création de produits numériques
                            utiles et bien conçus. Disponible pour de nouvelles opportunités.
                        </p>
                        <div className="contact-info">
                            <div className="contact-item">
                                <Mail size={16} /> <span>titouan.lefort2006@gmail.com</span>
                            </div>
                            <div className="contact-item">
                                <MapPin size={16} /> <span>Saint Brevin les pins, France (Remote)</span>
                            </div>
                        </div>
                        <div className="social-links" style={{ marginTop: '1.5rem' }}>
                            <a href="https://www.linkedin.com/in/titouan-lefort-749b14354/s" className="social-link" target='blank'><Linkedin size={20} /></a>
                            <a href="https://github.com/Titouan-Lefort" className="social-link" target="_blank"><Github size={20} /></a>
                        </div>
                    </div>

                    <div className="footer-col">
                        <h4 className="footer-heading">Navigation</h4>
                        <ul className="footer-links">
                            <li><Link to="/">Accueil</Link></li>
                            <li><a href="#competences" onClick={handleSkillsClick}>Compétences</a></li>
                            <li><Link to="/projects">Projet</Link></li>
                            <li><Link to="/experience">Expériences</Link></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4 className="footer-heading">Services</h4>
                        <ul className="footer-links">
                            <li><a href="#">Développement Web</a></li>
                            <li><a href="#">Applications Mobiles et Bureautique</a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4 className="footer-heading">Légal</h4>
                        <ul className="footer-links">
                            <li><a href="">Mentions Légales</a></li>
                            <li><a href="">Politique de Confidentialité</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom text-center">
                    <p>&copy; {new Date().getFullYear()} Titouan Lefort.    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
