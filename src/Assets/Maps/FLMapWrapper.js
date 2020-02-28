import React, {Component} from 'react';
import { Map, Marker, GoogleApiWrapper, Polygon } from 'google-maps-react';

const containerStyle = {
	position: 'relative',
	width: '100%',
 	height: '400px'
}

const state = [
	{lat:30.9988, lng:-87.6050},
  {lat:30.9964, lng:-86.5613},
  {lat:31.0035, lng:-85.5313},
  {lat:31.0012, lng:-85.1193},
  {lat:31.0023, lng:-85.0012},
  {lat:30.9364, lng:-84.9847},
  {lat:30.8845, lng:-84.9367},
  {lat:30.8409, lng:-84.9271},
  {lat:30.7902, lng:-84.9257},
  {lat:30.7489, lng:-84.9147},
  {lat:30.6993, lng:-84.8611},
  {lat:30.6911, lng:-84.4272},
  {lat:30.6509, lng:-83.5991},
  {lat:30.5895, lng:-82.5595},
  {lat:30.5682, lng:-82.2134},
  {lat:30.5315, lng:-82.2134},
  {lat:30.3883, lng:-82.1997},
  {lat:30.3598, lng:-82.1544},
  {lat:30.3598, lng:-82.0638},
  {lat:30.4877, lng:-82.0226},
  {lat:30.6308, lng:-82.0473},
  {lat:30.6757, lng:-82.0514},
  {lat:30.7111, lng:-82.0377},
  {lat:30.7371, lng:-82.0514},
  {lat:30.7678, lng:-82.0102},
  {lat:30.7914, lng:-82.0322},
  {lat:30.7997, lng:-81.9717},
  {lat:30.8244, lng:-81.9608},
  {lat:30.8056, lng:-81.8893},
  {lat:30.7914, lng:-81.8372},
  {lat:30.7796, lng:-81.7960},
  {lat:30.7536, lng:-81.6696},
  {lat:30.7289, lng:-81.6051},
  {lat:30.7324, lng:-81.5666},
  {lat:30.7229, lng:-81.5295},
  {lat:30.7253, lng:-81.4856},
  {lat:30.7111, lng:-81.4609},
  {lat:30.7088, lng:-81.4169},
  {lat:30.7064, lng:-81.2274},
  {lat:30.4345, lng:-81.2357},
  {lat:30.3160, lng:-81.1725},
  {lat:29.7763, lng:-81.0379},
  {lat:28.8603, lng:-80.5861},
  {lat:28.4771, lng:-80.3650},
  {lat:28.1882, lng:-80.3815},
  {lat:27.1789, lng:-79.9255},
  {lat:26.8425, lng:-79.8198},
  {lat:26.1394, lng:-79.9118},
  {lat:25.5115, lng:-79.9997},
  {lat:24.8802, lng:-80.3815},
  {lat:24.5384, lng:-80.8704},
  {lat:24.3959, lng:-81.9250},
  {lat:24.4496, lng:-82.2066},
  {lat:24.5484, lng:-82.3137},
  {lat:24.6982, lng:-82.1997},
  {lat:25.2112, lng:-81.3977},
  {lat:25.6019, lng:-81.4622},
  {lat:25.9235, lng:-81.9456},
  {lat:26.3439, lng:-82.2876},
  {lat:26.9098, lng:-82.5307},
  {lat:27.3315, lng:-82.8342},
  {lat:27.7565, lng:-83.0182},
  {lat:28.0574, lng:-83.0017},
  {lat:28.6098, lng:-82.8548},
  {lat:28.9697, lng:-83.0264},
  {lat:29.0478, lng:-83.2050},
  {lat:29.4157, lng:-83.5318},
  {lat:29.9133, lng:-83.9767},
  {lat:29.8930, lng:-84.1072},
  {lat:29.6940, lng:-84.4409},
  {lat:29.4551, lng:-85.0465},
  {lat:29.4946, lng:-85.3610},
  {lat:29.7262, lng:-85.5807},
  {lat:30.1594, lng:-86.1946},
  {lat:30.2175, lng:-86.8510},
  {lat:30.1499, lng:-87.5171},
  {lat:30.3006, lng:-87.4429},
  {lat:30.4256, lng:-87.3750},
  {lat:30.4830, lng:-87.3743},
  {lat:30.5658, lng:-87.3907},
  {lat:30.6344, lng:-87.4004},
  {lat:30.6763, lng:-87.4141},
  {lat:30.7702, lng:-87.5253},
  {lat:30.8527, lng:-87.6256},
  {lat:30.9470, lng:-87.5912},
  {lat:30.9682, lng:-87.5912},
  {lat:30.9964, lng:-87.6050}
]

class FLMapWrapper extends Component {
	render() {
		return (
			<div>
				<Map google={this.props.google}
					containerStyle={containerStyle}
					zoom={3.5}
					initialCenter={{lat: 39.8283, lng: -98.5795}} >
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
})(FLMapWrapper);