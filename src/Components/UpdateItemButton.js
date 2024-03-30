import React from 'react';

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function UpdateItemButton() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="warning" onClick={handleShow}>
          Update
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Updated Item</Modal.Title>
          </Modal.Header>
          <Modal.Body>Your item was successfully updated!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                OK
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
 
  export default UpdateItemButton;