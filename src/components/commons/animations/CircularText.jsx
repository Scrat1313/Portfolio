import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const CircularText = ({
    text,
    spinDuration = 20,
    onHover = "speedUp",
    className = "",
    textColor = "#DAA520",
}) => {
    const letters = Array.from(text);
    const controls = useAnimation();

    useEffect(() => {
        controls.start({
            rotate: 360,
            transition: {
                duration: spinDuration,
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop"
            }
        });
    }, [controls, spinDuration]);

    const handleHoverStart = () => {
        if (!onHover) return;

        switch (onHover) {
            case "slowDown":
                controls.start({
                    rotate: 360,
                    transition: {
                        duration: spinDuration * 2,
                        ease: "linear",
                        repeat: Infinity,
                    }
                });
                break;
            case "speedUp":
                controls.start({
                    rotate: 360,
                    transition: {
                        duration: spinDuration / 4,
                        ease: "linear",
                        repeat: Infinity,
                    }
                });
                break;
            case "pause":
                controls.stop();
                break;
            default:
                break;
        }
    };

    const handleHoverEnd = () => {
        controls.start({
            rotate: 360,
            transition: {
                duration: spinDuration,
                ease: "linear",
                repeat: Infinity,
            }
        });
    };

    return (
        <div className={`relative w-full h-full ${className}`}>
            <motion.div
                className="absolute inset-0 w-full h-full"
                animate={controls}
                style={{ originX: 0.5, originY: 0.5 }}
                onMouseEnter={handleHoverStart}
                onMouseLeave={handleHoverEnd}
            >
                {letters.map((letter, i) => {
                    // Calculate position around the circle
                    const angle = (360 / letters.length) * i;
                    const radian = (angle * Math.PI) / 180;

                    // Get position around circle with radius 45%
                    const radius = 45;
                    const x = 50 + radius * Math.cos(radian);
                    const y = 50 + radius * Math.sin(radian);

                    // Individual letter styling and rotation
                    return (
                        <div
                            key={i}
                            className="absolute origin-center select-none"
                            style={{
                                left: `${x}%`,
                                top: `${y}%`,
                                transform: `translate(-50%, -50%) rotate(${angle + 90}deg)`,
                                color: textColor,
                                fontSize: 'clamp(0.6rem, 1.5vw, 0.8rem)',
                                fontWeight: 900,
                                textShadow: '0px 0px 3px rgba(0,0,0,0.5)',
                            }}
                        >
                            {letter}
                        </div>
                    );
                })}
            </motion.div>
        </div>
    );
};

export default CircularText;