import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Profile from '../../assets/images/Profile.jpg';

const ProfileCard = ({ data, className = '' }) => {
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
            className={`absolute 
                right-0 translate-x-0 sm:translate-x-1/4 translate-y-4 sm:translate-y-0
                -top-2 sm:top-5 md:top-10 lg:top-20
                w-40 sm:w-44 md:w-56 lg:w-72
                h-auto
                bg-gradient-to-tl from-white/5 to-white/10 backdrop-blur-md 
                border-l border-t border-white/20 border-r border-b border-white/5
                rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.2)]
                animate-float
                rotate-[25deg]
                hover:shadow-[0_10px_40px_rgba(0,0,0,0.3)]
                hover:rotate-[20deg]
                transition-all duration-500 ease-out
                z-10 flex flex-col items-center justify-center
                ${className}`}
        >
            {/* Cercle décoratif discret en haut à gauche */}
            <div className="absolute -top-1 -left-1 w-3 h-3 rounded-full bg-gradient-to-br from-[#DAA520]/40 to-[#FFD700]/20"></div>

            {/* Cercle décoratif discret en bas à droite */}
            <div className="absolute -bottom-1 -right-1 w-3 h-3 rounded-full bg-gradient-to-tl from-[#DAA520]/40 to-[#FFD700]/20"></div>

            <div className="flex flex-col items-center justify-center p-3 w-full space-y-2">
                {/* Photo de profil avec halo lumineux */}
                <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full animate-photo-glow">
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
                <div className="text-white font-bold text-[10px] sm:text-xs md:text-sm text-center leading-tight">
                    <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                        {data.profile.lastName}
                    </span>
                    <span className="block text-white/80 text-[8px] sm:text-[10px] md:text-xs font-medium tracking-wide">
                        {data.profile.firstName}
                    </span>
                </div>

                {/* Titre/Rôle */}
                <div className="text-[#FFD700] bg-black/20 rounded-full px-2 py-0.5 text-[8px] sm:text-[10px] md:text-xs font-medium flex items-center gap-1">
                    <span className="inline-block w-1 h-1 rounded-full bg-gradient-to-r from-[#DAA520] to-[#FFD700] animate-pulse"></span>
                    <span className="bg-gradient-to-r from-[#DAA520] to-[#FFD700] bg-clip-text text-transparent">
                        {data.profile.title}
                    </span>
                </div>

                {/* Séparateur */}
                <div className="w-8 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

                {/* Skills compacts */}
                <div className="flex flex-wrap justify-center gap-1 max-w-full">
                    {data.skills.slice(0, 3).map((skill, index) => (
                        <span
                            key={index}
                            className="px-1.5 py-0.5 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm
                                     border border-white/10 rounded-full text-white/90
                                     text-[7px] sm:text-[8px] md:text-[10px] font-medium
                                     transition-all hover:bg-white/20 hover:scale-105"
                        >
                            {skill}
                        </span>
                    ))}
                    {data.skills.length > 3 && (
                        <span className="px-1.5 py-0.5 bg-gradient-to-br from-[#DAA520]/20 to-[#FFD700]/10 
                                       border border-[#DAA520]/20 rounded-full text-[#FFD700]
                                       text-[7px] sm:text-[8px] md:text-[10px] font-medium">
                            +{data.skills.length - 3}
                        </span>
                    )}
                </div>

                {/* Liens sociaux compacts */}
                <div className="flex space-x-2 justify-center">
                    {data.links.map((link, index) => {
                        const IconComponent = getIconComponent(link.icon);
                        return (
                            <a
                                key={index}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white/70 hover:text-[#FFD700] transition-all hover:scale-110 
                                         p-1 rounded-full bg-white/5 backdrop-blur-sm border border-white/10"
                            >
                                {IconComponent && <IconComponent className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5" />}
                            </a>
                        );
                    })}
                </div>
            </div>

            {/* Réflexion subtile en bas de la carte */}
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        </div>
    );
};

export default ProfileCard;