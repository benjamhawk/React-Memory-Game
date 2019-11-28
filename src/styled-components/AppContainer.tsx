import styled from 'styled-components'

export const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 6fr 1fr;
  grid-template-rows: 1.5fr 4fr;
  width: 100vw;
  height: 100vh;
  font-family: 'Montserrat', sans-serif;
  background-image: ${props => props.theme.bgColor};
`