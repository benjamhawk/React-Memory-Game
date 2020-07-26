import React from 'react'
import { GameScoresContainer } from './styled-components/GameScoresContainer'
import { PlayerNameText } from './styled-components/PlayerNameText'
import { PlayerScoreText } from './styled-components/PlayerScoreText'
import { useSelector, shallowEqual } from 'react-redux'
import { AppState } from '../../redux'

export default () => {
  const { currentPlayer, scores } = useSelector(
    ({ gameData }: AppState) => gameData,
    shallowEqual
  )

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
