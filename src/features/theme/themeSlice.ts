import { createSlice, PayloadAction, Dispatch } from '@reduxjs/toolkit'
import { AppThunk } from '../../App/ReduxStore'
import { resetGame } from '../TwoPlayerGame/twoPlayerGameSlice'

export type ThemeName = 'animals' | 'cars'

const theme = createSlice({
  name: 'theme',
  initialState: 'animals' as ThemeName,
  reducers: {
    changeTheme: (state, { payload }: PayloadAction<ThemeName>) => payload
  }
})

export const { changeTheme } = theme.actions

export default theme.reducer
