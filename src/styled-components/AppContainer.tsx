import styled from 'styled-components'

export const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 6fr 1fr;
  grid-template-rows: 120px 6fr 1fr;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  font-family: 'Montserrat', sans-serif;
  background: ${props => props.theme.bgColor};
  transition: background 250ms linear, color 250ms linear;

  @media screen and (orientation: portrait) {
    grid-template-columns: 0.5fr 6fr 0.5fr;
  }
`
