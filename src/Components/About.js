import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Jumbotron, Container, Card } from 'react-bootstrap';
import '../ComponentsCSS/Projects.css';
import me from '../Resources/me.jpeg';

function About() {
  return (
    <div>
      <Card className="fuck">
        <Card.Header>About Me</Card.Header>
        <Card.Img variant="top" src={me}  />
        <Card.Body>
          <Card.Title>Currently I am active duty in the US Air Force as an Aerospace Propolsion Technician</Card.Title>
          <Card.Text>
            I have recieved my degree in Computer Science from West Chester University with a NSA security certificate.
            Right now I am working on learning SwiftUI along with game development using the the Unity and Godot game engines.
          </Card.Text>
          <Button href="/#/projects" variant="outline-dark">Click here to see my projects</Button>
        </Card.Body>
      </Card>
        {/* <h1>About Page</h1> */}
      {/* <section className="style">
      
        <h1>About me</h1>
        <p>Currently I am active duty in the US Air Force as an Aerospace Propolsion Technician</p>
        <p>I have recieved my degree in Computer Science from West Chester University
            <br/>with a NSA security certificate.</p>
        <p>Right now I am working on learning SwiftUI along with game development 
          <br/>using the the Unity and Godot game engines.</p>
        <Button href="/#/projects" variant="outline-dark">Click here to see my projects</Button>
      </section>
      <img src={me} className ="me" alt="me"/> */}
        {/* <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
    </div>
    
  );
}

export default About;