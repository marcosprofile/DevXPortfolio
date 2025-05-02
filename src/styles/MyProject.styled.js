import styled from 'styled-components'

export const TechStackCard = styled.div`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: bold;
  font-size: .75rem;
  padding: .3rem .5rem;
  border-radius: 2rem;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-right: 1rem;
    margin-bottom: 1rem;
  };
`;

export const ProjectImageContainer = styled.div`
  display: flex;
  justify-content: ${({ justify }) => justify};
  max-width: 592px;
  max-height: 300px;
  overflow: hidden;
  border-radius: .75rem;
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 10px;
  transition: all .3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
    margin-top: 2rem;
  };
`;