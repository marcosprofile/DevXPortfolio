import React from 'react'

// import global styles
import { PaddingContainer, Heading } from '../styles/Global.styled'

const Footer = () => {
  return (
    <footer>
      <PaddingContainer $top="2.5rem" $bottom="2.5rem">
        <Heading as="p" size="p" $align="center">
          &copy; 2025 | Marcos L. Ferreira • UX/UI Developer - Todos os direitos reservados.
        </Heading>
      </PaddingContainer>
    </footer>
  )
}

export default Footer