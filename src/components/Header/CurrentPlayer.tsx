import React from 'react'
import { CurrentPlayerStyle } from './styled-components/CurrentPlayerStyle'
import { AppState } from '../../redux'
import { connect } from 'react-redux'

type Props = {
  currentPlayer: number
}

function CurrentPlayer ({ currentPlayer }: Props) {
  return (
    <CurrentPlayerStyle>
      <span className='fullPlayerName'>Player </span>
      <span className='shortPlayerName'>P</span>
      <span className='playerNum'>{currentPlayer}</span>'s Turn
    </CurrentPlayerStyle>
  )
}

const mapStateToProps = (state:AppState) => {
  return {
    currentPlayer: state.gameData.currentPlayer
  }
}

export default connect(mapStateToProps)(CurrentPlayer)
