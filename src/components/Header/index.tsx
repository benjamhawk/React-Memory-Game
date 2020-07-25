import React from 'react'
import { connect } from 'react-redux'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFrog, faCarSide } from '@fortawesome/free-solid-svg-icons'

import { HeaderContainer } from './styled-components/HeaderContainer'
import { Title } from './styled-components/Title'
import ThemeBtn from './ThemeBtn'
import ResetButton from './ResetButton'
import { MessageBar } from './MessageBar'
import MatchesLeftData from './MatchesLeftData'
import { AppState } from '../../redux'

const Header = ({ theme }: { theme: string }) => {
  return (
    <HeaderContainer>
      <MatchesLeftData />
      {/* <ThemeBtn /> */}
      <Title>
        <FontAwesomeIcon icon={theme === 'animals' ? faFrog : faCarSide} />
        Memory Game
      </Title>
      <ResetButton />
      <MessageBar />
    </HeaderContainer>
  )
}

const mapStateToProps = ({ theme }: AppState) => {
  return { theme }
}

export default connect(mapStateToProps)(Header)
