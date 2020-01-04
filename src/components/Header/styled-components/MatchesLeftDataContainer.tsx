import styled from 'styled-components'

export const MatchesLeftDataContainer = styled.div`
  display: grid;
  grid-column: 1/2;
  grid-row: 2/3;
  grid-template-columns: .4fr 1fr;
  justify-self: center;
  justify-content: center;
  align-content: center;
  margin: 0;

  @media (max-width: 600px) and (orientation: portrait) {
  display: none;
}
`
