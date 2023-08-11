import styled from 'styled-components';

export const TechStackCard = styled.div`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: bold;
  padding: .3rem 1rem;
  border-radius: 8px;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-right: 1rem;
    margin-bottom: 1rem;
  };
`;

export const ProjectImageContainer = styled.div`
  display: flex;
  justify-content: ${({ justify }) => justify};
`;

export const ProjectImage = styled.img`
  border: 1px solid ${({ theme }) => theme.colors.white};
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 10px;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
    margin-top: 2rem;
  };
`;