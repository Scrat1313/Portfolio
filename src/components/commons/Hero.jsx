import React, { useEffect, useState } from 'react';
import { ProfileCard, RevealOnScroll, TrueFocus, CircularText } from './';
import cardData from '../../data/cardHeroData.json';
// Material UI Icons
import DownloadIcon from '@mui/icons-material/Download';

const Hero = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [activeTextIndex, setActiveTextIndex] = useState(0); // Controls which text is active

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
        // Track download event if analytics are available
        if (window.gtag) {
            window.gtag('event', 'cv_download', {
                event_category: 'engagement',
                event_label: 'CV Download'
            });
        }
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
                    <div className="hidden md:block absolute left-8 lg:left-12 xl:left-16 top-[25vh] max-w-[200px] lg:max-w-[240px] xl:max-w-[280px] z-10">
                        <p className="text-white/90 text-sm lg:text-base font-light leading-relaxed">
                            <span className="text-[#DAA520] font-medium">Passionate</span> about web development,
                            DevOps infrastructure and artificial intelligence, I create
                            <span className="text-[#8B5CF6]"> innovative</span> and <span className="text-white font-medium">scalable</span> solutions for the modern web.
                        </p>
                    </div>
                </RevealOnScroll>

                {/* Download CV button positioned on the right */}
                <RevealOnScroll delay={600} direction="right">
                    <div className="hidden md:block absolute right-8 lg:right-12 xl:right-16 top-[50vh] z-1000" onClick={() => console.log("Download")}>
                        {/* Download CV button with circular text */}
                        <div className="relative">
                            <a
                                href={cvPath}
                                download="CV_Alain_Patrick_RAMAHEFARSON.pdf"
                                onClick={handleDownload}
                                className="group flex items-center relative hover:cursor-pointer"
                                aria-label="Download CV"
                                rel="noopener noreferrer"
                                target="_blank" // Added to help with download in some browsers
                            >
                                {/* Circular Text Container - Responsive size */}
                                <div className="relative w-36 h-36 md:w-40 md:h-40 lg:w-44 lg:h-44 xl:w-48 xl:h-48">
                                    <CircularText
                                        text="DOWNLOAD·MY·RESUME·DOWNLOAD·MY·RESUME·"
                                        spinDuration={15}
                                        onHover="speedUp"
                                        textColor="#DAA520"
                                    />

                                    {/* Center icon */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-14 h-14 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                                            <DownloadIcon className="text-[#DAA520] text-2xl" />
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
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

                        {/* Mobile download CV button with circular text */}
                        <RevealOnScroll delay={300} direction="bottom">
                            <a
                                href={cvPath}
                                download="CV_Alain_Patrick_RAMAHEFARSON.pdf"
                                onClick={handleDownload}
                                className="mt-6 group relative flex flex-col items-center"
                                aria-label="Download CV"
                                rel="noopener noreferrer"
                                target="_blank" // Added to help with download in some browsers
                            >
                                <div className="relative w-20 h-20 mb-2">
                                    <CircularText
                                        text="DOWNLOAD·MY·RESUME·CV·"
                                        spinDuration={12}
                                        onHover="speedUp"
                                        textColor="#DAA520"
                                    />

                                    {/* Center icon */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-10 h-10 rounded-full bg-[#0D0A12] border border-[#DAA520]/30 group-hover:border-[#DAA520]/60 flex items-center justify-center transition-all duration-300 active:scale-90">
                                            <DownloadIcon className="text-[#DAA520] text-sm" />
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </RevealOnScroll>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Hero;