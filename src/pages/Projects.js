import React from 'react'
import { BlueText, Container, MainBody, PaddingContainer, Heading } from '../styles/Global.styled'
import { motion } from 'framer-motion';
import { fadeInTopVariant } from '../utils/Variants';

const Projects = () => {
  return (
    <MainBody>
      <Container>
        <PaddingContainer
          top="10%"
          bottom="80%"
          responsiveTop="20%"
          responsiveLeft="1rem"
          responsiveRight="1rem"
        > 
          <Heading
            as={motion.h4}
            variants={fadeInTopVariant}
            initial="hidden"
            whileInView="visible"
            size="h4"
          >
            MEUS PROJETOS
          </Heading>

          <Heading
            top=".5rem"
            as={motion.h2}
            variants={fadeInTopVariant}
            initial="hidden"
            whileInView="visible"
            size="h2"
          >
            O que <BlueText>eu desenvolvi</BlueText>
          </Heading>
        </PaddingContainer>

      </Container>
    </MainBody>
  )
}

export default Projects