import React, {Component} from 'react';
import logo from './logo.png';
import './App.css';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Pagination from 'react-bootstrap/Pagination';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Select from 'react-select';
import { Nav } from 'react-bootstrap';

const state = {
    cname : "Abbot'sby",
    sname : "Papasula abbotti",
    image : "https://www.edgeofexistence.org/wp-content/uploads/2017/06/Papasula_abbotti_xlarge3.jpg",
    endangeredText : true ? "Endangered" : "threatened",
    group : 'Birds',
    foreign : 'Foreign',
    dps : 'No',
    aquatic : 'No',
    bcc : 'No',
    cpt : 'None',
    park1 : "Grand Canyon National Park",
    park1img: "https://www.nps.gov/common/uploads/structured_data/3C7B12D1-1DD8-B71B-0BCE0712F9CEA155.jpg"};

const state2 = {
    cname : "Abbot's by",
    sname : "Papasula abbotti",
    image : "https://www.edgeofexistence.org/wp-content/uploads/2017/06/Papasula_abbotti_xlarge3.jpg",
    endangeredText : true ? "Endangered" : "threatened",
    group : 'Birds',
    foreign : 'Foreign',
    dps : 'No',
    aquatic : 'No',
    bcc : 'No',
    cpt : 'None'};

const state3 = {
    cname : "Abbot's Booby",
    sname : "Papasula abbotti",
    image : "https://www.edgeofexistence.org/wp-content/uploads/2017/06/Papasula_abbotti_xlarge3.jpg",
    endangeredText : true ? "Endangered" : "threatened",
    group : 'Birds',
    foreign : 'Foreign',
    dps : 'No',
    aquatic : 'No',
    bcc : 'No',
    cpt : 'None'};


const common = [
  { value: 'asc', label: 'Ascending' },
  { value: 'des', label: 'Descending' }
]

const Common = () => (
  <Select options={common} placeholder="Common Names" />
)

const scientific = [
  { value: 'asc', label: 'Ascending' },
  { value: 'des', label: 'Descending' }
]

const Scientific = () => (
  <Select options={scientific} placeholder="Scientific Names" />
)

const groups = [
  { value: 'birds', label: 'Birds' },
  { value: 'reptiles', label: 'Reptiles' }
]

const Groups = () => (
  <Select options={groups} isMulti className="basic-multi-select" placeholder="Groups" />
)

const statuses = [
  { value: 'threatened', label: 'Threatened' },
  { value: 'endangered', label: 'Endangered' }
]

const Statuses = () => (
  <Select options={statuses} isMulti className="basic-multi-select" placeholder="Listing Statuses" />
)

const states = [
	{ value: 'AZ', label: 'AZ' },
	{ value: 'TX', label: 'TX' }
]

const States = () => (
  <Select options={states} isMulti className="basic-multi-select" placeholder="States" />
)

const ItalicText = styled('div')`
	font-style: italic;
`

const Text = styled('div')`
	color: black;
`

function Animals() {
	return (
			<Container>
				<br/>
				<Row>
				<Col><h1>Animals</h1><br/></Col>
				<Col xs={{span: 3}}>
					<Form inline>
						<Form.Group as={Row}>
					    	<Form.Control type="text" placeholder="Search" className="mr-sm-2" /><Button>Search</Button>
						</Form.Group>
					</Form>
				</Col>
				</Row>

				<Row>
					<Col>
						<Common />
					</Col>
					<Col>
						<Scientific />
					</Col>
					<Col>
						<Groups />
					</Col>
					<Col>
						<Statuses />
					</Col>
					<Col>
						<States />
					</Col>
				</Row>
				<br/><br/>
		    	<CardDeck className="text-center">
			  	<Card>
              <Link to = {{
  			  								pathname : "/AnimalPage/AbbotsBooby",
  			  								state : state}}>
                <Text>
    			  			<Card.Img variant="top" src="https://www.edgeofexistence.org/wp-content/uploads/2017/06/Papasula_abbotti_xlarge3.jpg"/>
    			    		<Card.Body>
    			      			<Card.Title>Abbott's Booby</Card.Title>
    			      			<Card.Text><ItalicText>Papasula abbotti</ItalicText></Card.Text>
    			      			<Card.Text>Endangered</Card.Text>
    			      			<Card.Text>Birds</Card.Text>
    			      			<Card.Text>Not found in the US</Card.Text>
    			    		</Card.Body>
  		    		  </Text>
              </Link>
          </Card>
					<Card>
            <Link to = {{
                      pathname : "/AnimalPage",
                      state : state2}}>
              <Text>
    						<Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Cyclura_rileyi_nuchalis_Exumas_1997_c_W_K_Hayes.jpg" />
    						<Card.Body>
    							<Card.Title>Acklins Ground Iguana</Card.Title>
    							<Card.Text><ItalicText>Cyclura rileyi nuchalis</ItalicText></Card.Text>
    			      			<Card.Text>Threatened</Card.Text>
    			      			<Card.Text>Reptiles</Card.Text>
    			      			<Card.Text>Not found in the US</Card.Text>
    						</Card.Body>
  					  </Text>
            </Link>
          </Card>
					<Card>
            <Link to = {{
                        pathname : "/AnimalPage",
                        state : state3}}>
              <Text>
    						<Card.Img variant="top" src="https://download.ams.birds.cornell.edu/api/v1/asset/96716321/1800" />
    					 	<Card.Body>
    							<Card.Title>Akiapolaau</Card.Title>
    							<Card.Text><ItalicText>Hemignathus wilsoni</ItalicText></Card.Text>
    			      			<Card.Text>Threatened</Card.Text>
    			      			<Card.Text>Birds</Card.Text>
    			      			<Card.Text>HI</Card.Text>
    					 	</Card.Body>
  					  </Text>
            </Link>
          </Card>
				</CardDeck>

				<br/>
				<Pagination
					style={{ justifyContent: 'center' }}>
					<Pagination.First />
					<Pagination.Prev />
					<Pagination.Item active>{1}</Pagination.Item>
					<Pagination.Next />
					<Pagination.Last />
				</Pagination>

		    </Container>
  	);
}

export default Animals;
