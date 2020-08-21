import React from 'react'
import { FeedbackTextContainer } from './styled-components/FeedbackTextContainer'
import { useMessage } from '../../lib/customHooks/globalStateHooks'

export default () => {
  const { msg, type } = useMessage()

  return <FeedbackTextContainer type={type}>{msg}</FeedbackTextContainer>
}
