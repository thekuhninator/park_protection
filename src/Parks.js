import React, {Component} from 'react';
import './App.css';
import Pagination from 'react-bootstrap/Pagination';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';

const tempPark = { 
				parkLink : "/Parks/GrandCanyon",
				parkImage : "https://www.nps.gov/common/uploads/structured_data/3C7B12D1-1DD8-B71B-0BCE0712F9CEA155.jpg",
				parkName : 1,
				parkDesignation : 1,
				parkWebsite : 1,
				parkPhoneNumber : 1,
				parkStates : 1
			};
class Parks extends Component {
	state = {
		parkList: [tempPark, tempPark, tempPark, tempPark, tempPark, tempPark, tempPark, tempPark, tempPark],
        page: 1,
        lastPageNum: 3//,
        //api: ""
	};

	makeCardDeck(){

		let parkDeck = [];
		var deckSize = this.state.parkList.length;
		var i = 0;
		var j = 0;

		for(; i < 3; ++i) {
			let parkInstances = [];
			for(j = 0; (j < 3) && ((i * 3 + j) < deckSize); ++j) {
				var index = i * 3 + j;
				parkInstances.push (
					<Card>
						<Nav.Link as={ Link } to={this.state.parkList[index].parkLink}>
						    <div>
							    <Card.Img variant="top" src={this.state.parkList[index].parkImage}/>
							    <Card.Body>
							    	<Card.Title>{this.state.parkList[index].parkName}</Card.Title>
							    	<Card.Text>{this.state.parkList[index].parkDesignation}</Card.Text>
							    	<Card.Text>{this.state.parkList[index].parkWebsite}</Card.Text>
							    	<Card.Text>{this.state.parkList[index].parkPhoneNumber}</Card.Text>
							    	<Card.Text>{this.state.parkList[index].parkStates}</Card.Text>
							    </Card.Body>
							</div>
				    	</Nav.Link>
				    </Card>
				)
			}
			parkDeck.push(<Row>{parkInstances}</Row>)
		}
		//var assert = require('assert');
		//assert(deckSize == 9);
		return parkDeck;
	}

	generateNewPage(event, pageNum) {
		this.fillParkList(pageNum);
		this.state.page = pageNum;
		this.setState(this.state);
		window.scrollTo(0, 0);
	}

	createPaginationBar = () => {
		let paginationBar = [];
		var pageNum = this.state.page;
		if(pageNum != 1) {
			paginationBar.push(
				<Pagination.First onClick={(e) => {this.generateNewPage(e, 1)}}/>
			)
			paginationBar.push(
				<Pagination.Prev onClick={(e) => {this.generateNewPage(e, pageNum - 1)}}/>
			)
		}
		paginationBar.push(
			<Pagination.Item onClick={(e) => {this.generateNewPage(e, pageNum)}}>{pageNum}</Pagination.Item>
		)
		if(pageNum != this.state.lastPage) {
			paginationBar.push(
				<Pagination.Next onClick={(e) => {this.generateNewPage(e, pageNum + 1)}}/>
			)
			paginationBar.push(
				<Pagination.Last onClick={(e) => {this.generateNewPage(e, this.state.lastPageNum)}}/>
			)
		}
		return paginationBar;
	}

	fillParkList(pageNum) {
		var startNum = pageNum * 9;
		var endNum = startNum + 9;
		let parks = [];

		for(; startNum < endNum; ++startNum) {
			let park = { 
				parkLink : "/Parks/GrandCanyon",
				parkImage : "https://www.nps.gov/common/uploads/structured_data/3C7B12D1-1DD8-B71B-0BCE0712F9CEA155.jpg",
				parkName : startNum,
				parkDesignation : startNum,
				parkWebsite : startNum,
				parkPhoneNumber : startNum,
				parkStates : startNum
			}
			parks.push({park})
		}
		this.state.parkList = parks;
		//var assert = require('assert');
		//assert(parks.length == 0);
	}

	render() {
		return (
			<Container>
				{this.fillParkList(this.state.page)}
				<CardDeck>
					{this.makeCardDeck()}
				</CardDeck>
				<div className = 'row d-flex justify-content-center'>
					{this.createPaginationBar()}
				</div>
			</Container>
		);
	}
}

export default Parks;
