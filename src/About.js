import React, {Component} from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import roman from './Assets/img/headshots/roman.jpeg'
import dylan from './Assets/img/headshots/dylan.jpg'
import ameya from './Assets/img/headshots/ameya.jpeg'
import skylore from './Assets/img/headshots/skylore.jpeg'
import jordan from './Assets/img/headshots/jordan.jpg'
import pedro from './Assets/img/headshots/pedro.jpeg'

const AboutTitle = styled('h1')`
color: black; font-family: 'Raleway',sans-serif; font-size: 62px; font-weight: 800; line-height: 72px; margin: 0 0 24px; text-align: center; text-transform: uppercase;
`

const Paragraph = styled('p')`
	color: black; font-family: 'Raleway',sans-serif; font-size: 18px; font-weight: 500; line-height: 32px; margin: 0 0 24px;
`

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

class About extends React.Component{
  render() {
      return (
        <Container>
            <Container>
            <br></br>

            <AboutTitle> About Us</AboutTitle>
            <br></br>
            <Paragraph > Many species are dying out in recent years, whether
            it be due to global warming or other environmental factors. This website
            helps those who want to witness or take action in preservation efforts
            locate the appropriate help centers. Our websie grabs data on endangered
            animal and plant species and groups them with national park centers based
            on location in hopes to spread awareness of what states may have efforts
            already in place for preservation. </ Paragraph>
            </Container>
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

            <Container>
            <h1> Repository Stats </h1>

            <div id="stuff"></div>

                <Row>
                    <Col> <h2> XXX Commits </h2> </Col>
                    <Col> <h2> XXX Issues </h2> </Col>
                    <Col> <h2> XXX Unit Tests </h2> </Col>
                </Row>
            </Container>

            <Container>
                <h1> Data Sources </h1>
                <p> Data sources were collected from _____. </p>
            </Container>

            <Container>
                <h1> Tools </h1>
                <CardDeck>
                    <Card>
                        <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/AWS_Simple_Icons_AWS_Cloud.svg/1280px-AWS_Simple_Icons_AWS_Cloud.svg.png" />
                        <Card.Body>
                            <Card.Title> AWS </Card.Title>
                            <Card.Text>
                                Amazon Web Services (AWS) is a platform that allows us to host our website.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" />
                        <Card.Body>
                            <Card.Title> React Bootstrap</Card.Title>
                            <Card.Text>
                                React Bootstrap is a front-end tool that allows us to create nice web pages.
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Img variant="top" src="https://img.stackshare.io/service/1336/xWMRvm_5_400x400.png" />
                        <Card.Body>
                            <Card.Title> Postman </Card.Title>
                            <Card.Text>
                                Postman is a tool that generates useful API for our functions.
                            </Card.Text>
                        </Card.Body>
                    </Card>
            </CardDeck>
            </Container>

            <br />

            <h2><a href="https://gitlab.com/thekuhninator/parks_protection"> Gitlab Repository </a></h2>
            <h2> Postman Api </h2>

        </Container>

        );
    }

    componentDidMount() {
        let commitMap = new Map([["Dylan Kan", 0],
            ["Roman Kuhn", 0],
            ["bogaards.jordan", 0],
            ["Pedro_Silva0111", 0],
            ["Ameya Joshi", 0],
            ["Poisonthorns", 0]])
        let names = ["Dylan Kan", "Roman Kuhn", "Jordan Bogaards", "Pedro Silva", "Ameya Joshi", "Skylore Evans"];
        fetch(
            'https://gitlab.com/api/v4/projects/16967791/repository/commits?per_page=10000'
        )
            .then((response) => response.json())
            .then((data) => {
                for (const i in data) {
                    const commit_data = data[i];
                    var curr = commitMap.get(commit_data.author_name) + 1;
                    commitMap.set(commit_data.author_name, curr);
                    console.log(commit_data.author_name + " " + commitMap.get(commit_data.author_name));
                }
                let i = 0;
                for (let [k, v] of commitMap) {
                    var curr = names[i] + ": " + v + " commits <br/>";
                    document.getElementById('stuff').innerHTML += curr;
                    i++;
                }
            })  
            .catch((e) => {
                console.log('Error');
                console.log(e);
            });
    }
}

export default About;
