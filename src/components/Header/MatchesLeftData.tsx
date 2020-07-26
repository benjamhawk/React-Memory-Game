import React from 'react'
import { Label } from './styled-components/Label'
import { Data } from './styled-components/Data'
import { MatchesLeftDataContainer } from './styled-components/MatchesLeftDataContainer'
import { AppState } from '../../redux'
import { useSelector, shallowEqual } from 'react-redux'

export default () => {
  const { matchesLeft } = useSelector(
    ({ gameData }: AppState) => gameData,
    shallowEqual
  )

  return (
    <MatchesLeftDataContainer>
      <Data>{matchesLeft}</Data>
      <Label>Matches Left</Label>
    </MatchesLeftDataContainer>
  )
}
