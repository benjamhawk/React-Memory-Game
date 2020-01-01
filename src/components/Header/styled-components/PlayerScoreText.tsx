import styled from 'styled-components'

export const PlayerScoreText = styled.span`
  color: ${props => props.theme.messageBarNeutralColor};
  font-size: 1.5rem;

  @media screen and (orientation: portrait) {
  font-size: 1.3rem;
}
`
