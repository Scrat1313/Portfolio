import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import routes from '../../routes/routes';
import logo from '../../assets/images/PrimaryLogo.png';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState(location.pathname);
    const [isExpanded, setIsExpanded] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const navigationRef = useRef(null);

    const navItems = [
        { name: 'Home', path: routes.home },
        { name: 'Achievements', path: routes.achievements }
    ];

    // Update active link when location changes
    useEffect(() => {
        setActiveLink(location.pathname);
    }, [location]);

    // Handle clicks outside navigation panel to close it
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navigationRef.current && !navigationRef.current.contains(event.target)) {
                setIsExpanded(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // Handle scroll to change header appearance
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Handle body overflow when mobile menu is open
    useEffect(() => {
        if (isExpanded) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isExpanded]);

    return (
        <>
            <div className="h-20"></div>

            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
                    ${isScrolled ? 'h-16' : 'h-20'}`}
            >
                {/* Semi-transparent background with purple tint when scrolled */}
                <div
                    className={`absolute inset-0 transition-opacity duration-300
                        ${isScrolled ? 'opacity-95 bg-gradient-to-r from-[#0B0B0B] to-[#0D0A12] backdrop-blur-sm' : 'opacity-0'}`}
                ></div>

                {/* Subtle purple top border */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#8B5CF6]/30 to-transparent"></div>

                <div className="relative z-10 h-full max-w-7xl mx-auto px-6">
                    <div className="flex items-center justify-between h-full">
                        {/* Logo - Restored with minimal container */}
                        <Link to={routes.home} className="flex items-center group">
                            <div className="flex items-center">
                                <div className={`mr-3 h-9 w-9 rounded-lg flex items-center justify-center bg-[#0D0A12] border border-[#8B5CF6]/10 group-hover:border-[#8B5CF6]/30 transition-colors duration-300`}>
                                    <img src={logo} alt="Logo" className="w-5 h-5 object-contain" />
                                </div>

                                <div>
                                    <span className="text-xl font-bold text-[#DAA520]">Scrat</span>
                                    <span className="text-xl font-bold text-[#8B5CF6]">.</span>
                                    <div className="flex items-center">
                                        <span className="text-xs text-white/50">Developer</span>
                                        <span className="mx-1.5 text-[10px] text-[#8B5CF6]">•</span>
                                        <span className="text-xs text-white/50">Designer</span>
                                        <span className="mx-1.5 text-[10px] text-[#8B5CF6]">•</span>
                                        <span className="text-xs text-white/50">AI</span>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        {/* Desktop Navigation - With purple accents */}
                        <nav className="hidden md:flex items-center space-x-12">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.path}
                                    className="group relative py-2"
                                >
                                    <span className={`text-sm font-normal uppercase tracking-wider transition-colors
                                        ${activeLink === item.path
                                            ? 'text-[#DAA520]'
                                            : 'text-white/70 group-hover:text-white'}`}
                                    >
                                        {item.name}
                                    </span>

                                    {/* Two-tone line indicator */}
                                    {activeLink === item.path ? (
                                        <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#DAA520] to-[#8B5CF6]"></span>
                                    ) : (
                                        <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-[#8B5CF6]/60 group-hover:w-full transition-all duration-300 ease-out"></span>
                                    )}
                                </Link>
                            ))}
                        </nav>

                        {/* Mobile Menu Button - With purple hover */}
                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="md:hidden flex items-center group"
                            aria-label="Toggle navigation"
                        >
                            <div className={`transition-colors duration-300 
                                ${isExpanded ? 'text-[#8B5CF6]' : 'text-[#DAA520] group-hover:text-[#8B5CF6]'}`}>
                                {isExpanded ? <CloseIcon /> : <MenuIcon />}
                            </div>
                        </button>
                    </div>
                </div>

                {/* Minimal mobile menu with purple accents */}
                <div
                    ref={navigationRef}
                    className={`fixed inset-0 z-0 bg-gradient-to-b from-[#0B0B0B] to-[#0D0A12] transition-opacity duration-500 flex items-center justify-center
                        ${isExpanded ? 'opacity-98 visible' : 'opacity-0 invisible pointer-events-none'}`}
                >
                    {/* Purple decorative element */}
                    <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-[#8B5CF6]/5 blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-[#8B5CF6]/5 blur-2xl"></div>

                    <div className="relative z-10 w-full max-w-sm">
                        <nav className="flex flex-col items-center">
                            {navItems.map((item, index) => (
                                <Link
                                    key={item.name}
                                    to={item.path}
                                    onClick={() => {
                                        setActiveLink(item.path);
                                        setIsExpanded(false);
                                    }}
                                    className={`relative block w-full text-center py-6 border-b ${index === 0 ? 'border-t' : ''} 
                                        ${activeLink === item.path
                                            ? 'border-[#8B5CF6]/20'
                                            : 'border-white/10'}`}
                                >
                                    <span className={`text-xl tracking-wide
                                        ${activeLink === item.path ? 'text-[#DAA520]' : 'text-white'}`}
                                    >
                                        {item.name}
                                    </span>

                                    {/* Purple and gold dot indicators for current page */}
                                    {activeLink === item.path && (
                                        <>
                                            <span className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#DAA520]"></span>
                                            <span className="absolute right-3 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-[#8B5CF6]/50"></span>
                                        </>
                                    )}
                                </Link>
                            ))}
                        </nav>
                    </div>
                </div>
            </header>

            {/* Subtle purple gradient separator - only visible when scrolled */}
            <div
                className={`fixed top-[var(--header-height)] left-0 right-0 h-px z-40 transition-opacity duration-300 
                    ${isScrolled ? 'opacity-100' : 'opacity-0'}`}
                style={{ '--header-height': isScrolled ? '64px' : '80px' }}
            >
                <div className="h-full bg-gradient-to-r from-transparent via-[#8B5CF6]/15 to-transparent"></div>
            </div>
        </>
    );
};

export default Header;