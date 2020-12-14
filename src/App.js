import './App.css';
import NavBar from './Components/NavBar';
import FrontPage from './Components/Fontpage';
import Contact from './Components/Contact';
import Projects from './Components/Projects/Projects';
import { HashRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <HashRouter basename='/'>
      <div className="App">
        <NavBar/>
        <Switch>
          <Route path="/" exact component={FrontPage}/>
          <Route path="/projects" component={Projects}/>
          <Route path="/contact" component={Contact}/>
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
