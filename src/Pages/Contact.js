import React from 'react'
import Form from 'react-bootstrap/Form';
import SubmitContactButton from '../Components/SubmitContactButton';



function Contact() {
    return (
        <>
            <div className="form--main">
                <h3 className="h3--contact">Contact Us</h3>
                <Form >
                    <Form.Group controlId="exampleForm.ControlInput1">
                    
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" className="email"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Please write your message here." className="inquiry"/>
                    </Form.Group>
                </Form>
                <SubmitContactButton />
            </div>
        </>
    );
  }

  export default Contact;


  
  
      