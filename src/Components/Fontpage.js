import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './Homepage/Homepage';
import About from './About/About';
import Experience from './Experience/Experience';
import exp from './Experience/Experience.json';
import edu from './Education.json';

function FrontPage() {
  return (
    <div>
        <Homepage/>
        <About/>
        <Experience name={exp.name} Experience={exp.Experience}/>
        <Experience name={edu.name} Experience={edu.education}/>
    </div>
  );
}

export default FrontPage;