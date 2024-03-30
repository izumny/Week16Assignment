import React from 'react';

import { useState, useEffect } from 'react'  //used state hook and effect fook
import SubmitItemButton from '../Components/SubmitItemButton'
import Badge from 'react-bootstrap/Badge'
import Card from 'react-bootstrap/Card'

function AddItemForm() {
  const MOCK_API_URL = "https://66038fa12393662c31cf3170.mockapi.io/12345/clothes"
  const [clothes, setClothes] = useState([]);
 //POST
  const [newName, setNewName] = useState('');
  const [newType, setNewType] = useState('');
  const [newColor, setNewColor] = useState('');
  const [newSize, setNewSize] = useState('');
  const [newBrand, setNewBrand] = useState('');
  const [newImage, setNewImage] = useState('');
 
 useEffect(() => {
    getClothes();
  }, []);
  
  function getClothes() {
    fetch(MOCK_API_URL)
    .then(data => data.json())
    .then(data => setClothes(data))
  }


  function postNewCloth(e){
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
    }).then(() => {
      getClothes();
      setNewName('');
      setNewType('');
      setNewSize('');
      setNewColor('');
      setNewBrand('');
      setNewImage('');
    })
  }

  return (
    <div className="AddItemForm">
      <Card className="card--additemform">
        <form onSubmit={(e) => postNewCloth(e)}>  
          <Card.Title><Badge bg="warning">New</Badge> Item Form</Card.Title>
          <label>Cloth Name:</label>
          <input value={newName} onChange={(e) => setNewName(e.target.value)}></input><br></br>

          <label>Cloth Type:</label>
          <input value={newType} onChange={(e) => setNewType(e.target.value)}></input><br></br>

          <label>Cloth Color:</label>
          <input value={newColor} onChange={(e) => setNewColor(e.target.value)}></input><br></br>
          
          <label>Cloth Size:</label>
          <input value={newSize} onChange={(e) => setNewSize(e.target.value)}></input><br></br>
          
          <label>Cloth Brand:</label>
          <input value={newBrand} onChange={(e) => setNewBrand(e.target.value)}></input><br></br>
          
          <label>Cloth Image:</label>
          <input value={newImage} onChange={(e) => setNewImage(e.target.value)}></input><br></br>
          
          <button onClick={(e) => postNewCloth(e)} className="sbm--btn"><SubmitItemButton /></button>
        </form>
      </Card>
    </div>
  );
} 

export default AddItemForm;