import styled from 'styled-components'

export const SkillsCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 1rem;
    padding: 0;
  };
`;

export const SkillsCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary_light};
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.white};
  padding: 3rem 0;
  border-radius: 1rem;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    border-radius: .5rem;
  }
`;

export const IconContainer = styled.div`
  font-size: ${({ size }) => size};
  cursor: default;
  color: ${({ theme }) => theme.colors.secondary};

  @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 2.5rem;
  }
`;