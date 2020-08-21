import React from 'react'
import {
  useSetMatchTotal,
  useDetermineWinner,
  useProcessTurn
} from '../../lib/customHooks'
import StartGameModal from './StartGameModal'
import GameOverModal from './GameOverModal'

export default () => {
  useSetMatchTotal()
  useDetermineWinner()
  useProcessTurn()

  return (
    <>
      <StartGameModal />
      <GameOverModal />
    </>
  )
}
