import styled from 'styled-components'
import { MessageType } from '../../../features/TwoPlayerGame/MessageType'

type Props = {
  type: MessageType
}

export const FeedbackTextContainer = styled.div`
  display: grid;
  /* grid-row: 2/3; */
  color: ${(props: Props) => {
    switch (props.type) {
      case MessageType.neutral:
        return props => props.theme.messageBarNeutralColor
      case MessageType.success:
        return props => props.theme.messageBarFontColor
      case MessageType.warning:
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
