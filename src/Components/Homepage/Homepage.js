import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import image from '../Resources/me.jpeg';
// import '../ComponentsCSS/Homepage.css';
import './Homepage.css';

function Homepage() {
  return (
    <div className = "hero">
        {/* <img className="img" src={image} alt="An Image of ME"/> */}
        <h1 className = "Homeh1" >Zachery Soles</h1>
        <p className = "Homep" >Aerospace Engineer | Software Engineer</p>
        {/* <Button href = "/#/about" variant = "outline-light" >Click here to see about me</Button> */}
    </div>
  );
}

export default Homepage;