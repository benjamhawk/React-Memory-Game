import React, { useEffect, useState } from 'react'
import Modal from '../../components/Modal'
import SettingsBody from '../../components/SettingsBody'

export default () => {
  const [isShowing, setIsShowing] = useState(false)

  useEffect(() => {
    setIsShowing(true)
  }, [])

  return (
    <Modal
      isShowing={isShowing}
      onHide={() => setIsShowing(false)}
      title={'Match the Cards!'}
      body={<SettingsBody />}
      buttonTxt={'Start Game'}
    />
  )
}
