import React from 'react'
import { TurnsDataContainer } from './styled-components/TurnsDataContainer'
import { Label } from './styled-components/Label'
import { Data } from './styled-components/Data'
import { AppState } from '../../redux'
import { connect } from 'react-redux'

type Props = {
  currentPlayer: number
}

function CurrentPlayer ({ currentPlayer }: Props) {
  return (
    <TurnsDataContainer>
      <Label>
        Current Player:
      </Label>
      <Data>
       Player {currentPlayer}
      </Data>
    </TurnsDataContainer>
  )
}

const mapStateToProps = (state:AppState) => {
  return {
    currentPlayer: state.gameData.currentPlayer
  }
}

export default connect(mapStateToProps)(CurrentPlayer)
