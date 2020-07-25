import { ActionTypes } from './types'

export const setMatchTotal = (matchTotal: number) => {
  return {
    type: ActionTypes.SET_MATCH_TOTAL,
    payload: matchTotal
  }
}
