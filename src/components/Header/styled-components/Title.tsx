import styled from 'styled-components'

export const Title = styled.h1`
  justify-self: center;
  margin: 0;
  font-weight: 600;

  & svg {
    color: ${props => props.theme.headerIconColor};
    padding-right: 10px;
    transition: 250ms;
  }

  /* @media screen and (orientation: portrait) {
    font-size: 1rem;
  }

  @media (max-width: 600px) and (orientation: portrait) {
    font-size: 1rem;
  }
 */
  @media (max-width: 920px) {
    font-size: 1.5rem;
  }
`
