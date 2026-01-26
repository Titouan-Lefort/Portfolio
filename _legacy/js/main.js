import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import gsap from 'gsap';

// Initialisation de la scène
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000); // Fond noir pour l'espace

// Initialisation de la caméra
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 50;

// Initialisation du rendu
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
document.body.appendChild(renderer.domElement);

// Création des particules (étoiles)
const particlesGeometry = new THREE.BufferGeometry();
const particlesCount = 15000; // Beaucoup plus d'étoiles pour une galaxie dense

const posArray = new Float32Array(particlesCount * 3);

for(let i = 0; i < particlesCount * 3; i++) {
    // Distribution aléatoire dans un espace plus large
    posArray[i] = (Math.random() - 0.5) * 400; 
}

particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

const particlesMaterial = new THREE.PointsMaterial({
    size: 0.15, // Petits points pour le fond
    color: 0xffffff,
    transparent: true,
    opacity: 0.8,
});

const starsMesh = new THREE.Points(particlesGeometry, particlesMaterial);
scene.add(starsMesh);

// --- PROJETS ---

// Données des projets (Positions basées sur la constellation de la Balance)
const projects = [
    { 
        name: "Portfolio V1", 
        description: "Mon tout premier site personnel réalisé en HTML/CSS.", 
        // Sigma Librae (Brachium) - Bas Gauche
        position: new THREE.Vector3(-8, -12, 5), 
        color: 0xff3333 
    },
    { 
        name: "E-Commerce App", 
        description: "Une application de vente en ligne complète avec React et Node.js.", 
        // Alpha Librae (Zubenelgenubi) - Bas Droite
        position: new THREE.Vector3(12, -10, 0), 
        color: 0x33ff33 
    },
    { 
        name: "Dashboard Analytics", 
        description: "Tableau de bord de visualisation de données pour entreprise.", 
        // Beta Librae (Zubeneschamali) - Haut Droite
        position: new THREE.Vector3(8, 12, -5), 
        color: 0x3333ff 
    },
    { 
        name: "Social Network", 
        description: "Réseau social thématique pour les passionnés de cuisine.", 
        // Gamma Librae (Zubenelakrab) - Milieu Gauche
        position: new THREE.Vector3(-10, 2, 0), 
        color: 0xffff33 
    },
    { 
        name: "3D Game Prototype", 
        description: "Prototype de jeu d'exploration spatiale sous Unity.", 
        // Upsilon Librae - Haut Gauche (Extension)
        position: new THREE.Vector3(-15, 15, -5), 
        color: 0xff33ff 
    },
    {
        name: "Mobile App",
        description: "Application mobile cross-platform avec React Native.",
        // Tau Librae - Extension Milieu
        position: new THREE.Vector3(-12, -5, 2),
        color: 0x33ffff
    }
];

// Fonction pour créer une texture de halo (Glow)
function createGlowTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const context = canvas.getContext('2d');
    const gradient = context.createRadialGradient(32, 32, 0, 32, 32, 32);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
    gradient.addColorStop(0.2, 'rgba(255, 255, 255, 0.4)');
    gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.1)');
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
    context.fillStyle = gradient;
    context.fillRect(0, 0, 64, 64);
    return new THREE.CanvasTexture(canvas);
}

const glowTexture = createGlowTexture();
const projectGroup = new THREE.Group();
scene.add(projectGroup);

projects.forEach(project => {
    // 1. La sphère principale (L'étoile) - Beaucoup plus grosse
    const geometry = new THREE.SphereGeometry(1.5, 32, 32);
    const material = new THREE.MeshBasicMaterial({ color: project.color });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.copy(project.position);
    
    // Stockage des données
    mesh.userData = {
        name: project.name,
        description: project.description,
        isProject: true
    };

    // 2. Le Halo (Sprite) - Adapté à la taille de la sphère
    const spriteMaterial = new THREE.SpriteMaterial({ 
        map: glowTexture, 
        color: project.color, 
        transparent: true, 
        opacity: 0.7,
        blending: THREE.AdditiveBlending
    });
    const sprite = new THREE.Sprite(spriteMaterial);
    sprite.scale.set(8, 8, 1); // Le halo est plus grand que la sphère
    mesh.add(sprite); // Le sprite suit la sphère

    projectGroup.add(mesh);
});

