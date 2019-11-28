import React from 'react'
import { MatchesLeftData } from './MatchesLeftData'
import { TurnsData } from './TurnsData'
import { GameDataContainer } from './styled-components/GameDataContainer'

export function GameData () {
  return (
    <GameDataContainer>
      <TurnsData />
      <MatchesLeftData />
    </GameDataContainer>
  )
}
