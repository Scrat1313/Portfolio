import React, { useState, useEffect } from 'react';
import { RevealOnScroll } from "./";

// Import des icônes
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import WebIcon from '@mui/icons-material/Web';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

// Import des données
import projectsData from '../../data/projectData.json';

// Import direct des images (méthode compatible avec Vite)
import AurumCartelImg from '../../assets/images/projectImages/AurumCartel.png';
import MadatlasImg from '../../assets/images/projectImages/Madatlas.png';
import EmitImg from '../../assets/images/projectImages/Emit.png';
import EmilibImg from '../../assets/images/projectImages/Emilib.png';
import MicroserviceGatewayImg from '../../assets/images/projectImages/MicroserviceGateway.png';
import AmbalavaoImg from '../../assets/images/projectImages/Ambalavao.png';
import MarolookImg from '../../assets/images/projectImages/Marolook.png';
import CitizenParticipationImg from '../../assets/images/projectImages/CitizenParticipation.png';
import TisradarImg from '../../assets/images/projectImages/Tisradar.png';

// Créer un objet qui stocke toutes les images importées
const projectImages = {
    AurumCartel: AurumCartelImg,
    Madatlas: MadatlasImg,
    Emit: EmitImg,
    Emilib: EmilibImg,
    MicroserviceGateway: MicroserviceGatewayImg,
    Ambalavao: AmbalavaoImg,
    Marolook: MarolookImg,
    CitizenParticipation: CitizenParticipationImg,
    Tisradar: TisradarImg
};

// Fonction pour obtenir l'image correspondant au titre du projet
const getProjectImage = (title) => {
    // Correspondance entre les titres des projets et les noms de fichiers
    const imageMapping = {
        "Aurum Cartel Web Application": "AurumCartel",
        "Madatlas Review Platform": "Madatlas",
        "EMIT Official Website": "Emit",
        "EMILIB Web Application": "Emilib",
        "Microservices Architecture – Acceleration Week by PNUD": "MicroserviceGateway",
        "Ambalavao Website": "Ambalavao",
        "Marolook Website Redesign": "Marolook",
        "Citizen Participation – Hackathon PNUD": "CitizenParticipation",
        "Tisradar Digital Library": "Tisradar",
    };

    const imageName = imageMapping[title];
    if (imageName && projectImages[imageName]) {
        return projectImages[imageName];
    }

    // Image de secours si aucune correspondance n'est trouvée
    return null;
};

