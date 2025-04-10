import { useEffect } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export default function MouseFollower() {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const smoothX = useSpring(x, { stiffness: 300, damping: 30 })
  const smoothY = useSpring(y, { stiffness: 300, damping: 30 })

  useEffect(() => {
    const move = (e) => {
      x.set(e.clientX - 10)
      y.set(e.clientY - 10)
    }

    window.addEventListener("mousemove", move)
    return () => window.removeEventListener("mousemove", move)
  }, [])

  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: 20,
        height: 20,
        borderRadius: "50%",
        backgroundColor: "#FFF",
        pointerEvents: "none",
        zIndex: 9999,
        x: smoothX,
        y: smoothY,
        mixBlendMode: "difference"
      }}
    />
  )
}
