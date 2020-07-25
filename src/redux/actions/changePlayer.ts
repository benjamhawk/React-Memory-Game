import { ActionTypes } from './types'

export const changePlayer = () => {
  return {
    type: ActionTypes.CHANGE_PLAYER,
    payload: 'change player'
  }
}
