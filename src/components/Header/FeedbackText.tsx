import React from 'react'
import { FeedbackTextContainer } from './styled-components/FeedbackTextContainer'
import { connect } from 'react-redux'
import { AppState } from '../../redux'
import { FeedbackMsgModel } from '../../models/FeedBackMsgModel'

type Props = {
  feedbackMsg: FeedbackMsgModel
}

function FeedbackText ({ feedbackMsg }: Props) {
  return (
    <FeedbackTextContainer>
      {feedbackMsg}
    </FeedbackTextContainer>
  )
}

const mapStateToProps = (state: AppState) => {
  return {
    feedbackMsg: state.feedbackMsg
  }
}

export default connect(mapStateToProps)(FeedbackText)
