import React from 'react'
import { connect } from 'react-redux'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFrog } from '@fortawesome/free-solid-svg-icons'

import { HeaderContainer } from './styled-components/HeaderContainer'
import ThemeBtn from './ThemeBtn'
import { Title } from './styled-components/Title'
import ResetButton from './ResetButton'
import { MessageBar } from './MessageBar'
import { AppState } from '../../redux'
import MatchesLeftData from './MatchesLeftData'

const Header = () => {
  return (
    <HeaderContainer>
      <MatchesLeftData />
      <ThemeBtn />
      <Title>
        <FontAwesomeIcon icon={faFrog} />
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
