import React from 'react'
import { ResetButtonContainer } from './styled-components/ResetButtonContainer'
import { connect } from 'react-redux'
import { AppState } from '../../redux'
import { resetGame } from '../../redux/actions/resetGame'

type Props = {
  resetGame: () => void,
  matchesLeft: number
}

function ResetButton ({ resetGame, matchesLeft }: Props) {
  return (
    <ResetButtonContainer
      onClick={resetGame}>
      {matchesLeft ? 'Reset Game' : 'Play Again'}
    </ResetButtonContainer>
  )
}

const mapStateToProps = (state: AppState) => {
  return {
    matchesLeft: state.gameData.matchesLeft
  }
}

export default connect(mapStateToProps, { resetGame })(ResetButton)
