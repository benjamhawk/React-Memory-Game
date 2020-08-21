import { MessageType } from '../features/TwoPlayerGame/MessageType'

export const defaultGameData = {
  gameId: 1,
  currentPlayer: 1,
  scores: {
    player1: 0,
    player2: 0
  },
  matchesLeft: 10,
  messageDisplay: {
    msg: 'Find a Match!',
    type: MessageType.neutral
  }
}
