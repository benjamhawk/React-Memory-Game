import { INCREMENT_LOADED_IMAGES, CHANGE_THEME } from '../actionStrings'

export default (state: number = 0, { type, payload }: any) => {
  switch (type){
    case INCREMENT_LOADED_IMAGES:
      return state + 1
    case CHANGE_THEME:
      return 0
    default:
      return state
  }
}