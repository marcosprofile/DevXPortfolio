import { motion } from 'framer-motion'

import {
  PaddingContainer,
  Heading,
  BlueText,
} from '../styles/Global.styled'
import Project from './layouts/Project'

import { fadeInTopVariant } from '../utils/Variants'
import { useEffect, useState } from 'react'

import { cmsService } from '../api/cmsService'
import { projectsQuery } from '../graphql/projects'


export default function MyProjects() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    async function fetchProjects() {
      try {
        const data = await cmsService({ query: projectsQuery })
        setProjects(data.allContentProjects)
      } catch (err) {
        console.error('Erro ao buscar projetos:', err)
      }
    }

    fetchProjects()
  }, [])

  return (
    <PaddingContainer
      id="Projects"
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
        PROJETOS
      </Heading>

      <Heading
        $top=".5rem"
        as={motion.h2}
        variants={fadeInTopVariant}
        initial="hidden"
        whileInView="visible"
        size="h2"
      >
        O que <BlueText>eu desenvolvi</BlueText>
      </Heading>

      {projects.map((project) => (
        <PaddingContainer key={project.id} $top="5rem" $bottom="5rem" $responsiveTop="2.5rem" $responsiveBottom="2.5rem">
          <Project data={project} />
        </PaddingContainer>
      ))}

    </PaddingContainer>
  )
}
