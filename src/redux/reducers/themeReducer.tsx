import { ThemeModel } from "../../models/ThemeModel"
import { CHANGE_THEME } from "../actionStrings"

const INITIAL_STATE = 'animals'

export default (state: ThemeModel = INITIAL_STATE, { type, payload }: any) => {
  if (type === CHANGE_THEME) {
    return payload
  } else {
    return state
  }
}
