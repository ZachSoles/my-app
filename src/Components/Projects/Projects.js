import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import json from './Projects.json';
import './Projects.css';
import {Card, CardColumns, Button, Carousel} from 'react-bootstrap';
// import todo1 from '../Resources/todo1.png';
// import nyx1 from '../Resources/nyx1.png';
// import nyx2 from '../Resources/nyx2.png';
// import nyx3 from '../Resources/nyx3.png';
// import nyx4 from '../Resources/nyx4.png';

function Projects() {
  return (
    <div className = "card">
        <CardColumns>
          {
            json.map((project) => (
              <Card>
                <Card.Body>
                  {
                    project.image.length !== 0 ?
                    (<img className="d-block w-100" src={project.image} alt="App Image"/>) :
                    (<p></p>)
                  }
                  <Card.Title>
                    {project.title}
                  </Card.Title>
                  <Card.Text>
                    {project.text}
                  </Card.Text>
                </Card.Body>
                {
                    project.github.length !== 0 ? 
                      (<Button target="_blank" href={project.github} variant="outline-dark">Source Code</Button>) : 
                      (<p></p>)
                }
                
              </Card>
            ))
          }
          <Card className="text-center">
            <Button target="_blank" href="https://github.com/ZachSoles?tab=repositories" variant="outline-dark">
              <blockquote className="blockquote mb-0 card-body">
                <p>
                  See more projects and source code at my Github!
                </p>
              </blockquote>
            </Button>
          </Card>
        </CardColumns>
    </div>
  );
}

export default Projects;