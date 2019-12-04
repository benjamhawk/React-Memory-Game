import { SET_MATCH_TOTAL } from "../actionStrings"

export const setMatchTotal = (matchTotal: number) => {
  return {
    type: SET_MATCH_TOTAL,
    payload: matchTotal
  }
}
