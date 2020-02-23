import React, {Component} from 'react';
import logo from './logo.png';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'

function Home() {
  return (
    <Container>
    <Row>
      <Col><h1>Preserving Nature Through Education</h1><br/><h3>Learn more about
        endangered species and the national parks protecting them</h3></Col>
      <Col md={{span: 4, offset: 2}}><Image src={ logo } fluid /></Col>
    </Row>
    </Container>
  );
}

export default Home;