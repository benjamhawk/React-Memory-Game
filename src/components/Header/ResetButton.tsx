import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRedo } from '@fortawesome/free-solid-svg-icons'

import { ResetButtonContainer } from './styled-components/ResetButtonContainer'
import { connect } from 'react-redux'
import { AppState } from '../../redux'
import { resetGame } from '../../redux/actions/resetGame'

type Props = {
  resetGame: any
  matchesLeft: number
  theme: string
}

function ResetButton ({ resetGame, matchesLeft, theme }: Props) {
  return (
    <ResetButtonContainer
      onClick={() => resetGame(theme)}>
      <FontAwesomeIcon icon={faRedo} />
      {matchesLeft ? 'Reset Game' : 'Play Again'}
    </ResetButtonContainer>
  )
}

const mapStateToProps = (state: AppState) => {
  return {
    matchesLeft: state.gameData.matchesLeft,
    theme: state.theme
  }
}

export default connect(mapStateToProps, { resetGame })(ResetButton)
