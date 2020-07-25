import { ThemeModel } from '../../models/ThemeModel'
import { ActionTypes } from '../actions/types'

const INITIAL_STATE = 'animals'

export default (state: ThemeModel = INITIAL_STATE, { type, payload }: any) => {
  if (type === ActionTypes.CHANGE_THEME) {
    return payload
  } else {
    return state
  }
}
