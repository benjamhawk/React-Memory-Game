import React from 'react'
import { GameScoresContainer } from './styled-components/GameScoresContainer'
import { PlayerNameText } from './styled-components/PlayerNameText'
import { PlayerScoreText } from './styled-components/PlayerScoreText'
import { connect } from 'react-redux'
import { AppState } from '../../redux'
import { GameDataModel } from '../../models/GameData'

type Props = {
  gameData: GameDataModel
}

const GameScores = ({ gameData }: Props) => {
  return (
    <GameScoresContainer>
      <PlayerNameText
        isCurrentPlayer={gameData.currentPlayer === 1}
      >
        <span className='fullPlayerName'>Player 1: </span>
        <span className='shortPlayerName'>P1: </span>
      </PlayerNameText>
      <PlayerScoreText>
        {gameData.scores.player1}
      </PlayerScoreText>
      <PlayerNameText
        isCurrentPlayer={gameData.currentPlayer === 2}
      >
        <span className='fullPlayerName'>Player 2: </span>
        <span className='shortPlayerName'>P2: </span>
      </PlayerNameText>
      <PlayerScoreText>
        {gameData.scores.player2}
      </PlayerScoreText>

    </GameScoresContainer>
  )
}

const mapStateToProps = (state: AppState) => {
  return {
    gameData: state.gameData
  }
}

export default connect(mapStateToProps)(GameScores)
