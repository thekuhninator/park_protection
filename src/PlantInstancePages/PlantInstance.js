import React from 'react';
import PropTypes from 'prop-types';
import map from '../Assets/Maps/CaliforniaNevada.png';
import '../App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import * as Constants from './Constants.js';
import InstanceHeader from './InstanceHeader.js'
import InformationTable from './InformationTable.js'
import RelatedEntities from './RelatedEntities.js'
import MapWrapper from '../Assets/Maps/MapWrapper';

// TODO: CONSTRUCTOR AND STUFF
class PlantInstance extends React.Component {
  constructor(props)
  {
    super(props)
    this.state = {
      plant: {},
      states: []
    }
  }
  componentDidMount()
  {

    // let's do a fetch request for the id
    let plant_id = this.props.match.params.id
    console.log(plant_id)

    fetch(
        'https://api.parkprotection.me/api/plants/' + plant_id,  {mode: 'cors'})
        .then((response) => response.json())
        .then((data) => {
          console.log('component MOUNTED HERE IS THE DATA')
          console.log(data)
          console.log(data.states)
          let state_list = data.states.map(function(e) {
            return e.name
          })
          console.log('mapped states')
          console.log(state_list)
          let plant = data
          this.setState({ plant: plant, states: state_list })
          console.log('this is the state')
          console.log(this.state)
        })
        .catch((e) => {
            console.log('Error');
            console.log(e);
        });

  }

  render() {
    return (
  		<div>
        <InstanceHeader common_name={this.state.plant.com_name} scientific_name={this.state.plant.sci_name}/>

  			<br/><br/>
  			<Container>
  				<Row>
  					<Col>
  						<Constants.ImageBox className="float-right" src="https://images-na.ssl-images-amazon.com/images/I/51vxwr8lUxL._AC_SX450_.jpg"/>
  					</Col>

  				</Row>

  				<br/><br/>
  				<Constants.EndangeredBox>
  					<Constants.Text>Endangered</Constants.Text>
  				</Constants.EndangeredBox>

  				<br/><br/>
  				<InformationTable />

					<br/><br/>
					<RelatedEntities />

  				<br/>
          <MapWrapper key={1} states={this.state.states} />

  				&nbsp;
  			</Container>

  		</div>
  	);
  }
}

PlantInstance.propTypes = {
  family: PropTypes.string,
  family_common_name: PropTypes.string,
  category: PropTypes.string,
  duration: PropTypes.string,
  growth_habit: PropTypes.string,
  toxicity: PropTypes.string
};

export default PlantInstance;
