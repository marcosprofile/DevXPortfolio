import { motion } from 'framer-motion'
import { carousel, fadeInRightVariant, fadeInTopVariant } from '../utils/Variants'
import { Skills } from '../utils/Data'

import {
  FlexContainer,
  PaddingContainer,
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
    <PaddingContainer
      id="skills"
      $top="5%"
      $bottom="5%"
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
              Como UX/UI Designer tenho experiência na projeção de interfaces intuitivas e funcionais com base em pesquisas de mercado, buscando os melhores conceitos de UX e UI para a concepção do produto final. Tenho experiência na construção de protótipos navegáveis, desde wireframe até a construção da UI em alta fidelidade.
            </ParaText>
          </SkillCard>
          <SkillCard $marginTop>
            <TbDeviceDesktopCode />
            <Heading as="h3" size="h3">Front-end</Heading>
            <ParaText $top=".75rem" $center>
              Como desenvolvedor tenho experiência em desenvolvimento front-end, com conhecimento em JavaScrip, React, Angular, HTML, CSS e SASS. Tenho experiência na construção de interfaces de responsivas. Com conhecimento no uso do React, posso criar interfaces escaláveis e de fácil manutenção. Isso me permite criar um código eficiente e sustentável que pode se adequar às necessidades de mudança de um negócio.
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
    </PaddingContainer>
  )
}
