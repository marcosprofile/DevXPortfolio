import React, { useState, useEffect } from 'react';

// import global styles
import {
  FlexContainer,
  PaddingContainer,
  Container,
} from '../styles/Global.styled';

// import Navbar styles
import {
  NavbarContainer,
  NavLinkContainer,
  NavLinkBtn
} from '../styles/Navbar.styled';

import { theme } from '../utils/Theme';
import { navLinks } from '../utils/Data';



const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    }

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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
            {/* --left-- */}
            <NavLinkContainer>
              {navLinks.map((navigate, id) => (
                <NavLinkBtn key={id} href={navigate.href}>{navigate.name}</NavLinkBtn>
              ))}
            </NavLinkContainer>
          </FlexContainer>
        </Container>
      </PaddingContainer>
    </NavbarContainer>
  )
}

export default Navbar
