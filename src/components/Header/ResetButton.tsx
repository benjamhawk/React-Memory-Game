import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRedo } from '@fortawesome/free-solid-svg-icons'

import { ResetButtonContainer } from './styled-components/ResetButtonContainer'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { AppState } from '../../redux'
import { resetGame } from '../../redux/actions/'

export default () => {
  const {
    theme,
    gameData: { matchesLeft }
  } = useSelector((state: AppState) => state, shallowEqual)

  const dispatch = useDispatch()

  return (
    <ResetButtonContainer onClick={() => dispatch(resetGame(theme))}>
      <FontAwesomeIcon icon={faRedo} />
      {matchesLeft ? 'Reset Game' : 'Play Again'}
    </ResetButtonContainer>
  )
}
