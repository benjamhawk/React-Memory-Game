import { ActionTypes } from './types'

export const addPoint = (player: number) => {
  return {
    type: ActionTypes.ADD_POINT,
    payload: player
  }
}
