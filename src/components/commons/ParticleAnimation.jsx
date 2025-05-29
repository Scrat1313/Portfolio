import { useEffect, useRef } from 'react';

const ParticleAnimation = () => {
    const canvasRef = useRef(null);
    const currentDateTime = "2025-05-29 13:35:51";
    const username = "Scrat1313";

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');

        // Ajuster la taille du canvas pour occuper tout l'écran
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            // Définir une zone de départ étendue pour les particules
            const extendedBounds = {
                left: -canvas.width * 0.5,
                right: canvas.width * 1.5,
                top: -canvas.height * 0.5,
                bottom: canvas.height * 1.5
            };

            return extendedBounds;
        };

        const extendedBounds = resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Configuration du quadrillage FIXE
        const gridSize = 200; // Grande taille des cellules du quadrillage
        const gridOpacity = 0.08; // Opacité de base du quadrillage

        // Configuration des particules
        const particleCount = 3;
        const particles = [];

        // Couleurs des particules
        const colors = [
            'rgba(218, 165, 32,',  // Gold
            'rgba(139, 92, 246,',   // Purple
            'rgba(255, 255, 255,'   // White
        ];

        // Calculer les positions des lignes du quadrillage (FIXES)
        const gridLines = {
            horizontal: [],
            vertical: []
        };

        // Pré-calculer les positions fixes des lignes du quadrillage
        for (let x = 0; x <= canvas.width; x += gridSize) {
            gridLines.vertical.push(x);
        }
        for (let y = 0; y <= canvas.height; y += gridSize) {
            gridLines.horizontal.push(y);
        }

        // Fonction pour vérifier si une position est proche d'une ligne de quadrillage
        const isNearGridLine = (x, y, threshold = 10) => {
            // Vérifier la proximité avec les lignes verticales
            for (const gridX of gridLines.vertical) {
                if (Math.abs(x - gridX) <= threshold) {
                    return { isNear: true, type: 'vertical', position: gridX };
                }
            }

            // Vérifier la proximité avec les lignes horizontales
            for (const gridY of gridLines.horizontal) {
                if (Math.abs(y - gridY) <= threshold) {
                    return { isNear: true, type: 'horizontal', position: gridY };
                }
            }

            return { isNear: false };
        };

        // Fonction pour réinitialiser une particule
        const resetParticle = (particle, bounds, colorArray) => {
            const isHorizontal = particle.isHorizontal;
            const color = colorArray[Math.floor(Math.random() * colorArray.length)];
            const opacity = 0.5 + Math.random() * 0.5;

            // Position de départ
            let x, y;

            if (isHorizontal) {
                // Commencer à l'une des extrémités horizontales
                x = particle.speedX > 0 ? bounds.left : bounds.right;
                // Choisir une ligne horizontale aléatoire pour y
                y = gridLines.horizontal[Math.floor(Math.random() * gridLines.horizontal.length)];

                particle.speedX = particle.speedX > 0
                    ? (6 + Math.random() * 4)
                    : -(6 + Math.random() * 4);
                particle.speedY = 0;
            } else {
                // Choisir une ligne verticale aléatoire pour x
                x = gridLines.vertical[Math.floor(Math.random() * gridLines.vertical.length)];
                // Commencer à l'une des extrémités verticales
                y = particle.speedY > 0 ? bounds.top : bounds.bottom;

                particle.speedX = 0;
                particle.speedY = particle.speedY > 0
                    ? (6 + Math.random() * 4)
                    : -(6 + Math.random() * 4);
            }

            particle.x = x;
            particle.y = y;
            particle.color = `${color} ${opacity})`;
            particle.influenceColor = `${color} 0.15)`;
            particle.life = 0;
            particle.state = 'entering';
            particle.transitionProgress = 0;
            particle.delay = Math.random() * 20;
            particle.active = true;
            particle.size = 4 + Math.random() * 5;
            particle.onGridLine = true;
        };

        // Créer les particules qui suivront les lignes du quadrillage
        for (let i = 0; i < particleCount; i++) {
            const color = colors[Math.floor(Math.random() * colors.length)];
            const opacity = 0.5 + Math.random() * 0.5;
            const isHorizontal = i < 2;

            // Position initiale alignée sur le quadrillage
            let x, y;

            if (isHorizontal) {
                x = isHorizontal ? (Math.random() > 0.5 ? extendedBounds.left : extendedBounds.right) : 0;
                // Pour une particule horizontale, choisir une ligne horizontale aléatoire
                y = gridLines.horizontal.length > 0
                    ? gridLines.horizontal[Math.floor(Math.random() * gridLines.horizontal.length)]
                    : Math.floor(Math.random() * canvas.height / gridSize) * gridSize;
            } else {
                // Pour une particule verticale, choisir une ligne verticale aléatoire
                x = gridLines.vertical.length > 0
                    ? gridLines.vertical[Math.floor(Math.random() * gridLines.vertical.length)]
                    : Math.floor(Math.random() * canvas.width / gridSize) * gridSize;
                y = isHorizontal ? 0 : (Math.random() > 0.5 ? extendedBounds.top : extendedBounds.bottom);
            }

            const particle = {
                x,
                y,
                size: 4 + Math.random() * 5,
                color: `${color} ${opacity})`,
                speedX: isHorizontal ? (Math.random() > 0.5 ? 8 : -8) * (0.8 + Math.random() * 0.7) : 0,
                speedY: !isHorizontal ? (Math.random() > 0.5 ? 8 : -8) * (0.8 + Math.random() * 0.7) : 0,
                isHorizontal,
                life: 0,
                maxLife: 300 + Math.random() * 200,
                delay: i * 40,
                active: true,
                state: 'active',
                transitionProgress: 1,
                transitionSpeed: 0.05,
                onGridLine: true // Indique que la particule est sur une ligne de quadrillage
            };

            particles.push(particle);
        }

        // Fonction pour dessiner le quadrillage fixe
        const drawGrid = () => {
            // Dessiner les lignes verticales
            ctx.beginPath();
            for (const x of gridLines.vertical) {
                ctx.moveTo(x, 0);
                ctx.lineTo(x, canvas.height);
            }

            // Dessiner les lignes horizontales
            for (const y of gridLines.horizontal) {
                ctx.moveTo(0, y);
                ctx.lineTo(canvas.width, y);
            }

            ctx.strokeStyle = `rgba(255, 255, 255, ${gridOpacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();

            // Dessiner des points aux intersections pour renforcer le quadrillage
            for (const x of gridLines.vertical) {
                for (const y of gridLines.horizontal) {
                    ctx.beginPath();
                    ctx.arc(x, y, 1.5, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(255, 255, 255, ${gridOpacity * 2})`;
                    ctx.fill();
                }
            }
        };

        // Fonction pour mettre à jour et dessiner les particules
        const updateParticles = () => {
            particles.forEach((particle) => {
                // Gérer le délai d'apparition
                if (particle.delay > 0) {
                    particle.delay--;
                    return;
                }

                particle.active = true;

                // Gestion des transitions fluides
                if (particle.state === 'entering') {
                    particle.transitionProgress += particle.transitionSpeed;
                    if (particle.transitionProgress >= 1) {
                        particle.transitionProgress = 1;
                        particle.state = 'active';
                    }
                } else if (particle.state === 'exiting') {
                    particle.transitionProgress -= particle.transitionSpeed;
                    if (particle.transitionProgress <= 0) {
                        resetParticle(particle, extendedBounds, colors);
                        return;
                    }
                }

                // Calculer l'opacité basée sur l'état
                const opacityFactor = particle.state === 'active' ? 1 : particle.transitionProgress;

                // Dessiner la particule avec un effet de lueur
                ctx.beginPath();
                const glow = ctx.createRadialGradient(
                    particle.x, particle.y, 0,
                    particle.x, particle.y, particle.size * 6
                );

                const baseColor = particle.color.substring(0, particle.color.lastIndexOf(','));
                const glowColor = `${baseColor}, ${opacityFactor})`;

                glow.addColorStop(0, glowColor);
                glow.addColorStop(1, 'rgba(0, 0, 0, 0)');

                ctx.fillStyle = glow;
                ctx.arc(particle.x, particle.y, particle.size * 6, 0, Math.PI * 2);
                ctx.fill();

                // Particule centrale
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                ctx.fillStyle = glowColor;
                ctx.fill();

                // Ajouter un halo interne
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size * 0.6, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${0.8 * opacityFactor})`;
                ctx.fill();

                // Déterminer les prochaines coordonnées
                let nextX = particle.x + particle.speedX;
                let nextY = particle.y + particle.speedY;

                // Mettre à jour la position - uniquement le long des lignes du quadrillage
                if (particle.isHorizontal) {
                    // Les particules horizontales suivent les lignes horizontales
                    particle.x = nextX;
                    // Y reste constant (sur la ligne horizontale)
                } else {
                    // Les particules verticales suivent les lignes verticales
                    // X reste constant (sur la ligne verticale)
                    particle.y = nextY;
                }

                // Incrémenter la vie
                particle.life += 3;

                // Vérifier si la particule doit être réinitialisée
                if (
                    (particle.state === 'active' && particle.life >= particle.maxLife) ||
                    particle.x < extendedBounds.left ||
                    particle.x > extendedBounds.right ||
                    particle.y < extendedBounds.top ||
                    particle.y > extendedBounds.bottom
                ) {
                    if (particle.state === 'active') {
                        particle.state = 'exiting';
                        particle.transitionProgress = 1;
                    }
                }
            });
        };

        // Animation des particules et du quadrillage
        const animate = () => {
            // Effacer le canvas
            ctx.fillStyle = 'rgba(11, 11, 11, 0.95)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Dessiner le quadrillage FIXE d'abord
            drawGrid();

            // Dessiner les particules par dessus
            updateParticles();

            const animationId = requestAnimationFrame(animate);
            return animationId;
        };

        // Redessiner le quadrillage si la fenêtre est redimensionnée
        const handleResize = () => {
            const newBounds = resizeCanvas();
            extendedBounds.left = newBounds.left;
            extendedBounds.right = newBounds.right;
            extendedBounds.top = newBounds.top;
            extendedBounds.bottom = newBounds.bottom;

            // Recalculer les positions des lignes du quadrillage
            gridLines.vertical = [];
            gridLines.horizontal = [];

            for (let x = 0; x <= canvas.width; x += gridSize) {
                gridLines.vertical.push(x);
            }
            for (let y = 0; y <= canvas.height; y += gridSize) {
                gridLines.horizontal.push(y);
            }

            // Réinitialiser les particules pour qu'elles suivent le nouveau quadrillage
            particles.forEach(particle => {
                resetParticle(particle, newBounds, colors);
            });
        };

        window.addEventListener('resize', handleResize);

        const animationId = animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 z-0"
            style={{ pointerEvents: 'none', width: '100vw', height: '100vh' }}
        />
    );
};

export default ParticleAnimation;