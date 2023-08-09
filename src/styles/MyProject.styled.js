import styled from 'styled-components';

export const TechStackCard = styled.div`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: bold;
  padding: .3rem 1rem;
  border-radius: 8px;
`

export const ProjectImageContainer = styled.div`
  display: flex;
  justify-content: ${({ justify }) => justify};
`

export const ProjectImage = styled.img`
  border: 1px solid #FFF;
  width: 80%;
  height: 300px;
  object-fit: fill;
  border-radius: 10px;
`