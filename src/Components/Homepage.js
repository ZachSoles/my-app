import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../ComponentsCSS/Homepage.css';

function Homepage() {
  return (
    <div className = "hero">
        <h1 className = "Homeh1" >Zachery Soles</h1>
        <p className = "Homep" >Aerospace Engineer | Software Engineer</p>
        <Button href = "/#/about" variant = "outline-light" >Click here to see about me</Button>
    </div>
  );
}

export default Homepage;