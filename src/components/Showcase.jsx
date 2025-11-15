import { motion } from 'framer-motion'

import {
  PaddingContainer,
  FlexContainer,
  SectionContainer,
  Heading,
  ParaText,
  BlueText,
  IconContainer,
  Chip,
  Image
} from '../styles/Global.styled'

import { BsGithub, BsBehance, BsLinkedin, BsEnvelope, BsAward } from 'react-icons/bs'
import CheckBlue from '../assets/check-blue.svg'
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
            <BlueText>UX/UI Developer</BlueText>
          </Heading>
          <ParaText as="p" $top="2rem" $bottom="4rem" $mWidth="600px" $center>
            UX/UI Designer e Desenvolvedor Front-end com mais de 4 anos de experiência, entregando soluções completas — do protótipo à implementação em produção.
          </ParaText>

          <PaddingContainer $bottom="3.5rem">
            <FlexContainer $justify="center" $gap="1rem" $flexWrap="wrap" $responsiveFlex>
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

