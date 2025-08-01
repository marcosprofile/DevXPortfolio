import { PaddingContainer, Heading } from '../styles/Global.styled'

export default function Footer() {
  return (
    <footer>
      <PaddingContainer $top="1.5rem" $bottom="1.5rem">
        <Heading as="p" size="p" $align="center">
          &copy; {new Date().getFullYear()} | Marcos L. Ferreira • UX/UI Developer - Todos os direitos reservados.
        </Heading>
      </PaddingContainer>
    </footer>
  )
}
