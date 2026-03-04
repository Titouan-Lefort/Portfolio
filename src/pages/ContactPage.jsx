import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Terminal } from 'lucide-react';
import './ContactPage.css';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('Message envoyé ! Je vous répondrai bientôt.');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus(''), 5000);
    };

    return (
        <div className="contact-page">
            <Navbar />

            <div className="contact-hero">
                <div className="container">
                    <h1 className="contact-title">Contactez-moi</h1>
                    <p className="contact-subtitle">
                        Une question ? Un projet ? Je serais ravi d'échanger avec vous !
                    </p>
                </div>
            </div>

            <div className="contact-content">
                <div className="container">
                    <div className="contact-grid">
                        {/* Contact info — styled as terminal output */}
                        <div className="contact-info">
                            <div className="info-terminal-bar">
                                <span className="chrome-dot red"></span>
                                <span className="chrome-dot yellow"></span>
                                <span className="chrome-dot green"></span>
                                <span className="terminal-bar-title">contact.sh</span>
                            </div>
                            <div className="info-terminal-body">
                                <div className="terminal-line">
                                    <span className="prompt">$</span>
                                    <span className="cmd">cat informations.json</span>
                                </div>

                                <div className="info-item">
                                    <div className="info-icon">
                                        <Mail size={18} />
                                    </div>
                                    <div className="info-text">
                                        <h3>Email</h3>
                                        <a href="mailto:titouan.lefort2006@gmail.com">titouan.lefort2006@gmail.com</a>
                                    </div>
                                </div>

                                <div className="info-item">
                                    <div className="info-icon">
                                        <Phone size={18} />
                                    </div>
                                    <div className="info-text">
                                        <h3>Téléphone</h3>
                                        <a href="tel:+33786580107">07 86 58 01 07</a>
                                    </div>
                                </div>

                                <div className="info-item">
                                    <div className="info-icon">
                                        <MapPin size={18} />
                                    </div>
                                    <div className="info-text">
                                        <h3>Localisation</h3>
                                        <p>Saint Brevin les Pins, France</p>
                                    </div>
                                </div>

                                <div className="terminal-line">
                                    <span className="prompt">$</span>
                                    <span className="cmd">echo $SOCIAL_LINKS</span>
                                </div>

                                <div className="social-icons">
                                    <a href="https://github.com/Titouan-Lefort" target="_blank" rel="noopener noreferrer" className="social-link">
                                        <Github size={20} />
                                        <span>GitHub</span>
                                    </a>
                                    <a href="https://www.linkedin.com/in/titouan-lefort-749b14354/" target="_blank" rel="noopener noreferrer" className="social-link">
                                        <Linkedin size={20} />
                                        <span>LinkedIn</span>
                                    </a>
                                </div>

                                <div className="terminal-line blinking">
                                    <span className="prompt">$</span>
                                    <span className="cursor-block">█</span>
                                </div>
                            </div>
                        </div>

                        {/* Form — styled as code editor */}
                        <div className="contact-form-container">
                            <div className="form-editor-bar">
                                <span className="chrome-dot red"></span>
                                <span className="chrome-dot yellow"></span>
                                <span className="chrome-dot green"></span>
                                <span className="editor-bar-title">new_message.js</span>
                                <span className="editor-unsaved">●</span>
                            </div>
                            <form onSubmit={handleSubmit} className="contact-form">
                                <div className="form-line-numbers">
                                    {Array.from({ length: 12 }, (_, i) => (
                                        <span key={i} className="line-num">{i + 1}</span>
                                    ))}
                                </div>
                                <div className="form-fields">
                                    <div className="form-group">
                                        <label htmlFor="name">Nom complet</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            placeholder="Votre nom"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            placeholder="votre@email.com"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="subject">Sujet</label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            placeholder="Sujet de votre message"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="message">Message</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows="6"
                                            placeholder="Décrivez votre projet ou votre demande..."
                                        />
                                    </div>

                                    <button type="submit" className="btn btn-primary submit-btn">
                                        <Send size={16} />
                                        <span>Envoyer</span>
                                    </button>

                                    {status && (
                                        <div className="form-status success">
                                            ✓ {status}
                                        </div>
                                    )}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default ContactPage;
