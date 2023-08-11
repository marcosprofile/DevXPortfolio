import React from 'react';

import { motion } from 'framer-motion';

// import global styles
import {
  PaddingContainer,
  Heading,
  BlueText,
  FlexContainer,
  Submit,
} from './../styles/Global.styled';

// import footer styles
import {
  ContactForm,
  FormLabel,
  FormInput,
} from './../styles/Footer.styled';

import {
  fadeInBottomVariant,
  fadeInLeftVariant,
  fadeInRightVariant,
} from '../utils/Variants';

const Footer = () => {
  return (
    <PaddingContainer
      id="Contact"
      top="5%"
      bottom="10%"
    >
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
          justify="center">
          <ContactForm
            action="https://formsubmit.co/marcos.designtech@hotmail.com"
            method="POST"
          >
            <PaddingContainer bottom="2rem">
              <FormLabel>Name:</FormLabel>
              <FormInput
                type="text"
                name="name"
                placeholder="Digite seu nome..."
                required
              >
              </FormInput>
            </PaddingContainer>
            
            <PaddingContainer bottom="2rem">
              <FormLabel>E-mail:</FormLabel>
              <FormInput
                type="email"
                name="email"
                placeholder="Digite seu e-mail..."
                required
              >
              </FormInput>
            </PaddingContainer>
            
            <PaddingContainer bottom="2rem">
              <FormLabel>Mensagem:</FormLabel>
              <FormInput
                as="textarea"
                name="message"
                rows="5"
                placeholder="Digite sua mensagem..."
                required
              >
              </FormInput>
            </PaddingContainer>

            <FlexContainer
              as={motion.div}
              variants={fadeInBottomVariant}
              initial="hidden"
              whileInView="visible"
              justify="center">
              <Submit
                type="submit"
                target="_blank"
              >Enviar mensagem</Submit>
            </FlexContainer>
          </ContactForm>
        </FlexContainer>
      </PaddingContainer>
    </PaddingContainer>
  )
}

export default Footer
