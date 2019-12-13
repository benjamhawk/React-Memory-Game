import styled from 'styled-components'

export const ResetButtonContainer = styled.button`
  grid-column: 3/4;
  grid-row: 1/2;
  color: ${props => props.theme.fontColor};
  font-size: 1.5rem;
  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;

  & svg {
    padding-right: 10px;
    height: 20px;
    width: 20px;
  }
`
