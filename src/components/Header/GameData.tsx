import React from 'react'
import MatchesLeftData from './MatchesLeftData'
import CurrentPlayer from './CurrentPlayer'
import { GameDataContainer } from './styled-components/GameDataContainer'

export function GameData () {
  return (
    <GameDataContainer>
      {/* <CurrentPlayer /> */}
      <MatchesLeftData />
    </GameDataContainer>
  )
}
