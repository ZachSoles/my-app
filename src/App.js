import logo from './logo.svg';
import './App.css';
import Homepage from './Components/Homepage';
import NavBar from './Components/NavBar';
import Experience from './Components/Experience';
import Contact from './Components/Contact';
import Projects from './Components/Projects';
import About from './Components/About';
import { HashRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <HashRouter basename='/'>
      <div className="App">
        <NavBar/>
        <Switch>
          <Route path="/" exact component={Homepage}/>
          <Route path="/about" component={About}/>
          <Route path="/experience" component={Experience}/>
          <Route path="/projects" component={Projects}/>
          <Route path="/contact" component={Contact}/>
        </Switch>
      </div>
    </HashRouter> 
  );
}

export default App;
