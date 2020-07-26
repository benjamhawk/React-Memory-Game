import { useEffect } from 'react'
import { GameDataModel } from '../../models'
import { useDispatch } from 'react-redux'
import { addFeedbackMsg } from '../../redux/actions'

export const useDetermineWinner = (
  matchesLeft: number,
  scores: GameDataModel['scores']
): any => {
  const dispatch = useDispatch()

  const determineWinner = () => {
    if (scores.player1 === scores.player2) {
      dispatch(
        addFeedbackMsg({
          msg: 'The Game is a Tie!',
          type: 'neutral'
        })
      )
    } else {
      dispatch(
        addFeedbackMsg({
          msg: `Player ${scores.player2 > scores.player1 ? 2 : 1} Wins!`,
          type: 'success'
        })
      )
    }
  }
  useEffect(() => {
    if (matchesLeft === 0) {
      determineWinner()
    }
  }, [addFeedbackMsg, matchesLeft, scores])
}
