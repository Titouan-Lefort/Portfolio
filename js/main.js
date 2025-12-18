import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import gsap from 'gsap';

// Initialisation de la scène
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x1a1a1a); // Gris très foncé pour une ambiance musée
// scene.fog = new THREE.Fog(0x1a1a1a, 10, 50); // Brouillard désactivé

// Initialisation de la caméra (Vue isométrique)
const aspect = window.innerWidth / window.innerHeight;
const d = 20;
// Pour une vraie vue isométrique, on utilise souvent une caméra Orthographique, 
// mais une PerspectiveCamera avec un angle spécifique fonctionne aussi pour un style "3D".
// Ici on positionne la caméra en hauteur et en angle (45 degrés environ)
const camera = new THREE.PerspectiveCamera(45, aspect, 0.1, 1000);
camera.position.set(20, 20, 20); // Position x, y, z égales pour l'isométrie
camera.lookAt(0, 0, 0);

// Initialisation du rendu
const renderer = new THREE.WebGLRenderer({ 
    antialias: true,
    powerPreference: "high-performance" // Optimisation pour les GPU dédiés
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Limiter le ratio de pixels pour les écrans haute densité
renderer.shadowMap.enabled = true; // Activer les ombres
renderer.shadowMap.type = THREE.PCFShadowMap; // Plus performant que PCFSoftShadowMap
document.body.appendChild(renderer.domElement);

// Ajout des contrôles OrbitControls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.maxPolarAngle = Math.PI / 2; // Empêcher de passer sous le sol

// Éclairage
// Lumière ambiante douce
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Un peu plus lumineux sans brouillard
scene.add(ambientLight);

// Lampe principale (Plafonnier)
const mainLight = new THREE.PointLight(0xffaa00, 500, 100);
mainLight.position.set(0, 15, 0); // Positionnée en hauteur au centre
mainLight.castShadow = true;
mainLight.shadow.bias = -0.0001;
mainLight.shadow.mapSize.width = 1024; // Réduit de 2048 pour la performance
mainLight.shadow.mapSize.height = 1024;
scene.add(mainLight);

// SpotLights pour l'ambiance exposition (Optionnel, pour mettre en valeur des zones)
function createSpotLight(x, y, z, targetX, targetY, targetZ, intensity = 100) {
    const spotLight = new THREE.SpotLight(0xffaa00, intensity);
    spotLight.position.set(x, y, z);
    spotLight.target.position.set(targetX, targetY, targetZ);
    spotLight.angle = Math.PI / 6;
    spotLight.penumbra = 0.5;
    spotLight.decay = 2;
    spotLight.distance = 50;
    spotLight.castShadow = true;
    
    scene.add(spotLight);
    scene.add(spotLight.target);
    
    // Helper pour visualiser la lumière (à commenter en prod)
    // const spotLightHelper = new THREE.SpotLightHelper(spotLight);
    // scene.add(spotLightHelper);
}

// Création de quelques spots d'exemple (Désactivés pour laisser place à la lampe principale)
// createSpotLight(5, 10, 5, 0, 0, 0, 200);   // Centre
// createSpotLight(-5, 8, -5, -2, 0, -2, 150); // Coin 1
// createSpotLight(5, 8, -5, 2, 0, -2, 150);   // Coin 2

// Chargement du modèle 3D (Galerie / Plateau)
const loader = new GLTFLoader();
let galleryModel;

// Note: Assurez-vous que votre fichier s'appelle 'gallery.glb' ou modifiez le nom ici
loader.load('../isometric_room.glb', function (gltf) {
    galleryModel = gltf.scene;
    
    // Agrandir le modèle
    galleryModel.scale.set(3, 3, 3);

    // Activer les ombres sur le modèle
    galleryModel.traverse((child) => {
        if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
        }
    });

    // Centrer le modèle
    const box = new THREE.Box3().setFromObject(galleryModel);
    const center = box.getCenter(new THREE.Vector3());
    galleryModel.position.x += (galleryModel.position.x - center.x);
    galleryModel.position.y += (galleryModel.position.y - center.y);
    galleryModel.position.z += (galleryModel.position.z - center.z);

    scene.add(galleryModel);

    // DEBUG: Afficher les noms des objets dans la console pour aider à configurer les zones
    console.log("--- Objets trouvés dans le modèle ---");
    galleryModel.traverse((child) => {
        if (child.isMesh) {
            console.log("Nom de l'objet :", child.name);
        }
    });
    console.log("-------------------------------------");

}, undefined, function (error) {
    console.error('Erreur de chargement du modèle:', error);
    // Fallback si le modèle n'est pas trouvé (pour visualiser quelque chose)
    const geometry = new THREE.PlaneGeometry(20, 20);
    const material = new THREE.MeshStandardMaterial({ color: 0x444444 });
    const plane = new THREE.Mesh(geometry, material);
    plane.rotation.x = -Math.PI / 2;
    plane.receiveShadow = true;
    scene.add(plane);
    
    const boxGeo = new THREE.BoxGeometry(2, 2, 2);
    const boxMat = new THREE.MeshStandardMaterial({ color: 0xff0000 });
    const box = new THREE.Mesh(boxGeo, boxMat);
    box.name = "Cube"; // Nom pour l'interaction
    box.position.y = 1;
    box.castShadow = true;
    scene.add(box);
});

// Gestion du redimensionnement
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// --- NAVIGATION ---

// Configuration des zones
// On cible maintenant des objets spécifiques du modèle 3D
const zones = {
    intro: {
        position: { x: 20, y: 20, z: 20 },
        target: { x: 0, y: 0, z: 0 }
    },
    web: {
        targetObject: "Computer", // Nom de l'objet dans le GLB (à vérifier dans la console)
        offset: { x: 10, y: 400, z: -3 }, // Centré et zoomé
        // Fallback si l'objet n'est pas trouvé
        position: { x: 0, y: 0, z: 0 },
        target: { x: 0, y: 0, z: 0 }
    },
    design: {
        targetObject: "Shelf", // Nom de l'objet dans le GLB
        offset: { x: 10, y: 8, z: 9 }, // Dézoomé pour mieux voir l'étagère
        // Fallback
        position: { x: -8, y: 8, z: 8 },
        target: { x: 0, y: 0, z: 0 }
    },
    contact: {
        targetObject: "Door", // Nom de l'objet dans le GLB
        offset: { x: 10, y: 1, z: 3 }, // Ajusté pour être plus "devant"
        // Fallback
        position: { x: 2, y: 1, z: 1 },
        target: { x: 0, y: 1, z: 0 }
    }
};

function goToZone(zoneName) {
    const zone = zones[zoneName];
    if (!zone) return;

    // Désactiver les contrôles pendant l'animation
    controls.enabled = false;

    let targetPosition = zone.target;
    let cameraPosition = zone.position;

    // Si la zone cible un objet spécifique
    if (zone.targetObject) {
        // Recherche de l'objet dans la scène (récursivement)
        let object = scene.getObjectByName(zone.targetObject);
        
        // Recherche partielle si le nom exact n'est pas trouvé (ex: "Computer_01" pour "Computer")
        if (!object) {
            scene.traverse((child) => {
                if (child.isMesh && child.name.includes(zone.targetObject)) {
                    object = child;
                }
            });
        }

        if (object) {
            // Calculer le centre de l'objet
            const box = new THREE.Box3().setFromObject(object);
            const center = box.getCenter(new THREE.Vector3());
            
            targetPosition = { x: center.x, y: center.y, z: center.z };
            
            // Calculer la position de la caméra relative à l'objet
            cameraPosition = {
                x: center.x + (zone.offset ? zone.offset.x : 5),
                y: center.y + (zone.offset ? zone.offset.y : 5),
                z: center.z + (zone.offset ? zone.offset.z : 5)
            };
        } else {
            console.warn(`Objet "${zone.targetObject}" non trouvé pour la zone "${zoneName}". Vérifiez les noms dans la console.`);
            // Si l'objet n'est pas trouvé, on ne fait rien ou on va à une position par défaut
            if (!zone.position) return;
            targetPosition = zone.target;
            cameraPosition = zone.position;
        }
    }

    // Animation de la position de la caméra
    gsap.to(camera.position, {
        x: cameraPosition.x,
        y: cameraPosition.y,
        z: cameraPosition.z,
        duration: 2,
        ease: "power2.inOut"
    });

    // Animation de la cible des contrôles (où regarde la caméra)
    gsap.to(controls.target, {
        x: targetPosition.x,
        y: targetPosition.y,
        z: targetPosition.z,
        duration: 2,
        ease: "power2.inOut",
        onUpdate: () => {
            controls.update();
        },
        onComplete: () => {
            controls.enabled = true;
        }
    });
}

// Écouteurs d'événements pour les boutons
document.querySelectorAll('#menu button').forEach(button => {
    button.addEventListener('click', (e) => {
        const zone = e.target.dataset.zone;
        goToZone(zone);
        // Cacher le panneau de description si on change de zone via le menu
        hideDescription();
    });
});

// --- INTERACTIVITÉ (RAYCASTER) ---

const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();
let hoveredObject = null;

// Données des objets interactifs (à adapter selon les noms dans votre modèle 3D)
const interactiveObjectsData = {
    'Frame_01': {
        title: 'Projet E-Commerce',
        description: 'Une plateforme complète de vente en ligne réalisée avec React et Node.js. Intégration de Stripe pour les paiements.'
    },
    'Pedestal_01': {
        title: 'Sculpture Abstraite',
        description: 'Exploration des formes géométriques en 3D. Modélisation sous Blender.'
    },
    // Fallback pour les objets de test
    'Cube': {
        title: 'Cube de Test',
        description: 'Ceci est un objet de test généré par le code si le modèle n\'est pas chargé.'
    }
};

// Gestion du survol et du clic
window.addEventListener('pointermove', onPointerMove);
window.addEventListener('click', onClick);

function onPointerMove(event) {
    // Calculer la position de la souris normalisée (-1 à +1)
    pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
    pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;

    // Lancer le rayon
    raycaster.setFromCamera(pointer, camera);

    // Tester les intersections
    const intersects = raycaster.intersectObjects(scene.children, true);

    if (intersects.length > 0) {
        const object = intersects[0].object;
        
        // Vérifier si l'objet est interactif (ici on vérifie s'il a des données associées ou un nom spécifique)
        // Vous pouvez aussi utiliser une convention de nommage comme object.name.startsWith('Interact_')
        if (interactiveObjectsData[object.name] || object.name.includes('Interact')) {
            document.body.style.cursor = 'pointer';
            hoveredObject = object;
            
            // Petit effet de surbrillance optionnel
            if (object.material && object.material.emissive) {
                object.currentHex = object.currentHex || object.material.emissive.getHex();
                object.material.emissive.setHex(0x333333);
            }
        } else {
            document.body.style.cursor = 'default';
            if (hoveredObject && hoveredObject.material && hoveredObject.material.emissive) {
                hoveredObject.material.emissive.setHex(hoveredObject.currentHex);
            }
            hoveredObject = null;
        }
    } else {
        document.body.style.cursor = 'default';
        if (hoveredObject && hoveredObject.material && hoveredObject.material.emissive) {
            hoveredObject.material.emissive.setHex(hoveredObject.currentHex);
        }
        hoveredObject = null;
    }
}

// Marqueur de clic (Cercle au sol)
const markerGeometry = new THREE.RingGeometry(0.2, 0.3, 32);
const markerMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.5, side: THREE.DoubleSide });
const clickMarker = new THREE.Mesh(markerGeometry, markerMaterial);
clickMarker.rotation.x = -Math.PI / 2;
clickMarker.visible = false;
scene.add(clickMarker);

