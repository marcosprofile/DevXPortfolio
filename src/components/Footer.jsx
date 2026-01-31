import { PaddingContainer, Heading, FooterContainer } from '../styles/Global.styled'

export default function Footer() {
  return (
    <FooterContainer>
      <PaddingContainer $top="1.5rem" $bottom="1.5rem">
        <Heading as="p" size="p" $align="center">
          &copy; {new Date().getFullYear()} | Marcos L. Ferreira • Front-end Engineer - Todos os direitos reservados.
        </Heading>
      </PaddingContainer>
    </FooterContainer>
  )
}
