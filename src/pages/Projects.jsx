import { useEffect, useState } from 'react'
import { Container, FadeImage, FixedContainer, MainBody } from '../styles/Global.styled'
import MyProjects from '../components/MyProjects'

import TopFadeImage from '../assets/top.png'
import LeftFadeImage from '../assets/left.png'
import ScrollProgressBar from '../components/ScrollProgressBar'
import MouseFollower from '../components/MouseFollower'
import Footer from '../components/Footer'
import { RoundedButton } from '../components/RoundedButton'
import { motion, useScroll } from 'framer-motion'


export default function Projects() {
  const [showButton, setShowButton] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setShowButton(latest > 500);
    });

    return () => unsubscribe();
  }, [scrollY]);

  return (
    <MainBody>
      <ScrollProgressBar />
      <Container>
        <MouseFollower />
        <MyProjects />
        <FixedContainer
          as={motion.div}
          initial={{ opacity: 0, scale: 1 }}
          animate={showButton ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          <RoundedButton url="#Projects" />
        </FixedContainer>
        <Footer />
      </Container>

      <FadeImage src={TopFadeImage} $top="0" />
      <FadeImage src={LeftFadeImage} $top="30vh" $right="0" $transform="rotate(180deg)" />
    </MainBody>
  )
}