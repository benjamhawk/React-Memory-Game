import { FeedbackMsgModel } from '../../models/FeedBackMsgModel'
import { ActionTypes } from './types'

export const addFeedbackMsg = (payload: FeedbackMsgModel) => {
  return {
    type: ActionTypes.ADD_FEEDBACK_MSG,
    payload: payload
  }
}
