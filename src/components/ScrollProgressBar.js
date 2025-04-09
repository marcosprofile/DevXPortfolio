import { useEffect, useState } from "react";

export default function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{position: "fixed", top: 0, left: 0, width: "100%", zIndex: 50, backgroundColor: "transparent"}}>
      <div style={{ width: `${scrollProgress}%`, height: "5px", background: "#7EADFC" }} />
    </div>
  );
}