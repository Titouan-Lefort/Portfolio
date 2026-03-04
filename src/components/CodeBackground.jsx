import React from 'react';
import './CodeBackground.css';

const CodeBackground = () => {
    const codeLines = `const portfolio = {
  name: 'Titouan Lefort',
  role: 'Développeur Fullstack',
  skills: ['Laravel', 'React', 'PostgreSQL', 'Linux'],
  passion: 'Créer des solutions innovantes'
};

function buildAmazingProjects() {
  const stack = ['Frontend', 'Backend', 'Database'];
  return stack.map(tech => {
    return {
      technology: tech,
      expertise: 'Advanced',
      projects: getProjects(tech)
    };
  });
}

class Developer {
  constructor(name, skills) {
    this.name = name;
    this.skills = skills;
    this.experience = [];
  }
  
  async createProject(idea) {
    const design = await this.planArchitecture(idea);
    const implementation = this.writeCode(design);
    return this.deploy(implementation);
  }
  
  learnNewTechnology(tech) {
    this.skills.push(tech);
    return this.practice(tech);
  }
}

const atlantisMontaza = {
  type: 'ERP System',
  features: [
    'Gestion des stocks',
    'Module de facturation',
    'Tableaux de bord',
    'API RESTful'
  ],
  technologies: {
    backend: 'Laravel',
    frontend: 'JavaScript',
    database: 'PostgreSQL',
    server: 'Linux'
  }
};

function optimizePerformance(app) {
  const cache = setupRedisCache();
  const queue = createJobQueue();
  return {
    ...app,
    cache,
    queue,
    speed: 'blazing fast'
  };
}

const education = [
  { degree: 'BTS SIO SLAM', year: '2024-2026' },
  { degree: 'Baccalauréat', specialties: ['Maths', 'SVT'] }
];

const portfolio = {
  name: 'Titouan Lefort',
  role: 'Développeur Fullstack',
  skills: ['Laravel', 'React', 'PostgreSQL', 'Linux'],
  passion: 'Créer des solutions innovantes'
};

function buildAmazingProjects() {
  const stack = ['Frontend', 'Backend', 'Database'];
  return stack.map(tech => {
    return {
      technology: tech,
      expertise: 'Advanced',
      projects: getProjects(tech)
    };
  });
}

class Developer {
  constructor(name, skills) {
    this.name = name;
    this.skills = skills;
    this.experience = [];
  }
  
  async createProject(idea) {
    const design = await this.planArchitecture(idea);
    const implementation = this.writeCode(design);
    return this.deploy(implementation);
  }
}`;

    return (
        <div className="code-background">
            <div className="code-lines">
                {codeLines}
            </div>
        </div>
    );
};

export default CodeBackground;
