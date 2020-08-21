import styled from 'styled-components'

export const LoadingText = styled.p`
  grid-column: 1/6;
  font-size: 2rem;

  @media (max-width: 600px) and (orientation: portrait) {
    grid-column: 1/5;
    font-size: 1.2rem;
  }
`
