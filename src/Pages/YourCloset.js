import React from 'react';
import { useState, useEffect } from 'react'  //used state hook and effect hook
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
    }).then(() => {
      alert('Item was successflly deleted!')
      getItems();
    })
    .catch((error) => {
      console.error('Error:', error);
    });
    // .then(() => getItems())
  }

// UPDATE
function updateItem(e, itemObject) {
  console.log("Updating the item...", itemObject);  
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
    }).then((data) => {
      //console.log("updateItem data:", data);
      return data.json()
    })
    .then(() => {
      //console.log("Item was successfully updated!");
      alert('Item was successflly updated!')
      getItems();
      setUpdatedName('');
      setUpdatedType('');
      setUpdatedSize('');
      setUpdatedColor('');
      setUpdatedBrand('');
      setUpdatedImage('');
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }

  return (
    <div>
      <h3 className="h3--yourcloset">Your Closet Room</h3>
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
            
            <button onClick={() => deleteItem(item.id)} className="dlt--btn">Delete</button>
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
                  
                  <button type="submit" className="udt--btn">Update</button>
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



/* other way to empty the input form of update
.then(() => {
  //console.log("Item was successfully updated!");
  alert('Item was successflly updated!')
  getItems();

  //let typeInput = document.getElementById(`type-input-${itemObject.id}`)
  //console.log("Input element:",typeInput);
  //typeInput.value = ""

  //console.log("updated name:", updatedName);
  setUpdatedName('');
  setUpdatedType('');
  setUpdatedSize('');
  setUpdatedColor('');
  setUpdatedBrand('');
  setUpdatedImage('');
})
 after <input this for each. 
//id={`name-input-${item.id}`}
//id={`type-input-${item.id}`} 
//id={`color-input-${item.id}`} 
//id={`size-input-${item.id}`} 
//id={`brand-input-${item.id}`} 
//id={`image-input-${item.id}`} */
