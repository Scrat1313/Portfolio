import React from 'react';
import { RevealOnScroll } from '.';

// Import des icônes
import BusinessIcon from '@mui/icons-material/Business';
import CodeIcon from '@mui/icons-material/Code';

// Import des données
import enterpriseData from '../../data/enterpriseData.json';

const Enterprises = () => {
    const { enterprises } = enterpriseData;

    // Fonction pour obtenir l'icône appropriée pour un service
    const getServiceIcon = (service) => {
        if (service.includes("Développement") || service.includes("Intégration")) {
            return <CodeIcon fontSize="small" />;
        }
        return <BusinessIcon fontSize="small" />;
    };

    return (
        <section className="w-full py-24 bg-gradient-to-br from-[#0a0a0a] via-[#121212] to-[#0a0a0a] relative overflow-hidden">
            {/* Motif de fond */}
            <div className="absolute inset-0 opacity-5">
                {Array.from({ length: 5 }).map((_, i) => (
                    <div
                        key={`h-line-${i}`}
                        className="absolute left-0 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent"
                        style={{ top: `${(i + 1) * 20}%` }}
                    ></div>
                ))}
                {Array.from({ length: 5 }).map((_, i) => (
                    <div
                        key={`v-line-${i}`}
                        className="absolute top-0 h-full w-px bg-gradient-to-b from-transparent via-white to-transparent"
                        style={{ left: `${(i + 1) * 20}%` }}
                    ></div>
                ))}
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                {/* En-tête de la section */}
                <RevealOnScroll delay={100} direction="bottom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DAA520] to-[#FFD700]">
                                Trusted
                            </span>{" "}
                            <span className="text-white">Partnerships</span>
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Des organisations de toutes tailles ont fait confiance à mon expertise pour créer des expériences numériques exceptionnelles et résoudre des défis techniques complexes.
                        </p>
                    </div>
                </RevealOnScroll>

                {/* Grille des entreprises */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-20">
                    {enterprises.map((enterprise) => (
                        <RevealOnScroll key={enterprise.id} delay={200 + enterprise.id * 50} direction="bottom">
                            <div className="bg-[#1B1B1B]/30 backdrop-blur-sm rounded-xl border border-[#5B21B6]/20 overflow-hidden h-full hover:border-[#DAA520]/30 transition-colors duration-300 group">
                                <div className="p-6">
                                    <div className="flex items-start justify-between mb-4">
                                        <span className="px-2 py-1 rounded-full bg-[#1B1B1B]/70 text-[#8B5CF6] text-xs">
                                            {enterprise.industry}
                                        </span>
                                    </div>

                                    <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-[#DAA520] transition-colors">
                                        {enterprise.name}
                                    </h4>

                                    <p className="text-white/60 text-sm mb-4">
                                        {enterprise.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {enterprise.services.map((service, idx) => (
                                            <span
                                                key={`${enterprise.id}-service-${idx}`}
                                                className="px-3 py-1.5 rounded-md bg-[#1B1B1B] text-white/70 text-xs flex items-center gap-1"
                                            >
                                                {getServiceIcon(service)}
                                                <span>{service}</span>
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </RevealOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Enterprises;