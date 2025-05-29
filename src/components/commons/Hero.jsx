import { useState, useEffect } from 'react';
import ParticleAnimation from './ParticleAnimation';
import logo from '../../assets/images/PrimaryLogo.png';

const Hero = () => {
    const [isVisible, setIsVisible] = useState(false);
    const currentDate = "2025-05-29 12:19:20";
    const username = "Scrat1313";

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section className="relative min-h-screen w-full overflow-hidden bg-[#0B0B0B] py-16">
            {/* Component d'animation de particules */}
            <ParticleAnimation />

            {/* Background avec effet de profondeur */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.05) 0%, transparent 50%)`,
                }}></div>

                {/* Lignes horizontales espacées */}
                <div className="absolute inset-0">
                    {Array.from({ length: 10 }).map((_, index) => (
                        <div
                            key={`line-${index}`}
                            className="absolute w-full h-px bg-gradient-to-r from-transparent via-[#FFFFFF]/5 to-transparent"
                            style={{ top: `${index * 10 + 5}%` }}
                        ></div>
                    ))}
                </div>

                {/* Effet de néon en bas */}
                <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-[#8B5CF6]/5 to-transparent"></div>
            </div>

            {/* Logo et timestamp en haut */}
            <div className="absolute top-4 left-4 flex items-center space-x-3 z-10">
                <img src={logo} alt="Logo" className="w-5 h-5 opacity-50" />
                <span className="text-[#FFFFFF]/30 text-xs">{currentDate} | {username}</span>
            </div>

            {/* Main content container */}
            <div className="container mx-auto relative z-10 h-full flex flex-col items-center justify-center px-6 pt-16">
                {/* Titre principal avec trois sections animées */}
                <div className={`flex flex-col items-center transition-all duration-1200 ease-out
                    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                >
                    {/* Section 3D Text */}
                    <div className="perspective-text-container mb-20">
                        {/* "Developer" - Premier texte */}
                        <div className="relative perspective-text group mb-6">
                            <h2 className="text-7xl md:text-9xl lg:text-[12rem] font-black tracking-tighter text-center
                                text-shadow-3d-gold transform transition-transform duration-500
                                group-hover:scale-105">
                                Developer
                            </h2>
                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 w-0 
                                bg-gradient-to-r from-[#DAA520]/0 via-[#DAA520] to-[#DAA520]/0
                                group-hover:w-3/4 transition-all duration-700"></div>
                        </div>

                        {/* "& AI" - Deuxième texte */}
                        <div className="relative perspective-text group mb-6">
                            <h2 className="text-6xl md:text-8xl lg:text-[10rem] font-black tracking-tighter text-center
                                text-shadow-3d-purple transform transition-transform duration-500
                                group-hover:scale-105">
                                & AI
                            </h2>
                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 w-0 
                                bg-gradient-to-r from-[#8B5CF6]/0 via-[#8B5CF6] to-[#8B5CF6]/0
                                group-hover:w-3/4 transition-all duration-700"></div>
                        </div>

                        {/* "DevOps" - Troisième texte */}
                        <div className="relative perspective-text group">
                            <h2 className="text-7xl md:text-9xl lg:text-[12rem] font-black tracking-tighter text-center
                                text-shadow-3d-white transform transition-transform duration-500
                                group-hover:scale-105">
                                DevOps
                            </h2>
                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 w-0 
                                bg-gradient-to-r from-[#FFFFFF]/0 via-[#FFFFFF]/70 to-[#FFFFFF]/0
                                group-hover:w-3/4 transition-all duration-700"></div>
                        </div>
                    </div>

                    {/* Section Description */}
                    <div className={`text-center max-w-3xl mx-auto mt-4 transition-all delay-300 duration-1000
                        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <p className="text-xl text-[#FFFFFF]/70 mb-10 leading-relaxed px-4">
                            Creating <span className="text-[#DAA520]">innovative solutions</span> at the intersection of software development,
                            <span className="text-[#8B5CF6]"> artificial intelligence</span>, and modern infrastructure.
                        </p>

                        {/* Tech Stack Badges */}
                        <div className="mt-6 flex flex-wrap gap-3 justify-center max-w-2xl mx-auto">
                            {[
                                { name: "React", color: "#DAA520" },
                                { name: "Python", color: "#8B5CF6" },
                                { name: "Node.js", color: "#DAA520" },
                                { name: "TensorFlow", color: "#8B5CF6" },
                                { name: "Docker", color: "#DAA520" },
                                { name: "Kubernetes", color: "#8B5CF6" },
                                { name: "AWS", color: "#DAA520" },
                                { name: "CI/CD", color: "#8B5CF6" }
                            ].map((tech, index) => (
                                <span
                                    key={tech.name}
                                    className="px-4 py-2 rounded-full border transition-all duration-500 transform hover:scale-105 cursor-default"
                                    style={{
                                        borderColor: `${tech.color}20`,
                                        backgroundColor: `${tech.color}10`,
                                        color: tech.color,
                                        animationDelay: `${index * 100}ms`,
                                        opacity: isVisible ? 1 : 0,
                                        transform: isVisible ? "translateY(0)" : "translateY(20px)"
                                    }}
                                >
                                    {tech.name}
                                </span>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="mt-14 flex flex-wrap gap-4 justify-center">
                            <a
                                href="#projects"
                                className="relative group px-8 py-4 overflow-hidden rounded-lg shadow-lg shadow-[#DAA520]/10"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-[#DAA520] to-[#8B5CF6] transition-transform duration-500 
                                    group-hover:scale-105"></div>
                                <span className="relative z-10 text-white font-medium">Explore Projects</span>
                            </a>

                            <a
                                href="#contact"
                                className="relative group px-8 py-4 overflow-hidden rounded-lg border border-[#FFFFFF]/20"
                            >
                                <div className="absolute inset-0 bg-[#FFFFFF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <span className="relative z-10 text-white font-medium">Get In Touch</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-40 h-40 border-l border-t border-[#DAA520]/10 rounded-br-3xl"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 border-r border-b border-[#8B5CF6]/10 rounded-tl-3xl"></div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2">
                <span className="text-[#FFFFFF]/30 text-xs uppercase tracking-widest">Scroll</span>
                <div className="relative w-7 h-12 border border-[#FFFFFF]/20 rounded-full flex justify-center items-start p-2">
                    <div className="w-1.5 h-1.5 bg-white rounded-full animate-scroll-dot"></div>
                </div>
            </div>

            {/* Styles for 3D text effect and animation */}
            <style jsx>{`
                .text-shadow-3d-gold {
                    color: rgba(218, 165, 32, 0.8);
                    text-shadow: 0 0 1px rgba(255, 255, 255, 0.1),
                                0 1px 1px rgba(218, 165, 32, 0.5),
                                0 2px 2px rgba(218, 165, 32, 0.4),
                                0 4px 4px rgba(0, 0, 0, 0.3),
                                0 8px 8px rgba(0, 0, 0, 0.2);
                }

                .text-shadow-3d-purple {
                    color: rgba(139, 92, 246, 0.8);
                    text-shadow: 0 0 1px rgba(255, 255, 255, 0.1),
                                0 1px 1px rgba(139, 92, 246, 0.5),
                                0 2px 2px rgba(139, 92, 246, 0.4),
                                0 4px 4px rgba(0, 0, 0, 0.3),
                                0 8px 8px rgba(0, 0, 0, 0.2);
                }

                .text-shadow-3d-white {
                    color: rgba(255, 255, 255, 0.8);
                    text-shadow: 0 0 1px rgba(255, 255, 255, 0.1),
                                0 1px 1px rgba(255, 255, 255, 0.5),
                                0 2px 2px rgba(255, 255, 255, 0.4),
                                0 4px 4px rgba(0, 0, 0, 0.3),
                                0 8px 8px rgba(0, 0, 0, 0.2);
                }

                .perspective-text-container {
                    perspective: 1000px;
                }

                .perspective-text {
                    transform-style: preserve-3d;
                }

                @keyframes scroll-dot {
                    0%, 100% { transform: translateY(0); opacity: 0.8; }
                    50% { transform: translateY(5px); opacity: 0.2; }
                }

                .animate-scroll-dot {
                    animation: scroll-dot 1.5s ease-in-out infinite;
                }
            `}</style>
        </section>
    );
};

export default Hero;