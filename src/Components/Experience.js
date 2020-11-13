import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import '../ComponentsCSS/About.css';
import {Jumbotron} from 'react-bootstrap';

function Experience() {

  function Temp(props) {
    const string = props.bullet;
    if (string.length > 0) {
      return <li>{string}</li>;
    }
    return null;
  }

  const experience = [
    {
      name:'US Air Force',
      title:'Aerospace Engineer',
      bullet1:'Successfully diagnose and repair jet fighter engines',
      bullet2:'',
      bullet3:''
    },
    {
      name:'Kaliedo Health Solutions',
      title:'Full Stack Software Engineer Intern',
      bullet1:'Successfully engineered front end and backend of applications using React.js, Redux, and Node.js',
      bullet2:'Conserved funding by creating an in-house application using Electron.js, to construct heat maps of user data for use in board room and sales meetings',
      bullet3:'Created detailed documentation and Jest unit tests to assist development and QA',
    },
    {
      name:'West Chester University',
      title:'Research Assistant | Private Tutor | IS&T IT Help Desk Intern',
      bullet1:'Advanced development of an auto-grader script in Python and Haskell using HUnit, to automatically grade a batch of students’ programs',
      bullet2:'Worked one-on-one with students who sought assistance in mastering Haskell and Data Structures achieving 100% pass rate with tutored students',
      bullet3:'Engineered scripts that automate tasks to promote efficiency',
    },
    {
      name:'County of Chester',
      title:'DCIS IT Technician',
      bullet1:'Successfully assist IT department with imaging, configuration, and deployment of computers and systems used by county staff',
      bullet2:'',
      bullet3:''
    },
    {
      name:'Westminster Presbyterian Church',
      title:'Informational Technology Intern',
      bullet1:'Provided unparalleled support for analog and digital systems used for mass every Sunday',
      bullet2:'',
      bullet3:''
    }
  ];
  const exps = experience.map((item) => {
    return (
      <Jumbotron>
          <h1>{item.name}</h1>
          <p>{item.title}</p>
          <ul style={{textAlign : "left"}}>
            <li>{item.bullet1}</li>
            <Temp bullet={item.bullet2}/>
            <Temp bullet={item.bullet3}/>
          </ul>
        </Jumbotron>
    );
  });

  return (
    <div style={{padding: "10%"}}>
        {exps}
    </div>
  );
}

export default Experience;