function onClick(event) {
    // 1. Si on clique sur un objet interactif
    if (hoveredObject) {
        focusOnObject(hoveredObject);
        return;
    }

    // 2. Sinon, on vérifie si on clique sur le sol pour se déplacer
    // On réutilise le raycaster déjà configuré dans onPointerMove (ou on le met à jour si besoin)
    raycaster.setFromCamera(pointer, camera);
    const intersects = raycaster.intersectObjects(scene.children, true);

    if (intersects.length > 0) {
        const intersect = intersects[0];
        
        // On considère que c'est le sol si la normale pointe vers le haut (Y > 0.5)
        // et que ce n'est pas un objet interactif
        if (intersect.face.normal.y > 0.5) {
            moveToPoint(intersect.point);
        }
    }
}

function moveToPoint(point) {
    // Afficher le marqueur
    clickMarker.position.copy(point);
    clickMarker.position.y += 0.05; // Légèrement au-dessus du sol
    clickMarker.visible = true;
    clickMarker.scale.set(0, 0, 0);

    // Animation d'apparition du marqueur
    gsap.to(clickMarker.scale, { x: 1, y: 1, z: 1, duration: 0.3, ease: "back.out(1.7)" });

    // Calculer le décalage actuel de la caméra par rapport à la cible
    const offset = new THREE.Vector3().subVectors(camera.position, controls.target);
    
    // Nouvelle cible : le point cliqué
    const newTarget = new THREE.Vector3(point.x, point.y, point.z);
    
    // Nouvelle position de la caméra (on garde le même angle/zoom)
    const newPosition = new THREE.Vector3().addVectors(newTarget, offset);

    // Limites simples (Bounding Box du modèle si disponible, sinon valeurs arbitraires)
    // Ici on limite arbitrairement pour l'exemple si pas de modèle chargé
    const limit = 30;
    if (newPosition.x > limit || newPosition.x < -limit || newPosition.z > limit || newPosition.z < -limit) {
        // Si hors limites, on annule (ou on pourrait clamper)
        // clickMarker.visible = false;
        // return;
    }

    controls.enabled = false;

    // Animation simultanée de la cible et de la caméra
    gsap.to(controls.target, {
        x: newTarget.x,
        y: newTarget.y,
        z: newTarget.z,
        duration: 1.5,
        ease: "power2.inOut",
        onUpdate: () => controls.update()
    });

    gsap.to(camera.position, {
        x: newPosition.x,
        y: newPosition.y,
        z: newPosition.z,
        duration: 1.5,
        ease: "power2.inOut",
        onComplete: () => {
            controls.enabled = true;
            // Faire disparaître le marqueur
            gsap.to(clickMarker.scale, { 
                x: 0, y: 0, z: 0, 
                duration: 0.3, 
                onComplete: () => { clickMarker.visible = false; } 
            });
        }
    });
}

