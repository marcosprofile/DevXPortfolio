import { motion } from 'framer-motion'

import {
  PaddingContainer,
  SectionContainer,
  Heading,
  BlueText,
  FlexContainer,
  Button,
} from '../styles/Global.styled'

import { FaWhatsapp, FaRegEnvelope } from "react-icons/fa6"
import { fadeInBottomVariant } from '../utils/Variants'


export default function Contact() {
  return (
    <SectionContainer
      id="contato"
      $responsiveLeft="1rem"
      $responsiveRight="1rem"
    >
      <Heading
        as={motion.h4}
        variants={fadeInBottomVariant}
        initial="hidden"
        whileInView="visible"
        size="h4"
        $align="center"
      >
        MEU CONTATO
      </Heading>

      <Heading
        as={motion.h2}
        variants={fadeInBottomVariant}
        initial="hidden"
        whileInView="visible"
        size="h2"
        $align="center"
        $top=".5rem"
      >
        Entre em <BlueText>contato comigo aqui</BlueText>
      </Heading>

      <PaddingContainer $top="3rem">
        <FlexContainer
          as={motion.div}
          variants={fadeInBottomVariant}
          initial="hidden"
          whileInView="visible"
          $justify="center"
        >
          <Button href="mailto:marcos.laurindo@marcotech.dev.br" target="_blank">
            <FaRegEnvelope />
            E-mail
          </Button>
        </FlexContainer>
      </PaddingContainer>
    </SectionContainer>
  )
}
