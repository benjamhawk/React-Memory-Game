import styled from 'styled-components'

export const FeedbackTextContainer = styled.div`
  display: grid;
  grid-row: 2/3;
  grid-column: 3/4;
  align-content: center;
  justify-content: center;
  color: ${props => props.theme.warningColor};
  font-size: 2rem;
  font-weight: 400;
`
