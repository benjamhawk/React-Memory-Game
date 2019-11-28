import React from 'react'
import { TurnsDataContainer } from './styled-components/TurnsDataContainer'
import { Label } from './styled-components/Label'
import { Data } from './styled-components/Data'

export function TurnsData () {
  return (
    <TurnsDataContainer>
      <Label>
        Total Turns:
    </Label>
      <Data>
        4
    </Data>
    </TurnsDataContainer>
  )
}
