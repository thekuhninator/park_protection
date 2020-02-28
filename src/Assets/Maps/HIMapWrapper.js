import React, {Component} from 'react';
import { Map, Marker, GoogleApiWrapper, Polygon } from 'google-maps-react';

const containerStyle = {
	position: 'relative',
	width: '100%',
 	height: '400px'
}

const state = [
	{lat:19.5158, lng:-154.6284},
  {lat:19.8894, lng:-154.8235},
  {lat:20.1849, lng:-155.0391},
  {lat:20.3910, lng:-155.5952},
  {lat:20.8614, lng:-155.7930},
  {lat:21.0948, lng:-156.1858},
  {lat:21.3597, lng:-156.6595},
  {lat:21.4748, lng:-157.1182},
  {lat:21.5515, lng:-157.5247},
  {lat:21.8832, lng:-157.8186},
  {lat:22.3386, lng:-159.2180},
  {lat:22.3374, lng:-159.7508},
  {lat:22.1493, lng:-160.1422},
  {lat:21.8857, lng:-160.3922},
  {lat:21.6025, lng:-160.3249},
  {lat:21.7276, lng:-159.9939},
  {lat:21.6932, lng:-159.4295},
  {lat:21.1037, lng:-158.1784},
  {lat:20.8152, lng:-157.4629},
  {lat:20.6803, lng:-157.2171},
  {lat:20.3408, lng:-156.8285},
  {lat:20.2931, lng:-156.5456},
  {lat:20.1643, lng:-156.1418},
  {lat:19.9308, lng:-156.2393},
  {lat:19.2826, lng:-156.1432},
  {lat:18.9881, lng:-156.1212},
  {lat:18.7100, lng:-155.7120},
  {lat:18.8829, lng:-155.3673},
  {lat:19.2048, lng:-154.8839},
  {lat:19.5158, lng:-154.6271}
]

class HIMapWrapper extends Component {
	render() {
		return (
			<div>
				<Map google={this.props.google}
					containerStyle={containerStyle}
					zoom={3}
					initialCenter={{lat: 19.8968, lng: -155.5828}} >
					<Polygon
			          paths={state}
			          strokeColor="#0000FF"
			          strokeOpacity={0.8}
			          strokeWeight={2}
			          fillColor="#0000FF"
			          fillOpacity={0.35} />
							</Map>
			</div>
		);
	}
}

export default GoogleApiWrapper({
	apiKey: ('AIzaSyAKUoq68SyMNAVtaOSLAgQRmPl8OlW54Ig')
})(HIMapWrapper);