import { ActionTypes } from './types'

export const changeTheme = (theme: string) => {
  return {
    type: ActionTypes.CHANGE_THEME,
    payload: theme
  }
}
