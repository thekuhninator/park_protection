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



class GitlabTable extends React.Component{

  constructor(props) {
      super(props);
      this.testVarible= "this is a test";
      this.total_commits = 0;
      this.total_issues = 0;
      this.total_tests = 0;
      this.team_dict = {
        "Roman Kuhn": 0,
        "Ameya Joshi": 1,
        "Dylan Kan": 2,
        "Skylore Evans": 3,
        "Jordan Bogaards": 4,
        "Pedro Silva": 5
      }
      this.team = [{
        name: 'Roman Kuhn',
        commits: 0,
        issues: 0,
        tests: 0,
        desc: 'Rumored to have never lost a match in Super Smash Brothers Melee.'
        },
        {
          name: 'Ameya Joshi',
          commits: 0,
          issues: 0,
          tests: 0,
          desc: 'A hardcore FPS and Minecraft G A M E R who came to UT to be a game dev, realized how bad the hours were, and is apparently doing web dev.'
        },
        {
          name: 'Dylan Kan',
          commits: 0,
          issues: 0,
          tests: 0,
          desc: 'Nerd #3'
        },
        {
          name: 'Skylore Evans',
          commits: 0,
          issues: 0,
          tests: 0,
          desc: 'Nerd #4'
        },
        {
          name: 'Jordan Bogaards',
          commits: 0,
          issues: 0,
          tests: 0,
          desc: 'Junior in the CS major and just on the edge of being a competitive smash player. Incineroar and Cloud main, unfortunately. Wanted to be a wrestling Heel.'
        },
        {
          name: 'Pedro Silva',
          commits: 0,
          issues: 0,
          tests: 0,
          desc: 'Nerd #6'
          },
      ];
  }


  componentDidMount() {
      let commitMap = new Map([["Dylan Kan", 0],
          ["Roman Kuhn", 0],
          ["bogaards.jordan", 0],
          ["Pedro_Silva0111", 0],
          ["Ameya Joshi", 0],
          ["Poisonthorns", 0]])

      let nameDict = {
        'Roman Kuhn': 0,
        'Ameya Joshi': 1,
        'Dylan Kan': 2,
        'Poisonthorns': 3,
        'bogaards.jordan': 4,
        'Pedro_Silva0111': 5
      }

      let names = ["Dylan Kan", "Roman Kuhn", "Jordan Bogaards", "Pedro Silva", "Ameya Joshi", "Skylore Evans"];

      fetch(
          'https://gitlab.com/api/v4/projects/16967791/repository/commits?per_page=10000'
      )
          .then((response) => response.json())
          .then((data) => {
              console.log('TOTAL COMMITS')
              console.log(data.length)
              this.total_commits = data.length
              for (const i in data) {

                  const commit_data = data[i];
                  var curr = commitMap.get(commit_data.author_name) + 1;
                  commitMap.set(commit_data.author_name, curr);
                  console.log(commit_data)
                  console.log(commit_data.author_name)
                  this.team[nameDict[commit_data.author_name]].commits = curr
                  this.setState({ testVariable : 'changed'})
              }
          })
          .catch((e) => {
              console.log('Error');
              console.log(e);
          });

      fetch(
        'https://gitlab.com/api/v4/projects/16967791/issues?per_page=10000'
      )   .then((response) => response.json())
          .then((data) => {
            this.total_issues = data.length
            for (const i in data) {
              const issue_data = data[i]
              console.log(issue_data.author.name)
              console.log(issue_data.author.name.length)
              console.log('about to try')
              if(issue_data.author.name in this.team_dict)
              {
                  this.team[this.team_dict[issue_data.author.name]].issues = issue_data.author.name.length
                  console.log('after doing the thing')
                  console.log(this.team[this.team_dict[issue_data.author.name]].issues)
              }
            }
            this.setState({ testVariable : 'changed'})

          })
            .catch((e) => {
                console.log('Error');
                console.log(e);
            });


  }



  render() {
      return (
        <Container>
            <CardDeck>
                <Card>
                    <Card.Img variant="top" src={roman} />
                    <Card.Body>
                        <Card.Title> {this.team[0].name} </Card.Title>
                        <Card.Text>Frontend Developer</Card.Text>
                        <Card.Text>
                            {this.team[0].desc}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <div text-align="center">
                    <p horizontal-align="middle"> Commits: {this.team[0].commits} | Issues: {this.team[0].issues} | Unit Tests: {this.team[0].tests} </p>
                    </div>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={ameya} />
                    <Card.Body>
                        <Card.Title> {this.team[1].name} </Card.Title>
                        <Card.Text>Fullstack Developer</Card.Text>
                        <Card.Text>
                            {this.team[1].desc}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <p horizontal-align="middle"> Commits: {this.team[1].commits} | Issues: {this.team[1].issues} | Unit Tests: {this.team[1].tests} </p>
                    </Card.Footer>
                </Card>
                <Card>
                  <Card.Img variant="top" src={dylan} />
                  <Card.Body>
                    <Card.Title> {this.team[2].name} </Card.Title>
                    <Card.Text>Frontend Developer</Card.Text>
                    <Card.Text>
                      {this.team[2].desc}
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                  <p horizontal-align="middle"> Commits: {this.team[2].commits} | Issues: {this.team[2].issues} | Unit Tests: {this.team[2].tests} </p>
                  </Card.Footer>
                </Card>
                </CardDeck>
                <br />

                <CardDeck>
                    <Card>
                        <Card.Img variant="top" src={skylore} />
                        <Card.Body>
                            <Card.Title> {this.team[3].name} </Card.Title>
                            <Card.Text>Frontend Developer</Card.Text>
                            <Card.Text>
                                {this.team[3].desc}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <p horizontal-align="middle"> Commits: {this.team[3].commits} | Issues: {this.team[3].issues} | Unit Tests: {this.team[3].tests} </p>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={jordan} />
                        <Card.Body>
                            <Card.Title> {this.team[4].name} </Card.Title>
                            <Card.Text>Frontend Developer</Card.Text>
                            <Card.Text>
                                {this.team[4].desc}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <p horizontal-align="middle"> Commits: {this.team[4].commits} | Issues: {this.team[4].issues} | Unit Tests: {this.team[4].tests} </p>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={pedro} />
                        <Card.Body>
                            <Card.Title> {this.team[5].name} </Card.Title>
                            <Card.Text>Frontend Developer</Card.Text>
                            <Card.Text>
                                {this.team[5].desc}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <p horizontal-align="middle"> Commits: {this.team[5].commits} | Issues: {this.team[5].issues} | Unit Tests: {this.team[5].tests} </p>
                        </Card.Footer>
                    </Card>
            </CardDeck>

            <br/><br/>
            <h1>Repository Stats</h1>
                <Row>
                    <Col> <h2> {this.total_commits} Commits </h2> </Col>
                    <Col> <h2> {this.total_issues} Issues </h2> </Col>
                    <Col> <h2> 0 Unit Tests </h2> </Col>
                </Row>
        </Container>

        );
    }


}

export default GitlabTable;
