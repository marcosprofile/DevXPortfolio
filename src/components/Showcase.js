import React from 'react';
import { motion } from 'framer-motion';

import {
  PaddingContainer,
  FlexContainer,
  Heading,
  ParaText,
  BlueText,
  IconContainer,
} from '../styles/Global.styled';

// importing showcase styles
import {
  ShowcaseImageCard,
  ShowcaseParticleContainer,
  Particle,
} from '../styles/Showcase.styled'

// importing react-icons
import { BsGithub, BsBehance, BsLinkedin, BsEnvelope } from 'react-icons/bs';

// importing assets
import ShowcaseImg from '../assets/showcase-img.png';
import BackgroundImg from '../assets/particle.png';

import {
  fadeInLeftVariant,
  fadeInRightVariant,
} from '../utils/Variants';

const Showcase = () => {
  return (
    <PaddingContainer
      id="Home"
      left="3%"
      right="10%"
      top="12%"
      bottom="10%"
      responsiveLeft="1rem"
      responsiveRight="1rem"
      responsiveTop="8rem"
    >
      <FlexContainer align="left" fullWidthChild>
        {/* --left-content-- */}
        <motion.div
          variants={fadeInLeftVariant}
          initial="hidden"
          whileInView="visible"
        >
          <Heading as="h4" size="h4">Olá!</Heading>
          <Heading
            as="h2"
            size="h2"
            top=".5rem"
            bottom="1rem"
          >
            Eu sou <BlueText>Marcos Ferreira</BlueText>
          </Heading>
          <Heading as="h3" size="h3">
            Sou <BlueText>UI/UX Designer & Frontend Developer</BlueText>
          </Heading>
          <ParaText as="p" top="2rem" bottom="4rem">
            UI/UX Designer com 2 anos de experiência e com conhecimento em Frontend, evoluindo sempre para desenvolver interfaces responsivas e estruturadas.
          </ParaText>

          {/* --social-icons-- */}
          <FlexContainer gap="1.25rem" responsiveFlex>
            <IconContainer color="white" size="2rem" href="https://github.com/marcosprofile" target="_blank">
              <BsGithub />
            </IconContainer>
            <IconContainer color="white" size="2rem" href="https://www.behance.net/marcoslferreira" target="_blank">
              <BsBehance />
            </IconContainer>
            <IconContainer color="white" size="2rem" href="https://www.linkedin.com/in/marcosdesigntech/" target="_blank">
              <BsLinkedin />
            </IconContainer>
            <IconContainer color="white" size="2rem" href="mailto:marcos.designtech@hotmail.com">
              <BsEnvelope />
            </IconContainer>
          </FlexContainer>
        </motion.div>

        {/* --right-content-- */}
        <FlexContainer
          as={motion.div}
          variants={fadeInRightVariant}
          initial="hidden"
          whileInView="visible"
          justify="flex-end"
        >
          <ShowcaseParticleContainer>
            <ShowcaseImageCard>
              <img src={ShowcaseImg} alt="showcase" />
            </ShowcaseImageCard>
            <Particle
              as={motion.img}
              animate={{
                x: [0, 100, 0],
                rotate: 360,
                scale: [1, .5, 1]
              }}
              transition={{
                duration: 20,
                repeat: Infinity
              }}
              src={BackgroundImg}
              alt="particle"
              top="-80px"
              left="20px"
              rotate="60deg"
            />
            <Particle
              as={motion.img}
              animate={{
                y: [0, 100, 0],
                rotate: 360,
                scale: [1, .8, 1]
              }}
              transition={{
                duration: 18,
                repeat: Infinity
              }}
              src={BackgroundImg}
              alt="particle"
              top="50px"
              right="-70px"
              rotate="0deg"
            />
            <Particle
              as={motion.img}
              animate={{
                x: [0, -100, 0],
                rotate: 360,
                scale: [1, .9, 1]
              }}
              transition={{
                duration: 15,
                repeat: Infinity
              }}
              src={BackgroundImg}
              alt="particle"
              bottom="10px"
              left="-70px"
              rotate="50deg"
            />
          </ShowcaseParticleContainer>
        </FlexContainer>
      </FlexContainer>
    </PaddingContainer>
  )
}

export default Showcase
