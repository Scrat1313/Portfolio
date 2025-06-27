import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const TrueFocus = ({
    sentence = "True Focus",
    active = false,
    blurAmount = 5,
    borderColor = "#DAA520",
    glowColor = "rgba(218, 165, 32, 0.6)",
    animationDuration = 0.5,
    className = "",
    textSizeClass = "text-4xl md:text-5xl lg:text-6xl xl:text-7xl",
}) => {
    const containerRef = useRef(null);
    const wordRef = useRef(null);
    const [focusRect, setFocusRect] = useState({ x: 0, y: 0, width: 0, height: 0 });

    // Update focus rectangle when active state changes
    useEffect(() => {
        if (!wordRef.current || !containerRef.current) return;

        const parentRect = containerRef.current.getBoundingClientRect();
        const wordRect = wordRef.current.getBoundingClientRect();

        setFocusRect({
            x: wordRect.left - parentRect.left,
            y: wordRect.top - parentRect.top,
            width: wordRect.width,
            height: wordRect.height,
        });
    }, [active]);

    // Apply gradient text effect based on borderColor
    const getTextStyle = () => {
        let textStyle = {};

        // Apply blur effect - increased intensity
        textStyle.filter = active ? `blur(0px)` : `blur(${blurAmount}px)`;

        // Apply different colors based on borderColor
        if (borderColor === "#DAA520") {
            textStyle.background = "linear-gradient(to bottom right, #DAA520, #FFD700)";
            textStyle.WebkitBackgroundClip = "text";
            textStyle.WebkitTextFillColor = "transparent";
        } else if (borderColor === "#8B5CF6") {
            textStyle.background = "linear-gradient(to bottom right, #8B5CF6, #A78BFA)";
            textStyle.WebkitBackgroundClip = "text";
            textStyle.WebkitTextFillColor = "transparent";
        } else {
            textStyle.color = "white";
        }

        return textStyle;
    };

    return (
        <div
            className={`relative flex justify-center items-center ${className}`}
            ref={containerRef}
        >
            <span
                ref={wordRef}
                className={`relative font-black ${textSizeClass}`}
                style={{
                    ...getTextStyle(),
                    "--border-color": borderColor,
                    "--glow-color": glowColor,
                    transition: `filter ${animationDuration}s ease`,
                }}
            >
                {sentence}
            </span>

            {/* Frame animation */}
            <motion.div
                className="absolute top-0 left-0 pointer-events-none box-border border-0"
                animate={{
                    x: focusRect.x - 6,
                    y: focusRect.y - 6,
                    width: focusRect.width + 12,
                    height: focusRect.height + 12,
                    opacity: active ? 1 : 0,
                }}
                transition={{
                    duration: animationDuration,
                    ease: "easeInOut",
                }}
                style={{
                    "--border-color": borderColor,
                    "--glow-color": glowColor,
                }}
            >
                <span
                    className="absolute w-5 h-5 border-[2.5px] rounded-[2px] top-0 left-0 border-r-0 border-b-0"
                    style={{
                        borderColor: "var(--border-color)",
                        filter: "drop-shadow(0 0 5px var(--glow-color))",
                    }}
                ></span>
                <span
                    className="absolute w-5 h-5 border-[2.5px] rounded-[2px] top-0 right-0 border-l-0 border-b-0"
                    style={{
                        borderColor: "var(--border-color)",
                        filter: "drop-shadow(0 0 5px var(--glow-color))",
                    }}
                ></span>
                <span
                    className="absolute w-5 h-5 border-[2.5px] rounded-[2px] bottom-0 left-0 border-r-0 border-t-0"
                    style={{
                        borderColor: "var(--border-color)",
                        filter: "drop-shadow(0 0 5px var(--glow-color))",
                    }}
                ></span>
                <span
                    className="absolute w-5 h-5 border-[2.5px] rounded-[2px] bottom-0 right-0 border-l-0 border-t-0"
                    style={{
                        borderColor: "var(--border-color)",
                        filter: "drop-shadow(0 0 5px var(--glow-color))",
                    }}
                ></span>
            </motion.div>
        </div>
    );
};

export default TrueFocus;