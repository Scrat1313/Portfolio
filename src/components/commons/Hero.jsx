import React, { useEffect, useState } from 'react';
import { ProfileCard, RevealOnScroll, TrueFocus, CircularText } from './';
import cardData from '../../data/cardHeroData.json';
// Material UI Icons
import DownloadIcon from '@mui/icons-material/Download';
import GetAppIcon from '@mui/icons-material/GetApp';

const Hero = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [activeTextIndex, setActiveTextIndex] = useState(0); // Controls which text is active
    const [isDownloading, setIsDownloading] = useState(false); // État pour le feedback visuel au clic

    // Detect if device is mobile or small screen
    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 640);
            setIsSmallScreen(window.innerWidth < 1024);
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        return () => {
            window.removeEventListener('resize', checkScreenSize);
        };
    }, []);

    // Set up cycling animation between the three titles
    useEffect(() => {
        const animationDuration = 0.5; // Duration of blur/unblur effect
        const displayDuration = 2.5; // How long to show each text

        const interval = setInterval(() => {
            setActiveTextIndex(prev => (prev + 1) % 3);
        }, (animationDuration + displayDuration) * 1000);

        return () => clearInterval(interval);
    }, []);

    // Handle CV download
    const handleDownload = (e) => {
        // Feedback visuel
        setIsDownloading(true);
        setTimeout(() => setIsDownloading(false), 500);

        // Track download event if analytics are available
        if (window.gtag) {
            window.gtag('event', 'cv_download', {
                event_category: 'engagement',
                event_label: 'CV Download'
            });
        }

        console.log("Download CV clicked");
    };

    // Text size classes - Optimized for responsiveness
    const textSizeClasses = "text-[50px] xs:text-[55px] sm:text-[70px] md:text-[90px] lg:text-[120px] xl:text-[160px] 2xl:text-[190px]";

    // CV download path - using absolute path for better reliability
    const cvPath = "/assets/files/CV_Alain_Patrick_RAMAHEFARSON.pdf";

    return (
        <section className={`relative w-full overflow-hidden
                           ${isMobile ? 'min-h-[75dvh] pt-8 pb-14' : 'min-h-[85dvh] pt-10 pb-6 sm:pt-14 md:pt-10 lg:pt-8'}`}>
            {/* Main content container */}
            <div className={`container mx-auto relative z-10 h-full flex flex-col justify-center 
                           ${isMobile ? 'px-4 py-3' : 'px-5'}`}>

                {/* Desktop description */}
                <RevealOnScroll delay={600} direction="left">
                    <div className="hidden md:block absolute left-8 lg:left-12 xl:left-16 top-[35vh] max-w-[200px] lg:max-w-[240px] xl:max-w-[280px] z-10">
                        <p className="text-white/90 text-sm lg:text-base font-light leading-relaxed">
                            <span className="text-[#DAA520] font-medium">Passionate</span> about web development,
                            DevOps infrastructure and artificial intelligence, I create
                            <span className="text-[#8B5CF6]"> innovative</span> and <span className="text-white font-medium">scalable</span> solutions for the modern web.
                        </p>
                    </div>
                </RevealOnScroll>

                {/* Main title container - Negative margin to push text closer together */}
                <div className="w-full max-w-[1920px] mx-auto">
                    <div className={`flex flex-col w-full mt-8 md:mt-6 lg:mt-0
                                  ${isMobile ? 'space-y-[-10px]' : 'space-y-[-30px] md:space-y-[-50px] lg:space-y-[-70px] xl:space-y-[-90px] 2xl:space-y-[-110px]'}`}>
                        {/* Line 1: Developer */}
                        <div className="text-center sm:text-left sm:pl-3 md:pl-20 lg:pl-28 xl:pl-36 relative">
                            {/* ProfileCard for desktop */}
                            {!isMobile && (
                                <div className="animate-fade-in-top">
                                    <ProfileCard data={cardData} />
                                </div>
                            )}

                            <RevealOnScroll delay={100} direction={isMobile ? "bottom" : "left"}>
                                <TrueFocus
                                    sentence="Developer"
                                    active={activeTextIndex === 0}
                                    blurAmount={6}
                                    borderColor="#DAA520"
                                    glowColor="rgba(218, 165, 32, 0.6)"
                                    animationDuration={0.5}
                                    textSizeClass={textSizeClasses}
                                    className="sm:justify-start"
                                />
                            </RevealOnScroll>
                        </div>

                        {/* Line 2: DevOps */}
                        <div className="text-center sm:text-right sm:pr-3 md:pr-4 lg:pr-6 relative">
                            <RevealOnScroll delay={200} direction={isMobile ? "bottom" : "right"}>
                                <TrueFocus
                                    sentence="DevOps"
                                    active={activeTextIndex === 1}
                                    blurAmount={6}
                                    borderColor="#FFFFFF"
                                    glowColor="rgba(255, 255, 255, 0.5)"
                                    animationDuration={0.5}
                                    textSizeClass={textSizeClasses}
                                    className="sm:justify-end"
                                />
                            </RevealOnScroll>
                        </div>

                        {/* Line 3: & AI */}
                        <div className="text-center relative">
                            <RevealOnScroll delay={300} direction="bottom">
                                <TrueFocus
                                    sentence="& AI"
                                    active={activeTextIndex === 2}
                                    blurAmount={6}
                                    borderColor="#8B5CF6"
                                    glowColor="rgba(139, 92, 246, 0.6)"
                                    animationDuration={0.5}
                                    textSizeClass={textSizeClasses}
                                />
                            </RevealOnScroll>
                        </div>
                    </div>
                </div>

                {/* ProfileCard for mobile */}
                {isMobile && (
                    <RevealOnScroll delay={400} direction="bottom">
                        <div className="mt-6 relative flex justify-center items-center">
                            <ProfileCard data={cardData} className="transform-none static mx-auto scale-[0.80]" />
                        </div>
                    </RevealOnScroll>
                )}

                {/* Mobile description and CV download button */}
                {isMobile && (
                    <div className="mt-8 px-2 flex flex-col items-center">
                        <RevealOnScroll delay={200} direction="bottom">
                            <p className="text-white/80 text-[11px] xs:text-xs leading-tight text-center max-w-xs">
                                <span className="text-[#DAA520] font-medium">Passionate</span> about web development, DevOps and AI, creating
                                <span className="text-[#8B5CF6]"> innovative</span> solutions for the modern web.
                            </p>
                        </RevealOnScroll>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Hero;