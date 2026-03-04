import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    const [typedText, setTypedText] = useState('');
    const fullText = `const dev = {
  nom: "Titouan Lefort",
  formation: "BTS SIO SLAM",
  stack: ["Laravel", "React", "C#", "PostgreSQL"],
  passion: "Construire des solutions qui marchent"
};`;

    // Typing effect
    useEffect(() => {
        let i = 0;
        const timer = setInterval(() => {
            if (i <= fullText.length) {
                setTypedText(fullText.slice(0, i));
                i++;
            } else {
                clearInterval(timer);
            }
        }, 20);
        return () => clearInterval(timer);
    }, []);

    const stack = [
        { name: 'Laravel', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg' },
        { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'PHP', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
        { name: 'C#', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
        { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
        { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
        { name: 'Linux', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
        { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
        { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
        { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'MariaDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mariadb/mariadb-original.svg' },
        { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    ];

    const carouselStack = [...stack, ...stack, ...stack];

    return (
        <section className="hero">
            <div className="container hero-container">
                <div className="hero-content fade-in-up">
                    <p className="hero-greeting">Salut, moi c'est</p>
                    <h1 className="hero-title">
                        Titouan Lefort<span className="cursor">_</span>
                    </h1>
                    <p className="hero-role">Développeur Fullstack & Application</p>
                    <p className="hero-subtitle">
                        Étudiant en 2ème année de BTS SIO. Je code des apps web et desktop
                        avec Laravel, React, C# — et je m'intéresse à tout ce qui touche
                        au backend et à l'infra.
                    </p>
                    <div className="hero-actions">
                        <Link to="/projects" className="btn btn-primary">
                            Voir mes projets <ArrowRight size={16} style={{ marginLeft: '6px' }} />
                        </Link>
                        <Link to="/contact" className="btn btn-secondary">
                            Me contacter
                        </Link>
                    </div>
                </div>

                <div className="hero-terminal fade-in-up" style={{ animationDelay: '0.15s' }}>
                    <div className="terminal-header">
                        <div className="terminal-dots">
                            <span className="dot dot-red"></span>
                            <span className="dot dot-yellow"></span>
                            <span className="dot dot-green"></span>
                        </div>
                        <span className="terminal-title">about.js</span>
                    </div>
                    <pre className="terminal-body">
                        <code>{typedText}<span className="terminal-cursor">|</span></code>
                    </pre>
                </div>
            </div>

            <div className="hero-carousel-wrapper fade-in-up" style={{ animationDelay: '0.3s' }}>
                <div className="hero-carousel-track">
                    {carouselStack.map((item, i) => (
                        <div key={i} className="carousel-item">
                            <img src={item.logo} alt={item.name} className="carousel-icon" />
                            <span className="carousel-name">{item.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;
