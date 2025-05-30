import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import routes from '../../routes/routes';
import logo from '../../assets/images/PrimaryLogo.png'; 
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Header = () => {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState(location.pathname);
    const [isExpanded, setIsExpanded] = useState(false);
    const navigationRef = useRef(null);

    const navItems = [
        { name: 'Home', path: routes.home },
        { name: 'Achievements', path: routes.achievements }
    ];

    useEffect(() => {
        setActiveLink(location.pathname);
    }, [location]);

    useEffect(() => {
        // Handle clicks outside navigation panel to close it
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

    return (
        <>
            {/* Semi-transparent header bar with minimalist design */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-[#0B0B0B]/90 backdrop-blur-md">
                <div className="max-w-7xl mx-auto">
                    {/* Mobile expanded menu */}
                    <div
                        ref={navigationRef}
                        className={`transition-all duration-300 ease-in-out overflow-hidden
                            ${isExpanded ? 'max-h-[380px]' : 'max-h-16'} md:max-h-16`}
                    >
                        {/* Top bar with logo and expand button */}
                        <div className="flex items-center justify-between px-5 py-4 border-b border-[#5B21B6]/10">
                            <Link to={routes.home} className="flex items-center gap-2">
                                <div className="h-8 w-8 rounded-md bg-[#1B1B1B] flex items-center justify-center p-1.5">
                                    <img src={logo} alt="Logo" className="w-full h-full object-contain" />
                                </div>
                                <h1 className="text-lg font-extrabold text-[#DAA520] tracking-tight">
                                    Scrat<span className="text-[#8B5CF6]">.</span>
                                </h1>
                            </Link>

                            {/* Status indicator and menu toggle for mobile */}
                            <div className="flex items-center gap-3 md:hidden">
                                <button
                                    onClick={() => setIsExpanded(!isExpanded)}
                                    className="w-7 h-7 rounded-md bg-[#1B1B1B] flex items-center justify-center"
                                    aria-label="Toggle navigation"
                                >
                                    <span className="text-[#DAA520] text-lg">
                                        {isExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                                    </span>
                                </button>
                            </div>

                            {/* Desktop Navigation */}
                            <nav className="hidden md:flex gap-6 text-[#FFFFFF]">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.name}
                                        to={item.path}
                                        className={`relative px-2 py-1 font-medium hover:text-[#8B5CF6] transition-colors duration-300
                                            ${activeLink === item.path ? 'text-[#DAA520]' : 'text-[#FFFFFF]'}`}
                                    >
                                        {item.name}
                                        {activeLink === item.path && (
                                            <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-[#8B5CF6] rounded-full"></span>
                                        )}
                                    </Link>
                                ))}
                            </nav>
                        </div>

                        {/* Mobile expanded content - User info and navigation */}
                        <div className="md:hidden bg-[#1B1B1B]/80 backdrop-blur-sm">
                            {/* Mobile navigation links */}
                            <nav className="grid grid-cols-1 gap-1 p-3">
                                {navItems.map((item, index) => (
                                    <Link
                                        key={item.name}
                                        to={item.path}
                                        onClick={() => {
                                            setActiveLink(item.path);
                                            setTimeout(() => setIsExpanded(false), 300);
                                        }}
                                        className={`px-4 py-3 rounded-lg flex items-center justify-between
                                            ${activeLink === item.path
                                                ? 'bg-gradient-to-r from-[#DAA520]/10 to-[#8B5CF6]/10 text-[#DAA520]'
                                                : 'text-[#FFFFFF]/90'
                                            } transition-colors duration-200`}
                                    >
                                        <span className="flex items-center">
                                            <span className="mr-3 flex items-center justify-center w-5 h-5 text-xl font-normal text-[#8B5CF6]">
                                                {index + 1}.
                                            </span>
                                            {item.name}
                                        </span>
                                    </Link>
                                ))}
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;