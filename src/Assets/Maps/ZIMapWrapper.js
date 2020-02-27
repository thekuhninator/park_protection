import React, {Component} from 'react';
import { Map, Marker, GoogleApiWrapper, Polygon } from 'google-maps-react';

const containerStyle = {
	position: 'relative',
	width: '100%',
 	height: '400px'
}

class ZIMapWrapper extends Component {
	render() {
		return (
			<div>
				<Map google={this.props.google}
					containerStyle={containerStyle}
					zoom={9}
					initialCenter={{lat: 37.29839254, lng: -113.0265138}} >
					<Marker />
				</Map>
			</div>
		);
	}
}

export default GoogleApiWrapper({
	apiKey: ('AIzaSyAKUoq68SyMNAVtaOSLAgQRmPl8OlW54Ig')
})(ZIMapWrapper);