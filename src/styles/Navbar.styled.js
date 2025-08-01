import styled from 'styled-components'

export const NavbarContainer = styled.nav`
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: center;
  top: 0;
  left: 0;
  z-index: 10;
  transition: all .2s ease-in;
  background-color: ${({ $bgColor }) => $bgColor};
`;

export const MenuIcon = styled.a`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 1.6rem;
  cursor: pointer;
  transition: all .2s ease;
  display: flex;
  align-items: center;
`;

export const NavMenuContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary_light};
  z-index: 1;
`;

export const NavLinkContainer = styled.div`
  display: flex;
  align-items: center;
  gap: .5rem;
`;

export const NavLinkBtn = styled.a`
  display: flex;
  align-items: center;
  gap: .5rem;
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  padding: .5rem 1.25rem;
  border-radius: 8rem;
  border: 1px solid transparent;
  transition: all .2s ease;

  svg {
    font-size: 1.25rem;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary_light };
    border: 1px solid ${({ theme }) => theme.colors.secondary };
  }

  @media (max-width: 600px) {
    font-size: .875rem;
    padding: .5rem .75rem;
  }
`;

export const MenuItem = styled.a`
  color: #fff;
  font-size: 2.5rem;
  margin-top: 3rem;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;