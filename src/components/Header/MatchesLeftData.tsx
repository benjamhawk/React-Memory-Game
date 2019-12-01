import React from 'react'
import { Label } from './styled-components/Label'
import { Data } from './styled-components/Data'
import { MatchesLeftDataContainer } from './styled-components/MatchesLeftDataContainer'
import { AppState } from '../../redux'
import { connect } from 'react-redux'

type Props = {
  matchesLeft: number
}

function MatchesLeftData ({ matchesLeft }: Props) {
  return (
    <MatchesLeftDataContainer>
      <Data>
        {matchesLeft}
      </Data>
      <Label>
        Matches Left
      </Label>
    </MatchesLeftDataContainer>
  )
}

const mapStateToProps = (state: AppState) => {
  return {
    matchesLeft: state.gameData.matchesLeft
  }
}

export default connect(mapStateToProps)(MatchesLeftData)