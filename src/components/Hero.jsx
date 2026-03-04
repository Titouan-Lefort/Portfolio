import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [projectCount, setProjectCount] = useState(0);
    const [expCount, setExpCount] = useState(0);

    const stack = [
        { name: 'HTML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Tailwind CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
        { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
        { name: 'Laravel', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg' },
        { name: 'PHP', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
        { name: 'C#', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
        { name: 'MariaDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mariadb/mariadb-original.svg' },
        { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
        { name: 'Linux', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
        { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
        { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
        { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    ];

    // Duplicate stack for infinite scroll effect
    const carouselStack = [...stack, ...stack, ...stack, ...stack];

    // Mouse Parallax Logic
    useEffect(() => {
        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;

            setMousePosition({
                x: (clientX - centerX) / 50,
                y: (clientY - centerY) / 50
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Counter Logic
    useEffect(() => {
        let start = 0;
        const end = 10;
        const duration = 2000;
        const increment = end / (duration / 16);

        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                setProjectCount(end);
                clearInterval(timer);
            } else {
                setProjectCount(Math.ceil(start));
            }
        }, 16);

        let startExp = 0;
        const endExp = 2;
        const timerExp = setInterval(() => {
            startExp += 0.1;
            if (startExp >= endExp) {
                setExpCount(endExp);
                clearInterval(timerExp);
            } else {
                setExpCount(Math.floor(startExp));
            }
        }, 100);

        return () => { clearInterval(timer); clearInterval(timerExp); };
    }, []);

    return (
        <section className="hero">
            <div className="container hero-container">
                {/* Left Column: Content */}
                <div className="hero-content fade-in-up">
                    <h1 className="hero-title">
                        Développeur web <span className="text-accent">Fullstack</span> et  <span className="text-accent">Application</span>.
                    </h1>
                    <p className="hero-subtitle">
                        Étudiant en 2ème année de BTS SIO, je conçois des solutions web et mobiles modernes, alliant performance technique et design soigné.
                    </p>
                    <div className="hero-actions">
                        <Link to="/projects" className="btn btn-black-pill">
                            Voir mes projets <ArrowRight size={18} style={{ marginLeft: '8px' }} />
                        </Link>
                    </div>
                </div>

                {/* Right Column: Image */}
                <div
                    className="hero-image-wrapper fade-in-up"
                    style={{
                        animationDelay: '0.2s',
                        transform: `perspective(1000px) rotateY(${mousePosition.x * 0.5}deg) rotateX(${-mousePosition.y * 0.5}deg)`
                    }}
                >
                    <div className="hero-image-inner">
                        <img
                            src="/assets/hero-dashboard.png"
                            alt="Dashboard Project Showcase"
                            className="hero-dashboard-img"
                        />
                        <div
                            className="floating-card card-1"
                            style={{ transform: `translate(${mousePosition.x * -1.5}px, ${mousePosition.y * -1.5}px)` }}
                        >
                            <div className="stat-label">Projets réalisés</div>
                            <div className="stat-value">+{projectCount}</div>
                        </div>
                        <div
                            className="floating-card card-2"
                            style={{ transform: `translate(${mousePosition.x * 1.5}px, ${mousePosition.y * 1.5}px)` }}
                        >
                            <div className="stat-label">Expérience</div>
                            <div className="stat-value">{expCount} Ans</div>
                        </div>
                    </div>
                    <div
                        className="hero-glow"
                        style={{ transform: `translate(${-10 + mousePosition.x}%, ${-10 + mousePosition.y}%)` }}
                    ></div>
                </div>
            </div>

            {/* Infinite Carousel at Bottom of Hero */}
            <div className="hero-carousel-wrapper fade-in-up" style={{ animationDelay: '0.4s' }}>
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
