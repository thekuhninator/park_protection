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

// TODO: CONSTRUCTOR AND STUFF
class PlantInstance extends React.Component {
  constructor(props)
  {
    super(props)
    this.state = {
      plant: {

      }
    }
  }
  componentDidMount()
  {
    // let's do a fetch request for the id
    let plant_id = this.props.match.params.id
    console.log(plant_id)

    fetch(
        'http://127.0.0.1:5000/api/plants/' + plant_id,  {mode: 'cors'})
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
          let plant = data
          this.setState({ plant: plant })
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
