import { FeedbackMsgModel } from '../../models/FeedBackMsgModel'
import { ADD_FEEDBACK_MSG } from '../actionStrings'

const INITIAL_STATE: FeedbackMsgModel = 'Find a Match!'

export default (state: FeedbackMsgModel = INITIAL_STATE, { type, payload }: any) => {
  if (type === ADD_FEEDBACK_MSG) {
    return payload
  } else {
    return state
  }
}
