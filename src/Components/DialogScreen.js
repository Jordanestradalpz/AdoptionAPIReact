
import React from 'react'
import { Modal, Button } from 'react-bootstrap'
 
const DialogScreen = ({ showModal, hideModal, confirmModal, id, message }) => {
    return (
        <Modal show={showModal} onHide={hideModal}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body><div className="alert alert-danger">{message}</div></Modal.Body>
        <Modal.Footer>
          <Button variant="default" onClick={hideModal}>
            No
          </Button>
          <Button variant="danger" onClick={() => confirmModal(id) }>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    )
}
 
export default DialogScreen;