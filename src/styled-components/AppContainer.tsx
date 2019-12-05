import styled from 'styled-components'

export const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 6fr 1fr;
  grid-template-rows: 1fr 4fr;
  width: 100%;
  height: 100%;
  font-family: 'Montserrat', sans-serif;
  background-image: ${props => props.theme.bgColor};
`
