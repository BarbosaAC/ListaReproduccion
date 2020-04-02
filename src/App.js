import React from 'react';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';
import Canciones from './componets/Cancions'
import Artistas from './componets/Artistas'
import Playlist from './componets/Playlist'
import Home from './componets/Home'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
      <Router>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand>Spotify</Navbar.Brand>
          <Navbar.Toggle arial-controls="basic-Navbar-nav"/>
          <Navbar.Collapse id="basic-Navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link><Link to="/canciones">Canciones</Link></Nav.Link>
              <Nav.Link><Link to="/artistas">Artistas</Link></Nav.Link>
              <Nav.Link><Link to="/playlist">Playlist</Link></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Switch>
          <Route path='/canciones'>
            <Canciones /> 
          </Route>
          <Route path='/artistas'>
            <Artistas /> 
          </Route>
          <Route path='/playlist'>
            <Playlist /> 
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
