import { Container,Navbar,Nav } from 'react-bootstrap'
import React from 'react'
import {NavLink} from 'react-router-dom'

const NavbarComponent = () => {
  return (
    <>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={NavLink} to='/home'>React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to='/home'>Home</Nav.Link>
            <Nav.Link as={NavLink} to='/cart'>cart</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   
    </>
  )
}

export default NavbarComponent