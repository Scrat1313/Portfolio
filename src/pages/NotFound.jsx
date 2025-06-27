import React from 'react';
import { Link } from 'react-router-dom';
import { usePageTitle, useScrollToTop } from "../hooks";
import { RevealOnScroll } from "../components/commons";

// Import des icônes
import HomeIcon from '@mui/icons-material/Home';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ErrorIcon from '@mui/icons-material/Error';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import CodeOffIcon from '@mui/icons-material/CodeOff';

const NotFound = () => {
    usePageTitle("404 - Page Not Found");
    useScrollToTop();

    return (
        <section className="w-full min-h-screen bg-[#0a0a0a] flex flex-col md:flex-row overflow-hidden">
            {/* Left side - Graphical representation */}
            <div className="w-full md:w-1/2 bg-gradient-to-br from-[#121212] to-[#0a0a0a] min-h-[40vh] md:min-h-screen flex items-center justify-center relative p-8 md:p-12">
                {/* Background elements */}
                <div className="absolute inset-0 overflow-hidden">
                    {/* Circuit patterns */}
                    <div className="absolute inset-0 opacity-5">
                        <div className="absolute left-[10%] right-[10%] top-0 bottom-0">
                            <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-30">
                                <path d="M0,50 L100,50" stroke="#DAA520" strokeWidth="0.2" />
                                <path d="M30,0 L30,100" stroke="#8B5CF6" strokeWidth="0.2" />
                                <path d="M60,0 L60,100" stroke="#DAA520" strokeWidth="0.2" />
                                <path d="M85,0 L85,100" stroke="#8B5CF6" strokeWidth="0.2" />
                                <path d="M0,25 L100,25" stroke="#DAA520" strokeWidth="0.2" />
                                <path d="M0,75 L100,75" stroke="#8B5CF6" strokeWidth="0.2" />
                                <circle cx="30" cy="50" r="2" fill="#DAA520" fillOpacity="0.5" />
                                <circle cx="60" cy="25" r="2" fill="#8B5CF6" fillOpacity="0.5" />
                                <circle cx="60" cy="75" r="2" fill="#DAA520" fillOpacity="0.5" />
                                <circle cx="85" cy="50" r="2" fill="#8B5CF6" fillOpacity="0.5" />
                            </svg>
                        </div>
                    </div>

                    {/* Glowing orbs */}
                    <div className="absolute top-1/4 left-1/4 w-40 h-40 rounded-full bg-[#DAA520]/10 blur-3xl"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-60 h-60 rounded-full bg-[#8B5CF6]/10 blur-3xl"></div>
                </div>

                {/* Main 404 visual */}
                <div className="relative z-10 text-center">
                    <RevealOnScroll delay={100} direction="left">
                        <div className="mb-6 flex justify-center">
                            <div className="w-24 h-24 rounded-full bg-[#1B1B1B] border-4 border-[#DAA520]/30 flex items-center justify-center shadow-lg shadow-[#DAA520]/10">
                                <ErrorIcon style={{ fontSize: "3rem" }} className="text-[#DAA520]" />
                            </div>
                        </div>
                    </RevealOnScroll>

                    <RevealOnScroll delay={200} direction="left">
                        <div className="relative">
                            <h1 className="text-[120px] md:text-[160px] font-bold leading-none bg-clip-text text-transparent bg-gradient-to-br from-[#DAA520] to-[#8B5CF6] mb-0 drop-shadow-xl">
                                404
                            </h1>

                            {/* Reflection effect */}
                            <div className="text-[120px] md:text-[160px] font-bold leading-none bg-clip-text text-transparent bg-gradient-to-br from-[#DAA520]/5 to-[#8B5CF6]/5 mt-[-20px] transform scale-y-[-0.25] blur-sm opacity-30">
                                404
                            </div>
                        </div>
                    </RevealOnScroll>

                    {/* Decorative horizontal lines */}
                    <div className="flex flex-col gap-1 mt-4">
                        {Array.from({ length: 3 }).map((_, idx) => (
                            <div
                                key={`line-${idx}`}
                                className={`h-[2px] rounded-full bg-gradient-to-r from-[#DAA520]/20 via-[#8B5CF6]/20 to-[#DAA520]/20 mx-auto ${idx === 0 ? 'w-3/4' : idx === 1 ? 'w-1/2' : 'w-1/4'
                                    }`}
                            ></div>
                        ))}
                    </div>
                </div>

                {/* Decorative code blocks */}
                <div className="absolute bottom-8 left-8 font-mono text-xs text-[#DAA520]/20 opacity-50">
                    &lt;!-- ERROR 404 --&gt;
                </div>
                <div className="absolute top-8 right-8 font-mono text-xs text-[#8B5CF6]/20 opacity-50">
                    &lt;/page&gt;
                </div>
            </div>

            {/* Right side - Information and actions */}
            <div className="w-full md:w-1/2 bg-[#0a0a0a] min-h-[60vh] md:min-h-screen flex items-center justify-center p-8 md:p-12 relative">
                {/* Background pattern */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 grid grid-cols-6 grid-rows-12 opacity-5">
                        {Array.from({ length: 72 }).map((_, idx) => (
                            <div key={`grid-${idx}`} className="border-[0.5px] border-white/20"></div>
                        ))}
                    </div>
                </div>

                <div className="relative z-10 max-w-lg w-full">
                    <RevealOnScroll delay={300} direction="right">
                        <div className="mb-2 flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-[#DAA520]"></div>
                            <div className="h-px flex-1 bg-gradient-to-r from-[#DAA520] to-transparent"></div>
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                            Page Not Found
                        </h2>

                        <div className="flex items-center gap-2 text-white/50 text-sm mb-6">
                            <CodeOffIcon fontSize="small" />
                            <span>HTTP 404 Error</span>
                        </div>
                    </RevealOnScroll>

                    <RevealOnScroll delay={400} direction="right">
                        <p className="text-white/70 mb-8">
                            The page you're looking for doesn't exist or has been moved.
                            Please check that you've entered the correct URL or navigate
                            back to the homepage.
                        </p>
                    </RevealOnScroll>

                    {/* Common issues section */}
                    <RevealOnScroll delay={500} direction="right">
                        <div className="bg-[#1B1B1B]/40 backdrop-blur-sm rounded-xl border border-[#5B21B6]/20 p-5 mb-8">
                            <h3 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
                                <HelpOutlineIcon className="text-[#DAA520]" />
                                Common Issues
                            </h3>

                            <ul className="space-y-3 text-white/70">
                                <li className="flex items-start gap-3">
                                    <div className="min-w-[8px] h-[8px] rounded-full bg-[#DAA520] mt-1.5"></div>
                                    <span>The URL may be misspelled or incorrect</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="min-w-[8px] h-[8px] rounded-full bg-[#8B5CF6] mt-1.5"></div>
                                    <span>The page may have been moved or deleted</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="min-w-[8px] h-[8px] rounded-full bg-[#DAA520] mt-1.5"></div>
                                    <span>You might not have access to this resource</span>
                                </li>
                            </ul>
                        </div>
                    </RevealOnScroll>

                    {/* Navigation options */}
                    <RevealOnScroll delay={600} direction="right">
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                to="/"
                                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#DAA520] to-[#8B5CF6] rounded-lg text-white font-medium hover:shadow-lg hover:shadow-[#8B5CF6]/25 transition-all"
                            >
                                <HomeIcon fontSize="small" />
                                Return Home
                            </Link>

                            <button
                                onClick={() => window.history.back()}
                                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#1B1B1B] border border-[#5B21B6]/20 rounded-lg text-white/80 font-medium hover:bg-[#1B1B1B]/80 hover:border-[#8B5CF6]/40 transition-all"
                            >
                                <ArrowBackIcon fontSize="small" />
                                Go Back
                            </button>
                        </div>
                    </RevealOnScroll>
                </div>

                {/* Decorative elements */}
                <div className="absolute bottom-6 right-6 opacity-10">
                    <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="url(#paint0_linear)" strokeWidth="2" />
                        <path d="M15 9L9 15M9 9L15 15" stroke="url(#paint1_linear)" strokeWidth="2" strokeLinecap="round" />
                        <defs>
                            <linearGradient id="paint0_linear" x1="2" y1="12" x2="22" y2="12" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#DAA520" />
                                <stop offset="1" stopColor="#8B5CF6" />
                            </linearGradient>
                            <linearGradient id="paint1_linear" x1="9" y1="12" x2="15" y2="12" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#DAA520" />
                                <stop offset="1" stopColor="#8B5CF6" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </div>
        </section>
    );
};

export default NotFound;