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
      this.team = [{
        name: 'Fart Ass',
        commits: 999,
        issues: 999,
        tests: 0
      }];
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



  render() {
      return (
        <Container>
            <CardDeck>
                <Card>
                    <Card.Img variant="top" src={roman} />
                    <Card.Body>
                        <Card.Title> {this.team[0].name} </Card.Title>
                        <Card.Text>
                            Ameya is a super cool and nice guy and he is my friend.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <div text-align="center">
                    <p horizontal-align="middle"> Commits: {this.team[0].commits} | Issues: {this.team[0].issues} | Unit Tests: {this.team[0].tests} </p>
                    </div>
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

export default GitlabTable;
