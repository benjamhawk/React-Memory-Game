import React from 'react'
import { FeedbackTextContainer } from './styled-components/FeedbackTextContainer'
import { useSelector, shallowEqual } from 'react-redux'
import { AppState } from '../../redux'

export default () => {
  const { type, msg } = useSelector(
    ({ feedbackMsg }: AppState) => feedbackMsg,
    shallowEqual
  )

  return <FeedbackTextContainer type={type}>{msg}</FeedbackTextContainer>
}
