import React, {useState} from 'react';
import styles from './ISSMap.module.scss';

import {
    GoogleMap,
    useLoadScript,
    Marker,
    InfoWindow
} from '@react-google-maps/api';

import MapStyles from './MapStyles';

const libraries = ["places"];

const mapContainerStyle = {
    width: '80%',
    height: '700px',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
};

const locations = [{lat: 30.618525, lng: -96.336520}, {lat: 30.284878, lng: -97.734073}];
const center = {lat: 30.284878, lng: -97.734073};

const options = {
    styles: MapStyles,
    disableDefaultUI: true,
    zoomControl: true,
}

const ISSMap = (props) => {
    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries
    });
    const [marker, setMarker] = useState({
        lat: 31.433250,
        lng: -100.474640
    });

    if(loadError) return "Error loading maps";
    if(!isLoaded) return "Loading...";
    return (
        <div className={styles.test}>
            {/* <h1 className={styles.mapTitle}>Select Your Viewing Location</h1> */}
            <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={13}
            center={props.center ? props.center : props.markers[0]}
            options={options}
            onClick={(event) => {
                setMarker({
                    lat: event.latLng.lat(),
                    lng: event.latLng.lng()
                });
            }}
            >
                {props.markers.map((location) => {
                    return (<Marker 
                    position={location}
                    icon={process.env.PUBLIC_URL + "/satellite.svg"}
                    />);
                }
                )}

            </GoogleMap>

        </div>
    )
}

export default ISSMap;