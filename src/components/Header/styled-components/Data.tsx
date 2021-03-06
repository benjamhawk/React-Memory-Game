import styled from 'styled-components'

export const Data = styled.span`
  color: ${props => props.theme.headerDataColor};
  margin: 0;
  font-size: 2rem;
  font-weight: 600;
  justify-self: center;

  @media (max-width: 750px) and (orientation: landscape) {
    font-size: 1.5rem;
}
`
