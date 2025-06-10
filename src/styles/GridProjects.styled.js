import styled from 'styled-components'

export const GridContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
  list-style: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile }) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`

export const ListItem = styled.li`
  width: 100%;
  max-width: 414px;
  height: 254px;
  border-radius: .75rem;
  overflow: hidden;
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: .75rem;
  transition: all .3s ease-in;
  
  &:hover {
    transition: all .3s ease-out;
    box-shadow: 0 0 24px rgba(255, 255, 255, .5);
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    border-radius: .5rem;
  }
`