const AllProjects = () => {
    const [filter, setFilter] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredProjects, setFilteredProjects] = useState([]);
    const [view, setView] = useState('grid'); // 'grid' ou 'list'
    const [hoveredProject, setHoveredProject] = useState(null);

    // Extract all unique technologies for filter options
    const allTechnologies = [
        ...new Set(
            projectsData.projects.flatMap(project => project.technologies)
        )
    ];

    // Get appropriate icon for a technology
    const getTechIcon = (tech) => {
        if (tech.includes("React") || tech.includes("Express") || tech.includes("Next")) {
            return <CodeIcon className="text-[#DAA520]" fontSize="small" />;
        } else if (tech.includes("Tailwind") || tech.includes("CSS")) {
            return <WebIcon className="text-[#8B5CF6]" fontSize="small" />;
        } else if (tech.includes("Spring") || tech.includes("Docker") || tech.includes("Jenkins")) {
            return <StorageIcon className="text-[#DAA520]" fontSize="small" />;
        }
        return <DesignServicesIcon className="text-[#8B5CF6]" fontSize="small" />;
    };

    // Generate a visual identifier color based on project name
    const getProjectColor = (title) => {
        const colors = [
            'from-[#DAA520] to-[#8B5CF6]',
            'from-[#8B5CF6] to-[#DAA520]',
            'from-[#DAA520] to-[#FFD700]',
            'from-[#8B5CF6] to-[#9F7AEA]'
        ];

        const hash = title.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
        return colors[hash % colors.length];
    };

    // Apply filters
    useEffect(() => {
        let result = projectsData.projects;

        // Apply search filter
        if (searchTerm.trim() !== '') {
            const term = searchTerm.toLowerCase();
            result = result.filter(project =>
                project.title.toLowerCase().includes(term) ||
                project.description.toLowerCase().includes(term) ||
                project.technologies.some(tech => tech.toLowerCase().includes(term))
            );
        }

        // Apply technology filter
        if (filter !== 'all') {
            result = result.filter(project =>
                project.technologies.includes(filter)
            );
        }

        setFilteredProjects(result);
    }, [filter, searchTerm]);

    return (
        <section className="w-full py-24 bg-gradient-to-br from-[#0a0a0a] via-[#121212] to-[#0a0a0a] overflow-x-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <RevealOnScroll delay={100} direction="bottom">
                    <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DAA520] to-[#FFD700]">
                            My
                        </span>{" "}
                        <span className="text-white">Achievements</span>
                    </h1>

                    <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
                        Explore my portfolio of web development projects showcasing my expertise in frontend, backend, and architecture design.
                    </p>
                </RevealOnScroll>

                {/* Grid View */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProjects.map((project, index) => {
                        const projectColor = getProjectColor(project.title);
                        const projectImage = getProjectImage(project.title);

                        return (
                            <RevealOnScroll key={project.title} delay={200 + index * 80} direction="up">
                                <div
                                    className="group rounded-xl overflow-hidden bg-[#1B1B1B] border border-[#5B21B6]/10 shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#8B5CF6]/10"
                                    onMouseEnter={() => setHoveredProject(project.title)}
                                    onMouseLeave={() => setHoveredProject(null)}
                                >
                                    {/* Image */}
                                    {projectImage && (
                                        <div className="relative w-full h-48 overflow-hidden">
                                            <img
                                                src={projectImage}
                                                alt={project.title}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                            <div className={`absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 via-[#0a0a0a]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

                                            {/* Project number badge */}
                                            <div className="absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center bg-[#1B1B1B]/80 border border-[#5B21B6]/20 text-white/80 transition-colors group-hover:bg-gradient-to-r group-hover:from-[#DAA520] group-hover:to-[#8B5CF6] group-hover:text-white">
                                                <span className="font-mono text-sm">
                                                    {(index + 1).toString().padStart(2, '0')}
                                                </span>
                                            </div>
                                        </div>
                                    )}

                                    {/* Content */}
                                    <div className="p-5">
                                        {/* Role Badge */}
                                        <div className="mb-3">
                                            <span className="px-3 py-1 rounded-full bg-[#1B1B1B]/70 text-[#DAA520] text-xs font-medium border border-[#5B21B6]/10">
                                                {project.role}
                                            </span>
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-xl font-bold text-white mb-3 transition-colors group-hover:text-[#DAA520]">
                                            {project.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-white/70 mb-5 line-clamp-3">
                                            {project.description}
                                        </p>

                                        {/* Technologies */}
                                        <div className="flex flex-wrap gap-2 mb-5">
                                            {project.technologies.map((tech, idx) => (
                                                <span
                                                    key={`${project.title}-${tech}`}
                                                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#1B1B1B]/50 text-white/80 text-xs border border-[#5B21B6]/10
                                                                ${idx > 1 ? 'hidden sm:flex' : ''}`}
                                                >
                                                    {getTechIcon(tech)}
                                                    {tech}
                                                </span>
                                            ))}

                                            {project.technologies.length > 2 && (
                                                <span className="sm:hidden flex items-center px-2.5 py-1 rounded-md bg-[#1B1B1B]/50 text-white/50 text-xs border border-[#5B21B6]/10">
                                                    +{project.technologies.length - 2} more
                                                </span>
                                            )}
                                        </div>

                                        {/* URL & Buttons */}
                                        <div className="flex flex-col gap-3">
                                            <div className="text-white/40 text-xs truncate">
                                                {project.url.replace(/https?:\/\//, '')}
                                            </div>

                                            <a
                                                href={project.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gradient-to-r ${projectColor} text-white text-sm font-medium transition-all`}
                                            >
                                                Visit Site
                                                <ArrowOutwardIcon fontSize="small" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </RevealOnScroll>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default AllProjects;