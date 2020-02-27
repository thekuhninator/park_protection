import React, {Component} from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import GitlabTable from './GitlabTable.js'

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
						<GitlabTable />
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
