import React, { useState } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Profile from '../../assets/images/Profile.jpg';

const ProfileCard = ({ data, className = '' }) => {
    const [isCardExpanded, setIsCardExpanded] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const [animationType, setAnimationType] = useState('');

    const toggleCardExpand = () => {
        setIsAnimating(true);
        setAnimationType(isCardExpanded ? 'collapse' : 'expand');
        setIsCardExpanded(!isCardExpanded);

        // Désactiver l'animation après sa fin
        setTimeout(() => {
            setIsAnimating(false);
        }, isCardExpanded ? 600 : 700);
    };

    // Map icon strings to actual components
    const getIconComponent = (iconName) => {
        const icons = {
            GitHubIcon,
            EmailIcon,
            WhatsAppIcon
        };

        return icons[iconName] || null;
    };

    return (
        <div
            onClick={toggleCardExpand}
            className={`absolute cursor-pointer 
                right-0 translate-x-0 sm:translate-x-1/4 translate-y-4 sm:translate-y-0
                -top-2 sm:top-5 md:top-10 lg:top-20
                w-40 sm:w-44 md:w-56 lg:w-72
                ${isCardExpanded ? 'h-auto' : 'h-20 sm:h-24 md:h-30 lg:h-36'}
                bg-gradient-to-tl from-white/5 to-white/10 backdrop-blur-md 
                border-l border-t border-white/20 border-r border-b border-white/5
                rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.2)]
                ${!isAnimating && !isCardExpanded ? 'animate-float' : ''}
                ${isAnimating && animationType === 'expand' ? 'animate-expand' : ''}
                ${isAnimating && animationType === 'collapse' ? 'animate-collapse' : ''}
                ${!isAnimating && isCardExpanded ? 'rotate-0' : ''}
                ${!isAnimating && !isCardExpanded ? 'rotate-[25deg]' : ''}
                hover:shadow-[0_10px_40px_rgba(0,0,0,0.3)]
                transition-shadow duration-300 ease-out
                z-10 flex flex-col items-center justify-center
                ${className}`}
        >
            {/* Cercle décoratif discret en haut à gauche */}
            <div className="absolute -top-1 -left-1 w-3 h-3 rounded-full bg-gradient-to-br from-[#DAA520]/40 to-[#FFD700]/20"></div>

            {/* Cercle décoratif discret en bas à droite */}
            <div className="absolute -bottom-1 -right-1 w-3 h-3 rounded-full bg-gradient-to-tl from-[#DAA520]/40 to-[#FFD700]/20"></div>

            <div className="flex flex-col items-center justify-center p-3 w-full">
                {/* Photo de profil avec halo lumineux et cadre amélioré */}
                <div className={`relative w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full mb-2
                       animate-photo-glow group
                       transition-transform duration-500
                       ${isCardExpanded ? 'scale-110' : ''}`}
                >
                    {/* Halo autour de la photo */}
                    <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#DAA520]/20 via-[#FFD700]/5 to-[#DAA520]/20 blur-sm"></div>

                    {/* Container avec double bordure */}
                    <div className="relative rounded-full overflow-hidden z-10 border border-white/10 p-[1px] bg-gradient-to-br from-[#DAA520]/30 to-transparent">
                        <img
                            src={Profile}
                            alt={data.profile.firstName}
                            className="w-full h-full object-cover rounded-full"
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 24 24'%3E%3Cpath fill='%23DAA520' d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z'/%3E%3C/svg%3E";
                            }}
                        />

                        {/* Overlay subtilement brillant */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-60"></div>
                    </div>
                </div>

                {/* Nom avec style amélioré */}
                <div className="text-white font-bold text-xs sm:text-sm md:text-base text-center leading-tight">
                    <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                        {data.profile.lastName}
                    </span>
                    <span className="block text-white/80 text-[10px] sm:text-xs md:text-sm font-medium tracking-wide">
                        {data.profile.firstName}
                    </span>
                </div>

                {/* Rôle/Skills avec pastille brillante et style amélioré */}
                <div className="text-[#FFD700] bg-black/20 rounded-full px-2 py-0.5 text-[10px] sm:text-xs md:text-sm font-medium mt-1 flex items-center gap-1">
                    <span className={`inline-block w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#DAA520] to-[#FFD700] ${isCardExpanded ? '' : 'animate-pulse'}`}></span>
                    <span className="bg-gradient-to-r from-[#DAA520] to-[#FFD700] bg-clip-text text-transparent">
                        {isCardExpanded ? "Skills" : data.profile.title}
                    </span>
                </div>

                {/* Contenu supplémentaire qui apparaît lors du clic */}
                <div
                    className={`overflow-hidden transition-all ease-out w-full
                     ${isCardExpanded ? 'max-h-96 opacity-100 mt-2 animate-content-fade-in' : 'max-h-0 opacity-0'}`}
                >
                    <div className="text-white/90 text-[10px] sm:text-xs md:text-sm text-center space-y-1 px-2">
                        <div className="flex flex-wrap justify-center gap-2 staggered-animation">
                            {data.skills.map((skill, index) => (
                                <span
                                    key={index}
                                    className="px-2 py-0.5 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm
                                             border-t border-l border-white/10 border-r border-b border-white/5
                                             rounded-full transition-all hover:bg-white/20 hover:text-white hover:scale-105"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>

                        <div className="flex space-x-4 mt-3 justify-center pt-2 border-t border-white/10">
                            {data.links.map((link, index) => {
                                const IconComponent = getIconComponent(link.icon);
                                return (
                                    <a
                                        key={index}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white/80 hover:text-[#FFD700] transition-all hover:scale-125 
                                                 p-1.5 rounded-full bg-white/5 backdrop-blur-sm"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        {IconComponent && <IconComponent className="w-3.5 h-3.5 md:w-4.5 md:h-4.5" />}
                                    </a>
                                );
                            })}
                        </div>
                        {/* Donwload Resum */}
                        <button className='bg-[#FFD700] text-black px-4 py-2 rounded-full hover:bg-[#DAA520] transition-all'>
                            Download Resume
                        </button>
                    </div>
                </div>

                {/* Séparateur subtilement stylisé */}
                <div className={`w-12 h-[1px] mx-auto my-1 
                               bg-gradient-to-r from-transparent via-white/20 to-transparent
                               ${isCardExpanded ? 'opacity-100' : 'opacity-50'}`}>
                </div>

                {/* Icône pour indiquer que c'est cliquable avec effet lumineux amélioré */}
                <div className={`text-white/30 transition-transform duration-500 ease-bounce
                               flex items-center justify-center w-5 h-5 rounded-full
                               ${isCardExpanded ? 'rotate-180 text-[#FFD700]/70 bg-black/20' : 'bg-white/5'}`}
                >
                    <KeyboardArrowDownIcon className="h-3.5 w-3.5" />
                </div>
            </div>

            {/* Réflexion subtile en bas de la carte */}
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        </div>
    );
};

export default ProfileCard;