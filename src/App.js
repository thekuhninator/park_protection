import React, {Component} from 'react';
import logo from './logo.png';
import './App.css';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Form, FormControl, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Parks from './Parks';
import Animals from './Animals';
import Plants from './Plants';
import AbbottsBooby from './AnimalInstancePages/AbbottsBooby';
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
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand><Link to="/">Park Protection</Link></Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link><Link to="/Parks">Parks</Link></Nav.Link>
              <Nav.Link><Link to="/Plants">Plants</Link></Nav.Link>
              <Nav.Link><Link to="/Animals">Animals</Link></Nav.Link>
              <Nav.Link><Link to="/About">About</Link></Nav.Link>
            </Nav>
          </Navbar>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Parks" component={Parks} />
            <Route path="/Animals" component={Animals} />
            <Route path="/Plants" component={Plants} />
            <Route path="/AnimalInstancePages/AbbottsBooby" component={AbbottsBooby} />
            <Route path="/AnimalInstancePages/AcklinsGroundIguana" component={AcklinsGroundIguana} />
            <Route path="/AnimalInstancePages/Akiapolaau" component={Akiapolaau} />
            <Route path="/ParkInstancePages/GrandCanyon" component={GrandCanyon} />
            <Route path="/ParkInstancePages/Yellowstone" component={Yellowstone} />
            <Route path="/ParkInstancePages/Zion" component={Zion} />
            <Route path="/PlantsInstancePages/AleutianHollyFern" component={AleutianHollyFern} />
            <Route path="/PlantsInstancePages/AmargosaNiterwort" component={AmargosaNiterwort} />
            <Route path="/PlantsInstancePages/PricklyApplecactus" component={PricklyApplecactus} />
          </Switch>
        </Router>
      </React.Fragment>
      );
  }
}

export default App;
