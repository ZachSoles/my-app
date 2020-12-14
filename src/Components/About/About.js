import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Shared/Info.css';
import json from './About.json';
import { Media } from 'react-bootstrap';

function About() {
  return (
    <div>
      <Media className="style">
        <Media.Body>
          <h5 className="title" >{json.name}:</h5>
          <p>{json.info}</p>
        </Media.Body>
      </Media>
    </div>

  );
}

export default About;