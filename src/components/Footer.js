import React from 'react';

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

const Footer = () => {
  return (
    <PaddingContainer
      id="Contact"
      top="5%"
      bottom="10%"
    >
      <Heading
        as="h4"
        size="h4"
        align="center"
      >
        MEU CONTATO
      </Heading>

      <Heading
        as="h2"
        size="h2"
        align="center"
        top=".5rem"
      >
        Entre em <BlueText>contato comigo aqui</BlueText>
      </Heading>

      <PaddingContainer top="3rem">
        <FlexContainer justify="center">
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

            <FlexContainer justify="center">
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
