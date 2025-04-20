import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

import { GridContainer, ListItem, Image } from '../styles/GridProjects.styled'

// import global styles
import {
  PaddingContainer,
  Heading,
  BlueText,
  FlexContainer,
  Button,
} from '../styles/Global.styled'

import { fadeInTopVariant, fadeInRightVariant, container, item } from '../utils/Variants'

import { GridSixProjects } from '../utils/Data'

const GridProjects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { triggerOnce: false })

  return (
    <PaddingContainer
      id="Projects"
      top="10%"
      bottom="5%"
      $responsiveTop="20%"
      $responsiveLeft="1rem"
      $responsiveRight="1rem"
    >
      <Heading
        as={motion.h4}
        variants={fadeInTopVariant}
        initial="hidden"
        whileInView="visible"
        size="h4"
      >
        MEUS PROJETOS
      </Heading>

      <Heading
        top=".5rem"
        as={motion.h2}
        variants={fadeInTopVariant}
        initial="hidden"
        whileInView="visible"
        size="h2"
      >
        O que <BlueText>eu desenvolvi</BlueText>
      </Heading>

      <PaddingContainer
        top="3rem"
        as={motion.div}
        variants={fadeInTopVariant}
        initial="hidden"
        whileInView="visible"
        id="projects"
        ref={ref}
      >
        <GridContainer
          as={motion.ul}
          variants={container}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {GridSixProjects.map((project) => (
            <ListItem key={project.id} as={motion.li} variants={item}>
              <Image src={project.image} title={project.name} />
            </ListItem>
          ))}
        </GridContainer>
      </PaddingContainer>

      <PaddingContainer top="3rem">
        <FlexContainer
          as={motion.div}
          variants={fadeInRightVariant}
          initial="hidden"
          whileInView="visible"
          justify="center"
        >
          <Button href="/projects" $mr="1rem">
            Ver todos os projetos
          </Button>
        </FlexContainer>
      </PaddingContainer>

    </PaddingContainer>
  )
}

export default GridProjects
