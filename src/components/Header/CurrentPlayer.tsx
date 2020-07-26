import React from 'react'
import { CurrentPlayerStyle } from './styled-components/CurrentPlayerStyle'
import { AppState } from '../../redux'
import { useSelector, shallowEqual } from 'react-redux'

export default () => {
  const { currentPlayer } = useSelector(
    ({ gameData }: AppState) => gameData,
    shallowEqual
  )

  return (
    <CurrentPlayerStyle>
      <span className="fullPlayerName">Player </span>
      <span className="shortPlayerName">P</span>
      <span className="playerNum">{currentPlayer}</span>'s Turn
    </CurrentPlayerStyle>
  )
}
