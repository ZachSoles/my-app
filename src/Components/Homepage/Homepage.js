import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap'

// import image from '../Resources/me.jpeg';
// import '../ComponentsCSS/Homepage.css';

import './Homepage.css';

function Homepage() {
  return (
    <div className="hero">
      <Container style={{paddingTop:'1%'}}>
        <h1 className = "Homeh1" >Zachery Soles</h1>
        <p className = "Homep" >Aerospace Propulsion Technician | Software Engineer</p>
        </Container>
    </div>
  );
}

export default Homepage;