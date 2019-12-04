import { REDUCE_MATCHES_LEFT } from "../actionStrings"


export const reduceMatchesLeft = () => {
  return {
    type: REDUCE_MATCHES_LEFT,
    payload: 'reduce matches'
  }
}