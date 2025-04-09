import React from 'react';

import { motion } from 'framer-motion';

// import global styles
import {
  PaddingContainer,
  Heading,
  BlueText,
  FlexContainer,
  Button,
} from './../styles/Global.styled';

import { FaWhatsapp, FaRegEnvelope } from "react-icons/fa6";

import { fadeInBottomVariant } from '../utils/Variants';

const Footer = () => {
  return (
    <PaddingContainer id="Contact" top="5%" bottom="10%">
      <Heading
        as={motion.h4}
        variants={fadeInBottomVariant}
        initial="hidden"
        whileInView="visible"
        size="h4"
        align="center"
      >
        MEU CONTATO
      </Heading>

      <Heading
        as={motion.h2}
        variants={fadeInBottomVariant}
        initial="hidden"
        whileInView="visible"
        size="h2"
        align="center"
        top=".5rem"
      >
        Entre em <BlueText>contato comigo aqui</BlueText>
      </Heading>

      <PaddingContainer top="3rem">
        <FlexContainer
          as={motion.div}
          variants={fadeInBottomVariant}
          initial="hidden"
          whileInView="visible"
          justify="center"
        >
          <Button href="https://wa.me/5511954375410?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20seu%20trabalho..." target="_blank" $mr="1rem">
            <FaWhatsapp />
            Whatsapp
          </Button>
          <Button href="mailto:marcos.laurindo@marcotech.dev.br" target="_blank">
            <FaRegEnvelope />
            E-mail
          </Button>
        </FlexContainer>
      </PaddingContainer>
    </PaddingContainer>
  )
}

export default Footer
