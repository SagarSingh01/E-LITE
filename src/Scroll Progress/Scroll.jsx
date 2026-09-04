import { motion, useScroll, useSpring } from "framer-motion";

function ScrollProgress() {
    const { scrollYProgress } = useScroll();

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <motion.div
            className="fixed left-0 top-17 z-999 h-0.5 w-full origin-left bg-linear-to-r from-amber-400 via-orange-500 to-amber-400 shadow-[0_0_10px_rgba(251,146,60,0.5)]"
            style={{ scaleX }}
        />
    );
}

export default ScrollProgress;