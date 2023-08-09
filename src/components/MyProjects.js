import React from 'react';

// import global styles
import {
  PaddingContainer,
  Heading,
  BlueText,
} from './../styles/Global.styled';
import Project from './layouts/Project';

import { projectDetails } from '../utils/Data';

const MyProjects = () => {
  return (
    <PaddingContainer
      id="Projects"
      top="5%"
      bottom="5%"
    >
      <Heading as="h4" size="h4">
        MEUS PROJETOS
      </Heading>

      <Heading top=".5rem" as="h2" size="h2">
        O que <BlueText>eu desenvolvi</BlueText>
      </Heading>

      {projectDetails.map((project) => (
        <PaddingContainer key={project.id} top="5rem" bottom="5rem">
          <Project data={project} />
        </PaddingContainer>
      ))}

    </PaddingContainer>
  )
}

export default MyProjects
