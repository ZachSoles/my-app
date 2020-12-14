import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './Homepage/Homepage';
import About from './About/About';
import Experience from './Experience/Experience';

function Header(props) {
  return (
    <div>
        <Homepage/>
        <About/>
        <Experience/>
    </div>
  );
}

export default Header;