import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { GridContainer, ListItem, Image } from '../styles/GridProjects.styled'

import {
  PaddingContainer,
  SectionContainer,
  Heading,
  BlueText,
  FlexContainer,
  Button,
} from '../styles/Global.styled'

import { fadeInTopVariant, fadeInRightVariant, container, item } from '../utils/Variants'
import { gridProjectsQuery } from '../graphql/projects'
import { cmsService } from '../api/cmsService'


export default function GridProjects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { triggerOnce: false })
  const [projects, setProjects] = useState([])

  useEffect(() => {
    cmsService({ query: gridProjectsQuery })
      .then(data => setProjects(data.allContentProjects))
  }, [])

  return (
    <SectionContainer
      id="projetos"
      $responsiveLeft="1rem"
      $responsiveRight="1rem"
    >
      <Heading
        as={motion.h4}
        variants={fadeInTopVariant}
        initial="hidden"
        whileInView="visible"
        size="h4"
        $align="center"
      >
        MEUS PROJETOS
      </Heading>

      <Heading
        $top=".5rem"
        as={motion.h2}
        variants={fadeInTopVariant}
        initial="hidden"
        whileInView="visible"
        size="h2"
        $align="center"
      >
        O que <BlueText>eu desenvolvi</BlueText>
      </Heading>

      <PaddingContainer
        $top="3rem"
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
          {projects.map((project) => (
            <ListItem key={project.id} as={motion.li} variants={item}>
              <Image src={`${project.thumbnail.url}?w=1024&auto=format`} title={project.title} loading='lazy' />
            </ListItem>
          ))}
        </GridContainer>
      </PaddingContainer>

      <PaddingContainer $top="3rem">
        <FlexContainer
          as={motion.div}
          variants={fadeInRightVariant}
          initial="hidden"
          whileInView="visible"
          $justify="center"
        >
          <Button href="/projects" $mr="1rem">
            Ver todos os projetos
          </Button>
        </FlexContainer>
      </PaddingContainer>

    </SectionContainer>
  )
}
