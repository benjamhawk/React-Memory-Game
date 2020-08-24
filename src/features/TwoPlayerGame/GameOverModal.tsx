import React, { useEffect, useState } from 'react'
import Modal from '../../components/Modal'
import {
  useMatchesLeft,
  useMessage,
  useTheme
} from '../../lib/customHooks/globalStateHooks'
import { useDispatch } from 'react-redux'
import { resetGame } from './twoPlayerGameSlice'

export default () => {
  const [isShowing, setIsShowing] = useState(false)
  const matchesLeft = useMatchesLeft()
  const gameMsg = useMessage()
  const theme = useTheme()
  const dispatch = useDispatch()

  useEffect(() => {
    if (matchesLeft === 0) {
      setIsShowing(true)
    }
  }, [matchesLeft])

  const body = (
    <div>
      <p>
        {gameMsg.msg}
        <span> 🏆🏆🏆🏆</span>
      </p>
    </div>
  )

  const onReset = () => {
    setIsShowing(false)
    dispatch(resetGame(theme))
  }

  return (
    <Modal
      isShowing={isShowing}
      onHide={onReset}
      title={'All Matches Found!'}
      body={body}
      buttonTxt={'Play Again!'}
    />
  )
}
