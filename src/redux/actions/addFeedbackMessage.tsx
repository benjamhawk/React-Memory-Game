import { ADD_FEEDBACK_MSG } from '../actionStrings'
import { FeedbackMsgModel } from '../../models/FeedBackMsgModel'

export const addFeedbackMsg = (payload: FeedbackMsgModel) => {
  return {
    type: ADD_FEEDBACK_MSG,
    payload: payload
  }
}
