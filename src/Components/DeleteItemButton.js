import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function DeleteItemButton() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <div>
        <Button variant="danger" onClick={handleShow}>
          Delete
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Deleted Item</Modal.Title>
          </Modal.Header>
          <Modal.Body>Your item was successfully deleted from Your Closet!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }

  export default DeleteItemButton;