import React from 'react'

// import global styles
import {
  FlexContainer,
  PaddingContainer,
  Heading,
  IconContainer,
  ParaText,
  BlueText,
} from '../styles/Global.styled';

// import My Skills styles
import {
  SkillsCardContainer,
  SkillsCard,
} from '../styles/MySkills.styled';

import { Skills } from '../utils/Data'; 

const MySkills = () => {
  return (
    <PaddingContainer
      id="Skills"
      top="10%"
      bottom="10%"
    >
      <FlexContainer fullWidthChild gap="5.5rem">
        {/* --left-section-- */}
        <SkillsCardContainer>
          {Skills.map((skill, id) => (
            <SkillsCard key={id}>
              <IconContainer size="5rem" color="blue">
                {skill.icon}
              </IconContainer>
              <Heading as="h4" size="h4">
                {skill.tech}
              </Heading>
            </SkillsCard>
          ))}
        </SkillsCardContainer>

        {/* --right-section-- */}
        <div>
          <Heading as="h4" size="h4">
            MINHAS SKILLS
          </Heading>

          <Heading as="h2" size="h2" top=".5rem">
            O que <BlueText>eu posso fazer</BlueText>
          </Heading>

          <ParaText top="2rem" bottom="1.5rem">
            Como desenvolvedor, tenho experiência em desenvolvimento front-end. Tenho conhecimento em JavaScrip, React, Angular, HTML, CSS e SASS. Tenho experiência na construção de interfaces de responsivas. Com conhecimento no uso do React, posso criar interfaces escaláveis e de fácil manutenção. Isso me permite criar um código eficiente e sustentável que pode se adequar às necessidades de mudança de um negócio.
          </ParaText>
          <ParaText>
            Como UI/UX Designer, tenho experiência na projeção de interfaces intuitivas e funcionais com base em pesquisas de mercado, buscando os melhores conceitos de UX e UI para a concepção do produto final. Tenho experiência na construção de protótipos navegáveis, desde wireframe até a construção da UI em alta fidelidade.
          </ParaText>
        </div>
      </FlexContainer>
    </PaddingContainer>
  )
}

export default MySkills
