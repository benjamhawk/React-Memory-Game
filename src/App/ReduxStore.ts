import {
  configureStore,
  combineReducers,
  Action,
  ThunkAction
} from '@reduxjs/toolkit'
import cards from '../features/Cards/cardsSlice'
import twoPlayerGame from '../features/TwoPlayerGame/twoPlayerGameSlice'
import theme from '../features/theme/themeSlice'

export const store = configureStore({
  reducer: combineReducers({
    theme,
    cards,
    twoPlayerGame
  })
})

export type AppState = ReturnType<typeof store.getState>

export type AppThunk = ThunkAction<void, AppState, unknown, Action<string>>
