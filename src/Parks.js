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

const designations = [
  { value: 'national park', label: 'National Park' }
]

const Designations = () => (
  <Select options={designations} isMulti className="basic-multi-select" placeholder="Designations" />
)

const states = [
	{ value: 'AZ', label: 'AZ' },
	{ value: 'TX', label: 'TX' }
]

const States = () => (
  <Select options={states} isMulti className="basic-multi-select" placeholder="States" />
)

function Parks() {
	return (
			<Container>
				<br/>
				<Row>
				<Col><h1>Parks</h1><br/></Col>
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
						<DropdownButton variant="light" title="Park Code">
							<Dropdown.Item as="button">Ascending</Dropdown.Item>
							<Dropdown.Item as="button">Descending</Dropdown.Item>
						</DropdownButton>
					</Col>
					<Col>
						<DropdownButton variant="light" title="Name">
							<Dropdown.Item as="button">Ascending</Dropdown.Item>
							<Dropdown.Item as="button">Descending</Dropdown.Item>
						</DropdownButton>
					</Col>
					<Col>
						<DropdownButton variant="light" title="Phone Numbers">
							<Dropdown.Item as="button">Ascending</Dropdown.Item>
							<Dropdown.Item as="button">Descending</Dropdown.Item>
						</DropdownButton>
					</Col>
					<Col>
						<Designations />
					</Col>
					<Col>
						<States />
					</Col>
				</Row>

				<br/><br/>
		    	<CardDeck className="text-center">
					  <Card><Link to="/Parks/GrandCanyon">
					    <Card.Img variant="top" src="https://www.nps.gov/common/uploads/structured_data/3C7B12D1-1DD8-B71B-0BCE0712F9CEA155.jpg" />
					    <Card.Body>
					      <Card.Title>Grand Canyon National Park</Card.Title>
					    </Card.Body>
					</Link></Card>
					<Card><Link to="/Parks/Yellowstone">
			  			<Card.Img variant="top" src="https://www.nps.gov/common/uploads/structured_data/3C7D2FBB-1DD8-B71B-0BED99731011CFCE.jpg"/>
			    		<Card.Body>
			      			<Card.Title>Yellowstone National Park</Card.Title>
			    		</Card.Body>
			  		</Link></Card>
					<Card><Link to="/Parks/Zion">
						<Card.Img variant="top" src="https://www.nps.gov/common/uploads/structured_data/3C7EFF41-1DD8-B71B-0B50E940FE9F2658.jpg" />
					 	<Card.Body>
							<Card.Title>Zion National Park</Card.Title>
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

export default Parks;