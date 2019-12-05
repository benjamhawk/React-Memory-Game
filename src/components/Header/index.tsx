import React from 'react'

import { HeaderContainer } from './styled-components/HeaderContainer'
import { GameData } from './GameData'
import { Title } from './styled-components/Title'
import { ResetButton } from './ResetButton'
import FeedbackText from './FeedbackText'
import { AppState } from '../../redux'
import { GameDataModel } from '../../models/GameData'
import { connect } from 'react-redux'

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
      <FeedbackText />
    </HeaderContainer>
  )
}

const mapStateToProps = (state: AppState) => {
  return {
    gameData: state.gameData
  }
}

export default connect(mapStateToProps)(Header)
