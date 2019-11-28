import React from 'react'

import { HeaderContainer } from './styled-components/HeaderContainer'
import { GameData } from './GameData'
import { Title } from './styled-components/Title'
import { ResetButton } from './ResetButton'
import { FeedbackText } from './FeedbackText'

export function Header () {
  return (
    <HeaderContainer>
      <GameData />
      <Title>
        Memory Game
      </Title>
      <ResetButton />
      <FeedbackText />
    </HeaderContainer>
  )
}
