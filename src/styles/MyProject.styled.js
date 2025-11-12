import styled from 'styled-components'

export const TechStackCard = styled.div`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: bold;
  font-size: .75rem;
  padding: .3rem .5rem;
  border-radius: 2rem;
`;

export const ProjectImageContainer = styled.div`
  display: flex;
  justify-content: ${({ justify }) => justify};
  overflow: hidden;
  border-radius: .75rem;
`;

export const ProjectImage = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 10px;
  transition: all .3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: calc(100%) !important;
  };
`;