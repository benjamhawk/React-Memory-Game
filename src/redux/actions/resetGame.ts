import { ActionTypes } from './types'

export const resetGame = (theme: string) => {
  return {
    type: ActionTypes.RESET_GAME,
    payload: theme
  }
}
