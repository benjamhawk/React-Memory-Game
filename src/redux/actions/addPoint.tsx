import { ADD_POINT } from '../actionStrings'

export const addPoint = (player: number) => {
  return {
    type: ADD_POINT,
    payload: player
  }
}
