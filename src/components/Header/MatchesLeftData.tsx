import styled from 'styled-components'
import React from 'react'
import { Label } from './styled-components/Label'
import { Data } from './styled-components/Data'
import { MatchesLeftDataContainer } from './styled-components/MatchesLeftDataContainer'
export function MatchesLeftData () {
  return (
    <MatchesLeftDataContainer>
      <Data>
        7
      </Data>
      <Label>
        Matches Left
      </Label>
    </MatchesLeftDataContainer>
  )
}

