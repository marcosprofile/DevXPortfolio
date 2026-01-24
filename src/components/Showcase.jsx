import { motion } from 'framer-motion'

import {
  FlexContainer,
  SectionContainer,
  Heading,
  ParaText,
  BlueText,
  IconContainer
} from '../styles/Global.styled'

import { BsGithub, BsBehance, BsLinkedin, BsEnvelope, BsAward } from 'react-icons/bs'
import { fadeInTopVariant } from '../utils/Variants'


export default function Showcase() {
  return (
    <SectionContainer
      id="inicio"
      $top="3rem"
      $responsiveTop="1.5rem"
      $responsiveLeft="1rem"
      $responsiveRight="1rem"
    >
      <FlexContainer
          as={motion.div}
          variants={fadeInTopVariant}
          initial="hidden"
          whileInView="visible"
          $align="center"
          $justify="center"
          $direction="column"
          $fullWidthChild="true"
          $responsiveFlex="true"
        >
          <Heading
            as="h3"
            size="h3"
            $top=".5rem"
            $bottom="1rem"
            $align="center"
          >
            Olá! Eu sou <BlueText>Marcos Laurindo Ferreira</BlueText>
          </Heading>
          <Heading as="h1" size="h1" $align="center">
          <BlueText>Front-end Engineer</BlueText>
          </Heading>
          <ParaText as="p" $top="2rem" $bottom="4rem" $mWidth="600px" $center>
            Front-end Engineer com foco em arquitetura de interfaces, Design Systems e construção de fundações de UI para produtos digitais em escala.
          </ParaText>

          {/* --social-icons-- */}
          <FlexContainer $justify="center" $gap="1.25rem" $responsiveFlex="true">
            <IconContainer color="white" size="2rem" href="https://github.com/marcosprofile" target="_blank" aria-label="Acesse meus repositórios no GitHub">
              <BsGithub />
            </IconContainer>
            <IconContainer color="white" size="2rem" href="https://www.behance.net/marcoslferreira" target="_blank" aria-label="Acesse meus projetos no Behance">
              <BsBehance />
            </IconContainer>
            <IconContainer color="white" size="2rem" href="https://www.linkedin.com/in/marcosdesigntech/" target="_blank" aria-label="Conecte-se comigo no LinkedIn">
              <BsLinkedin />
            </IconContainer>
            <IconContainer color="white" size="2rem" href="mailto:marcos.laurindo@marcotech.dev.br" aria-label="Entre em contato comigo por e-mail">
              <BsEnvelope />
            </IconContainer>
            <IconContainer color="white" size="2rem" href="https://cursos.alura.com.br/user/marcos-laurindo1997" target="_blank" aria-label="Acesse meus certificados da Alura">
              <BsAward />
            </IconContainer>
          </FlexContainer>
      </FlexContainer>
    </SectionContainer>
  )
}

