import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

type Props = {
  isShowing: boolean
  onHide: () => void
  title: string
  body: JSX.Element
  buttonTxt: string
}
export default ({ isShowing, onHide, title, body, buttonTxt }: Props) => {
  return (
    <Modal
      show={isShowing}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{body}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          {buttonTxt}
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
