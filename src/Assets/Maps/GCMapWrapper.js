import React, {Component} from 'react';
import { Map, Marker, GoogleApiWrapper, Polygon } from 'google-maps-react';

const style = {
	position: 'absolute', left: '15%', right: '15%', bottom: '5%'
}

class GCMapWrapper extends Component {
	render() {
		return (
			<div>
				<Map google={this.props.google}
					style={style}
					zoom={9}
					initialCenter={{lat: 36.17280161, lng: -112.6836024}} >
					<Marker />
				</Map>
			</div>
		);
	}
}

export default GoogleApiWrapper({
	apiKey: ('AIzaSyAKUoq68SyMNAVtaOSLAgQRmPl8OlW54Ig')
})(GCMapWrapper);