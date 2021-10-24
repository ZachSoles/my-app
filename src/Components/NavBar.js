import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import github from './Resources/github.png'
import instagram from './Resources/instagram.png';
import linkedin from './Resources/linkedin.png'



function NavBar() {
  var str = "</Home>"
  return (
    <Navbar expand="md" bg="light" variant="light">
      <Navbar.Brand href="/">
        {str}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
        </Nav>
        <Nav>
          <Nav.Link href="https://github.com/ZachSoles" target="_blank">
            <img width = "30" height = "30" alt="github" src={github}/>
          </Nav.Link>
          <Nav.Link href="https://www.instagram.com/zach__soles/" target="_blank">
            <img width = "30" height = "30" alt="github" src={instagram}/>
          </Nav.Link>
          <Nav.Link href="https://www.linkedin.com/in/zachery-soles-9b00a212a/" target="_blank">
            <img width = "30" height = "30" alt="github" src={linkedin}/>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;