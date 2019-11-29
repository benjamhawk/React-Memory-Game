import styled from 'styled-components'

export const CardContainer = styled.div`
  display: grid;
  grid-column: 2/3;
  grid-row: 2/3;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(4, 160px);
  height: 100%;
  width: 100%;
  padding-top: 30px;
`