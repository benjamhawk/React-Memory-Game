import { CHANGE_THEME } from '../actionStrings'

export const changeTheme = (theme: string) => {
  return {
    type: CHANGE_THEME,
    payload: theme
  }
}
