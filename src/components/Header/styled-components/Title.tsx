import styled from 'styled-components'

export const Title = styled.h1`
  grid-column: 1/4;
  grid-row: 1/3;
  justify-self: center;
  font-size: 2.5rem;
  font-weight: 600;

  & svg {
    color: ${props => props.theme.headerIconColor};
    padding-right: 10px;
    transition: 250ms;
  }
`
