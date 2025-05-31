import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { RevealOnScroll } from '.';

// Import des icônes
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import WebIcon from '@mui/icons-material/Web';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FolderIcon from '@mui/icons-material/Folder';
import StarIcon from '@mui/icons-material/Star';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LaptopIcon from '@mui/icons-material/Laptop';

// Import des données de projets
import projectsData from '../../data/projectData.json';

const BestProject = () => {
    const [activeProject, setActiveProject] = useState(0);
    const sliderRef = useRef(null);

    // Sélectionner les 5 premiers projets
    const featuredProjects = projectsData.projects.slice(0, 5);

    // Obtenir l'icône appropriée pour une technologie
    const getTechIcon = (tech) => {
        if (tech.includes("React") || tech.includes("JS") || tech.includes("Vue")) {
            return <CodeIcon fontSize="small" />;
        } else if (tech.includes("Tailwind") || tech.includes("CSS")) {
            return <WebIcon fontSize="small" />;
        } else if (tech.includes("Spring") || tech.includes("Boot")) {
            return <StorageIcon fontSize="small" />;
        }
        return <CodeIcon fontSize="small" />;
    };

    // Fonction pour défiler vers le projet sélectionné
    const scrollToProject = (index) => {
        setActiveProject(index);
    };

    return (
        <section className="w-full py-20 bg-gradient-to-br from-[#0a0a0a] via-[#121212] to-[#0a0a0a] relative overflow-hidden">
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

            <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
                <RevealOnScroll delay={100} direction="bottom">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-3">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DAA520] to-[#FFD700]">
                            Featured
                        </span>{" "}
                        <span className="text-white">Projects</span>
                    </h2>
                </RevealOnScroll>

                <RevealOnScroll delay={150} direction="bottom">
                    <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
                        Showcasing my most significant work, combining design innovation with technical excellence.
                    </p>
                </RevealOnScroll>

                {/* Projects Slider */}
                <div ref={sliderRef} className="relative">
                    {featuredProjects.map((project, index) => (
                        <RevealOnScroll key={project.title} delay={300} direction={index % 2 === 0 ? "left" : "right"}>
                            <div
                                className={`mb-10 transition-all duration-500 ${activeProject === index
                                        ? 'opacity-100 scale-100'
                                        : 'opacity-0 scale-95 hidden'
                                    }`}
                            >
                                {/* Project Card - Design Elégant */}
                                <div className="bg-[#1B1B1B]/30 backdrop-blur-lg rounded-2xl border border-[#5B21B6]/20 overflow-hidden shadow-xl shadow-[#000]/20">
                                    {/* Header coloré */}
                                    <div className="h-3 bg-gradient-to-r from-[#DAA520] to-[#8B5CF6]"></div>

                                    <div className="p-6 md:p-10">
                                        {/* En-tête du projet */}
                                        <div className="flex flex-wrap justify-between items-start gap-4 mb-8">
                                            <div>
                                                <span className="inline-block px-3 py-1 rounded-full bg-[#DAA520]/10 text-[#DAA520] text-sm font-medium mb-3">
                                                    {project.role}
                                                </span>
                                                <h3 className="text-2xl md:text-3xl font-bold text-white">
                                                    {project.title}
                                                </h3>
                                            </div>

                                            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-[#DAA520]/10 to-[#8B5CF6]/10 border border-[#5B21B6]/20">
                                                <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#DAA520] to-[#8B5CF6]">
                                                    {index + 1}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Détails du projet */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                            <div className="space-y-6">
                                                <div>
                                                    <h4 className="text-[#DAA520] font-semibold mb-3 flex items-center gap-2">
                                                        <FolderIcon fontSize="small" />
                                                        Overview
                                                    </h4>
                                                    <p className="text-white/70 leading-relaxed">
                                                        {project.description}
                                                    </p>
                                                </div>

                                                <div>
                                                    <h4 className="text-[#DAA520] font-semibold mb-3 flex items-center gap-2">
                                                        <LaptopIcon fontSize="small" />
                                                        Key Features
                                                    </h4>
                                                    <ul className="text-white/70 space-y-2">
                                                        <li className="flex items-start gap-2">
                                                            <span className="text-[#8B5CF6] mt-1">•</span>
                                                            <span>Modern & responsive design</span>
                                                        </li>
                                                        <li className="flex items-start gap-2">
                                                            <span className="text-[#8B5CF6] mt-1">•</span>
                                                            <span>Interactive user interfaces</span>
                                                        </li>
                                                        <li className="flex items-start gap-2">
                                                            <span className="text-[#8B5CF6] mt-1">•</span>
                                                            <span>Optimized performance</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <div className="space-y-6">
                                                <div>
                                                    <h4 className="text-[#DAA520] font-semibold mb-3 flex items-center gap-2">
                                                        <StarIcon fontSize="small" />
                                                        Technologies
                                                    </h4>
                                                    <div className="flex flex-wrap gap-2">
                                                        {project.technologies.map(tech => (
                                                            <div
                                                                key={tech}
                                                                className="px-3 py-1.5 rounded-md bg-[#1B1B1B]/80 border border-[#5B21B6]/20 text-white/80 text-sm flex items-center gap-2"
                                                            >
                                                                {getTechIcon(tech)}
                                                                {tech}
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>

                                                <div>
                                                    <h4 className="text-[#DAA520] font-semibold mb-3 flex items-center gap-2">
                                                        <CalendarTodayIcon fontSize="small" />
                                                        Project Details
                                                    </h4>

                                                    <div className="bg-[#1B1B1B]/40 rounded-lg border border-[#5B21B6]/10 p-4">
                                                        <div className="flex items-center justify-between text-sm mb-3">
                                                            <span className="text-white/60">Project URL:</span>
                                                            <a
                                                                href={project.url}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="text-[#8B5CF6] hover:text-[#DAA520] transition-colors truncate max-w-[220px]"
                                                            >
                                                                {project.url.replace(/https?:\/\//, '')}
                                                            </a>
                                                        </div>

                                                        <div className="flex items-center justify-between text-sm">
                                                            <span className="text-white/60">Role:</span>
                                                            <span className="text-white">{project.role}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Actions */}
                                        <div className="flex flex-wrap justify-between items-center pt-6 border-t border-[#5B21B6]/20">
                                            <div className="flex gap-4">
                                                {/* Pagination */}
                                                <div className="flex items-center gap-2">
                                                    {featuredProjects.map((_, idx) => (
                                                        <button
                                                            key={idx}
                                                            onClick={() => scrollToProject(idx)}
                                                            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${activeProject === idx
                                                                    ? 'bg-[#DAA520] w-6'
                                                                    : 'bg-[#5B21B6]/30 hover:bg-[#5B21B6]/60'
                                                                }`}
                                                            aria-label={`View project ${idx + 1}`}
                                                        />
                                                    ))}
                                                </div>

                                                <span className="text-white/50 text-sm">
                                                    {activeProject + 1} of {featuredProjects.length}
                                                </span>
                                            </div>

                                            <div className="flex gap-3 mt-4 sm:mt-0">
                                                <a
                                                    href={project.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#DAA520] to-[#8B5CF6] rounded-lg text-white font-medium hover:shadow-lg hover:shadow-[#8B5CF6]/25 transition-all duration-300"
                                                >
                                                    <VisibilityIcon fontSize="small" />
                                                    Visit Project
                                                </a>

                                                <button
                                                    onClick={() => scrollToProject((activeProject + 1) % featuredProjects.length)}
                                                    className="w-10 h-10 rounded-full bg-[#1B1B1B] border border-[#5B21B6]/20 flex items-center justify-center text-white hover:bg-[#1B1B1B]/80 transition-colors"
                                                >
                                                    <ArrowForwardIcon fontSize="small" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </RevealOnScroll>
                    ))}
                </div>

                {/* See More Link */}
                <RevealOnScroll delay={500} direction="bottom">
                    <div className="text-center mt-16">
                        <Link
                            to="/achievements"
                            className="inline-flex items-center gap-2 px-8 py-3 bg-[#1B1B1B]/70 rounded-full text-white hover:bg-[#1B1B1B] border border-[#5B21B6]/20 hover:border-[#DAA520]/30 transition-all duration-300 group"
                        >
                            <span>Explore All Projects</span>
                            <ArrowForwardIcon className="transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                    </div>
                </RevealOnScroll>
            </div>
        </section>
    );
};

export default BestProject;