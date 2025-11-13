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
  padding: 1.2rem 1rem;
`;

export const MenuIcon = styled.a`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 1.6rem;
  cursor: pointer;
  transition: all .2s ease;
  display: flex;
  align-items: center;
`;

export const NavLinkContainer = styled.ul`
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
  white-space: nowrap;

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

export const MenuItem = styled.li`
  list-style: none;
`;