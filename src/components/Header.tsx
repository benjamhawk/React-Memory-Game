import React from 'react'
import { HeaderContainer } from './Header/styled-components/HeaderContainer'
import styled from 'styled-components'
import { GameData } from './Header/GameData'

const Title = styled.h1`
  grid-column: 2/3;
  justify-self: center;
  font-size: 3rem;
  font-weight: 600;
  
`
export function Header () {
  return (
    <HeaderContainer>
      <GameData />
      <Title>
        Memory Game
      </Title>
      {/* <ResetButton /> */}
      {/* <FeedbackText /> */}
    </HeaderContainer>
  )
}