function focusOnObject(object) {
    // Récupérer les données de l'objet
    const data = interactiveObjectsData[object.name] || {
        title: object.name,
        description: "Aucune description disponible pour cet objet."
    };

    // Afficher le panneau
    showDescription(data.title, data.description);

    // Calculer la position cible de la caméra
    // On se place devant l'objet, légèrement en hauteur
    const targetPosition = new THREE.Vector3();
    object.getWorldPosition(targetPosition);
    
    // Position de la caméra : on garde la direction actuelle mais on se rapproche
    // Ou on définit une position fixe relative à l'objet (ex: 2 unités devant et 1 unité plus haut)
    const offset = new THREE.Vector3(3, 2, 3); // Ajustez selon l'échelle de votre modèle
    const cameraPosition = targetPosition.clone().add(offset);

    controls.enabled = false;

    // Animation vers l'objet
    gsap.to(camera.position, {
        x: cameraPosition.x,
        y: cameraPosition.y,
        z: cameraPosition.z,
        duration: 1.5,
        ease: "power2.inOut"
    });

    gsap.to(controls.target, {
        x: targetPosition.x,
        y: targetPosition.y,
        z: targetPosition.z,
        duration: 1.5,
        ease: "power2.inOut",
        onUpdate: () => controls.update(),
        onComplete: () => {
            controls.enabled = true;
        }
    });
}

// Gestion du panneau de description
const descPanel = document.getElementById('description-panel');
const descTitle = document.getElementById('desc-title');
const descContent = document.getElementById('desc-content');
const closeBtn = document.getElementById('close-btn');

function showDescription(title, description) {
    descTitle.textContent = title;
    descContent.textContent = description;
    descPanel.classList.remove('hidden');
}

function hideDescription() {
    descPanel.classList.add('hidden');
    // Optionnel : Dézoomer ou retourner à la vue précédente
}

closeBtn.addEventListener('click', () => {
    hideDescription();
    // Retour à la vue "Intro" ou recul de la caméra
    goToZone('intro');
});

// Boucle d'animation
function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}

animate();
