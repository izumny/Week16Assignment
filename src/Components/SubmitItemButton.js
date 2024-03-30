import React from 'react';

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function SubmitItemButton() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="pink" onClick={handleShow}>
        Submit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>Your new item was successfully added into Your Closet!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
              OK
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SubmitItemButton;