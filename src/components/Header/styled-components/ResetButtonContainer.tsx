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

  @media screen and (orientation: portrait) {
    font-size: 1.2rem;
  }

  @media (max-width: 600px) and (orientation: portrait) {
    font-size: 1rem;

    & svg {
      display: none;
    }
  }

  @media (max-width: 750px) and (orientation: landscape) {
    font-size: 1rem;

    & svg {
      height: 1rem;
    }
  }
  @media screen and (max-width: 1040px) {
    font-size: 1.3rem;
  }
`
