import React from 'react'
import { Container, Nav } from 'react-bootstrap'

const Navbars = () => {
  return (
    <div><Navbars bg="dark" data-bs-theme="dark">
    <Container>
      <Navbars.Brand href="#home">Navbar</Navbars.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
    </Container>
  </Navbars>
 </div>
  )
}

export default Navbars