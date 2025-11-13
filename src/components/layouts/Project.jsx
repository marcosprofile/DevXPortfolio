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

import { FaLaptop, FaLaptopCode } from 'react-icons/fa6'
import { StructuredText } from 'react-datocms'


export default function Project({ data }) {
  const isDisabledPreview = !data.projectWebsite
  const isDisabledCode = !data.projectCode

  return (
    <FlexContainer
      $gap='6rem'
      $direction={data.reverse ? 'row-reverse' : false}
      $align='center'
      $fullWidthChild='true'
      $responsiveFlex='true'
      $responsiveDirection='column-reverse'
      $responsiveGap='3rem'
    >
      {/* --left-section-project-- */}
      <motion.div
        variants={data.reverse ? fadeInRightVariant : fadeInLeftVariant}
        initial='hidden'
        whileInView='visible'
      >
        <PaddingContainer $bottom='1rem'>
          <FlexContainer $gap='.5rem' $responsiveFlex>
            {Array.isArray(data.stacks) && data.stacks.map((stack, id) => (
              <TechStackCard key={id}>{stack}</TechStackCard>
            ))}
          </FlexContainer>
        </PaddingContainer>

        <FlexContainer $align='center' $gap='1rem' $responsiveFlex>
          <Heading as='h3' size='h3'>
            {data.title}
          </Heading>

          <IconContainer color='blue' size='1.5rem' href='https://github.com/marcosprofile' target='_blank'>
            <FaGithub />
          </IconContainer>
        </FlexContainer>

        <ParaText $top='.5rem' $bottom='2.5rem' $lineHeight>
          <StructuredText data={data.description.value} />
        </ParaText>

        <FlexContainer $responsiveFlex $gap='1rem'>
          <Button
            href={data.projectWebsite || '#'}
            target={data.projectWebsite ? '_blank' : undefined}
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
            href={data.projectCode || '#'}
            target={data.projectCode ? '_blank' : undefined}
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
        $justify={data.reverse ? 'flex-start' : 'flex-end'}
        as={motion.div}
        variants={data.reverse ? fadeInLeftVariant : fadeInRightVariant}
        initial='hidden'
        whileInView='visible'
      >
        <ProjectImage
          src={data.thumbnail.url}
          srcSet={`${data.thumbnail.url}?w=1024 1024w, ${data.thumbnail.url}?w=1600 1600w`}
          sizes='(max-width: 1024px) 100vw, 1024px'
          alt={data.title}
          draggable='false'
          loading="lazy"
        />
      </ProjectImageContainer>
    </FlexContainer>
  )
}
