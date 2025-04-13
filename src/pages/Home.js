import React from 'react'
import { Container, FadeImage, MainBody } from '../styles/Global.styled'
import Showcase from '../components/Showcase'
import MySkills from '../components/MySkills'
import MyProjects from '../components/MyProjects'
import Contact from '../components/Contact'

import TopFadeImage from '../assets/top.png';
import LeftFadeImage from '../assets/left.png';
import ScrollProgressBar from '../components/ScrollProgressBar'
import MouseFollower from '../components/MouseFollower'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <MainBody>
      <Container>
        <ScrollProgressBar />
        <MouseFollower />
        <Showcase />
        <MySkills />
        <MyProjects />
        <Contact />
        <Footer />
      </Container>

      <FadeImage src={TopFadeImage} top="0" />
      <FadeImage src={LeftFadeImage} top="30vh" right="0" transform="rotate(180deg)" />
    </MainBody>
  )
}

export default Home