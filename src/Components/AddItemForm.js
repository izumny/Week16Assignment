import React from 'react';
import { useState, useEffect } from 'react'  //used state hook and effect fook
import Badge from 'react-bootstrap/Badge'
import Card from 'react-bootstrap/Card'

function AddItemForm() {
  const MOCK_API_URL = "https://66038fa12393662c31cf3170.mockapi.io/12345/clothes"
  const [items, setItems] = useState([]);
 //POST
  const [newName, setNewName] = useState('');
  const [newType, setNewType] = useState('');
  const [newColor, setNewColor] = useState('');
  const [newSize, setNewSize] = useState('');
  const [newBrand, setNewBrand] = useState('');
  const [newImage, setNewImage] = useState('');
 
 useEffect(() => {
    getItems();
  }, []);
  
  function getItems() {
    fetch(MOCK_API_URL)
    .then(data => data.json())
    .then(data => setItems(data))
  }

  function postNewItem(e){
    e.preventDefault();

    fetch(MOCK_API_URL, {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        name: newName,
        type: newType,
        color: newColor,
        size: newSize,
        brand: newBrand,
        image: newImage
      })
    }).then(data => data.json())
    .then(data => {
        setItems(data);
        alert('Item was successflly added!')
    }).then(() => {
      getItems();
      setNewName('');
      setNewType('');
      setNewSize('');
      setNewColor('');
      setNewBrand('');
      setNewImage('');
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }

  return (
    <div className="AddItemForm">
      <Card className="card--additemform">
        <form onSubmit={(e) => postNewItem(e)}>  
          <Card.Title><Badge bg="warning">New</Badge> Item Form</Card.Title>
          <label>Item Name:</label>
          <input value={newName} onChange={(e) => setNewName(e.target.value)} placeholder='Name' /><br></br>

          <label>Item Type:</label>
          <input value={newType} onChange={(e) => setNewType(e.target.value)} placeholder='Type' /><br></br>

          <label>Item Color:</label>
          <input value={newColor} onChange={(e) => setNewColor(e.target.value)} placeholder='Color' /><br></br>
          
          <label>Item Size:</label>
          <input value={newSize} onChange={(e) => setNewSize(e.target.value)} placeholder='Size' /><br></br>
          
          <label>Brand name:</label>
          <input value={newBrand} onChange={(e) => setNewBrand(e.target.value)} placeholder='Brand name' /><br></br>
          
          <label>Item Image:</label>
          <input value={newImage} onChange={(e) => setNewImage(e.target.value)} placeholder='Image file name' /><br></br>
          
          <button onClick={(e) => postNewItem(e)} className="sbm--btn">Submit</button>
        </form>
      </Card>
    </div>
  );
} 

export default AddItemForm;