import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import github from './Resources/github.png';
import instagram from './Resources/instagram.png';
import linkedin from './Resources/linkedin.png'
import { Form, Button, Card, Col, Row, Container } from 'react-bootstrap';

function Contact() {
  return (
    <div style={{padding: "5%"}}>
      <Card>
        <Container>
          <Row>
            <Col><h1>Contact me on Social Media</h1></Col>
          </Row>
          <Row><p></p></Row>
          <Row>
            <Col>
              <a href="https://github.com/ZachSoles"  target="_blank">
                <img width = "50" height = "50" alt="github" src={github}/>
              </a>
            </Col>
            <Col>
              <a href="https://www.instagram.com/zach__soles/" target="_blank">
                <img width = "50" height = "50" alt="instagram" src={instagram}/>
              </a>
            </Col>
            <Col>
              <a href="https://www.linkedin.com/in/zachery-soles-9b00a212a/" target="_blank">
                <img width = "50" height = "50" alt="linkedin" src={linkedin}/>
              </a>
            </Col>
          </Row>
          <Row><p></p></Row>
          <Row>
            <Col><h1>Send me an email!</h1></Col>
          </Row>
        </Container>
        <Form action="https://formsubmit.co/1c36645dd0f838e9a4af6c6ac5fc7015" method="POST">
        <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Name
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="name" name="name" placeholder="Name" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Email
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="email" name="email" placeholder="Email" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formHorizontalPassword">
            <Form.Label column sm={2}>
              Message
            </Form.Label>
            <Col sm={10}>
              <Form.Control name="message" as="textarea" rows="3" />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Col>
              <Button type="submit">Send</Button>
            </Col>
          </Form.Group>
        </Form>
      </Card>
    </div>
  );
}

export default Contact;