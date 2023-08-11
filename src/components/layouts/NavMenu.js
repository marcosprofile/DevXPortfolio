import React from 'react';

import { motion } from 'framer-motion';

// import global styles
import {
  PaddingContainer,
  FlexContainer,
} from '../../styles/Global.styled';

// import Navbar styles
import {
  NavMenuContainer,
  MenuIcon,
  MenuItem,
} from '../../styles/Navbar.styled';

import { AiOutlineClose } from 'react-icons/ai';

// import Navbar links
import { navLinks } from '../../utils/Data';

import { slideInLeft } from '../../utils/Variants';

const NavMenu = ({ setOpenMenu }) => {
  return (
    <NavMenuContainer
      as={motion.div}
      variants={slideInLeft}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* --close-button-- */}
      <PaddingContainer
        left="5%"
        right="5%"
        top="2rem"
        bottom="2rem"
        responsiveTop="1.5rem"
        responsiveRight="8%"
      >
        <FlexContainer
          justify="flex-end"
          responsiveFlex
        >
          <MenuIcon
            as={motion.a}
            whileHover={{scale: 1.2}}
            onClick={() => setOpenMenu(false)}
          >
            <AiOutlineClose />
          </MenuIcon>
        </FlexContainer>
      </PaddingContainer>

      {/* --menu-items-- */}
      <PaddingContainer
        top="4vh"
      >
        {navLinks.map((link, id) => (
          <FlexContainer
            key={id}
            direction="column"
            align="center"
            responsiveFlex
          >
            <MenuItem
              as={motion.a}
              whileHover={{scale: 1.2}}
              href={link.href}
              onClick={() => setOpenMenu(false)}
            >
              {link.name}
            </MenuItem>
          </FlexContainer>
        ))}
      </PaddingContainer>

    </NavMenuContainer>
  )
}

export default NavMenu;
