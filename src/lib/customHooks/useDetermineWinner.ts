import { useEffect } from 'react'
import { GameDataModel } from '../../models'

export const useDetermineWinner = (
  addFeedbackMsg: Function,
  matchesLeft: number,
  scores: GameDataModel['scores']
): any => {
  const determineWinner = () => {
    if (scores.player1 === scores.player2) {
      addFeedbackMsg({
        msg: 'The Game is a Tie!',
        type: 'neutral'
      })
    } else {
      addFeedbackMsg({
        msg: `Player ${scores.player2 > scores.player1 ? 2 : 1} Wins!`,
        type: 'success'
      })
    }
  }
  useEffect(() => {
    if (matchesLeft === 0) {
      determineWinner()
    }
  }, [addFeedbackMsg, matchesLeft, scores])
}
