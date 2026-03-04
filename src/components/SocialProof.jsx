import React, { useState } from 'react';
import './SocialProof.css';
import { Cpu, Globe, Database, Smartphone, Cloud, Code2, Palette } from 'lucide-react';

const SocialProof = () => {
    const stack = [
        { name: 'JavaScript', icon: Code2 },
        { name: 'Tailwind CSS', icon: Palette },
        { name: 'Mobile', icon: Smartphone },
        { name: 'Cloud', icon: Cloud },
        { name: 'Web', icon: Globe },
    ];

    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <section className="social-proof section">
            <div className="container">
                <p className="proof-text text-center text-secondary">
                    Technologies maîtrisées & Écosystème
                </p>
                <div className="logos-grid">
                    {stack.map((item, i) => (
                        <div
                            key={i}
                            className={`partner-logo ${hoveredIndex === i ? 'active' : ''}`}
                            onMouseEnter={() => setHoveredIndex(i)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <item.icon
                                size={32}
                                className={`partner-icon ${hoveredIndex === i ? 'animate-bounce' : ''}`}
                            />
                            <span className="partner-name">{item.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SocialProof;
