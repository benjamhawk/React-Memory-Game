import { RESET_GAME } from '../actionStrings'

export const resetGame = () => {
  return {
    type: RESET_GAME,
    payload: 'reset game'
  }
}
