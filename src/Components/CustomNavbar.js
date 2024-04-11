import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom'



function CustomNavbar() {
  return(
    <div>
    
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="nav--main">
            <Container fluid >
                
                <Navbar.Brand href="/" className="nav--app"><img
                                alt=""
                                src="./logo.png"
                                width="30"
                                height="30"
                            />{' '}
                            My Closet App</Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                    <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-${expand}`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                    placement="end"
                    >
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            
                            <Link to="/">Home</Link>
                            
                            <Link to="/AddItem">Add Item</Link>
                            
                            <Link to="/YourCloset">Your Closet</Link>

                            <Link to="/WishList">Wish List</Link>
                            
                            <Link to="/Contact">Contact Us</Link>                         
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
      ))}
    </div>
  );
}

export default CustomNavbar;


/*
                    <Switch>
                        <Route path='/Contact'>
                            <Contact />
                        </Route>
                        <Route path='/AddItem'>
                            <AddItem />
                        </Route>
                        <Route path='/'>
                            <Home />
                        </Route>
                    </Switch>
                    */

/*
                        <NavDropdown
                            title="Your Closet"
                            id={`offcanvasNavbarDropdown-expand-${expand}`}
                        >
                            <NavDropdown.Item as={Link} to="/YourCloset/All">All Items</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/YourCloset/Tops">Tops</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/YourCloset/Bottoms">Bottoms</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/YourCloset/Dress">Dress</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/YourCloset//Shoes">Shoes</NavDropdown.Item>
                        </NavDropdown> */