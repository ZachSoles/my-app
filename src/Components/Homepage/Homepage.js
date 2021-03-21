import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import github from '../Resources/github.png';
import instagram from '../Resources/instagram.png';
import linkedin from '../Resources/linkedin.png'
// import image from '../Resources/me.jpeg';
// import '../ComponentsCSS/Homepage.css';

import './Homepage.css';

function Homepage() {
  return (
    <div className = "hero">
        {/* <img className="img" src={image} alt="An Image of ME"/> */}
        <h1 className = "Homeh1" >Zachery Soles</h1>
        <p className = "Homep" >Aerospace Engineer | Software Engineer</p>
        {/* <a href="https://github.com/ZachSoles"  target="_blank" rel="noopener noreferrer" style={{padding: "10px"}}>
          <img width = "40" height = "40" alt="github" src={github}/>
        </a>
        <a href="https://www.instagram.com/zach__soles/" target="_blank" rel="noopener noreferrer" style={{padding: "10px"}}>
          <img width = "40" height = "40" alt="instagram" src={instagram}/>
        </a>
        <a href="https://www.linkedin.com/in/zachery-soles-9b00a212a/" target="_blank" rel="noopener noreferrer" style={{padding: "10px"}}>
          <img width = "40" height = "40" alt="linkedin" src={linkedin}/>
        </a> */}
        {/* <Button href = "/#/about" variant = "outline-light" >Click here to see about me</Button> */}
    </div>
  );
}

export default Homepage;