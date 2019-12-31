import { FeedbackMsgModel } from '../../models/FeedBackMsgModel'
import { ADD_FEEDBACK_MSG, RESET_GAME, CHANGE_THEME } from '../actionStrings'

const INITIAL_STATE: FeedbackMsgModel = {
  msg: 'Find a Match!',
  type: 'neutral'
}

export default (state: FeedbackMsgModel = INITIAL_STATE, { type, payload }: any) => {
  switch (type) {
    case ADD_FEEDBACK_MSG:
      return payload
    case RESET_GAME:
    case CHANGE_THEME:
      return INITIAL_STATE
    default:
      return state
  }
}
