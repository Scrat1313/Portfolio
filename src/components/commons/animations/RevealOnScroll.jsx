import { useRef, useEffect } from 'react';

const RevealOnScroll = ({ children, className = '', delay = 0, direction = 'bottom' }) => {
    const ref = useRef(null);
    
    const directionClasses = {
        bottom: 'translate-y-8',
        top: '-translate-y-8',
        left: '-translate-x-8',
        right: 'translate-x-8',
    };

    const initialTranslate = directionClasses[direction] || directionClasses.bottom;

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.remove('opacity-0', initialTranslate);
                    entry.target.classList.add('opacity-100', 'translate-x-0', 'translate-y-0');
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            ref.current.classList.add('opacity-0', initialTranslate, 'transition-all', 'duration-700', 'ease-out', 'transform');
            ref.current.style.transitionDelay = `${delay}ms`;
            observer.observe(ref.current);
        }
        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, [initialTranslate, delay]);

    return (
        <div ref={ref} className={className}>
            {children}
        </div>
    );
};

export default RevealOnScroll;
