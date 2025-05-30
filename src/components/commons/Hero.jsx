import React, { useEffect, useState } from 'react';
import { ProfileCard, RevealOnScroll } from './';
import cardData from '../../data/cardHeroData.json';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import PsychologyIcon from '@mui/icons-material/Psychology';
import WebIcon from '@mui/icons-material/Web';
import SecurityIcon from '@mui/icons-material/Security';
import LayersIcon from '@mui/icons-material/Layers';

const Hero = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    // Détecter si l'appareil est mobile ou petit écran
    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 640);
            setIsSmallScreen(window.innerWidth < 768);
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        return () => {
            window.removeEventListener('resize', checkScreenSize);
        };
    }, []);

    return (
        <section className={`relative w-full overflow-hidden bg-gradient-to-br from-[#0a0a0a] via-[#121212] to-[#0a0a0a]
                           ${isMobile ? 'min-h-[40dvh] pt-16 pb-12' : 'min-h-[90dvh] pt-20 pb-6 sm:pt-24 md:pt-16 lg:py-12'}`}>
            {/* Background statique moderne avec effets de flou */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                {/* Grille fine */}
                <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

                {/* Formes floues avec dégradés - optimisées pour mobile */}
                <div className={`absolute rounded-full 
                              bg-gradient-to-br from-[#DAA520]/5 to-[#FFD700]/10 
                              blur-[60px] opacity-60
                              ${isMobile ? 'top-[5%] right-[-15%] w-[60vw] h-[60vw]' : 'top-[-5%] right-[-10%] w-[40vw] h-[40vw]'}`}></div>

                <div className={`absolute 
                              bg-gradient-to-tr from-white/5 to-white/10 
                              rounded-[40%] blur-[80px] opacity-30
                              ${isMobile ? 'top-[10%] left-[-25%] w-[70vw] h-[40vw]' : 'top-[20%] left-[-15%] w-[50vw] h-[30vw]'}`}></div>

                <div className={`absolute 
                              bg-gradient-to-tr from-[#8B5CF6]/5 to-[#A78BFA]/10 
                              rounded-[30%] blur-[70px] opacity-50
                              ${isMobile ? 'bottom-[-5%] left-[10%] w-[80vw] h-[50vw]' : 'bottom-[-10%] left-[20%] w-[60vw] h-[40vw]'}`}></div>

                {/* Lignes horizontales subtiles - réduites sur mobile */}
                <div className={`absolute left-0 w-full h-[1px] 
                              bg-gradient-to-r from-transparent via-[#DAA520]/15 to-transparent
                              ${isMobile ? 'top-[25%]' : 'top-[30%]'}`}></div>

                <div className={`absolute left-0 w-full h-[1px] 
                              bg-gradient-to-r from-transparent via-white/15 to-transparent
                              ${isMobile ? 'top-[55%]' : 'top-[60%]'}`}></div>

                {/* Effet de vignette */}
                <div className="absolute inset-0 bg-radial-vignette"></div>

                {/* Motif subtil de points - densité réduite sur mobile */}
                <div className={`absolute inset-0 opacity-10 
                              ${isMobile ? 'bg-dot-pattern-sm' : 'bg-dot-pattern'}`}></div>

                {/* Effet glassmorphisme dans les coins - taille réduite sur mobile */}
                <div className={`absolute rounded-2xl rotate-[30deg]
                              bg-white/5 backdrop-blur-sm 
                              border-t border-l border-white/10 opacity-30
                              ${isMobile ? 'top-[5%] right-[3%] w-[120px] h-[120px]' : 'top-[10%] right-[5%] w-[200px] h-[200px]'}`}></div>
            </div>

            {/* Icônes de compétences flottantes */}
            <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
                {/* Icônes de développement */}
                <RevealOnScroll delay={250} direction="left">
                    <div className="absolute top-[18%] left-[15%] transform -rotate-12 opacity-10 text-[#DAA520] hidden sm:block">
                        <CodeIcon sx={{ fontSize: '2rem' }} />
                    </div>
                </RevealOnScroll>
                <RevealOnScroll delay={350} direction="left">
                    <div className="absolute top-[28%] left-[22%] transform rotate-6 opacity-8 text-[#DAA520] hidden sm:block">
                        <WebIcon sx={{ fontSize: '1.7rem' }} />
                    </div>
                </RevealOnScroll>

                {/* Icônes DevOps */}
                <RevealOnScroll delay={250} direction="right">
                    <div className="absolute top-[35%] right-[20%] transform rotate-15 opacity-10 text-white hidden sm:block">
                        <StorageIcon sx={{ fontSize: '2rem' }} />
                    </div>
                </RevealOnScroll>
                <RevealOnScroll delay={350} direction="right">
                    <div className="absolute top-[45%] right-[15%] transform -rotate-10 opacity-8 text-white hidden sm:block">
                        <SecurityIcon sx={{ fontSize: '1.7rem' }} />
                    </div>
                </RevealOnScroll>

                {/* Icônes AI */}
                <RevealOnScroll delay={450} direction="bottom">
                    <div className="absolute bottom-[25%] left-[45%] transform rotate-5 opacity-10 text-[#8B5CF6] hidden sm:block">
                        <PsychologyIcon sx={{ fontSize: '2rem' }} />
                    </div>
                </RevealOnScroll>
                <RevealOnScroll delay={550} direction="bottom">
                    <div className="absolute bottom-[35%] left-[55%] transform -rotate-5 opacity-8 text-[#8B5CF6] hidden sm:block">
                        <LayersIcon sx={{ fontSize: '1.7rem' }} />
                    </div>
                </RevealOnScroll>
            </div>

            {/* Éléments décoratifs géométriques */}
            <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
                {/* Zone Developer */}
                <RevealOnScroll delay={150} direction="left">
                    <div className="absolute top-[10%] left-[10%] w-6 h-6 border-l-2 border-t-2 border-[#DAA520]/20 hidden sm:block"></div>
                </RevealOnScroll>
                <RevealOnScroll delay={250} direction="left">
                    <div className="absolute top-[40%] left-[5%] w-2 h-16 bg-gradient-to-b from-[#DAA520]/10 to-transparent hidden sm:block"></div>
                </RevealOnScroll>

                {/* Zone DevOps */}
                <RevealOnScroll delay={150} direction="right">
                    <div className="absolute top-[15%] right-[10%] w-6 h-6 border-r-2 border-t-2 border-white/20 hidden sm:block"></div>
                </RevealOnScroll>
                <RevealOnScroll delay={250} direction="right">
                    <div className="absolute top-[35%] right-[8%] w-12 h-2 bg-gradient-to-r from-transparent to-white/10 hidden sm:block"></div>
                </RevealOnScroll>

                {/* Zone AI */}
                <RevealOnScroll delay={350} direction="bottom">
                    <div className="absolute bottom-[20%] left-[38%] w-24 h-24 rounded-full border border-dashed border-[#8B5CF6]/15 hidden sm:block"></div>
                </RevealOnScroll>
                <RevealOnScroll delay={450} direction="bottom">
                    <div className="absolute bottom-[15%] left-[60%] w-3 h-3 rounded-full bg-[#8B5CF6]/10 hidden sm:block"></div>
                </RevealOnScroll>
            </div>

            {/* Main content container with responsive padding */}
            <div className={`container mx-auto relative z-10 h-full flex flex-col justify-center 
                           ${isMobile ? 'px-3 py-2' : 'px-4'}`}>

                {/* Description sur la gauche - visible uniquement sur écrans moyens et grands */}
                <RevealOnScroll delay={600} direction="left">
                    <div className="hidden md:block absolute left-8 lg:left-12 xl:left-16 top-[366px] max-w-[180px] lg:max-w-[220px] xl:max-w-[250px] z-10">
                        <p className="text-white/80 text-sm lg:text-base font-light leading-relaxed">
                            <span className="text-[#DAA520] font-medium">Passionate</span> about web development,
                            DevOps infrastructure and artificial intelligence, I create
                            <span className="text-[#8B5CF6]"> innovative</span> and <span className="text-white">scalable</span> solutions for the modern web.
                        </p>
                        {/* Ligne de connexion */}
                        <div className="absolute top-1/2 right-0 transform translate-x-full -translate-y-1/2 w-6 lg:w-8 xl:w-10 h-[1px] bg-gradient-to-r from-[#DAA520]/50 to-transparent"></div>
                    </div>
                </RevealOnScroll>

                {/* Titre principal - container responsive */}
                <div className="w-full max-w-[1920px] mx-auto">
                    {/* Ajustement vertical responsive pour mobile */}
                    <div className={`flex flex-col w-full 
                                  ${isMobile ? 'space-y-0' : 'space-y-2 sm:space-y-0 sm:space-y-[-10px] md:space-y-[-12px] lg:space-y-[-16px] xl:space-y-[-20px] 2xl:space-y-[-24px]'}`}>
                        {/* Ligne 1: Developer à gauche */}
                        <div className="text-center sm:text-left sm:pl-3 md:pl-20 lg:pl-28 xl:pl-36 relative">
                            {/* Élément décoratif */}
                            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-12 bg-gradient-to-r from-[#DAA520]/30 to-transparent hidden sm:block"></div>

                            {/* ProfileCard uniquement pour desktop - sans RevealOnScroll pour préserver l'interactivité */}
                            {!isMobile && (
                                <div className="animate-fade-in-top">
                                    <ProfileCard data={cardData} />
                                </div>
                            )}

                            <RevealOnScroll delay={100} direction={isMobile ? "bottom" : "left"}>
                                <h1 className={`font-black leading-[1] sm:leading-[1.05] md:leading-[1.1] 
                                            text-transparent bg-clip-text bg-gradient-to-br from-[#DAA520] to-[#FFD700]
                                            tracking-tight sm:tracking-[-0.02em] transform-gpu
                                            ${isMobile ? 'text-[32px] xs:text-[36px] mt-4' : 'text-[42px] xs:text-[48px] sm:text-[80px] md:text-[100px] lg:text-[140px] xl:text-[180px] 2xl:text-[220px] min-[1920px]:text-[260px]'}`}>
                                    Developer
                                </h1>
                            </RevealOnScroll>
                        </div>

                        {/* Ligne 2: DevOps à droite */}
                        <div className="text-center sm:text-right sm:pr-3 md:pr-4 lg:pr-6 relative">
                            {/* Élément décoratif */}
                            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1 h-12 bg-gradient-to-l from-white/30 to-transparent hidden sm:block"></div>

                            <RevealOnScroll delay={200} direction={isMobile ? "bottom" : "right"}>
                                <h1 className={`font-black leading-[1] sm:leading-[1.05] md:leading-[1.1] 
                                            text-white
                                            tracking-tight sm:tracking-[-0.02em] transform-gpu
                                            ${isMobile ? 'text-[32px] xs:text-[36px] mt-1' : 'text-[42px] xs:text-[48px] sm:text-[80px] md:text-[100px] lg:text-[140px] xl:text-[180px] 2xl:text-[220px] min-[1920px]:text-[260px]'}`}>
                                    DevOps
                                </h1>
                            </RevealOnScroll>
                        </div>

                        {/* Ligne 3: & AI au milieu */}
                        <div className="text-center relative">
                            {/* Élément décoratif */}
                            <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-transparent via-[#8B5CF6]/30 to-transparent hidden sm:block"></div>

                            <RevealOnScroll delay={300} direction="bottom">
                                <h1 className={`font-black leading-[1] sm:leading-[1.05] md:leading-[1.1] 
                                            text-[#8B5CF6]
                                            tracking-tight sm:tracking-[-0.02em] transform-gpu
                                            ${isMobile ? 'text-[32px] xs:text-[36px] mt-1' : 'text-[42px] xs:text-[48px] sm:text-[80px] md:text-[100px] lg:text-[140px] xl:text-[180px] 2xl:text-[220px] min-[1920px]:text-[260px]'}`}>
                                    & AI
                                </h1>
                            </RevealOnScroll>
                        </div>
                    </div>
                </div>

                {/* ProfileCard pour mobile - placé après le texte avec taille réduite */}
                {isMobile && (
                    <RevealOnScroll delay={400} direction="bottom">
                        <div className="mt-2 relative flex justify-center items-center">
                            <ProfileCard data={cardData} className="transform-none static mx-auto scale-75" />
                        </div>
                    </RevealOnScroll>
                )}

                {/* Description pour mobile - placée sous le titre Developer */}
                {isMobile && (
                    <RevealOnScroll delay={200} direction="bottom">
                        <div className="mt-10 text-center px-3">
                            <p className="text-white/70 text-[10px] xs:text-xs leading-tight">
                                <span className="text-[#DAA520]">Passionate</span> about web development, DevOps and AI, creating
                                <span className="text-[#8B5CF6]"> innovative</span> solutions for the modern web.
                            </p>
                        </div>
                    </RevealOnScroll>
                )}
            </div>
        </section>
    );
};

export default Hero;