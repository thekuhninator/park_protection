import React, {Component} from 'react';
import logo from './logo.png';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'

function Parks() {
  return (
    <Container>
      <CardDeck>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Park 1</Card.Title>
      <Card.Text>
        Test 1
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Park 2</Card.Title>
      <Card.Text>
        Test 2
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Park </Card.Title>
      <Card.Text>
        Test 3
      </Card.Text>
    </Card.Body>
  </Card>
</CardDeck>
    </Container>
  );
}

export default Parks;