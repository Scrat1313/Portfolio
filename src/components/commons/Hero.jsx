import React, { useEffect, useRef, useState } from 'react';
import { ProfileCard } from './';
import cardData from '../../data/cardHeroData.json';

const Hero = () => {
    const [isMobile, setIsMobile] = useState(false);
    const backgroundRef = useRef(null);

    // Détecter si l'appareil est mobile
    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth < 640);
        };

        checkIfMobile();
        window.addEventListener('resize', checkIfMobile);

        return () => {
            window.removeEventListener('resize', checkIfMobile);
        };
    }, []);

    // Animation du fond stylé
    useEffect(() => {
        const backgroundElement = backgroundRef.current;
        if (!backgroundElement) return;

        // Variables pour les formes qui apparaissent
        const shapes = [];
        const maxShapes = 15;
        const colors = [
            'rgba(218, 165, 32, 0.08)',  // Or
            'rgba(255, 255, 255, 0.05)', // Blanc
            'rgba(139, 92, 246, 0.07)',  // Violet
            'rgba(59, 130, 246, 0.06)'   // Bleu
        ];

        // Créer une forme
        const createShape = () => {
            const size = Math.random() * 150 + 50;
            const shape = document.createElement('div');

            // Déterminer le type de forme
            const shapeType = Math.floor(Math.random() * 4);

            shape.style.position = 'absolute';
            shape.style.width = `${size}px`;
            shape.style.height = `${size}px`;
            shape.style.left = `${Math.random() * 100}%`;
            shape.style.top = `${Math.random() * 100}%`;
            shape.style.background = colors[Math.floor(Math.random() * colors.length)];
            shape.style.opacity = '0';
            shape.style.transform = 'scale(0.8)';
            shape.style.transition = 'opacity 2s, transform 2s';
            shape.style.zIndex = '0';
            shape.style.filter = 'blur(20px)';

            // Différents types de formes
            switch (shapeType) {
                case 0: // Circle
                    shape.style.borderRadius = '50%';
                    break;
                case 1: // Rounded square
                    shape.style.borderRadius = '30%';
                    break;
                case 2: // Polygon (hexagon)
                    shape.style.clipPath = 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)';
                    break;
                case 3: // Polygon (triangle)
                    shape.style.clipPath = 'polygon(50% 0%, 100% 100%, 0% 100%)';
                    break;
            }

            backgroundElement.appendChild(shape);

            // Animer l'apparition
            setTimeout(() => {
                shape.style.opacity = '1';
                shape.style.transform = 'scale(1)';
            }, 100);

            shapes.push({
                element: shape,
                lifespan: 0,
                maxLifespan: Math.random() * 20000 + 10000, // 10-30 secondes
                update: function (dt) {
                    this.lifespan += dt;

                    // Disparition progressive à 75% de la durée de vie
                    if (this.lifespan > this.maxLifespan * 0.75) {
                        const opacity = 1 - (this.lifespan - this.maxLifespan * 0.75) / (this.maxLifespan * 0.25);
                        this.element.style.opacity = `${Math.max(0, opacity)}`;
                    }

                    // Supprimer après la durée de vie maximale
                    if (this.lifespan >= this.maxLifespan) {
                        backgroundElement.removeChild(this.element);
                        return true; // marquer pour suppression
                    }
                    return false;
                }
            });
        };

        // Animation principale et gestion des formes
        let lastTime = Date.now();
        let shapeTimer = 0;

        const animate = () => {
            const currentTime = Date.now();
            const deltaTime = currentTime - lastTime;
            lastTime = currentTime;

            // Ajouter occasionnellement de nouvelles formes
            shapeTimer += deltaTime;
            if (shapeTimer > 2000 && shapes.length < maxShapes) { // Nouvelle forme toutes les 2 secondes
                createShape();
                shapeTimer = 0;
            }

            // Mettre à jour et nettoyer les formes
            for (let i = shapes.length - 1; i >= 0; i--) {
                const shouldRemove = shapes[i].update(deltaTime);
                if (shouldRemove) {
                    shapes.splice(i, 1);
                }
            }

            requestAnimationFrame(animate);
        };

        // Créer quelques formes initiales
        for (let i = 0; i < 5; i++) {
            createShape();
        }

        // Démarrer l'animation
        animate();

        // Nettoyage
        return () => {
            shapes.forEach(shape => {
                if (backgroundElement.contains(shape.element)) {
                    backgroundElement.removeChild(shape.element);
                }
            });
        };
    }, []);

    return (
        <section className="relative min-h-[100dvh] w-full overflow-hidden bg-gradient-to-br from-[#0a0a0a] via-[#121212] to-[#0a0a0a] pt-24 pb-6 sm:pt-28 md:pt-20 lg:py-16">
            {/* Background container */}
            <div ref={backgroundRef} className="absolute inset-0 z-0 overflow-hidden">
                {/* Grille fine */}
                <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

                {/* Lignes lumineuses horizontales */}
                <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#DAA520]/20 to-transparent"></div>
                <div className="absolute top-2/3 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#8B5CF6]/20 to-transparent"></div>

                {/* Code binaire subtile en arrière-plan */}
                <div className="absolute inset-0 text-[10px] text-[#222222]/20 font-mono select-none overflow-hidden leading-[1.2]">
                    {Array(20).fill().map((_, i) => (
                        <div key={i} style={{
                            position: 'absolute',
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            transform: 'rotate(90deg)'
                        }}>
                            {Array(20).fill().map((_, j) => (
                                Math.random() > 0.5 ? '1' : '0'
                            )).join('')}
                        </div>
                    ))}
                </div>
            </div>

            {/* Main content container with responsive padding */}
            <div className="container mx-auto relative z-10 h-full flex flex-col justify-center px-4">
                {/* Titre principal - container responsive */}
                <div className="w-full max-w-[1920px] mx-auto">
                    {/* Ajustement vertical responsive pour mobile */}
                    <div className="flex flex-col w-full space-y-4 sm:space-y-0 
                                  sm:space-y-[-10px] md:space-y-[-15px] lg:space-y-[-20px] 
                                  xl:space-y-[-25px] 2xl:space-y-[-30px]">
                        {/* Ligne 1: Developer à gauche */}
                        <div className="text-center sm:text-left sm:pl-3 md:pl-4 lg:pl-6 relative">
                            {/* ProfileCard uniquement pour desktop */}
                            {!isMobile && <ProfileCard data={cardData} />}

                            <h1 className="text-[48px] xs:text-[55px] sm:text-[90px] md:text-[120px] 
                                         lg:text-[160px] xl:text-[200px] 2xl:text-[240px] min-[1920px]:text-[280px]
                                         font-black leading-[1] sm:leading-[1.05] md:leading-[1.1] 
                                         text-transparent bg-clip-text bg-gradient-to-br from-[#DAA520] to-[#FFD700]
                                         tracking-tight sm:tracking-[-0.02em] transform-gpu">
                                Developer
                            </h1>
                        </div>

                        {/* Ligne 2: DevOps à droite */}
                        <div className="text-center sm:text-right sm:pr-3 md:pr-4 lg:pr-6">
                            <h1 className="text-[48px] xs:text-[55px] sm:text-[90px] md:text-[120px] 
                                         lg:text-[160px] xl:text-[200px] 2xl:text-[240px] min-[1920px]:text-[280px]
                                         font-black leading-[1] sm:leading-[1.05] md:leading-[1.1] 
                                         text-transparent bg-clip-text bg-gradient-to-r from-white/90 to-white/60
                                         tracking-tight sm:tracking-[-0.02em] transform-gpu">
                                DevOps
                            </h1>
                        </div>

                        {/* Ligne 3: & AI au milieu */}
                        <div className="text-center relative">
                            <h1 className="text-[48px] xs:text-[55px] sm:text-[90px] md:text-[120px] 
                                         lg:text-[160px] xl:text-[200px] 2xl:text-[240px] min-[1920px]:text-[280px]
                                         font-black leading-[1] sm:leading-[1.05] md:leading-[1.1] 
                                         text-transparent bg-clip-text bg-gradient-to-br from-[#8B5CF6] to-[#A78BFA]
                                         tracking-tight sm:tracking-[-0.02em] transform-gpu">
                                & AI
                            </h1>
                        </div>
                    </div>
                </div>

                {/* ProfileCard pour mobile - placé après le texte */}
                {isMobile && (
                    <div className="mt-8 relative flex justify-center items-center">
                        <ProfileCard data={cardData} className="transform-none static mx-auto" />
                    </div>
                )}
            </div>
        </section>
    );
};

export default Hero;