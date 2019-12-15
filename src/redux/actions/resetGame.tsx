import { RESET_GAME } from '../actionStrings'

export const resetGame = (theme: string) => {
  return {
    type: RESET_GAME,
    payload: theme
  }
}
