import React from 'react'
import { GameScoresContainer } from './styled-components/GameScoresContainer'
import { PlayerNameText } from './styled-components/PlayerNameText'
import { PlayerScoreText } from './styled-components/PlayerScoreText'
import {
  useCurrentPlayer,
  useScores
} from '../../lib/customHooks/globalStateHooks'

export default () => {
  const currentPlayer = useCurrentPlayer()
  const scores = useScores()

  return (
    <GameScoresContainer>
      <PlayerNameText isCurrentPlayer={currentPlayer === 1}>
        <span className="fullPlayerName">Player 1: </span>
        <span className="shortPlayerName">P1: </span>
      </PlayerNameText>
      <PlayerScoreText>{scores.player1}</PlayerScoreText>
      <PlayerNameText isCurrentPlayer={currentPlayer === 2}>
        <span className="fullPlayerName">Player 2: </span>
        <span className="shortPlayerName">P2: </span>
      </PlayerNameText>
      <PlayerScoreText>{scores.player2}</PlayerScoreText>
    </GameScoresContainer>
  )
}
