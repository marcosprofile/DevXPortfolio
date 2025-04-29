import styled from 'styled-components'

export const SkillsContainer = styled.div`
  max-width: 1280px;
  overflow: hidden;
`

export const SkillsCarouselContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 4rem;
  color: #FFFFFF75;
  padding-top: 5rem;
  gap: 4rem;
`;

export const SkillCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  background-color: #151F37;
  padding: 2rem;
  border: ${({ border }) => border };
  color: #FFFFFF;
  padding-right: ${({ $paddingRight }) => $paddingRight };
  border-radius: 1rem;

  svg { font-size: 3.5rem };

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile }) {
    margin-top: ${({ $marginTop }) => $marginTop ? '2rem' : ''};
  }
`;

export const Icon = styled.div`
  font-size: 4rem;
  height: 4rem;
  cursor: default;
  color: ${({ theme }) => theme.colors.secondary};

  @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 3rem;
  }
`;