import React, {Component} from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Image from 'react-bootstrap/Image'

import roman from './Assets/img/headshots/roman.jpeg'
import dylan from './Assets/img/headshots/dylan.jpg'
import ameya from './Assets/img/headshots/ameya.jpeg'
import skylore from './Assets/img/headshots/skylore.jpeg'
import jordan from './Assets/img/headshots/jordan.jpg'
import pedro from './Assets/img/headshots/pedro.jpeg'


const AboutBox = styled('div')`
	text-align: center;
	height: 20%;
	width: 50%;
  padding-top: 20%;
  margin: auto;
  margin-top: 20%;
  background-color: red;
  border-radius: 40px 20px;
`;

const ImageBoxLong = styled('img')`
	width: 500px;
	height: 500px;
`;


function About() {
  return (
		<Container>
      <h1 align="center">About Us</h1>
      <br></br>
      <h4 align="center">Project Goal:</h4>
      <p align="center"> Many species are dying out in recent years, whether
        it be due to global warming or other environmental factors. This website
        helps those who want to witness4 or take action in preservation efforts
        locate the appropriate help centers. Our websie grabs data on endangered
        animal and plant species and groups them with national park centers based
        on location in hopes to spread awareness of what states may have efforts
        already in place for preservation. </p>

			<div>
			<CardDeck>
				<Card>
					<Card.Img variant="top" src={roman} />
					<Card.Body>
						<Card.Title> Roman Kuhn </Card.Title>
						<Card.Text>
							Ameya is a super cool and nice guy and he is my friend.
						</Card.Text>
					</Card.Body>
					<Card.Footer>
						commits and whatnot
					</Card.Footer>
				</Card>
				<Card>
					<Card.Img variant="top" src={dylan} />
					<Card.Body>
						<Card.Title> Dylan Kan </Card.Title>
						<Card.Text>
							Ameya is a super cool and nice guy and he is my friend.
						</Card.Text>
					</Card.Body>
					<Card.Footer>
						commits and whatnot
					</Card.Footer>
				</Card>
				<Card>
					<Card.Img variant="top" src={ameya} />
					<Card.Body>
						<Card.Title> Ameya Joshi </Card.Title>
						<Card.Text>
							Ameya is a super cool and nice guy and he is my friend.
						</Card.Text>
					</Card.Body>
					<Card.Footer>
						commits and whatnot
					</Card.Footer>
				</Card>
				</CardDeck>
				</div>
				<br />

				<CardDeck>
					<Card>
						<Card.Img variant="top" src={skylore} />
						<Card.Body>
							<Card.Title> Skylore Evans </Card.Title>
							<Card.Text>
								Ameya is a super cool and nice guy and he is my friend.
							</Card.Text>
						</Card.Body>
						<Card.Footer>
							commits and whatnot
						</Card.Footer>
					</Card>
					<Card>
						<Card.Img variant="top" src={jordan} />
						<Card.Body>
							<Card.Title> Jordan Bogaards </Card.Title>
							<Card.Text>
								Ameya is a super cool and nice guy and he is my friend.
							</Card.Text>
						</Card.Body>
						<Card.Footer>
							commits and whatnot
						</Card.Footer>



					</Card>
					<Card>
						<Card.Img variant="top" src={pedro} />
						<Card.Body>
							<Card.Title> Pedro Silva </Card.Title>
							<Card.Text>
								Ameya is a super cool and nice guy and he is my friend.
							</Card.Text>
						</Card.Body>
						<Card.Footer>
							Commits:
							Total Commits:
						</Card.Footer>
					</Card>
			</CardDeck>
			<h1> Repository Stats </h1>
			36 commits 1000 issues 9999 unit tests
			<h1> Data Sources </h1>
			Data was collected from my ass.
			<h1> Tools </h1>
			Tools used for scraping stuff included...
			Gitlab Repository
			Postman Api

		</Container>
  );
}

export default About;
