import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: grid;
  position: relative;
  grid-row: 1/2;
  grid-column: 1/4;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 40px;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.headerBgColor};
  color: ${props => props.theme.fontColor};
  transition: background 250ms linear, color 250ms linear;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1.5fr 1fr;
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr 2fr 1fr;
  }

  /* @media screen and (orientation: portrait) {
    grid-template-rows: 1.5fr 2fr 0.5fr;
  }
  @media (max-width: 600px) and (orientation: portrait) {
    grid-template-rows: 1fr 2fr 0.5fr;
  } */
`
