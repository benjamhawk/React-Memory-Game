import { defaultGameData } from '../../lib/defaultGameData'
import { GameDataModel } from '../../models/GameData.model'
import { ADD_POINT, CHANGE_PLAYER, REDUCE_MATCHES_LEFT, SET_MATCH_TOTAL } from '../actionStrings'

const INITIAL_STATE: GameDataModel = defaultGameData

export default (state: GameDataModel = INITIAL_STATE, { type, payload }: any) => {
  switch (type) {
    case ADD_POINT:
      if (payload === 1) {
        return {
          ...state,
          scores: {
            player1: state.scores.player1 + 1,
            player2: state.scores.player2
          },
          matchesLeft: state.matchesLeft - 1
        }
      } else if (payload === 2) {
        return {
          ...state, scores: {
            player1: state.scores.player1,
            player2: state.scores.player2 + 1
          },
          matchesLeft: state.matchesLeft - 1
        }
      } else {
        return state
      }
    case CHANGE_PLAYER:
      return {
        ...state, 
        currentPlayer: state.currentPlayer === 1 ? 2 : 1
      }
    case SET_MATCH_TOTAL:
      return {
        ...state,
        matchesLeft: payload
      }
    case REDUCE_MATCHES_LEFT:
      return {
        ...state,
        matchesLeft: state.matchesLeft -1
      }
    default: 
      return state
    }
  }
