import { useEffect } from "react"
import { motion, useMotionValue, useSpring, useAnimation } from "framer-motion"

export default function MouseFollower() {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const smoothX = useSpring(x, { stiffness: 300, damping: 30 })
  const smoothY = useSpring(y, { stiffness: 300, damping: 30 })

  const controls = useAnimation()

  useEffect(() => {
    const move = (e) => {
      x.set(e.clientX - 10)
      y.set(e.clientY - 10)
    }

    const handleMouseDown = () => {
      controls.start({
        scale: 0.5,
        transition: { duration: .3, ease: "easeOut" }
      })
    }

    const handleMouseUp = () => {
      controls.start({
        scale: 1,
        transition: { duration: .3, ease: "easeOut" }
      })
    }

    window.addEventListener("mousemove", move)
    window.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)

    return () => {
      window.removeEventListener("mousemove", move)
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
    }
  }, [])

  return (
    <motion.div
      animate={controls}
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
