import { CHANGE_PLAYER } from '../actionStrings'

export const changePlayer = () => {
  return {
    type: CHANGE_PLAYER,
    payload: 'change player'
  }
}
