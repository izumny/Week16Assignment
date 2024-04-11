import React from 'react';
import { useState } from "react";


function WishImage() {
    
  const [img, setImg] = useState(null);
  const handleUploadImg = (e) => {
    const files = e.target.files;
    if (files.length>0) {
      const file = files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        setImg(e.target.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImg(null);
    }
  };
    
  return (
    <>
     <div className="img--main">
        <input type="file" accept=".jpeg, .png, .gif" onInput={handleUploadImg} className="inpt--button" />
        <img src={require('./Images/dress1.jpeg')} alt="img" height={200} width={150} />
        <img src={require('./Images/dress2.jpeg')} alt="img" height={200} width={150} />
        <img src={require('./Images/dress3.jpeg')} alt="img" height={200} width={150} />
        <img src={require('./Images/dress4.jpeg')} alt="img" height={200} width={150} />
        <img src={require('./Images/dress5.jpeg')} alt="img" height={200} width={150} />
      </div>
    </>
  );
}

export default WishImage;





/* 
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';


const [fileName, setFileName] = useState('');
    const handleFile = (file) => {
        setFileName(file.name);
    };

    return(
      <Container className="main--wish">
      <Row>
      <input type="file" accept=".jpeg" onInput={handleUploadImg} className="inpt--button" />
      <Col xs={6} md={4}>
          <FileUploader thumbnail />
        </Col>
        <Col xs={6} md={4}>
            <Image src={require('./Images/dress1.jpeg')} height={200} width={150} thumbnail />
        </Col>
        <Col xs={6} md={4}>
          <Image src={require('./Images/dress2.jpeg')} height={200} width={150} thumbnail />
        </Col>
        <Col xs={6} md={4}>
          <Image src={require('./Images/dress3.jpeg')} height={200} width={150} thumbnail />
        </Col>
        <Col xs={6} md={4}>
          <Image src={require('./Images/dress4.jpeg')} height={200} width={150} thumbnail />
        </Col>
        <Col xs={6} md={4}>
          <Image src={require('./Images/dress5.jpeg')} height={200} width={150} thumbnail />
        </Col>
      </Row>
    </Container>
    ) */

