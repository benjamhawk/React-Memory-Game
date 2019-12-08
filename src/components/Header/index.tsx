import React from 'react'
import { connect } from 'react-redux'

import { HeaderContainer } from './styled-components/HeaderContainer'
import { GameData } from './GameData'
import { Title } from './styled-components/Title'
import ResetButton from './ResetButton'
import { MessageBar } from './MessageBar'
import { AppState } from '../../redux'
import { GameDataModel } from '../../models/GameData'

type HeaderProps = {
  gameData: GameDataModel
}
function Header ({
  gameData
}: HeaderProps) {
  return (
    <HeaderContainer>
      <GameData />
      <Title>
        Memory Game
      </Title>
      <ResetButton />
      <MessageBar />
    </HeaderContainer>
  )
}

const mapStateToProps = (state: AppState) => {
  return {
    gameData: state.gameData
  }
}

export default connect(mapStateToProps)(Header)
