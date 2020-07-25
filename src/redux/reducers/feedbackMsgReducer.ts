import { FeedbackMsgModel } from '../../models/FeedBackMsgModel'
import { ActionTypes } from '../actions/types'

const INITIAL_STATE: FeedbackMsgModel = {
  msg: 'Find a Match!',
  type: 'neutral'
}

export default (
  state: FeedbackMsgModel = INITIAL_STATE,
  { type, payload }: any
) => {
  switch (type) {
    case ActionTypes.ADD_FEEDBACK_MSG:
      return payload
    case ActionTypes.RESET_GAME:
    case ActionTypes.CHANGE_THEME:
      return INITIAL_STATE
    default:
      return state
  }
}
