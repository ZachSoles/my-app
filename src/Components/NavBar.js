import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Instagram from './Resources/instagram.png';
import LinkedIn from './Resources/linkedin.png';
import Github from './Resources/github.png';
import 'bootstrap/dist/css/bootstrap.min.css';



function NavBar() {
  return (
    // <Navbar collapseOnSelect expand="lg" bg="light" variant="light" >
    <Navbar expand="md" bg="light" variant="light">
      <Navbar.Brand href="/">ZJS</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          {/* <Nav.Link href="/#/about">About</Nav.Link>
          <Nav.Link href="/#/experience">Experience</Nav.Link>
          // <Nav.Link href="/#/projects">Projects</Nav.Link>
          // <Nav.Link href="/#/contact">Contact</Nav.Link>
          <Nav.Link target="_blank" href={resume}> Resume</Nav.Link> */}
        </Nav>
        <Nav>
          {/* <Nav.Link target="_blank" href="https://www.instagram.com/zach__soles/">
            <img src={Instagram} width = "20" height = "20" alt="Instagram"/>
          </Nav.Link>
          <Nav.Link target="_blank" href="https://github.com/ZachSoles">
            <img src={Github} width = "20" height = "20" alt="Github"/>
          </Nav.Link>
          <Nav.Link target="_blank" href="https://www.linkedin.com/in/zachery-soles-9b00a212a/">
            <img src={LinkedIn} width = "20" height = "20" alt="LinkedIn"/>
          </Nav.Link> */}
          <Nav.Link href="/#/projects">Projects</Nav.Link>
          <Nav.Link href="/#/contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;