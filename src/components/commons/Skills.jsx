import React, { useState, useRef, useEffect } from 'react';
import { RevealOnScroll } from './';
import skillsData from '../../data/skillsData.json';
// Import des icônes
import CodeIcon from '@mui/icons-material/Code';
import WebIcon from '@mui/icons-material/Web';
import StorageIcon from '@mui/icons-material/Storage';
import BuildIcon from '@mui/icons-material/Build';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import DnsIcon from '@mui/icons-material/Dns';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CheckIcon from '@mui/icons-material/Check';

const Skills = () => {
    // Toutes les sections sont masquées par défaut (false)
    const [expandedSections, setExpandedSections] = useState({
        programming_languages: false,
        frameworks_and_libraries: false,
        databases: false,
        devops_and_servers: false,
        design_and_ui: false
    });

    const [hoveredItem, setHoveredItem] = useState(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const containerRef = useRef(null);
    const contentRefs = useRef({});

    // Animations d'ouverture et fermeture plus fluides
    useEffect(() => {
        // Pour chaque section, initialiser la hauteur CSS
        Object.keys(expandedSections).forEach(section => {
            if (contentRefs.current[section]) {
                const content = contentRefs.current[section];
                if (expandedSections[section]) {
                    // Si expanded, définir la hauteur à la hauteur réelle du contenu
                    content.style.maxHeight = content.scrollHeight + "px";
                    content.style.opacity = "1";
                } else {
                    // Si fermé, définir la hauteur à 0
                    content.style.maxHeight = "0";
                    content.style.opacity = "0";
                }
            }
        });
    }, [expandedSections]);

    // Suivi de la position de la souris
    const handleMouseMove = (e) => {
        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            setMousePos({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top
            });
        }
    };

    // Fonction pour basculer la visibilité d'une section
    const toggleSection = (section) => {
        setExpandedSections(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    };

    // Gestion des classes dynamiques pour les niveaux
    const getLevelClasses = (level) => {
        switch (level) {
            case 'Advanced':
                return 'text-[#DAA520] border-[#DAA520]';
            case 'Intermediate':
                return 'text-[#8B5CF6] border-[#8B5CF6]';
            default:
                return 'text-white/50 border-white/30';
        }
    };

    // Fonction pour afficher les indicateurs de niveau
    const getLevelIndicator = (level, compact = false) => {
        const baseClass = "inline-block w-2 h-2 rounded-full";

        if (compact) {
            return (
                <div className="flex items-center gap-[2px]">
                    <span className={`${baseClass} ${level === 'Advanced' || level === 'Intermediate' ? 'bg-[#DAA520]' : 'bg-white/30'}`}></span>
                    <span className={`${baseClass} ${level === 'Advanced' ? 'bg-[#DAA520]' : 'bg-white/30'}`}></span>
                    <span className={`${baseClass} ${level === 'Advanced' ? 'bg-[#DAA520]' : 'bg-white/30'}`}></span>
                </div>
            );
        }

        return (
            <div className="flex items-center gap-1">
                <span className={`${baseClass} ${level === 'Advanced' || level === 'Intermediate' || level === 'Beginner' ? 'bg-current' : 'bg-white/20'}`}></span>
                <span className={`${baseClass} ${level === 'Advanced' || level === 'Intermediate' ? 'bg-current' : 'bg-white/20'}`}></span>
                <span className={`${baseClass} ${level === 'Advanced' ? 'bg-current' : 'bg-white/20'}`}></span>
            </div>
        );
    };

    return (
        <section
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className="w-full py-20 bg-gradient-to-br from-[#0a0a0a] via-[#121212] to-[#0a0a0a] overflow-hidden relative"
        >
            {/* Effet de suivi du curseur */}
            <div
                className="pointer-events-none fixed opacity-40 mix-blend-overlay"
                style={{
                    background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(218, 165, 32, 0.15), transparent 25%)`,
                    width: '100%',
                    height: '100%',
                    top: 0,
                    left: 0,
                }}
            ></div>

            {/* Motif de fond */}
            <div className="absolute inset-0 opacity-5">
                {Array.from({ length: 5 }).map((_, i) => (
                    <div
                        key={i}
                        className="absolute left-0 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent"
                        style={{ top: `${(i + 1) * 20}%` }}
                    ></div>
                ))}
                {Array.from({ length: 5 }).map((_, i) => (
                    <div
                        key={i}
                        className="absolute top-0 h-full w-px bg-gradient-to-b from-transparent via-white to-transparent"
                        style={{ left: `${(i + 1) * 20}%` }}
                    ></div>
                ))}
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                <RevealOnScroll delay={100} direction="bottom">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-3">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DAA520] to-[#FFD700]">
                            Technical
                        </span>{" "}
                        <span className="text-white">Skills</span>
                    </h2>
                </RevealOnScroll>

                <RevealOnScroll delay={150} direction="bottom">
                    <p className="text-gray-400 text-center max-w-3xl mx-auto mb-16">
                        A comprehensive overview of my technical expertise across multiple domains.
                    </p>
                </RevealOnScroll>

                {/* Grille principale contenant toutes les sections */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    {/* Section des langages de programmation - Large colonne */}
                    <div className="md:col-span-8 order-1">
                        <RevealOnScroll delay={200} direction="left">
                            <div className="bg-[#1B1B1B]/30 backdrop-blur-lg rounded-xl border border-[#5B21B6]/20 overflow-hidden h-full">
                                <div
                                    className="flex items-center justify-between p-4 cursor-pointer border-b border-[#5B21B6]/20 hover:bg-[#1B1B1B]/50 transition-colors duration-300"
                                    onClick={() => toggleSection('programming_languages')}
                                >
                                    <div className="flex items-center gap-3">
                                        <span className="p-2 rounded-full bg-[#DAA520]/10 text-[#DAA520]">
                                            <CodeIcon />
                                        </span>
                                        <h3 className="text-xl font-bold text-white">Programming Languages</h3>
                                    </div>
                                    <ExpandMoreIcon
                                        className={`text-white/60 transition-transform duration-500 ${expandedSections.programming_languages ? 'rotate-180' : ''}`}
                                    />
                                </div>

                                <div
                                    ref={ref => contentRefs.current['programming_languages'] = ref}
                                    className="overflow-hidden transition-all duration-500 ease-in-out"
                                    style={{ maxHeight: 0, opacity: 0 }}
                                >
                                    <div className="p-2 divide-y divide-[#5B21B6]/10">
                                        {skillsData.programming_languages.map((lang, index) => (
                                            <div
                                                key={lang.name}
                                                className="flex flex-wrap md:flex-nowrap items-center py-3 px-4 gap-4 hover:bg-[#1B1B1B]/40 rounded-lg transition-colors duration-300 cursor-default"
                                                onMouseEnter={() => setHoveredItem(lang.name)}
                                                onMouseLeave={() => setHoveredItem(null)}
                                            >
                                                <div className="flex items-center gap-3 w-full md:w-1/4">
                                                    <h4 className="font-semibold text-white text-lg">{lang.name}</h4>
                                                </div>

                                                <div className={`px-2 py-1 text-xs font-medium rounded-md border ${getLevelClasses(lang.level)} w-full md:w-auto flex items-center gap-2`}>
                                                    {getLevelIndicator(lang.level)}
                                                    <span>{lang.level}</span>
                                                </div>

                                                <p className="text-white/70 text-sm w-full md:w-2/3">
                                                    {lang.description}
                                                </p>

                                                {hoveredItem === lang.name && (
                                                    <CheckIcon className="text-[#DAA520] ml-auto hidden md:block" fontSize="small" />
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </RevealOnScroll>
                    </div>

                    {/* Section des bases de données - Petite colonne */}
                    <div className="md:col-span-4 order-2">
                        <RevealOnScroll delay={250} direction="right">
                            <div className="bg-[#1B1B1B]/30 backdrop-blur-lg rounded-xl border border-[#5B21B6]/20 overflow-hidden h-full">
                                <div
                                    className="flex items-center justify-between p-4 cursor-pointer border-b border-[#5B21B6]/20 hover:bg-[#1B1B1B]/50 transition-colors duration-300"
                                    onClick={() => toggleSection('databases')}
                                >
                                    <div className="flex items-center gap-3">
                                        <span className="p-2 rounded-full bg-[#8B5CF6]/10 text-[#8B5CF6]">
                                            <StorageIcon />
                                        </span>
                                        <h3 className="text-xl font-bold text-white">Databases</h3>
                                    </div>
                                    <ExpandMoreIcon
                                        className={`text-white/60 transition-transform duration-500 ${expandedSections.databases ? 'rotate-180' : ''}`}
                                    />
                                </div>

                                <div
                                    ref={ref => contentRefs.current['databases'] = ref}
                                    className="overflow-hidden transition-all duration-500 ease-in-out"
                                    style={{ maxHeight: 0, opacity: 0 }}
                                >
                                    <div className="p-4 space-y-4">
                                        {skillsData.databases.map((db, index) => (
                                            <div
                                                key={db.name}
                                                className="p-3 hover:bg-[#1B1B1B]/40 rounded-lg transition-colors duration-300 border-l-2 border-transparent hover:border-[#8B5CF6] cursor-default"
                                                onMouseEnter={() => setHoveredItem(db.name)}
                                                onMouseLeave={() => setHoveredItem(null)}
                                            >
                                                <h4 className="font-bold text-white flex items-center gap-2 mb-2">
                                                    <ArrowForwardIosIcon style={{ fontSize: '0.7rem' }} className="text-[#8B5CF6]" />
                                                    {db.name}
                                                    {hoveredItem === db.name && (
                                                        <AutoAwesomeIcon className="text-[#8B5CF6] ml-auto" fontSize="small" />
                                                    )}
                                                </h4>
                                                <p className="text-white/60 text-sm">
                                                    {db.description}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </RevealOnScroll>
                    </div>

                    {/* Section des frameworks - Petite colonne */}
                    <div className="md:col-span-4 order-4 md:order-3">
                        <RevealOnScroll delay={300} direction="left">
                            <div className="bg-[#1B1B1B]/30 backdrop-blur-lg rounded-xl border border-[#5B21B6]/20 overflow-hidden h-full">
                                <div
                                    className="flex items-center justify-between p-4 cursor-pointer border-b border-[#5B21B6]/20 hover:bg-[#1B1B1B]/50 transition-colors duration-300"
                                    onClick={() => toggleSection('frameworks_and_libraries')}
                                >
                                    <div className="flex items-center gap-3">
                                        <span className="p-2 rounded-full bg-[#DAA520]/10 text-[#DAA520]">
                                            <WebIcon />
                                        </span>
                                        <h3 className="text-xl font-bold text-white">Frameworks</h3>
                                    </div>
                                    <ExpandMoreIcon
                                        className={`text-white/60 transition-transform duration-500 ${expandedSections.frameworks_and_libraries ? 'rotate-180' : ''}`}
                                    />
                                </div>

                                <div
                                    ref={ref => contentRefs.current['frameworks_and_libraries'] = ref}
                                    className="overflow-hidden transition-all duration-500 ease-in-out"
                                    style={{ maxHeight: 0, opacity: 0 }}
                                >
                                    <div className="p-4">
                                        <div className="mb-6">
                                            <h4 className="text-[#DAA520] font-semibold mb-3 text-sm uppercase tracking-wider">Frontend</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {skillsData.frameworks_and_libraries.frontend.map((fw) => (
                                                    <span key={fw} className="px-3 py-1.5 rounded-full bg-[#DAA520]/10 border border-[#DAA520]/20 text-white/80 text-xs font-medium hover:bg-[#DAA520]/20 transition-colors duration-300 cursor-default">
                                                        {fw}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div>
                                            <h4 className="text-[#8B5CF6] font-semibold mb-3 text-sm uppercase tracking-wider">Backend</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {skillsData.frameworks_and_libraries.backend.map((fw) => (
                                                    <span key={fw} className="px-3 py-1.5 rounded-full bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 text-white/80 text-xs font-medium hover:bg-[#8B5CF6]/20 transition-colors duration-300 cursor-default">
                                                        {fw}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </RevealOnScroll>
                    </div>

                    {/* Section DevOps - Large colonne */}
                    <div className="md:col-span-8 order-3 md:order-4">
                        <RevealOnScroll delay={350} direction="right">
                            <div className="bg-[#1B1B1B]/30 backdrop-blur-lg rounded-xl border border-[#5B21B6]/20 overflow-hidden h-full">
                                <div
                                    className="flex items-center justify-between p-4 cursor-pointer border-b border-[#5B21B6]/20 hover:bg-[#1B1B1B]/50 transition-colors duration-300"
                                    onClick={() => toggleSection('devops_and_servers')}
                                >
                                    <div className="flex items-center gap-3">
                                        <span className="p-2 rounded-full bg-[#DAA520]/10 text-[#DAA520]">
                                            <DnsIcon />
                                        </span>
                                        <h3 className="text-xl font-bold text-white">DevOps & Infrastructure</h3>
                                    </div>
                                    <ExpandMoreIcon
                                        className={`text-white/60 transition-transform duration-500 ${expandedSections.devops_and_servers ? 'rotate-180' : ''}`}
                                    />
                                </div>

                                <div
                                    ref={ref => contentRefs.current['devops_and_servers'] = ref}
                                    className="overflow-hidden transition-all duration-500 ease-in-out"
                                    style={{ maxHeight: 0, opacity: 0 }}
                                >
                                    <div className="p-4">
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                            {skillsData.devops_and_servers.tools.map((tool) => (
                                                <div
                                                    key={tool.name}
                                                    className="p-4 border border-[#5B21B6]/10 hover:border-[#DAA520]/30 rounded-lg bg-gradient-to-br from-transparent to-[#1B1B1B]/50 hover:from-[#DAA520]/5 transition-all duration-300 cursor-default"
                                                    onMouseEnter={() => setHoveredItem(tool.name)}
                                                    onMouseLeave={() => setHoveredItem(null)}
                                                >
                                                    <div className="flex items-center justify-between mb-3">
                                                        <h4 className="font-bold text-white">{tool.name}</h4>
                                                        <span className="text-[#DAA520]">
                                                            <BuildIcon fontSize="small" />
                                                        </span>
                                                    </div>
                                                    <p className="text-white/60 text-sm">
                                                        {tool.description}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </RevealOnScroll>
                    </div>

                    {/* Section UI/UX Design - Pleine largeur */}
                    <div className="md:col-span-12 order-5">
                        <RevealOnScroll delay={450} direction="bottom">
                            <div className="bg-[#1B1B1B]/30 backdrop-blur-lg rounded-xl border border-[#5B21B6]/20 overflow-hidden">
                                <div
                                    className="flex items-center justify-between p-4 cursor-pointer border-b border-[#5B21B6]/20 hover:bg-[#1B1B1B]/50 transition-colors duration-300"
                                    onClick={() => toggleSection('design_and_ui')}
                                >
                                    <div className="flex items-center gap-3">
                                        <span className="p-2 rounded-full bg-[#8B5CF6]/10 text-[#8B5CF6]">
                                            <DesignServicesIcon />
                                        </span>
                                        <h3 className="text-xl font-bold text-white">UI/UX Design</h3>
                                    </div>
                                    <ExpandMoreIcon
                                        className={`text-white/60 transition-transform duration-500 ${expandedSections.design_and_ui ? 'rotate-180' : ''}`}
                                    />
                                </div>

                                <div
                                    ref={ref => contentRefs.current['design_and_ui'] = ref}
                                    className="overflow-hidden transition-all duration-500 ease-in-out"
                                    style={{ maxHeight: 0, opacity: 0 }}
                                >
                                    <div className="p-4">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {skillsData.design_and_ui.map((design) => (
                                                <div
                                                    key={design.skill}
                                                    className="p-5 rounded-lg border border-transparent hover:border-[#8B5CF6]/50 hover:bg-gradient-to-br hover:from-[#8B5CF6]/5 hover:to-transparent transition-all duration-300 cursor-default"
                                                    onMouseEnter={() => setHoveredItem(design.skill)}
                                                    onMouseLeave={() => setHoveredItem(null)}
                                                >
                                                    <div className="flex items-center gap-3 mb-3">
                                                        <span className="text-[#8B5CF6] bg-[#8B5CF6]/10 p-2 rounded-lg">
                                                            <DesignServicesIcon fontSize="small" />
                                                        </span>
                                                        <h4 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#DAA520] to-[#8B5CF6]">
                                                            {design.skill}
                                                        </h4>
                                                    </div>
                                                    <p className="text-white/70 text-base leading-relaxed">
                                                        {design.description}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </RevealOnScroll>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;