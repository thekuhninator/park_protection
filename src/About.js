import React, {Component} from 'react';
import styled from 'styled-components';


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

function About() {
  return (
    <AboutBox>
      <h1 align="center">About Us</h1>
      <br></br>
      <h5 align="center">Project Goal:</h5>
      <p align="center"> Many species are dying out in recent years, whether
        it be due to global warming or other environmental factors. This website
        helps those who want to witness or take action in preservation efforts
        locate the appropriate help centers. Our websie grabs data on endangered
        animal and plant species and groups them with national park centers based
        on location in hopes to spread awareness of what states may have efforts
        already in place for preservation. </p>
    </AboutBox>

  );
}

export default About;
