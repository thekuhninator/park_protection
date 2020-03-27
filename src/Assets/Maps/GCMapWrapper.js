import React, {Component} from 'react';
import { Map, Marker, GoogleApiWrapper, Polygon } from 'google-maps-react';

const containerStyle = {
	position: 'relative',
	width: '100%',
 	height: '400px'
}

class GCMapWrapper extends Component {
	render() {
		return (
			<div>
				<Map google={this.props.google}
					containerStyle={containerStyle}
					zoom={9}
					initialCenter={{lat: 36.17280161, lng: -112.6836024}} >
					<Marker />
				</Map>
			</div>
		);
	}
}

// we need to put in the api key from the .env file

const API_key = () => process.env.API_URL
// MAPS_KEY=AIzaSyDicRKKkdQyyc9MfBnUasDWtPm9J5BGmJ0

export default GoogleApiWrapper({

	apiKey: (process.env.REACT_APP_MAPS_KEY)
})(GCMapWrapper);
