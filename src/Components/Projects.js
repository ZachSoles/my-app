import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, CardColumns, Button, Carousel} from 'react-bootstrap'
import todo1 from '../Resources/todo1.png';
import nyx1 from '../Resources/nyx1.png';
import nyx2 from '../Resources/nyx2.png';
import nyx3 from '../Resources/nyx3.png';
import nyx4 from '../Resources/nyx4.png';

function Projects() {

  const nyxPics = ["nyx1", "nyx2", "nyx3", "nyx4"];
  const nyxSlides = nyxPics.map((item, index) => {
    return (
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require(`../Resources/${item}.png`)}
          alt="App"
        />
      </Carousel.Item>
    );
  });

  // const todoPics = ["todo1", "todo2"];
  // const todoSlides = todoPics.map((item, index) => {
  //   return (
  //     <Carousel.Item>
  //       <img
  //         className="d-block w-100"
  //         src={require(`../Resources/${item}.png`)}
  //         alt=""
  //       />
  //     </Carousel.Item>
  //   );
  // });

  return (
    <div className = "card">
        <CardColumns>
          <Card>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={nyx1}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={nyx2}
                  alt="Second Slide slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={nyx3}
                  alt="Third Slide slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={nyx4}
                  alt="Fourth Slide slide"
                />
              </Carousel.Item>
            </Carousel>
            <Card.Body>
              <Card.Title>Nyx</Card.Title>
              <Card.Text>
                A movie watchlist for iOS developed using SwiftUI to stop fights on what movies my wife and I were going to 
                watch for the night
              </Card.Text>
              <Button target="_blank" href="https://github.com/ZachSoles/Nyx" variant="outline-dark">Source Code</Button>
            </Card.Body>
          </Card>
          <Card className="p-3">
            <blockquote className="blockquote mb-0 card-body">
              <p>
                Script to convert images to excel csv files for binary images using Python and OpenCV
              </p>
            </blockquote>
          </Card>
          <Card >
          <img className="d-block w-100"src={todo1}alt=""/>
            {/* <Carousel>
              {/* {todoSlides} */}
            {/* </Carousel> */}
            <Card.Body>
              <Card.Title>Todo App</Card.Title>
              <Card.Text>
                Simple iOS todo application to learn CoreData and SwiftUI
              </Card.Text>
              <Button target="_blank" href="https://github.com/ZachSoles/Todo-List" variant="outline-dark">Source Code</Button>
            </Card.Body>
          </Card>
          <Card className="text-center p-3">
            <blockquote className="blockquote mb-0 card-body">
              <p>
                Script created to analyze data of callers at WCU IT Help Desk to help management better focus outreach to professors
                and staff on most current problems using Javascript
              </p>
              <Button target="_blank" href="https://github.com/ZachSoles/Tracking-Sheet-AutoMator" variant="outline-dark">Source Code</Button>
            </blockquote>
          </Card>
          <Card className="text-center">
            <Card.Body>
              <Card.Title>RPG Text Based Game</Card.Title>
              <Card.Text>
                A clone of ZORG, a terminal based roleplaying game developed using Java.
              </Card.Text>
              <Button target="_blank" href="https://github.com/ZachSoles/Java-Text-Based-RPG" variant="outline-dark">Source Code</Button>
            </Card.Body>
          </Card>
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