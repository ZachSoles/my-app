import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



function NavBar() {
  return (
    // <Navbar collapseOnSelect expand="lg" bg="light" variant="light" >
    <Navbar expand="md" bg="light" variant="light">
      <Navbar.Brand href="/">
        Home
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
        </Nav>
        <Nav>
          <Nav.Link href="/#/projects">Projects</Nav.Link>
          {/* <Nav.Link href="/#/experience">Experience</Nav.Link> */}
          <Nav.Link href="/#/contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;