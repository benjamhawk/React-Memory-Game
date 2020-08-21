import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useScores, useMatchesLeft } from './globalStateHooks'
import { addMessage } from '../../features/TwoPlayerGame/twoPlayerGameSlice'
import { MessageType } from '../../features/TwoPlayerGame/MessageType'

export const useDetermineWinner = () => {
  const dispatch = useDispatch()
  const scores = useScores()
  const matchesLeft = useMatchesLeft()

  const determineWinner = () => {
    if (scores.player1 === scores.player2) {
      dispatch(
        addMessage({
          msg: 'The Game is a Tie!',
          type: MessageType.neutral
        })
      )
    } else {
      dispatch(
        addMessage({
          msg: `Player ${scores.player2 > scores.player1 ? 2 : 1} Wins!`,
          type: MessageType.success
        })
      )
    }
  }

  useEffect(() => {
    if (matchesLeft === 0) {
      determineWinner()
    }
  }, [addMessage, matchesLeft, scores])
}
