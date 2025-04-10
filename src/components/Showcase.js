import React from 'react';
import { motion } from 'framer-motion';

import {
  PaddingContainer,
  FlexContainer,
  Heading,
  ParaText,
  BlueText,
  IconContainer,
  Chip,
  Image
} from '../styles/Global.styled';

// importing react-icons
import { BsGithub, BsBehance, BsLinkedin, BsEnvelope } from 'react-icons/bs';

import CheckBlue from '../assets/check-blue.svg';

import { fadeInLeftVariant } from '../utils/Variants';

const Showcase = () => {
  return (
    <PaddingContainer
      id="Home"
      top="12%"
      bottom="10%"
      $responsiveLeft="1rem"
      $responsiveRight="1rem"
    >
      <FlexContainer align="center" $fullWidthChild="true">
        {/* --left-content-- */}
        <motion.div
          variants={fadeInLeftVariant}
          initial="hidden"
          whileInView="visible"
        >
          <Heading
            as="h3"
            size="h3"
            top=".5rem"
            bottom="1rem"
          >
            Olá! Eu sou <BlueText>Marcos Laurindo Ferreira</BlueText>
          </Heading>
          <Heading as="h1" size="h1">
            <BlueText>UI/UX Developer</BlueText>
          </Heading>
          <ParaText as="p" top="2rem" bottom="4rem" mWidth="600px">
            Sou um UX/UI Designer e Desenvolvedor Front-end apaixonado por tecnologia. Com experiência em Figma e habilidades em desenvolvimento Front-end, procuro sempre unir design intuitivo e código eficiente.
          </ParaText>

          <PaddingContainer bottom="3.5rem">
            <FlexContainer justify="center" gap="1rem" flexWrap="wrap" $responsiveFlex>
              <Chip>
                <Image src={CheckBlue} alt="Check icon" />
                Design System
              </Chip>
              <Chip>
                <Image src={CheckBlue} alt="Check icon" />
                Product
              </Chip>
              <Chip>
                <Image src={CheckBlue} alt="Check icon" />
                Website
              </Chip>
              <Chip>
                <Image src={CheckBlue} alt="Check icon" />
                Figma
              </Chip>
              <Chip>
                <Image src={CheckBlue} alt="Check icon" />
                Framer
              </Chip>
            </FlexContainer>
          </PaddingContainer>

          {/* --social-icons-- */}
          <FlexContainer justify="center" gap="1.25rem" $responsiveFlex="true">
            <IconContainer color="white" size="2rem" href="https://github.com/marcosprofile" target="_blank">
              <BsGithub />
            </IconContainer>
            <IconContainer color="white" size="2rem" href="https://www.behance.net/marcoslferreira" target="_blank">
              <BsBehance />
            </IconContainer>
            <IconContainer color="white" size="2rem" href="https://www.linkedin.com/in/marcosdesigntech/" target="_blank">
              <BsLinkedin />
            </IconContainer>
            <IconContainer color="white" size="2rem" href="mailto:marcos.laurindo@marcotech.dev.br">
              <BsEnvelope />
            </IconContainer>
          </FlexContainer>
        </motion.div>
      </FlexContainer>
    </PaddingContainer>
  )
}

export default Showcase
