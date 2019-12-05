import { ADD_FEEDBACK_MSG } from '../actionStrings'

export const addFeedbackMsg = (msg: string) => {
  return {
    type: ADD_FEEDBACK_MSG,
    payload: msg
  }
}
