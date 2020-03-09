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
        lastPageNum: 20//,
        //api: ""
	};

	makeCardDeck(){

		let parkDeck = [];
		var deckSize = this.state.parkList.length;
		var i = 0;
		var j = 0;

		for(; i < 3; ++i) {
			let parkInstances = [];
			for(j = 0; (j < 3); ++j) {
                // if((i * 3 + j) < deckSize)
                    // break;
				var index = i * 3 + j;
                var source = this.state.parkList[index];
				parkInstances.push (
					<Card>
						<Nav.Link as={ Link } to={"/Parks/GrandCanyon"+index}>
						    <div>
							    <Card.Img variant="top" src={source.parkImage}/>
							    <Card.Body>
							    	<Card.Title>{source.parkName}</Card.Title>
							    	<Card.Text>{source.parkDesignation}</Card.Text>
							    	<Card.Text>{(this.state.page)*9-8+j+i*3}</Card.Text>
							    	<Card.Text>{source.parkPhoneNumber}</Card.Text>
							    	<Card.Text>{source.parkStates}</Card.Text>
							    </Card.Body>
							</div>
				    	</Nav.Link>
				    </Card>
				)
			}
            parkDeck.push(<br></br>)
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
		var startNum = (pageNum - 1)* 9;
		var endNum = startNum + 9;
		let parksList = [];

		// for(; startNum < endNum; ++startNum) {
			let park0 = { 
				parkLink : "/Parks/GrandCanyon",
				parkImage : "https://www.nps.gov/common/uploads/structured_data/3C7B12D1-1DD8-B71B-0BCE0712F9CEA155.jpg",
				parkName : startNum,
				parkDesignation : startNum,
				parkWebsite : startNum,
				parkPhoneNumber : startNum,
				parkStates : startNum
			}
			parksList.push(park0)
            startNum++;
            
            let park1 = { 
				parkLink : "/Parks/GrandCanyon",
				parkImage : "https://www.nps.gov/common/uploads/structured_data/3C7B12D1-1DD8-B71B-0BCE0712F9CEA155.jpg",
				parkName : startNum,
				parkDesignation : startNum,
				parkWebsite : startNum,
				parkPhoneNumber : startNum,
				parkStates : startNum
			}
			parksList.push(park1)
            startNum++;
            
            let park2 = { 
				parkLink : "/Parks/GrandCanyon",
				parkImage : "https://www.nps.gov/common/uploads/structured_data/3C7B12D1-1DD8-B71B-0BCE0712F9CEA155.jpg",
				parkName : startNum,
				parkDesignation : startNum,
				parkWebsite : startNum,
				parkPhoneNumber : startNum,
				parkStates : startNum
			}
			parksList.push(park2)
            startNum++;
            
            let park3 = { 
				parkLink : "/Parks/GrandCanyon",
				parkImage : "https://www.nps.gov/common/uploads/structured_data/3C7B12D1-1DD8-B71B-0BCE0712F9CEA155.jpg",
				parkName : startNum,
				parkDesignation : startNum,
				parkWebsite : startNum,
				parkPhoneNumber : startNum,
				parkStates : startNum
			}
			parksList.push(park3)
            startNum++;
            
            let park4 = { 
				parkLink : "/Parks/GrandCanyon",
				parkImage : "https://www.nps.gov/common/uploads/structured_data/3C7B12D1-1DD8-B71B-0BCE0712F9CEA155.jpg",
				parkName : startNum,
				parkDesignation : startNum,
				parkWebsite : startNum,
				parkPhoneNumber : startNum,
				parkStates : startNum
			}
			parksList.push(park4)
            startNum++;
            
            let park5 = { 
				parkLink : "/Parks/GrandCanyon",
				parkImage : "https://www.nps.gov/common/uploads/structured_data/3C7B12D1-1DD8-B71B-0BCE0712F9CEA155.jpg",
				parkName : startNum,
				parkDesignation : startNum,
				parkWebsite : startNum,
				parkPhoneNumber : startNum,
				parkStates : startNum
			}
			parksList.push(park5)
            startNum++;

            let park6 = { 
				parkLink : "/Parks/GrandCanyon",
				parkImage : "https://www.nps.gov/common/uploads/structured_data/3C7B12D1-1DD8-B71B-0BCE0712F9CEA155.jpg",
				parkName : startNum,
				parkDesignation : startNum,
				parkWebsite : startNum,
				parkPhoneNumber : startNum,
				parkStates : startNum
			}
			parksList.push(park6)
            startNum++;
            
            let park7 = { 
				parkLink : "/Parks/GrandCanyon",
				parkImage : "https://www.nps.gov/common/uploads/structured_data/3C7B12D1-1DD8-B71B-0BCE0712F9CEA155.jpg",
				parkName : startNum,
				parkDesignation : startNum,
				parkWebsite : startNum,
				parkPhoneNumber : startNum,
				parkStates : startNum
			}
			parksList.push(park7)
            startNum++;
            
            let park8 = { 
				parkLink : "/Parks/GrandCanyon",
				parkImage : "https://www.nps.gov/common/uploads/structured_data/3C7B12D1-1DD8-B71B-0BCE0712F9CEA155.jpg",
				parkName : startNum,
				parkDesignation : startNum,
				parkWebsite : startNum,
				parkPhoneNumber : startNum,
				parkStates : startNum
			}
			parksList.push(park8)
            startNum++;
		// }
		this.state.parkList = parksList;
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
				<Container className = 'd-flex justify-content-center'>
					{this.createPaginationBar()}
				</Container>
			</Container>
		);
	}
}

export default Parks;
