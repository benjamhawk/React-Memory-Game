import { ActionTypes } from '../actions/types'

export default (state: number = 0, { type, payload }: any) => {
  switch (type) {
    case ActionTypes.INCREMENT_LOADED_IMAGES:
      return state + 1
    case ActionTypes.CHANGE_THEME:
      return 0
    default:
      return state
  }
}
