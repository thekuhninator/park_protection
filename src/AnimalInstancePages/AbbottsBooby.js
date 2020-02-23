import React, {Component} from 'react';
import logo from '../logo.png';
import '../App.css';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron'
import styled from 'styled-components';
const CommonName = styled('h1')`
  color: #2a4d14;
  text-align: center;
`
const ScientificName = styled('h4')`
  color: #e75a7c;
  text-align: center;
`;
const BGcolor = styled('div')`
  color: #bbc7a4;
`

function AbbottsBooby() {
	return (
			<Jumbotron fluid>
	  			<Container>
	    			<CommonName>Common Name</CommonName>
	    			<ScientificName>Scientific Name</ScientificName>
	  			</Container>
			</Jumbotron>
	);
}

export default AbbottsBooby;