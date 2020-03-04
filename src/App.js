import React, {Component} from 'react';
import logo from './logo.png';
import './App.css';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Form, FormControl, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Parks from './Parks';
import Animals from './Animals';
import Plants from './Plants';
import AnimalPage from './AnimalInstancePages/AnimalPage';
import AcklinsGroundIguana from './AnimalInstancePages/AcklinsGroundIguana';
import Akiapolaau from './AnimalInstancePages/Akiapolaau';
import GrandCanyon from './ParkInstancePages/GrandCanyon';
import Yellowstone from './ParkInstancePages/Yellowstone';
import Zion from './ParkInstancePages/Zion';
import AleutianHollyFern from './PlantInstancePages/AleutianHollyFern';
import AmargosaNiterwort from './PlantInstancePages/AmargosaNiterwort';
import PricklyApplecactus from './PlantInstancePages/PricklyApplecactus';
import { Link } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Navbar bg="light" variant="light">
            <Navbar.Brand as={ Link } to="/">Park Protection</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link as={ Link } to="/Parks">Parks</Nav.Link>
              <Nav.Link as={ Link } to="/Plants">Plants</Nav.Link>
              <Nav.Link as={ Link } to="/Animals">Animals</Nav.Link>
              <Nav.Link as={ Link } to="/About">About</Nav.Link>
            </Nav>
          </Navbar>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/AnimalPage" component={AnimalPage} />
            <Route path="/Parks/GrandCanyon" component={GrandCanyon} />
            <Route path="/Parks/Yellowstone" component={Yellowstone} />
            <Route path="/Parks/Zion" component={Zion} />
            <Route path="/Plants/AleutianHollyFern" component={AleutianHollyFern} />
            <Route path="/Plants/AmargosaNiterwort" component={AmargosaNiterwort} />
            <Route path="/Plants/PricklyApplecactus" component={PricklyApplecactus} />
            <Route path="/About" component={About} />
            <Route path="/Parks" component={Parks} />
            <Route path="/Animals" component={Animals} />
            <Route path="/Plants" component={Plants} />
          </Switch>
        </Router>
      </React.Fragment>
      );
  }
}

export default App;
