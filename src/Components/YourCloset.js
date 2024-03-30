import React from 'react';

import { useState, useEffect } from 'react'  //used state hook and effect fook
import DeleteItemButton from '../Components/DeleteItemButton'
import UpdateItemButton from '../Components/UpdateItemButton'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function YourCloset() {
    const MOCK_API_URL = "https://66038fa12393662c31cf3170.mockapi.io/12345/clothes"
    const [clothes, setClothes] = useState([]);
   
   //PUT
   const [updatedName, setUpdatedName] = useState('');
   const [updatedType, setUpdatedType] = useState('');
   const [updatedColor, setUpdatedColor] = useState('');
   const [updatedSize, setUpdatedSize] = useState('');
   const [updatedBrand, setUpdatedBrand] = useState('');
   const [updatedImage, setUpdatedImage] = useState('');
    
   useEffect(() => {
      getClothes();
    }, []);
    
    function getClothes() {
      fetch(MOCK_API_URL)
      .then(data => data.json())
      .then(data => setClothes(data))
    }
  
    function deleteCloth(id) {
      fetch(`${MOCK_API_URL}/${id}`,{
        method: 'DELETE'
      }).then(() => getClothes())
    }
  
    function updatedCloth(e, clothObject) {
      e.preventDefault();
  
      const updatedClothObject = {
        ...clothObject,
        name: updatedName,
        type: updatedType,
        color: updatedColor,
        size: updatedSize,
        brand: updatedBrand,
        image: updatedImage,
      }
      fetch(`${MOCK_API_URL}/${clothObject.id}`, {
        method: 'PUT',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(updatedClothObject),
      }).then(() => {
        getClothes();
        setUpdatedName('');
        setUpdatedType('');
        setUpdatedColor('');
        setUpdatedSize('');
        setUpdatedBrand('');
        setUpdatedImage('');
      })
    }
  
    return (
      <>
       
            <div>
                {clothes.map((cloth, index) => (
                <div className="clothContainer" key={index}>
                    <Container>
                      <Row>
                        <Col>
                    <Card className="card-item">
                    <h4 className="h4--item">Item details</h4>
                      Name: {cloth.name} <br></br>
                      Type: {cloth.type} <br></br>
                      Color: {cloth.color}<br></br>
                      Size: {cloth.size}<br></br>
                      Brand: {cloth.brand}<br></br>
                      Image: {cloth.image}<br></br>
                    </Card>
                    <button onClick={() => deleteCloth(cloth.id)} className="dlt--btn"><DeleteItemButton /></button>
                    </Col>
                    <Col>
                      <Card className="card--update">
                        <form onSubmit={(e) => updatedCloth(e, cloth)}>
                          <h4 className="h4--update">Update This Item?</h4>
                          <label>Update Name:</label>
                          <input onChange={(e) => setUpdatedName(e.target.value)}></input><br></br>
                          <label>Update Type:</label>
                          <input onChange={(e) => setUpdatedType(e.target.value)}></input><br></br>
              
                          <label>Update Color:</label>
                          <input onChange={(e) => setUpdatedColor(e.target.value)}></input><br></br>
                          
                          <label>Update Size:</label>
                          <input onChange={(e) => setUpdatedSize(e.target.value)}></input><br></br>
                          
                          <label>Update Brand:</label>
                          <input onChange={(e) => setUpdatedBrand(e.target.value)}></input><br></br>
                          
                          <label>Update Image:</label>
                          <input onChange={(e) => setUpdatedImage(e.target.value)}></input><br></br>
                          
                          <button onClick={(e) => updatedCloth(e, cloth)} className="udt--btn"><UpdateItemButton /></button>
                        </form>
                      </Card>
                    </Col>
                    </Row>
                    </Container>
                </div>
                ))}
            </div>
      </>
    );
  }

export default YourCloset;