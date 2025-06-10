import { motion } from 'framer-motion'

import {
  PaddingContainer,
  Heading,
  FlexContainer,
  ParaText,
  IconContainer,
  Button,
} from '../../styles/Global.styled'

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


export default function Project({ data }) {
  const isDisabledPreview = !data.project_url
  const isDisabledCode = !data.project_code

  return (
    <FlexContainer
      $gap="6rem"
      $direction={data.reverse ? 'row-reverse' : false}
      $fullWidthChild="true"
    >
      {/* --left-section-project-- */}
      <motion.div
        variants={data.reverse ? fadeInRightVariant : fadeInLeftVariant}
        initial="hidden"
        whileInView="visible"
      >
        <PaddingContainer $top="1rem" $bottom="1rem">
          <FlexContainer $gap=".5rem">
            {data.tech_stack.map((stack, id) => (
              <TechStackCard key={id}>{stack}</TechStackCard>
            ))}
          </FlexContainer>
        </PaddingContainer>

        <FlexContainer $align="center" $gap="1rem" $responsiveFlex>
          <Heading as="h3" size="h3">
            {data.project_name}
          </Heading>

          <IconContainer color="blue" size="1.5rem" href={data.github} target="_blank">
            <FaGithub />
          </IconContainer>
        </FlexContainer>

        <ParaText $top=".5rem" $bottom="2.5rem">
          {data.project_desc}
        </ParaText>

        <FlexContainer $responsiveFlex $gap="1rem">
          <Button
            href={data.project_url || '#'}
            target={data.project_url ? '_blank' : undefined}
            className={isDisabledPreview ? 'disabled' : ''}
            title={isDisabledPreview ? 'Website indisponível' : ''}
            onClick={(e) => {
              if (isDisabledPreview) e.preventDefault()
            }}
          >
            <FaLaptop />
            Ver Website
          </Button>

          <Button
            href={data.project_code || '#'}
            target={data.project_code ? '_blank' : undefined}
            className={isDisabledCode ? 'disabled' : ''}
            title={isDisabledCode ? 'Código indisponível' : ''}
            onClick={(e) => {
              if (isDisabledCode) e.preventDefault()
            }}
          >
            <FaLaptopCode />
            Ver Código
          </Button>
        </FlexContainer>
      </motion.div>

      {/* --right-section-project-- */}
      <ProjectImageContainer
        $justify={data.reverse ? "flex-start" : "flex-end"}
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
