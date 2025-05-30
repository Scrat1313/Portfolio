import { useState, useEffect, useRef } from 'react';

const Hero = () => {
    const [isVisible, setIsVisible] = useState(false);
    const titleRef = useRef(null);
    
    useEffect(() => {
        setIsVisible(true);
        
        // Effet de parallaxe subtil au mouvement de la souris
        const handleMouseMove = (e) => {
            if (!titleRef.current) return;
            
            const x = (window.innerWidth / 2 - e.clientX) / 50;
            const y = (window.innerHeight / 2 - e.clientY) / 50;
            
            titleRef.current.style.transform = `translateX(${x}px) translateY(${y}px)`;
        };
        
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-[#0a0a0a] via-[#121212] to-[#0a0a0a] py-16">
            {/* Grille de fond */}
            <div className="absolute inset-0 z-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNNTkuNSA1OS41VjYwSDYwdi0uNWgtLjV6TTAgMHYuNUguNVYwSDB6IiBmaWxsLW9wYWNpdHk9Ii4yIiBmaWxsPSIjOEI1Q0Y2Ii8+PC9nPjwvc3ZnPg==')] opacity-20"></div>

            {/* Particules/Lumières flottantes */}
            <div className="absolute inset-0 z-0">
                {[...Array(5)].map((_, index) => (
                    <div 
                        key={index}
                        className={`absolute rounded-full blur-lg animate-float-${index + 1}`}
                        style={{
                            width: `${Math.random() * 30 + 20}px`,
                            height: `${Math.random() * 30 + 20}px`,
                            left: `${Math.random() * 90 + 5}%`,
                            top: `${Math.random() * 90 + 5}%`,
                            backgroundColor: index % 3 === 0 ? 'rgba(218,165,32,0.2)' : 
                                            index % 3 === 1 ? 'rgba(139,92,246,0.2)' : 'rgba(255,255,255,0.2)',
                            animationDuration: `${Math.random() * 15 + 15}s`
                        }}
                    ></div>
                ))}
                
                {/* Effet de néon en bas */}
                <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-[#8B5CF6]/10 to-transparent"></div>
            </div>

            {/* Main content container */}
            <div className="container mx-auto relative z-10 h-full flex flex-col items-center justify-center px-6 pt-8">
                {/* Titre principal avec variation de design */}
                <div 
                    ref={titleRef}
                    className={`flex flex-col items-center transition-all duration-700 ease-out mb-16
                        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                >
                    <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-8 mb-8">
                        <div className="rounded-full bg-[#1a1a1a] px-6 py-3 border border-gray-800 shadow-glow-purple">
                            <span className="text-gray-400 font-mono text-sm">creative_portfolio</span>
                        </div>
                        <div className="rounded-full bg-[#1a1a1a] px-6 py-3 border border-gray-800 shadow-glow-gold">
                            <span className="text-gray-400 font-mono text-sm">open_source</span>
                        </div>
                        <div className="rounded-full bg-[#1a1a1a] px-6 py-3 border border-gray-800">
                            <span className="text-gray-400 font-mono text-sm">v2.5</span>
                        </div>
                    </div>
                    
                    <h1 className="relative text-6xl md:text-8xl font-black text-center leading-tight mb-6">
                        <span className="relative inline-block mr-4 text-transparent bg-clip-text bg-gradient-to-br from-[#DAA520] to-[#FFD700] glow-text-gold">
                            Developer
                        </span>
                        <span className="relative inline-block text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-[#8B5CF6] to-[#A78BFA] glow-text-purple">
                            &AI
                        </span>
                        <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-white/90 to-white/60 glow-text-white">
                            DevOps
                        </span>
                        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-[#8B5CF6] to-transparent"></div>
                    </h1>
                    
                    <p className="text-gray-400 text-xl max-w-3xl text-center mb-12 opacity-80">
                        Créez, innovez et déployez avec des solutions de pointe intégrant les meilleures pratiques du développement à l'IA.
                    </p>
                    
                    <div className="flex flex-wrap justify-center gap-6">
                        <button className="px-8 py-4 rounded-lg bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] hover:from-[#7C3AED] hover:to-[#6D28D9] text-white font-bold transform transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-[#8B5CF6]/20">
                            Explorer les projets
                        </button>
                        <button className="px-8 py-4 rounded-lg bg-transparent border border-[#8B5CF6]/30 text-white hover:bg-[#8B5CF6]/10 font-bold transform transition-all duration-300 hover:scale-105">
                            En savoir plus
                        </button>
                    </div>
                </div>
                
                {/* Indicateur technique en bas */}
                <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 transition-opacity duration-1000 delay-700 ${isVisible ? 'opacity-100' : ''}`}>
                    <div className="flex items-center space-x-4 bg-[#1a1a1a]/70 rounded-lg px-4 py-2 backdrop-blur-sm border border-gray-800/50">
                        <div className="flex items-center">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse mr-2"></span>
                            <span className="text-gray-400 text-xs font-mono">react</span>
                        </div>
                        <div className="flex items-center">
                            <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse mr-2"></span>
                            <span className="text-gray-400 text-xs font-mono">tailwind</span>
                        </div>
                        <div className="flex items-center">
                            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse mr-2"></span>
                            <span className="text-gray-400 text-xs font-mono">ai_powered</span>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Style pour les animations et effets de lueur */}
            <style jsx global>{`
                @keyframes float-1 {
                    0%, 100% { transform: translate(0, 0); }
                    50% { transform: translate(-20px, 20px); }
                }
                @keyframes float-2 {
                    0%, 100% { transform: translate(0, 0); }
                    50% { transform: translate(20px, -10px); }
                }
                @keyframes float-3 {
                    0%, 100% { transform: translate(0, 0); }
                    50% { transform: translate(-15px, -20px); }
                }
                @keyframes float-4 {
                    0%, 100% { transform: translate(0, 0); }
                    50% { transform: translate(15px, 10px); }
                }
                @keyframes float-5 {
                    0%, 100% { transform: translate(0, 0); }
                    50% { transform: translate(-10px, 15px); }
                }
                
                .animate-float-1 { animation: float-1 ease-in-out infinite; }
                .animate-float-2 { animation: float-2 ease-in-out infinite; }
                .animate-float-3 { animation: float-3 ease-in-out infinite; }
                .animate-float-4 { animation: float-4 ease-in-out infinite; }
                .animate-float-5 { animation: float-5 ease-in-out infinite; }
                
                .shadow-glow-purple {
                    box-shadow: 0 0 15px rgba(139, 92, 246, 0.15);
                }
                
                .shadow-glow-gold {
                    box-shadow: 0 0 15px rgba(218, 165, 32, 0.15);
                }
                
                .glow-text-gold {
                    text-shadow: 0 0 10px rgba(218, 165, 32, 0.3);
                }
                
                .glow-text-purple {
                    text-shadow: 0 0 10px rgba(139, 92, 246, 0.3);
                }
                
                .glow-text-white {
                    text-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
                }
            `}</style>
        </section>
    );
};

export default Hero;