import React from 'react';
import { useState, useEffect } from 'react'  //used state hook and effect hook
import DeleteItemButton from '../Components/DeleteItemButton'
import UpdateItemButton from '../Components/UpdateItemButton'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function YourCloset() {
    const MOCK_API_URL = "https://66038fa12393662c31cf3170.mockapi.io/12345/clothes"
    const [items, setItems] = useState([]);
   
   //PUT
   const [updatedName, setUpdatedName] = useState('');
   const [updatedType, setUpdatedType] = useState('');
   const [updatedColor, setUpdatedColor] = useState('');
   const [updatedSize, setUpdatedSize] = useState('');
   const [updatedBrand, setUpdatedBrand] = useState('');
   const [updatedImage, setUpdatedImage] = useState('');
  
   useEffect(() => {
      getItems();
    }, []);

  // GET 
  function getItems() {
    fetch(MOCK_API_URL)
      .then(data => data.json())
      .then(data => setItems(data))
      
  }


// DELETE
  function deleteItem(id) {
    fetch(`${MOCK_API_URL}/${id}`,{
      method: 'DELETE'
    }).then(() => getItems())
  }

// UPDATE
function updateItem(e, itemObject) {  
    e.preventDefault();

    const updatedItemObject = {
      ...itemObject,
      name: updatedName,
      type: updatedType,
      color: updatedColor,
      size: updatedSize,
      brand: updatedBrand,
      image: updatedImage,
    }
    fetch(`${MOCK_API_URL}/${itemObject.id}`, {
      method: 'PUT',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(updatedItemObject),
    }).then(() => {
      getItems();
      setUpdatedName('');
      setUpdatedType('');
      setUpdatedColor('');
      setUpdatedSize('');
      setUpdatedBrand('');
      setUpdatedImage('');
    });
  }

  return (
    <div>
        {items.map((item, index) => (
        <div className="itemContainer" key={index}>
            <Container>
              <Row>
                <Col>
            <Card className="card-item">
            <h4 className="h4--item">Item details</h4>
              Name: {item.name} <br></br>
              Type: {item.type} <br></br>
              Color: {item.color}<br></br>
              Size: {item.size}<br></br>
              Brand: {item.brand}<br></br>
              Image: {item.image}<br></br>
            
            <button onClick={() => deleteItem(item.id)} className="dlt--btn">
              <DeleteItemButton />
            </button>
            </Card>
            </Col>
            <Col>
              <Card className="card--update">
                <form onSubmit={(e) => updateItem(e, item)}>
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
                  
                  <button type="submit" className="udt--btn">
                    <UpdateItemButton />
                  </button>
                </form>
              </Card>
            </Col>
            </Row>
            </Container>
        </div>
        ))}
    </div>
  );
}

export default YourCloset;