import React, {Component} from 'react';
import logo from '../logo.png';
import '../App.css';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron'

function AbbottsBooby() {
	return (
		<Jumbotron fluid>
  			<Container>
    			<h1 color="green">Common Name</h1>
    			<h4>Scientific Name</h4>
  			</Container>
		</Jumbotron>
	);
}

export default AbbottsBooby;