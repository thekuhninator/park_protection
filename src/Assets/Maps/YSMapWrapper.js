import React, {Component} from 'react';
import { Map, Marker, GoogleApiWrapper, Polygon } from 'google-maps-react';

const style = {
	position: 'absolute', left: '15%', right: '15%', bottom: '5%'
}

class YSMapWrapper extends Component {
	render() {
		return (
			<div>
				<Map google={this.props.google}
					style={style}
					zoom={9}
					initialCenter={{lat: 44.59824417, lng: -110.5471695}} >
					<Marker />
				</Map>
			</div>
		);
	}
}

export default GoogleApiWrapper({
	apiKey: ('AIzaSyAKUoq68SyMNAVtaOSLAgQRmPl8OlW54Ig')
})(YSMapWrapper);