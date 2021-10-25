import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Shared/Info.css';
import json from './About.json';
import me from '../Resources/me.jpeg';
import './About.css';
import { Col, Container, Row, Button } from 'react-bootstrap';

function About() {
  return (
    <div className="style">
      <Container>
        <Row>
          <Col>
            <Row>
              <h4 className="title" >{json.name}:</h4>
              <p>{json.info}</p>
              <p>{json.free}</p>
            </Row>
            <Row>
              <Col>
                <p>Languages:</p>
                  <ul>
                    {
                      json.lang.map((l) =>
                        <li>{l}</li>
                      )
                    }
                  </ul>
              </Col>
              <Col>
                <p>Technologies:</p>
                  <ul>
                    {
                      json.tech.map((t) =>
                        <li>{t}</li>
                      )
                    }
                  </ul>
              </Col>
            </Row>
            <Button href="/#/contact/" variant="outline-dark">Contact Me!</Button>
          </Col>
          <Col style={{padding:"5%"}} >
            <img  className='imageStyle' src={me}/>
          </Col>
        </Row>
      </Container>
     </div>
  );
}

export default About;