// Création des lignes de la constellation (Libra / Balance)
// Indices dans le tableau projects :
// 0: Sigma (Bas Gauche)
// 1: Alpha (Bas Droite)
// 2: Beta (Haut Droite)
// 3: Gamma (Milieu Gauche)
// 4: Upsilon (Haut Gauche)
// 5: Tau (Milieu)

const connections = [
    [0, 1], // Sigma -> Alpha
    [1, 2], // Alpha -> Beta
    [2, 3], // Beta -> Gamma
    [3, 0], // Gamma -> Sigma (Ferme le quadrilatère)
    [3, 4], // Gamma -> Upsilon (Extension Haut)
    [3, 5]  // Gamma -> Tau (Extension Milieu)
];

const points = [];
connections.forEach(pair => {
    points.push(projects[pair[0]].position);
    points.push(projects[pair[1]].position);
});

const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
const lineMaterial = new THREE.LineBasicMaterial({ 
    color: 0xffffff, 
    transparent: true, 
    opacity: 0.2 
});
// Utilisation de LineSegments pour des lignes disjointes
const constellationLines = new THREE.LineSegments(lineGeometry, lineMaterial);
scene.add(constellationLines);


// Contrôles
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.enableZoom = false; // Désactiver le zoom
controls.enablePan = false;  // Désactiver le panoramique
controls.autoRotate = true;  // Rotation automatique douce pour l'effet
controls.autoRotateSpeed = 0.5;

// --- INTERACTION ---

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
const backBtn = document.getElementById('back-btn');

// Position initiale de la caméra pour le retour
const initialCameraPosition = new THREE.Vector3(0, 0, 50);

window.addEventListener('click', onMouseClick);

function onMouseClick(event) {
    // Calculer la position de la souris
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);

    // Tester l'intersection avec les projets
    const intersects = raycaster.intersectObjects(projectGroup.children);

    if (intersects.length > 0) {
        const object = intersects[0].object;
        
        // On s'assure de cliquer sur la sphère (qui a userData.isProject)
        // Si on clique sur le sprite, on remonte au parent (la sphère)
        const targetObject = object.userData.isProject ? object : object.parent;

        if (targetObject && targetObject.userData.isProject) {
            focusOnProject(targetObject);
        }
    }
}

function focusOnProject(object) {
    // Arrêter la rotation automatique
    controls.autoRotate = false;
    controls.enabled = false; // Désactiver les contrôles pendant la transition

    // Calculer la position cible de la caméra (juste devant l'objet)
    // On garde la même direction que la position actuelle de l'objet par rapport au centre, mais plus proche
    // Ou plus simple : on se met à une distance fixe en Z (ou autre axe) par rapport à l'objet
    
    // Approche : Se placer à 5 unités de l'objet, en direction de l'origine (pour regarder l'objet de face par rapport au centre)
    // Ou simplement décaler sur Z
    const offset = new THREE.Vector3(0, 0, 5); 
    const targetCameraPos = object.position.clone().add(offset);

    // Animation Caméra
    gsap.to(camera.position, {
        x: targetCameraPos.x,
        y: targetCameraPos.y,
        z: targetCameraPos.z,
        duration: 2,
        ease: "power2.inOut"
    });

    // Animation Target (regarder l'objet)
    gsap.to(controls.target, {
        x: object.position.x,
        y: object.position.y,
        z: object.position.z,
        duration: 2,
        ease: "power2.inOut",
        onUpdate: () => controls.update(),
        onComplete: () => {
            controls.enabled = true;
            backBtn.style.display = 'block';
        }
    });
}

backBtn.addEventListener('click', () => {
    // Retour à la vue d'ensemble
    backBtn.style.display = 'none';
    controls.enabled = false;

    gsap.to(camera.position, {
        x: initialCameraPosition.x,
        y: initialCameraPosition.y,
        z: initialCameraPosition.z,
        duration: 2,
        ease: "power2.inOut"
    });

    gsap.to(controls.target, {
        x: 0,
        y: 0,
        z: 0,
        duration: 2,
        ease: "power2.inOut",
        onUpdate: () => controls.update(),
        onComplete: () => {
            controls.enabled = true;
            controls.autoRotate = true; // Réactiver la rotation auto
        }
    });
});

// Gestion du redimensionnement
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Boucle d'animation
function animate() {
    requestAnimationFrame(animate);
    
    controls.update();
    renderer.render(scene, camera);
}

animate();
