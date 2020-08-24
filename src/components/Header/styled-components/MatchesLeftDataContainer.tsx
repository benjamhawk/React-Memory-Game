import styled from 'styled-components'

export const MatchesLeftDataContainer = styled.div`
  display: grid;
  grid-template-columns: 0.4fr 1fr;
  justify-self: center;
  justify-content: center;
  align-content: center;
  margin: 0;

  @media screen and (orientation: portrait) {
    display: none;
  }
`
