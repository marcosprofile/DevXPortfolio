import { motion } from 'framer-motion'
import { carousel, fadeInRightVariant, fadeInTopVariant } from '../utils/Variants'
import { Skills } from '../utils/Data'

import {
  FlexContainer,
  SectionContainer,
  Heading,
  ParaText,
  BlueText,
} from '../styles/Global.styled'

import {
  SkillsCarouselContainer,
  SkillCard,
  Icon,
  SkillsContainer,
  SkillsLinearBg
} from '../styles/MySkills.styled'

import {
  TbDeviceDesktopAnalytics,
  TbDeviceDesktopCode
} from "react-icons/tb"
import { useIsMobile } from '../hooks/useIsMobile'


export default function MySkills() {
  const isMobile = useIsMobile()
  const duplicatedSkills = [...Skills, ...Skills, ...Skills, ...Skills]

  const adjustedVariant = {
    ...carousel,
    visible: {
      ...carousel.visible,
      transition: {
        ...carousel.visible.transition,
        duration: isMobile ? 15 : 40
      }
    }
  }

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
          <Heading as="h4" size="h4">
            MINHAS SKILLS
          </Heading>
          <Heading as="h2" size="h2" $top=".5rem">
            O que <BlueText>eu posso fazer</BlueText>
          </Heading>
        </FlexContainer>

        <FlexContainer
          as={motion.div}
          variants={fadeInRightVariant}
          initial="hidden"
          whileInView="visible"
          $gap="2rem"
        >
          <SkillCard>
            <TbDeviceDesktopAnalytics />        
            <Heading as="h3" size="h3">UI/UX Designer</Heading>
            <ParaText $top=".75rem" $center>
              Atuo com design de interfaces focado na experiência do usuário, unindo usabilidade, estética e funcionalidade. Tenho vivência em todo o processo de design — desde a pesquisa com usuários e benchmarks até a criação de wireframes, protótipos navegáveis e interfaces em alta fidelidade. Minha abordagem é centrada no usuário, mas alinhada aos objetivos de negócio, garantindo soluções práticas e bem fundamentadas em boas práticas de UX e UI.
            </ParaText>
          </SkillCard>
          <SkillCard $marginTop>
            <TbDeviceDesktopCode />
            <Heading as="h3" size="h3">Front-end</Heading>
            <ParaText $top=".75rem" $center>
              Tenho experiência no desenvolvimento de interfaces web responsivas, com foco em performance, acessibilidade e manutenção do código. Trabalho com HTML, CSS, JavaScript e TypeScript, além de frameworks como React e Angular. Também utilizo pré-processadores como SASS e frameworks utilitários como TailwindCSS para acelerar a produção. Busco sempre escrever um código limpo e escalável, facilitando futuras evoluções do produto.
            </ParaText>
          </SkillCard>
        </FlexContainer>

        <SkillsContainer>
          <SkillsLinearBg />
          <SkillsCarouselContainer
            as={motion.div}
            variants={adjustedVariant}
            initial="hidden"
            whileInView="visible"
          >
            {duplicatedSkills.map((skill, id) => (
              <Icon key={id}>
                {skill.icon}
              </Icon>
            ))}
          </SkillsCarouselContainer>
        </SkillsContainer>
      </FlexContainer>
    </SectionContainer>
  )
}
