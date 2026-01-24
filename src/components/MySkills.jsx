import { motion } from 'framer-motion'
import CheckBlue from '../assets/check-blue.svg'

import {
  FlexContainer,
  SectionContainer,
  Heading,
  ParaText,
  BlueText,
  Chip,
  Image,
  PaddingContainer
} from '../styles/Global.styled'

import {
  SkillCard,
} from '../styles/MySkills.styled'

import { TbDeviceDesktopCode } from "react-icons/tb"
import { fadeInTopVariant, fadeInRightVariant } from '../utils/Variants'


export default function MySkills() {
  return (
    <SectionContainer
      id="skills"
      $top="5rem"
      $bottom="5rem"
      $responsiveLeft="1rem"
      $responsiveRight="1rem"
    >
      <FlexContainer
        $responsiveFlex="true"
        $responsiveGap="3rem"
        $direction="column"
        $fullWidthChild="true"
        $gap="5.5rem">

        <FlexContainer
          as={motion.div}
          variants={fadeInTopVariant}
          initial="hidden"
          whileInView="visible"
          $direction="column"
        >
          <Heading as="h4" size="h4" $align="center">
            MINHAS SKILLS
          </Heading>
          <Heading as="h2" size="h2" $top=".5rem" $align="center">
            O que <BlueText>eu posso fazer</BlueText>
          </Heading>
        </FlexContainer>

        <FlexContainer
          as={motion.div}
          variants={fadeInRightVariant}
          initial="hidden"
          whileInView="visible"
          $gap="2rem"
          $justify="center"
        >
          <SkillCard>
            <TbDeviceDesktopCode />        
            <Heading as="h3" size="h3" $textDecoration="underline">UI Engineering & Design Systems</Heading>
            <ParaText $top=".75rem" $width="100%" $color="color-mix(in oklab, white, #0F172A 25%)">
              Atuo na construção da camada estrutural da interface, tratando UI como sistema técnico e não apenas entrega visual.
            </ParaText>
            <ParaText $top=".75rem" $width="100%" $color="color-mix(in oklab, white, #0F172A 25%)">
              Defino e implemento Design Systems, Design Tokens e arquiteturas de UI que estabelecem contratos claros entre design, código e testes, permitindo que múltiplos times desenvolvam interfaces consistentes, previsíveis e fáceis de evoluir.
            </ParaText>
            <ParaText $top=".75rem" $width="100%" $color="color-mix(in oklab, white, #0F172A 25%)">
              Entrego layouts diretamente em código, com estados e dados mocados, reduzindo ambiguidades, retrabalho e acelerando a implementação de features, enquanto garanto acessibilidade, testabilidade e manutenibilidade em produtos digitais complexos.
            </ParaText>
          </SkillCard>
        </FlexContainer>

        <PaddingContainer $bottom="3.5rem">
          <FlexContainer $justify="center" $gap="1rem" $flexWrap="wrap" $responsiveFlex>
            <Chip>
              <Image src={CheckBlue} alt="Check icon" />
              Design Tokens
            </Chip>
            <Chip>
              <Image src={CheckBlue} alt="Check icon" />
              CSS Architecture
            </Chip>
            <Chip>
              <Image src={CheckBlue} alt="Check icon" />
              Component API
            </Chip>
            <Chip>
              <Image src={CheckBlue} alt="Check icon" />
              Accessibility
            </Chip>
            <Chip>
              <Image src={CheckBlue} alt="Check icon" />
              Testability
            </Chip>
            <Chip>
              <Image src={CheckBlue} alt="Check icon" />
              Versioning
            </Chip>
          </FlexContainer>
        </PaddingContainer>
      </FlexContainer>
    </SectionContainer>
  )
}
