import { createSlice, PayloadAction, createAction } from '@reduxjs/toolkit'
import { defaultGameData } from '../../lib/defaultGameData'
import { MessageType } from './MessageType'

export type GameDataModel = {
  gameId: number
  currentPlayer: 1 | 2
  scores: {
    player1: number
    player2: number
  }
  matchesLeft: number
  messageDisplay: {
    msg: string
    type: MessageType
  }
}

const changeTheme = createAction('theme/changeTheme')

const twoPlayerGame = createSlice({
  name: 'twoPlayerGame',
  initialState: defaultGameData,
  reducers: {
    addPoint: (state, { payload }: PayloadAction<number>) => {
      payload === 1 ? state.scores.player1++ : state.scores.player2++
      state.matchesLeft--
    },
    changePlayer: state => {
      state.currentPlayer = state.currentPlayer === 1 ? 2 : 1
    },
    setMatchTotal: (state, { payload }: PayloadAction<number>) => {
      state.matchesLeft = payload
    },
    resetGame: (state, action) => {
      return {
        ...defaultGameData,
        gameId: state.gameId + 1
      }
    },
    addMessage: (
      state,
      { payload }: PayloadAction<GameDataModel['messageDisplay']>
    ) => {
      state.messageDisplay = payload
    }
  },
  extraReducers: builder =>
    builder.addCase(changeTheme, state => {
      return {
        ...defaultGameData,
        gameId: state.gameId + 1
      }
    })
})

export const {
  addPoint,
  changePlayer,
  setMatchTotal,
  resetGame,
  addMessage
} = twoPlayerGame.actions

export default twoPlayerGame.reducer
