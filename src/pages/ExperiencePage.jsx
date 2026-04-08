import React from 'react';
import { ArrowLeft, Briefcase, GraduationCap, Calendar, GitBranch, GitCommit } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './ExperiencePage.css';

const experiences = [
    {
        type: 'work',
        company: 'Atlantis Montaza',
        position: 'Développeur Web',
        period: 'septembre 2025 - Présent',
        description: 'Développement d\'un système ERP (Enterprise Resource Planning) pour optimiser les opérations logistiques de l\'entreprise.',
        technologies: [
            { name: 'Laravel', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg' },
            { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
            { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
            { name: 'Linux', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' }
        ],
        achievements: [
            'Conception et développement d\'une architecture ERP modulaire et scalable',
            'Création d\'API RESTful complètes pour intégrations tierces',
            'Mise en place de systèmes de gestion des stocks avec alertes automatiques',
            'Implémentation d\'un module de facturation automatisé et de rapports financiers',
            'Développement de tableaux de bord interactifs avec visualisation des KPIs en temps réel',
            'Optimisation des performances avec cache Redis et queues pour les tâches lourdes',
            'Sécurisation de l\'application avec authentification multi-facteurs et chiffrement des données'
        ]
    },
    {
        type: 'work',
        company: 'Everllence',
        position: 'Développeur',
        period: "juin-juillet 2025",
        description: 'Réalisation de projets dans le cadre de la formation BTS SIO. Développement d\'applications métier avec des technologies variées.',
        technologies: [
            { name: 'PHP', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
            { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
            { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
            { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' }
        ],
        achievements: [
            'PPE (Projet Professionnel Encadré) : Développement d\'une application de gestion',
            'Travail en équipe avec méthodologie Agile/Scrum',
            'Utilisation de Git et GitHub pour la gestion de version',
            'Rédaction de documentation technique complète'
        ]
    }
];

const education = [
    {
        type: 'education',
        school: 'BTS SIO - Services Informatiques aux Organisations',
        degree: 'Option SLAM (Solutions Logicielles et Applications Métiers)',
        period: '2024 - 2026',
        description: 'Formation complète en développement d\'applications, gestion de bases de données et administration système.',
        highlights: [
            'Conception et développement d\'applications (Web, Mobile, Desktop)',
            'Gestion et administration de bases de données relationnelles',
            'Cybersécurité et protection des données',
            'Maintenance et support des systèmes informatiques',
            'Gestion de projet et méthodologies Agile',
            'Veille technologique et innovation'
        ]
    },
    {
        type: 'education',
        school: 'Baccalauréat Général',
        degree: 'Spécialités Mathématiques et SVT',
        period: '2021 - 2024',
        description: 'Formation générale avec spécialisation en mathématiques et SVT.',
        highlights: [
            'Raisonnement mathématique et résolution de problèmes complexes',
            'Analyse scientifique et démarche expérimentale',
            'Esprit critique et argumentation',
            'Travail de recherche et synthèse documentaire',
            'Rigueur méthodologique et organisation'
        ]
    }
];

const TimelineItem = ({ item, index, isLast }) => {
    const isWork = item.type === 'work';
    const commitHash = ['a3f8d2b', 'e7c1a9f', 'b4d2e8c', '9f3a7d1'][index % 4];

    return (
        <div
            className={`timeline-item fade-in-up ${isWork ? 'work' : 'education'}`}
            style={{ animationDelay: `${index * 0.1}s` }}
        >
            {/* Git graph visual */}
            <div className="git-graph">
                <div className="git-line-top"></div>
                <div className={`git-node ${isWork ? 'node-work' : 'node-edu'}`}>
                    <GitCommit size={14} />
                </div>
                {!isLast && <div className="git-line-bottom"></div>}
            </div>

            <div className="timeline-content">
                {/* Editor tab bar */}
                <div className="editor-tab-bar">
                    <div className="editor-tab active">
                        <span className="tab-icon">{isWork ? '⚡' : '📘'}</span>
                        {isWork ? `${item.company.toLowerCase().replace(/\s+/g, '_')}.ts` : `${item.school.split(' ')[0].toLowerCase()}.md`}
                    </div>
                    <span className="tab-hash">#{commitHash}</span>
                </div>

                <div className="timeline-body">
                    <div className="timeline-header">
                        <div>
                            <h3 className="timeline-title">
                                {isWork ? item.position : item.degree}
                            </h3>
                            <p className="timeline-company">
                                {isWork ? item.company : item.school}
                            </p>
                        </div>
                        <div className="timeline-period">
                            <Calendar size={14} />
                            <span>{item.period}</span>
                        </div>
                    </div>

                    <p className="timeline-description">{item.description}</p>

                    {item.technologies && (
                        <div className="timeline-technologies">
                            {item.technologies.map((tech, i) => (
                                <div key={i} className="tech-badge">
                                    <img src={tech.logo} alt={tech.name} className="tech-logo" />
                                    <span>{tech.name}</span>
                                </div>
                            ))}
                        </div>
                    )}

                    {item.achievements && (
                        <ul className="timeline-achievements">
                            {item.achievements.map((achievement, i) => (
                                <li key={i}>{achievement}</li>
                            ))}
                        </ul>
                    )}

                    {item.highlights && (
                        <ul className="timeline-highlights">
                            {item.highlights.map((highlight, i) => (
                                <li key={i}>{highlight}</li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};

const ExperiencePage = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="experience-page">
            <Navbar />

            <main className="experience-container container">
                <div className="experience-header fade-in-up">
                    <Link to="/" className="back-link">
                        <ArrowLeft size={20} /> Retour à l'accueil
                    </Link>
                    <h1 className="experience-title">
                        Mon <span className="text-accent">Parcours</span>
                    </h1>
                    <p className="experience-subtitle">
                        Découvrez mon expérience professionnelle et mon parcours de formation.
                    </p>
                </div>

                <section className="timeline-section">
                    <div className="section-title-wrapper fade-in-up">
                        <GitBranch size={20} className="section-icon" />
                        <h2 className="section-title">Expérience Professionnelle</h2>
                        <span className="branch-label">main</span>
                    </div>
                    <div className="timeline">
                        {experiences.map((exp, index) => (
                            <TimelineItem key={index} item={exp} index={index} isLast={index === experiences.length - 1} />
                        ))}
                    </div>
                </section>

                <section className="timeline-section">
                    <div className="section-title-wrapper fade-in-up">
                        <GitBranch size={20} className="section-icon" />
                        <h2 className="section-title">Formation</h2>
                        <span className="branch-label">education</span>
                    </div>
                    <div className="timeline">
                        {education.map((edu, index) => (
                            <TimelineItem key={index} item={edu} index={experiences.length + index} isLast={index === education.length - 1} />
                        ))}
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default ExperiencePage;
