import React, { useEffect, useState } from 'react';
import { ProfileCard } from './';
import cardData from '../../data/cardHeroData.json';

const Hero = () => {
    const [isMobile, setIsMobile] = useState(false);

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

    return (
        <section className="relative min-h-[100dvh] w-full overflow-hidden bg-gradient-to-br from-[#0a0a0a] via-[#121212] to-[#0a0a0a] pt-24 pb-6 sm:pt-28 md:pt-20 lg:py-16">
            {/* Background statique moderne avec effets de flou */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                {/* Grille fine */}
                <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

                {/* Formes floues avec dégradés */}
                <div className="absolute top-[-5%] right-[-10%] w-[40vw] h-[40vw] rounded-full 
                              bg-gradient-to-br from-[#DAA520]/5 to-[#FFD700]/10 
                              blur-[60px] opacity-60"></div>

                <div className="absolute top-[20%] left-[-15%] w-[50vw] h-[30vw] 
                              bg-gradient-to-tr from-white/5 to-white/10 
                              rounded-[40%] blur-[80px] opacity-30"></div>

                <div className="absolute bottom-[-10%] left-[20%] w-[60vw] h-[40vw] 
                              bg-gradient-to-tr from-[#8B5CF6]/5 to-[#A78BFA]/10 
                              rounded-[30%] blur-[70px] opacity-50"></div>

                <div className="absolute top-[40%] right-[10%] w-[30vw] h-[30vw] 
                              bg-gradient-to-bl from-[#0284c7]/5 to-[#7dd3fc]/10 
                              rounded-full blur-[90px] opacity-40"></div>

                {/* Lignes horizontales subtiles */}
                <div className="absolute top-[30%] left-0 w-full h-[1px] 
                              bg-gradient-to-r from-transparent via-[#DAA520]/15 to-transparent"></div>

                <div className="absolute top-[60%] left-0 w-full h-[1px] 
                              bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>

                <div className="absolute top-[80%] left-0 w-full h-[1px] 
                              bg-gradient-to-r from-transparent via-[#8B5CF6]/15 to-transparent"></div>

                {/* Effet de vignette */}
                <div className="absolute inset-0 bg-radial-vignette"></div>

                {/* Motif subtil de points */}
                <div className="absolute inset-0 bg-dot-pattern opacity-10"></div>

                {/* Effet glassmorphisme dans les coins */}
                <div className="absolute top-[10%] right-[5%] w-[200px] h-[200px] 
                              rounded-2xl rotate-[30deg]
                              bg-white/5 backdrop-blur-sm 
                              border-t border-l border-white/10
                              opacity-30"></div>

                <div className="absolute bottom-[15%] left-[5%] w-[150px] h-[150px] 
                              rounded-2xl rotate-[-15deg]
                              bg-white/5 backdrop-blur-sm 
                              border-t border-l border-white/10
                              opacity-30"></div>
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