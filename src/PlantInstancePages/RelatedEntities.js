import React, {Component} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import {TableBox, Text} from './Constants.js'
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';

function RelatedEntities(props) {
  return (
    <Row>
      <Col className="text-center">
        <h4>Related Parks</h4>

        <br/>
        <CardDeck className="text-center">
          <Card><Nav.Link as={ Link } to="/Parks/GrandCanyon"><Text>
              <Card.Img variant="top" src="https://www.nps.gov/common/uploads/structured_data/3C7B12D1-1DD8-B71B-0BCE0712F9CEA155.jpg" />
              <Card.Body>
                <Card.Title>Grand Canyon National Park</Card.Title>
              </Card.Body>
            </Text></Nav.Link></Card>
          <Card><Nav.Link as={ Link } to="/Parks/Yellowstone"><Text>
              <Card.Img variant="top" src="https://www.nps.gov/common/uploads/structured_data/3C7D2FBB-1DD8-B71B-0BED99731011CFCE.jpg"/>
              <Card.Body>
                  <Card.Title>Yellowstone National Park</Card.Title>
              </Card.Body>
            </Text></Nav.Link></Card>
          </CardDeck>
      </Col>
      <Col className="text-center">
        <h4>Related Animals</h4>

        <br/>
        <CardDeck className="text-center">
          <Card><Nav.Link as={ Link } to="/Animals/AbbottsBooby"><Text>
              <Card.Img variant="top" src="https://www.edgeofexistence.org/wp-content/uploads/2017/06/Papasula_abbotti_xlarge3.jpg"/>
              <Card.Body>
                  <Card.Title>Abbott's Booby</Card.Title>
              </Card.Body>
            </Text></Nav.Link></Card>
            <Card><Nav.Link as={ Link } to="/Animals/AcklinsGroundIguana"><Text>
            <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Cyclura_rileyi_nuchalis_Exumas_1997_c_W_K_Hayes.jpg" />
            <Card.Body>
              <Card.Title>Acklins Ground Iguana</Card.Title>
            </Card.Body>
          </Text></Nav.Link></Card>
          </CardDeck>
      </Col>
    </Row>
  );
}

export default RelatedEntities;
