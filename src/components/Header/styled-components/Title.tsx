import styled from 'styled-components'

export const Title = styled.div`
  justify-self: center;
  margin: 0;
  font-weight: 600;
  font-size: 2rem;
  text-align: center;

  & svg {
    color: ${props => props.theme.headerIconColor};
    padding-right: 10px;
    transition: 250ms;
    min-height: 25px;
    min-width: 25px;
  }

  @media screen and (orientation: portrait) {
    font-size: 1.5rem;
    grid-column: 1/-1;
    width: 80%;
  }

  /* @media (max-width: 600px) and (orientation: portrait) {
    font-size: 1rem;
  } */

  @media (orientation: landscape) and (max-width: 920px) {
    font-size: 1.5rem;
  }
  @media (orientation: landscape) and (max-width: 720px) {
    font-size: 1.2rem;
  }
  @media (orientation: landscape) and (max-width: 420px) {
    font-size: 0.8rem;
  }
`
