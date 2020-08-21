import React from 'react'
import { Label } from './styled-components/Label'
import { Data } from './styled-components/Data'
import { MatchesLeftDataContainer } from './styled-components/MatchesLeftDataContainer'
import { useMatchesLeft } from '../../lib/customHooks/globalStateHooks'

export default () => {
  const matchesLeft = useMatchesLeft()

  return (
    <MatchesLeftDataContainer>
      <Data>{matchesLeft}</Data>
      <Label>Matches Left</Label>
    </MatchesLeftDataContainer>
  )
}
