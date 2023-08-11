import React from 'react';

import { motion } from 'framer-motion';

// import global styles
import {
  PaddingContainer,
  Heading,
  FlexContainer,
  ParaText,
  IconContainer,
  Button,
} from './../../styles/Global.styled';

// import project styles
import {
  TechStackCard,
  ProjectImageContainer,
  ProjectImage,
} from '../../styles/MyProject.styled';

import { FaGithub } from 'react-icons/fa';
import {
  fadeInLeftVariant,
  fadeInRightVariant,
} from '../../utils/Variants';

const Project = ({ data }) => {
  return (
    <FlexContainer
      gap="6rem"
      direction={data.reverse ? 'row-reverse' : false}
      fullWidthChild
    >
      {/* --left-section-project-- */}
      <motion.div
        variants={data.reverse ? fadeInRightVariant : fadeInLeftVariant}
        initial="hidden"
        whileInView="visible"
      >
        <FlexContainer align="center" gap="1rem">
          <Heading as="h3" size="h3" bottom="1rem">
            { data.project_name }
          </Heading>

          <IconContainer color="blue" size="2rem" href="https://github.com/marcosprofile" target="_blank">
            <FaGithub />
          </IconContainer>
        </FlexContainer>

        <PaddingContainer top="1rem">
          <FlexContainer gap="1rem">
            { data.tech_stack.map((stack, id) => (
              <TechStackCard key={id}>{stack}</TechStackCard>
            ))}
          </FlexContainer>
        </PaddingContainer>

        <ParaText top="1.5rem" bottom="2rem">
          { data.project_desc}
        </ParaText>

        <Button href={ data.project_url } target="_blank">Visualizar Website</Button>

      </motion.div>

      {/* --right-section-project-- */}
      <ProjectImageContainer
        justify={data.reverse ? "flex-start" : "flex-end"}
        as={motion.div}
        variants={data.reverse ? fadeInLeftVariant : fadeInRightVariant}
        initial="hidden"
        whileInView="visible"
      >
        <ProjectImage src={ data.project_img } alt={ data.project_name} />
      </ProjectImageContainer>
    </FlexContainer>
  )
}

export default Project
