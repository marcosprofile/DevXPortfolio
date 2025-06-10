import { motion, useScroll, useSpring } from "framer-motion"
import { ProgressBar } from "../styles/Global.styled";


export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <ProgressBar as={motion.div} style={{ scaleX }} />
  )
}