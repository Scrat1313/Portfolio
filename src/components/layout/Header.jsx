import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import routes from '../../routes/routes';
import logo from '../../assets/images/PrimaryLogo.png';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import DownloadIcon from '@mui/icons-material/Download';

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
        // Prevent background scrolling when menu is open
        if (isExpanded) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        // Cleanup function to ensure body scroll is restored
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isExpanded]);

    // Handle resume download
    const handleDownloadResume = () => {
        // Replace with your resume file path
        const resumeUrl = '../../assets/files/CV_Alain Patrick_RAMAHEFARSON.pdf';

        // Create an anchor element and trigger download
        const link = document.createElement('a');
        link.href = resumeUrl;
        link.download = 'CV_Alain Patrick_RAMAHEFARSON.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full
                ${isScrolled
                    ? 'py-2 bg-[#0B0B0B]/90 backdrop-blur-lg shadow-lg shadow-[#000]/20'
                    : 'py-4 bg-transparent'}`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link to={routes.home} className="flex items-center gap-2 group">
                        <div
                            className={`h-10 w-10 rounded-xl flex items-center justify-center
                                ${isScrolled ? 'bg-[#1B1B1B]' : 'bg-[#1B1B1B]/80'} 
                                group-hover:bg-gradient-to-r from-[#DAA520]/80 to-[#8B5CF6]/80 transition-all duration-300 p-1.5`}
                        >
                            <img src={logo} alt="Logo" className="w-full h-full object-contain" />
                        </div>
                        <div className="flex flex-col">
                            <h1 className="text-lg font-extrabold text-[#DAA520] tracking-tight leading-none">
                                Scrat<span className="text-[#8B5CF6]">.</span>
                            </h1>
                            <span className="text-[10px] text-white/50 leading-none font-medium">Developer & Designer</span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8 text-[#FFFFFF]">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                to={item.path}
                                className={`relative px-2 py-1 font-medium transition-colors duration-300
                                    ${activeLink === item.path ? 'text-[#DAA520]' : 'text-[#FFFFFF]/80 hover:text-white'}`}
                            >
                                {item.name}
                                {activeLink === item.path && (
                                    <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-[#DAA520] to-[#8B5CF6] rounded-full"></span>
                                )}
                            </Link>
                        ))}

                        {/* Resume Download Button */}
                        <button
                            onClick={handleDownloadResume}
                            className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#DAA520] to-[#8B5CF6] text-white font-medium flex items-center gap-1.5 text-sm hover:shadow-lg hover:shadow-[#8B5CF6]/20 transition-all"
                        >
                            <DownloadIcon fontSize="small" />
                            <span>Resume</span>
                        </button>
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="flex items-center md:hidden">
                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="w-10 h-10 rounded-lg bg-[#1B1B1B]/80 flex items-center justify-center text-[#DAA520]"
                            aria-label="Toggle navigation"
                        >
                            {isExpanded ? <CloseIcon /> : <MenuIcon />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Menu - Fixed positioning to avoid layout shift */}
            <div
                ref={navigationRef}
                className={`fixed top-[calc(var(--header-height,60px))] left-0 right-0 bottom-0 bg-[#0B0B0B]/95 backdrop-blur-lg shadow-lg transform transition-all duration-300 overflow-y-auto
                    ${isExpanded ? 'translate-y-0 opacity-100' : 'translate-y-[-10px] opacity-0 pointer-events-none'}`}
                style={{
                    '--header-height': isScrolled ? '56px' : '72px',
                    maxHeight: 'calc(100vh - var(--header-height, 60px))'
                }}
            >
                <div className="max-w-7xl mx-auto px-4 py-5">
                    <nav className="grid gap-1 mb-6">
                        {navItems.map((item, index) => (
                            <Link
                                key={item.name}
                                to={item.path}
                                onClick={() => {
                                    setActiveLink(item.path);
                                    setIsExpanded(false);
                                }}
                                className={`px-4 py-3 rounded-lg flex items-center justify-between
                                    ${activeLink === item.path
                                        ? 'bg-gradient-to-r from-[#DAA520]/10 to-[#8B5CF6]/10 text-[#DAA520] border-l-2 border-[#DAA520]'
                                        : 'text-[#FFFFFF]/90 border-l-2 border-transparent'
                                    } transition-colors duration-200`}
                            >
                                <span className="flex items-center">
                                    <span className="mr-3 flex items-center justify-center w-5 h-5 text-sm font-normal text-[#8B5CF6]/80">
                                        0{index + 1}
                                    </span>
                                    {item.name}
                                </span>
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile Resume */}
                    <div className="flex flex-col gap-4 pb-6">
                        <button
                            onClick={() => {
                                handleDownloadResume();
                                setIsExpanded(false);
                            }}
                            className="py-3 rounded-lg bg-gradient-to-r from-[#DAA520] to-[#8B5CF6] text-white font-medium flex items-center justify-center gap-2"
                        >
                            <DownloadIcon />
                            <span>Download Resume</span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;