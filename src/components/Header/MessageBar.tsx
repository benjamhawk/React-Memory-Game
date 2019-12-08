import React from 'react'
import { Div } from './styled-components/MessageBarStyle'
import GameScores from './GameScores'

export const MessageBar = () => {
  return (
    <Div>
      <GameScores />
      <p>Find a Match!</p>
      <p>Player 1s turn</p>
    </Div>
  )
}
