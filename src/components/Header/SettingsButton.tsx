import React, { useState } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog } from '@fortawesome/free-solid-svg-icons'
import Modal from '../Modal'
import SettingsBody from '../SettingsBody'

const Btn = styled.button`
  position: absolute;
  top: 5px;
  right: 20px;
  background: transparent;
  border: none;
  padding: 0;
  /* font-size: 1rem; */

  svg {
    height: 25px;
    width: 25px;
  }
`
export default () => {
  const [isModalShowing, setIsModalShowing] = useState(false)

  return (
    <>
      <Modal
        isShowing={isModalShowing}
        onHide={() => setIsModalShowing(false)}
        title="Settings"
        buttonTxt="Save"
        body={<SettingsBody />}
      />
      <Btn onClick={() => setIsModalShowing(true)}>
        <FontAwesomeIcon size="lg" color="white" icon={faCog} />
      </Btn>
    </>
  )
}
