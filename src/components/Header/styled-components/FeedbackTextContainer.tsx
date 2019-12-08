import styled from 'styled-components'

type Props = {
  type: string
}

export const FeedbackTextContainer = styled.div`
  display: grid;
  /* grid-row: 2/3; */
  color: ${(props: Props) => {
    switch (props.type) {
      case 'neutral':
        return props => props.theme.messageBarNeutralColor
      case 'success':
        return props => props.theme.messageBarFontColor
      case 'warning':
        return props => props.theme.warningColor
      default:
        return null
    }
  }};
  grid-column: 2/3;
  align-content: center;
  justify-content: center;
  /* color: ${props => props.theme.warningColor}; */
  font-weight: 400;
`
