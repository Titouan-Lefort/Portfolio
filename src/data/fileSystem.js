export const files = [
    {
        name: 'a-propos.js',
        language: 'javascript',
        icon: 'js',
        content: `const aboutMe = {
  name: "Titouan Lefort",
  role: "Full Stack Developer",
  bio: "Passionné par le développement web et les interfaces utilisateur modernes.",
  experience: "5 ans d'expérience",
  location: "Paris, France",
  skills: {
    frontend: ["React", "Vue", "Tailwind", "Three.js"],
    backend: ["Node.js", "Python", "PostgreSQL"],
    tools: ["Docker", "AWS", "Git"]
  },
  
  contact() {
    return {
      email: "contact@titouan.dev",
      github: "github.com/Titouan-Lefort"
    };
  }
};

console.log("Bienvenue sur mon portfolio !");`
    },
    {
        name: 'projets.json',
        language: 'json',
        icon: 'json',
        content: `[
  {
    "id": 1,
    "name": "Dashboard Analytics",
    "description": "Tableau de bord pour la visualisation de données temps réel.",
    "tech": ["React", "D3.js", "Firebase"],
    "preview": "https://dashboard-demo.com"
  },
  {
    "id": 2,
    "name": "E-Commerce API",
    "description": "API RESTful pour une plateforme de vente.",
    "tech": ["Node.js", "Express", "MongoDB"],
    "docs": "https://api-docs.com"
  },
  {
    "id": 3,
    "name": "Portfolio VS Code",
    "description": "Une interface immersive style IDE.",
    "tech": ["React", "TailwindCSS", "Vite"],
    "repo": "https://github.com/Titouan-Lefort/portfolio"
  }
]`
    },
    {
        name: 'competences.css',
        language: 'css',
        icon: 'css',
        content: `/* Mes compétences en style */

.frontend-dev {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Fira Code', monospace;
}

.skills-list {
  --expert: #4caf50;
  --advanced: #2196f3;
  --intermediate: #ff9800;
}

#react {
  color: var(--expert);
  animation: spin 10s linear infinite;
}

#tailwind {
  color: var(--advanced);
  border: 1px solid transparent;
}

#tailwind:hover {
  border-color: #38bdf8;
}`
    },
    {
        name: 'contact.md',
        language: 'markdown',
        icon: 'md',
        content: `# Contactez-moi

Je suis toujours ouvert aux nouvelles opportunités et collaborations intéressantes.

### 📍 Coordonnées

- **Email**: [contact@titouan.dev](mailto:contact@titouan.dev)
- **LinkedIn**: [linkedin.com/in/titouanlefort](https://linkedin.com)
- **Twitter**: [@titouan_dev](https://twitter.com)

### 💬 Message rapide
Vous pouvez utiliser le terminal ci-dessous pour m'envoyer un message rapide !

\`\`\`bash
npm run send-message -- "Bonjour !"
\`\`\`
`
    }
];
