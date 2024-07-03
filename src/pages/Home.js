import React from 'react'
import { Container, FadeImage, MainBody } from '../styles/Global.styled'
import Showcase from '../components/Showcase'
import MySkills from '../components/MySkills'
import MyProjects from '../components/MyProjects'
import Footer from '../components/Footer'

import TopFadeImage from '../assets/top.png';
import LeftFadeImage from '../assets/left.png';

const Home = () => {
  return (
    <MainBody>
      <Container>
        <Showcase />
        <MySkills />
        <MyProjects />
        <Footer />
      </Container>

      <FadeImage src={TopFadeImage} top="0" />
      <FadeImage src={LeftFadeImage} top="30vh" right="0" transform="rotate(180deg)" />
    </MainBody>
  )
}

export default Home