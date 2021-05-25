import React, {Component} from 'react';
import './App.css';
import Home from './components/Home';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Map from './components/Map';
import Contact from './components/Contact';

class App extends Component{
  render(){
    return (
      <Router>
        <div className="container-fluid p-0 ">
          <video className="w-100 m-0 p-0" autoPlay preload loop muted>
            <source src="videos/moving-bicycle-tire.mp4" type="video/mp4" />
          </video>
          <nav className="navbar navbar-expand-lg navbar-dark w-100 op50 position-absolute top-0 start-0">  
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/map">Mapa</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/contact">Contacto</Link>
              </li>
            </ul>
          </nav>
          <div class="container">
            <span class="txt anim-text-flow">Ésta es una Web de Bicicletas</span>
          </div>
  
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/map" exact component={Map}/>
            <Route path="/contact" exact component={Contact}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;