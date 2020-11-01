import Title from '../../Title/Title';
import styles from './Home.module.scss';
import ISSMap from '../../ISSMap/ISSMap';
import React, { Component } from 'react';
import { GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import CurrentLocation from './Map';

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  };
  

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
    this.props.onLocationSelect(this.state.selectedPlace);
  }
  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    return (
      <>
      <CurrentLocation
        centerAroundCurrentLocation
        google={this.props.google}
      >
        <Marker onClick={this.onMarkerClick} name={'Current Location'} />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </CurrentLocation>
      {/*STUFF TO ADD TO HTML HERE*/}
       <div>Hello world</div>
       <input type = "text" />
      </>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCQ7PRYOQnJPpSRA3_aB_gP_E-0bEoFlE8'
})(MapContainer);

