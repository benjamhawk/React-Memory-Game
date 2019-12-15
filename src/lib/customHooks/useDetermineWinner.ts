import { useEffect } from "react"

export const useDetermineWinner = (addFeedbackMsg: any, matchesLeft: any, scores: any): any => {
  useEffect(() => {
    const determineWinner = () => {
      if (scores.player1 === scores.player2) {
        addFeedbackMsg({
          msg: 'The Game is a Tie!',
          type: 'neutral'
        })
      } else {
        addFeedbackMsg({
          msg: `Player ${
            scores.player2 > scores.player1 ? 2 : 1
            } Wins!`,
          type: 'success'
        })
      }
    }

    if (matchesLeft === 0) {
      determineWinner()
    }
  }, [addFeedbackMsg, matchesLeft, scores])
}
