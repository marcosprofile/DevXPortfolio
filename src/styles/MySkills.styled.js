import styled from 'styled-components';

export const SkillsCardContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 2rem;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: block;
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
    margin-top: 2rem;
  };
`;