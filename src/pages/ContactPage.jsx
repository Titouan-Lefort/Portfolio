import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
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
        // Pour l'instant, juste un message de confirmation
        // Plus tard, vous pourrez intégrer un service d'envoi d'email
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
                        {/* Informations de contact */}
                        <div className="contact-info">
                            <h2>Informations</h2>
                            <p className="info-intro">
                                N'hésitez pas à me contacter pour discuter de vos projets ou de toute opportunité de collaboration.
                            </p>

                            <div className="info-items">
                                <div className="info-item">
                                    <div className="info-icon">
                                        <Mail size={24} />
                                    </div>
                                    <div className="info-text">
                                        <h3>Email</h3>
                                        <a href="mailto:titouan.lefort@example.com">titouan.lefort2006@gmail.com</a>
                                    </div>
                                </div>

                                <div className="info-item">
                                    <div className="info-icon">
                                        <Phone size={24} />
                                    </div>
                                    <div className="info-text">
                                        <h3>Téléphone</h3>
                                        <a href="tel:+33123456789">07 86 58 01 07</a>
                                    </div>
                                </div>

                                <div className="info-item">
                                    <div className="info-icon">
                                        <MapPin size={24} />
                                    </div>
                                    <div className="info-text">
                                        <h3>Localisation</h3>
                                        <p>Saint brevin les pins, France</p>
                                    </div>
                                </div>
                            </div>

                            <div className="social-links">
                                <h3>Réseaux sociaux</h3>
                                <div className="social-icons">
                                    <a href="https://github.com/Titouan-Lefort" target="_blank" rel="noopener noreferrer" className="social-link">
                                        <Github size={24} />
                                    </a>
                                    <a href="https://www.linkedin.com/in/titouan-lefort-749b14354/s" target="_blank" rel="noopener noreferrer" className="social-link">
                                        <Linkedin size={24} />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Formulaire de contact */}
                        <div className="contact-form-container">
                            <h2>Envoyez-moi un message</h2>
                            <form onSubmit={handleSubmit} className="contact-form">
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
                                    <Send size={20} />
                                    <span>Envoyer le message</span>
                                </button>

                                {status && (
                                    <div className="form-status success">
                                        {status}
                                    </div>
                                )}
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
