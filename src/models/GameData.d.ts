export type GameDataModel = {
  gameId: number,
  currentPlayer: number,
  scores: {
    player1: number,
    player2: number
  },
  matchesLeft: number
}
