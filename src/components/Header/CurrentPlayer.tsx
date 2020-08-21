import React from 'react'
import { CurrentPlayerStyle } from './styled-components/CurrentPlayerStyle'
import { useSelector, shallowEqual } from 'react-redux'
import { AppState } from '../../App/ReduxStore'
import { useCurrentPlayer } from '../../lib/customHooks/globalStateHooks'

export default () => {
  const currentPlayer = useCurrentPlayer()

  return (
    <CurrentPlayerStyle>
      <span className="fullPlayerName">Player </span>
      <span className="shortPlayerName">P</span>
      <span className="playerNum">{currentPlayer}</span>'s Turn
    </CurrentPlayerStyle>
  )
}
