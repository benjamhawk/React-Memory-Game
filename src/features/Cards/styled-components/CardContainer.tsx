import styled from 'styled-components'

export const CardContainer = styled.div`
  display: grid;
  grid-column: 2/3;
  grid-row: 2/3;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 10px;
  height: 100%;
  width: 100%;
  padding-top: 30px;

  @media (max-width: 600px) and (orientation: portrait) {
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
  }
`
