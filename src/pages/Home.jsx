import { Container, FadeImage, MainBody } from '../styles/Global.styled'
import Showcase from '../components/Showcase'
import MySkills from '../components/MySkills'
import Contact from '../components/Contact'

import TopFadeImage from '../assets/top.png'
import LeftFadeImage from '../assets/left.png'
import ScrollProgressBar from '../components/ScrollProgressBar'
import MouseFollower from '../components/MouseFollower'
import Footer from '../components/Footer'
import GridProjects from '../components/GridProjects'

export default function Home() {
  return (
    <MainBody>
      <ScrollProgressBar />
      <Container>
        <MouseFollower />
        <Showcase />
        <MySkills />
        <GridProjects />
        <Contact />
        <Footer />
      </Container>

      <FadeImage src={TopFadeImage} $top="0" />
      <FadeImage src={LeftFadeImage} $top="30vh" $right="0" $transform="rotate(180deg)" />
    </MainBody>
  )
}