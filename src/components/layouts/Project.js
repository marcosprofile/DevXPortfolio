import React from 'react'

import { motion } from 'framer-motion'

// import global styles
import {
  PaddingContainer,
  Heading,
  FlexContainer,
  ParaText,
  IconContainer,
  Button,
} from './../../styles/Global.styled'

// import project styles
import {
  TechStackCard,
  ProjectImageContainer,
  ProjectImage,
} from '../../styles/MyProject.styled'

import { FaGithub } from 'react-icons/fa'
import {
  fadeInLeftVariant,
  fadeInRightVariant,
} from '../../utils/Variants'

import { FaLaptop, FaLaptopCode } from "react-icons/fa6"

const Project = ({ data }) => {
  const isDisabledPreview = !data.project_url
  const isDisabledCode = !data.project_code

  return (
    <FlexContainer
      gap="6rem"
      $direction={data.reverse ? 'row-reverse' : false}
      $fullWidthChild="true"
    >
      {/* --left-section-project-- */}
      <motion.div
        variants={data.reverse ? fadeInRightVariant : fadeInLeftVariant}
        initial="hidden"
        whileInView="visible"
      >
        <FlexContainer align="center" gap="1rem">
          <Heading as="h3" size="h3" bottom="1rem">
            {data.project_name}
          </Heading>

          <IconContainer color="blue" size="2rem" href={data.github} target="_blank">
            <FaGithub />
          </IconContainer>
        </FlexContainer>

        <PaddingContainer top="1rem">
          <FlexContainer gap="1rem" $alignCenter>
            {data.tech_stack.map((stack, id) => (
              <TechStackCard key={id}>{stack}</TechStackCard>
            ))}
          </FlexContainer>
        </PaddingContainer>

        <ParaText top="1.5rem" bottom="2rem">
          {data.project_desc}
        </ParaText>

        <Button
          href={data.project_url || '#'}
          target={data.project_url ? '_blank' : undefined}
          className={isDisabledPreview ? 'disabled' : ''}
          $mr="1rem"
          title={isDisabledPreview ? 'Website indisponível' : ''}
          onClick={(e) => {
            if (isDisabledPreview) e.preventDefault()
          }}
        >
          <FaLaptopCode />
          Visualizar Website
        </Button>

        <Button
          href={data.project_code || '#'}
          target={data.project_code ? '_blank' : undefined}
          className={isDisabledCode ? 'disabled' : ''}
          $mr="1rem"
          title={isDisabledCode ? 'Código indisponível' : ''}
          onClick={(e) => {
            if (isDisabledCode) e.preventDefault()
          }}
        >
          <FaLaptop />
          Visualizar Código
        </Button>

      </motion.div>

      {/* --right-section-project-- */}
      <ProjectImageContainer
        justify={data.reverse ? "flex-start" : "flex-end"}
        as={motion.div}
        variants={data.reverse ? fadeInLeftVariant : fadeInRightVariant}
        initial="hidden"
        whileInView="visible"
      >
        <ProjectImage src={data.project_img} alt={data.project_name} draggable="false" />
      </ProjectImageContainer>
    </FlexContainer>
  )
}

export default Project
