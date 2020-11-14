import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Container, Col, Image } from 'react-bootstrap';
import '../ComponentsCSS/Projects.css';
import me from '../Resources/me.jpeg';

function About() {
  return (
    <div className="row">
      
      <Image className="photo" src={me} roundedCircle />
      
      <div className="vcontainer">
        <h1>About me</h1>
        <p>I have recieved my degree in Computer Science from West Chester University with a NSA security certificate.</p>
        <p>Right now I am working on learning SwiftUI along with game development using the the Unity and Godot game engines.</p>
        <Button href="/#/projects" variant="outline-dark">Click here to see my projects</Button>
      </div>
      
    </div>
    
  );
}

export default About;