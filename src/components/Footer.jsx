import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Linkedin, Github, Mail, MapPin } from 'lucide-react';
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
                if (element) { element.scrollIntoView({ behavior: 'smooth' }); }
            }, 100);
        } else {
            const element = document.getElementById('competences');
            if (element) { element.scrollIntoView({ behavior: 'smooth' }); }
        }
    };

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-col brand-col">
                        <h3 className="footer-brand">titouan.lefort</h3>
                        <p className="footer-desc">
                            Développeur Fullstack — disponible pour de nouvelles opportunités.
                        </p>
                        <div className="contact-info">
                            <div className="contact-item">
                                <Mail size={14} /> <span>titouan.lefort2006@gmail.com</span>
                            </div>
                            <div className="contact-item">
                                <MapPin size={14} /> <span>Saint Brevin les pins, France</span>
                            </div>
                        </div>
                        <div className="social-links">
                            <a href="https://www.linkedin.com/in/titouan-lefort-749b14354/" className="social-link" target="_blank" rel="noopener noreferrer"><Linkedin size={18} /></a>
                            <a href="https://github.com/Titouan-Lefort" className="social-link" target="_blank" rel="noopener noreferrer"><Github size={18} /></a>
                        </div>
                    </div>

                    <div className="footer-col">
                        <h4 className="footer-heading">Navigation</h4>
                        <ul className="footer-links">
                            <li><Link to="/">Accueil</Link></li>
                            <li><a href="#competences" onClick={handleSkillsClick}>Compétences</a></li>
                            <li><Link to="/projects">Projets</Link></li>
                            <li><Link to="/experience">Expérience</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Titouan Lefort</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
