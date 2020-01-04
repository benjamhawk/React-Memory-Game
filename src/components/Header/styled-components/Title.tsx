import styled from 'styled-components'

export const Title = styled.h1`
  grid-column: 1/4;
  grid-row: 1/3;
  justify-self: center;
  font-size: 2.5rem;
  font-weight: 600;

  & svg {
    color: ${props => props.theme.headerIconColor};
    padding-right: 10px;
    transition: 250ms;
  }

  @media screen and (orientation: portrait) {
  font-size: 2rem;
}

@media (max-width: 600px) and (orientation: portrait) {
  font-size: 1.5rem;
  /* grid-row: 1/2; */
}

@media (max-width: 750px) and (orientation: landscape) {
    font-size: 2rem;
}
`
