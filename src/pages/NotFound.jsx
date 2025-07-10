import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { usePageTitle, useScrollToTop } from "../hooks";
import { RevealOnScroll } from "../components/commons";

// Import des icônes
import HomeIcon from '@mui/icons-material/Home';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import BugReportIcon from '@mui/icons-material/BugReport';
import CodeIcon from '@mui/icons-material/Code';
import InfoIcon from '@mui/icons-material/Info';

const NotFound = () => {
    usePageTitle("404 - Page Not Found");
    useScrollToTop();

    // Refs for animations
    const codeContainerRef = useRef(null);

    // Animation states
    const [loaded, setLoaded] = useState(false);
    const [codeLines, setCodeLines] = useState([]);
    const [bugsPositions, setBugsPositions] = useState([]);
    const [errorMessages, setErrorMessages] = useState([]);

    // Code snippets to display
    const codeSnippets = [
        'function findPage(url) {',
        '  try {',
        '    const page = loadPage(url);',
        '    return page;',
        '  } catch (error) {',
        '    console.error("Page not found");',
        '    throw new Error(404);',
        '  }',
        '}',
        '',
        'try {',
        '  const currentPage = findPage(window.location.href);',
        '  renderPage(currentPage);',
        '} catch (e) {',
        '  // Error: Page does not exist',
        '  displayError(404);',
        '}'
    ];

    // Error message templates
    const possibleErrors = [
        { message: 'Uncaught TypeError: Cannot read property "page" of undefined', color: '#ff6b6b' },
        { message: 'Error 404: Resource not found at path: /unknown', color: '#DAA520' },
        { message: 'Page load failed: Network error', color: '#8B5CF6' },
        { message: 'Unable to resolve route: Path not recognized', color: '#ff6b6b' },
        { message: 'Exception in component: Missing required props', color: '#DAA520' }
    ];

    // Initialize animations after component mounts
    useEffect(() => {
        setTimeout(() => setLoaded(true), 300);

        // Animate code typing effect
        let timeout = 500;
        const newCodeLines = [];

        codeSnippets.forEach((line, index) => {
            setTimeout(() => {
                newCodeLines.push(line);
                setCodeLines([...newCodeLines]);
            }, timeout);
            timeout += line.length * 15 + 100; // Adjust typing speed based on line length
        });

        // Create random bugs that move across the screen
        setTimeout(() => {
            const bugs = [];
            for (let i = 0; i < 8; i++) {
                bugs.push({
                    id: i,
                    x: Math.random() * 100,
                    y: Math.random() * 100,
                    size: 12 + Math.random() * 8,
                    speed: 3 + Math.random() * 5,
                    direction: Math.random() > 0.5 ? 1 : -1,
                    rotation: Math.random() * 360
                });
            }
            setBugsPositions(bugs);
        }, 800);

        // Show error messages periodically
        const errorInterval = setInterval(() => {
            if (errorMessages.length >= 3) {
                // Remove oldest error before adding new one
                setErrorMessages(prev => {
                    const newErrors = [...prev];
                    newErrors.shift();
                    return newErrors;
                });
            }

            const randomError = possibleErrors[Math.floor(Math.random() * possibleErrors.length)];
            setErrorMessages(prev => [...prev, {
                ...randomError,
                id: Date.now(),
                opacity: 1
            }]);

            // Fade out error message after a delay
            setTimeout(() => {
                setErrorMessages(prev =>
                    prev.map(err =>
                        err.id === randomError.id ? { ...err, opacity: 0 } : err
                    )
                );
            }, 3000);

        }, 2000);

        // Move bugs around
        const bugAnimation = setInterval(() => {
            setBugsPositions(prev =>
                prev.map(bug => ({
                    ...bug,
                    x: (bug.x + (bug.speed * bug.direction) / 10) % 100,
                    y: (bug.y + (Math.sin(bug.x / 10) * 2)) % 100,
                    rotation: (bug.rotation + bug.speed) % 360
                }))
            );
        }, 100);

        return () => {
            clearInterval(errorInterval);
            clearInterval(bugAnimation);
        };
    }, []);

    return (
        <section className="w-full min-h-screen bg-[#0a0a0a] flex flex-col md:flex-row overflow-hidden">
            {/* Left side - Code and bugs animation */}
            <div className="w-full md:w-1/2 bg-[#0f0f0f] min-h-[50vh] md:min-h-screen flex items-center justify-center relative overflow-hidden">
                {/* Background grid */}
                <div className="absolute inset-0 grid grid-cols-6 grid-rows-12 opacity-10">
                    {Array.from({ length: 72 }).map((_, idx) => (
                        <div key={`grid-${idx}`} className="border-[0.5px] border-white/20"></div>
                    ))}
                </div>

                {/* Code typing animation */}
                <div
                    ref={codeContainerRef}
                    className={`w-full max-w-md font-mono text-sm md:text-base p-6 overflow-hidden 
                        transition-all duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}
                >
                    <div className="mb-4 flex items-center">
                        <CodeIcon className="text-[#DAA520] mr-2" />
                        <span className="text-white/80">404.js</span>
                        <div className="ml-auto flex space-x-2">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                    </div>

                    <div className="bg-[#121212] rounded-md p-4 text-white/70 overflow-hidden h-[400px] relative">
                        {/* Line numbers */}
                        <div className="absolute left-0 top-0 bottom-0 py-4 px-2 text-gray-600 select-none text-xs text-right">
                            {Array.from({ length: 20 }).map((_, idx) => (
                                <div key={`line-${idx}`} className="h-6">
                                    {idx + 1}
                                </div>
                            ))}
                        </div>

                        {/* Code content */}
                        <div className="pl-8">
                            {codeLines.map((line, idx) => (
                                <div key={idx} className="h-6 whitespace-pre">
                                    <span className={
                                        line.includes('error') || line.includes('Error') ? 'text-red-400' :
                                            line.includes('function') || line.includes('const') ? 'text-[#8B5CF6]' :
                                                line.includes('try') || line.includes('catch') ? 'text-[#DAA520]' :
                                                    line.includes('//') ? 'text-green-500' :
                                                        ''
                                    }>
                                        {line}
                                    </span>
                                    <span className="animate-pulse text-white/70">
                                        {idx === codeLines.length - 1 ? '|' : ''}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Blinking cursor at the end of typing */}
                        {codeLines.length === codeSnippets.length && (
                            <div className="absolute top-4 left-[calc(8px+1.25rem)] mt-[15rem] h-6 flex items-center">
                                <span className="w-2 h-5 bg-white/70 animate-pulse"></span>
                            </div>
                        )}

                        {/* Error messages that appear and disappear */}
                        <div className="absolute bottom-4 left-4 right-4">
                            {errorMessages.map((error, idx) => (
                                <div
                                    key={error.id}
                                    className="font-mono text-xs p-2 mb-2 rounded border-l-2 transition-all duration-500"
                                    style={{
                                        backgroundColor: `${error.color}20`,
                                        borderColor: error.color,
                                        opacity: error.opacity,
                                        transform: `translateX(${error.opacity ? '0' : '20px'})`
                                    }}
                                >
                                    {error.message}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Animated 404 made of code symbols */}
                    <div className="mt-8 text-center">
                        <h2 className="text-4xl md:text-5xl font-mono">
                            <span className="text-[#DAA520]">{'{{'}</span>
                            <span className="text-white px-1">404</span>
                            <span className="text-[#8B5CF6]">{'}}'}</span>
                        </h2>
                    </div>
                </div>

                {/* Animated bugs moving around */}
                {bugsPositions.map(bug => (
                    <div
                        key={bug.id}
                        className="absolute transition-all duration-100 z-20 pointer-events-none"
                        style={{
                            left: `${bug.x}%`,
                            top: `${bug.y}%`,
                            transform: `rotate(${bug.rotation}deg)`,
                            transition: 'left 0.5s ease-in-out, top 0.5s ease-in-out'
                        }}
                    >
                        <BugReportIcon
                            style={{
                                fontSize: bug.size,
                                color: bug.id % 2 === 0 ? '#DAA520' : '#8B5CF6'
                            }}
                        />
                    </div>
                ))}
            </div>

            {/* Right side - Error message and actions */}
            <div className="w-full md:w-1/2 bg-[#0a0a0a] min-h-[50vh] md:min-h-screen flex items-center justify-center p-8 relative">
                {/* Background elements - brackets */}
                <div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none">
                    <div className={`absolute left-[-100px] top-[10%] text-[300px] font-mono transition-all duration-1000 ease-out
                        ${loaded ? 'opacity-30 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
                        {'{'}
                    </div>
                    <div className={`absolute right-[-100px] bottom-[10%] text-[300px] font-mono transition-all duration-1000 ease-out
                        ${loaded ? 'opacity-30 translate-x-0' : 'opacity-0 translate-x-20'}`}>
                        {'}'}
                    </div>
                </div>

                {/* Glow effects */}
                <div className="absolute top-1/4 left-1/4 w-40 h-40 rounded-full bg-[#DAA520]/10 blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-60 h-60 rounded-full bg-[#8B5CF6]/10 blur-3xl"></div>

                <div className="relative z-10 w-full max-w-md">
                    <RevealOnScroll delay={200} direction="right">
                        {/* Animated status code indicator */}
                        <div className="flex items-center gap-2 mb-4">
                            <div className="relative h-8 w-8 flex items-center justify-center">
                                {/* Pulsing circle */}
                                <div className="absolute inset-0 rounded-full bg-red-500/20 animate-ping"></div>
                                <div className="absolute inset-0 rounded-full bg-red-500/40"></div>
                                <span className="relative text-xs font-mono font-bold text-white">404</span>
                            </div>
                            <div className="h-px flex-1 bg-gradient-to-r from-red-500/50 to-transparent"></div>
                        </div>

                        {/* Main error message */}
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                            Page <span className="text-[#DAA520]">Not</span> Found
                        </h1>

                        <div className="mb-8">
                            <p className="text-white/70 mb-4">
                                The resource you're looking for either doesn't exist or has been moved to another URL.
                            </p>

                            {/* ASCII art stack trace */}
                            <div className="font-mono text-xs text-white/40 mt-4 mb-6 border-l-2 border-[#8B5CF6]/50 pl-3 py-1">
                                <div>at <span className="text-[#DAA520]">Object.getPageByPath</span> (router.js:134)</div>
                                <div>at <span className="text-[#8B5CF6]">Router.resolveRoute</span> (router.js:237)</div>
                                <div>at <span className="text-[#DAA520]">RouterContext.render</span> (context.js:86)</div>
                            </div>
                        </div>
                    </RevealOnScroll>

                    <RevealOnScroll delay={400} direction="right">
                        {/* Debug information */}
                        <div className="bg-[#121212]/50 backdrop-blur-sm rounded-xl border border-white/5 p-5 mb-8">
                            <h3 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
                                <InfoIcon className="text-[#DAA520]" fontSize="small" />
                                Debug Information
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                                <div>
                                    <div className="text-white/50 mb-1">Error Code</div>
                                    <div className="font-mono text-[#DAA520]">404 NOT_FOUND</div>
                                </div>
                                <div>
                                    <div className="text-white/50 mb-1">Timestamp</div>
                                    <div className="font-mono text-[#8B5CF6]">2025-06-27 20:25:11</div>
                                </div>
                                <div>
                                    <div className="text-white/50 mb-1">Request ID</div>
                                    <div className="font-mono text-white/80">
                                        {Math.random().toString(36).substring(2, 15)}
                                    </div>
                                </div>
                                <div>
                                    <div className="text-white/50 mb-1">Client</div>
                                    <div className="font-mono text-white/80">
                                        {navigator.userAgent.includes('Mozilla') ? 'Browser' : 'Unknown'}-Client
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Action buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                to="/"
                                className="group flex-1 flex items-center justify-center gap-2 px-6 py-3.5 
                                    bg-gradient-to-r from-[#DAA520] to-[#8B5CF6] rounded-lg text-white
                                    font-medium transition-all duration-300 hover:shadow-lg hover:shadow-[#8B5CF6]/20"
                            >
                                <HomeIcon className="group-hover:scale-110 transition-transform duration-300" fontSize="small" />
                                <span>Return Home</span>
                            </Link>

                            <button
                                onClick={() => window.history.back()}
                                className="group flex-1 flex items-center justify-center gap-2 px-6 py-3.5 
                                    bg-[#121212] border border-white/10 rounded-lg text-white/80
                                    font-medium hover:bg-[#1A1A1A] hover:border-white/20 
                                    transition-all duration-300"
                            >
                                <ArrowBackIcon className="group-hover:-translate-x-1 transition-transform duration-300" fontSize="small" />
                                <span>Go Back</span>
                            </button>
                        </div>
                    </RevealOnScroll>

                    {/* Corner decoration */}
                    <div className="absolute bottom-0 right-0 transform translate-x-1/2 translate-y-1/2 opacity-30">
                        <div className="text-9xl font-mono text-[#DAA520]">{'}'}</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NotFound;