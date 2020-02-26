import React, {Component} from 'react';
import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';


const AboutBox = styled('div')`
	text-align: left;
	width: 35%;
  margin: auto;
  margin-top: 10%;
  background-color: white;
  border-radius: 0%;
  font-size: 150%;
`;

const MembersBox = styled('div')`
  text-align: left;
  width: 75%;
  margin: auto;
  margin-top: 10%;
  background-color: white;
  border-radius: 0%;
  font-size: 150%;
`;


function About() {
  return (
    <div>
      <AboutBox>
        <h1>About Us</h1>
        <br></br>
        <p> Many species are dying out in recent years, whether
          it be due to global warming or other environmental factors. This website
          helps those who want to witness or take action in preservation efforts
          locate the appropriate help centers. Our websie grabs data on endangered
          animal and plant species and groups them with national park centers based
          on location in hopes to spread awareness of what states may have efforts
          already in place for preservation. </p>
      </AboutBox>
      <MembersBox>
        <div>
          <h1>Members</h1>
        </div>

        <br></br>
        <CardDeck>
          <Card>
            <Card.Body>
              <Card.Title>Member 1</Card.Title>
            </Card.Body>
          </Card>
          <Card>
          </Card>
          <Card>
          </Card>
        </CardDeck>
        <CardDeck>
          <Card>
          </Card>
          <Card>
          </Card>
          <Card>
          </Card>
        </CardDeck>
      </MembersBox>
    </div>

  );
}

export default About;
