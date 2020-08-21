import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRedo } from '@fortawesome/free-solid-svg-icons'

import { ResetButtonContainer } from './styled-components/ResetButtonContainer'
import { useDispatch } from 'react-redux'
import {
  useMatchesLeft,
  useTheme
} from '../../lib/customHooks/globalStateHooks'
import { resetGame } from '../../features/TwoPlayerGame/twoPlayerGameSlice'

export default () => {
  const matchesLeft = useMatchesLeft()
  const dispatch = useDispatch()
  const theme = useTheme()

  return (
    <ResetButtonContainer onClick={() => dispatch(resetGame(theme))}>
      <FontAwesomeIcon icon={faRedo} />
      {matchesLeft ? 'Reset Game' : 'Play Again'}
    </ResetButtonContainer>
  )
}
