import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import {
  NavbarContainer,
  NavLinkContainer,
  NavLinkBtn,
  MenuItem
} from '../styles/Navbar.styled'

import { theme } from '../theme/Theme'
import { navLinks } from '../utils/Data'
import { BsArrowLeftShort } from "react-icons/bs";


export default function Navbar () {
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
      <NavLinkContainer>
        {isProjectsPage ? (
          <MenuItem>
            <NavLinkBtn href="/">
              <BsArrowLeftShort />
              Voltar à tela de início
            </NavLinkBtn>
          </MenuItem>
        ) : (
            navLinks.map((navigate, id) => (
            <MenuItem key={id}>
              <NavLinkBtn href={navigate.href}>{navigate.name}</NavLinkBtn>
            </MenuItem>
          ))
        )}
      </NavLinkContainer>
    </NavbarContainer>
  )
}
