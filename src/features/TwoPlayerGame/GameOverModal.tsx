import React, { useEffect, useState } from 'react'
import Modal from '../../components/Modal'
import {
  useMatchesLeft,
  useMessage
} from '../../lib/customHooks/globalStateHooks'

export default () => {
  const [isShowing, setIsShowing] = useState(false)
  const matchesLeft = useMatchesLeft()
  const gameMsg = useMessage()

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

  return (
    <Modal
      isShowing={isShowing}
      onHide={() => setIsShowing(false)}
      title={'All Matches Found!'}
      body={body}
      buttonTxt={'Play Again!'}
    />
  )
}
