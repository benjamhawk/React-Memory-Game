import React from 'react'
import { useSelector, shallowEqual } from 'react-redux'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFrog, faCarSide } from '@fortawesome/free-solid-svg-icons'

import { HeaderContainer } from './styled-components/HeaderContainer'
import { Title } from './styled-components/Title'
import ResetButton from './ResetButton'
import { MessageBar } from './MessageBar'
import MatchesLeftData from './MatchesLeftData'
import { AppState } from '../../redux'

export default () => {
  const theme = useSelector(({ theme }: AppState) => theme, shallowEqual)

  return (
    <HeaderContainer>
      <MatchesLeftData />
      <Title>
        <FontAwesomeIcon icon={theme === 'animals' ? faFrog : faCarSide} />
        Memory Game
      </Title>
      <ResetButton />
      <MessageBar />
    </HeaderContainer>
  )
}
