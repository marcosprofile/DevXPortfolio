import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// import global styles
import {
  FlexContainer,
  PaddingContainer,
  Container,
} from '../styles/Global.styled'

// import Navbar styles
import {
  NavbarContainer,
  NavLinkContainer,
  NavLinkBtn
} from '../styles/Navbar.styled'

import { theme } from '../utils/Theme'
import { navLinks } from '../utils/Data'

import { BsArrowLeftShort } from "react-icons/bs";


const Navbar = () => {
  const location = useLocation()
  const [sticky, setSticky] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false)
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isProjectsPage = location.pathname === '/projects'

  return (
    <NavbarContainer $bgColor={sticky ? theme.colors.primary : 'transparent'} >
      <PaddingContainer
        top="1.2rem"
        bottom="1.2rem"
        $responsiveLeft="1rem"
        $responsiveRight="1rem"
      >
        <Container>
          <FlexContainer justify="center" $responsiveFlex="true">
            <NavLinkContainer>
              {isProjectsPage ? (
                <NavLinkBtn href="/">
                  <BsArrowLeftShort />
                  Voltar à tela de início
                </NavLinkBtn>
              ) : (
                navLinks.map((navigate, id) => (
                  <NavLinkBtn key={id} href={navigate.href}>{navigate.name}</NavLinkBtn>
                ))
              )}
            </NavLinkContainer>
          </FlexContainer>
        </Container>
      </PaddingContainer>
    </NavbarContainer>
  )
}

export default Navbar
