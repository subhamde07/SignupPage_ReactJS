import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Home.js"

const Header = () => {
  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Registration</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">Features</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#">Login</Nav.Link>
            <Nav.Link href="Signin.js">Signup</Nav.Link>
          </Nav>
      </Container>
    </Navbar>
    </>
  )
}

export default Header