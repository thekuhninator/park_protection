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
						<DropdownButton variant="light" title="Common Name">
							<Dropdown.Item as="button">Ascending</Dropdown.Item>
							<Dropdown.Item as="button">Descending</Dropdown.Item>
						</DropdownButton>
					</Col>
					<Col>
						<DropdownButton variant="light" title="Scientific Name">
							<Dropdown.Item as="button">Ascending</Dropdown.Item>
							<Dropdown.Item as="button">Descending</Dropdown.Item>
						</DropdownButton>
					</Col>
					<Col>
						<DropdownButton variant="light" title="Group">
							<Dropdown.Item as="button">Birds</Dropdown.Item>
							<Dropdown.Item as="button">Reptiles</Dropdown.Item>
						</DropdownButton>
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
			  		<Card><Link to="/Animals/AbbottsBooby">
			  			<Card.Img variant="top" src="https://ecos.fws.gov/docs/species_images/doc1650-250px-thumbnail.jpg"/>
			    		<Card.Body>
			      			<Card.Title>Abbott's Booby</Card.Title>
			    		</Card.Body>
		    		</Link></Card>
					<Card><Link to="/Animals/AcklinsGroundIguana">
						<Card.Img variant="top" src="https://ecos.fws.gov/docs/species_images/doc1803-250px-thumbnail.jpg" />
						<Card.Body>
							<Card.Title>Acklins Ground Iguana</Card.Title>
						</Card.Body>
					</Link></Card>
					<Card><Link to="/Animals/Akiapolaau">
						<Card.Img variant="top" src="https://download.ams.birds.cornell.edu/api/v1/asset/96716321/1800" />
					 	<Card.Body>
							<Card.Title>Akiapolaau</Card.Title>
					 	</Card.Body>
					</Link></Card>
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