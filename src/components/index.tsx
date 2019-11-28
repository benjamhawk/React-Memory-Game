import React from 'react'

import { HeaderContainer } from './Header/styled-components/HeaderContainer'
import { GameData } from './Header/GameData'
import { Title } from './Header/styled-components/Title'
import { ResetButton } from './Header/ResetButton'

export function Header () {
  return (
    <HeaderContainer>
      <GameData />
      <Title>
        Memory Game
      </Title>
      <ResetButton />
      {/* <FeedbackText /> */}
    </HeaderContainer>
  )
}
