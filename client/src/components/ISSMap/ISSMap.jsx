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
    borderRadius: "10px",
    boxShadow: "0px 0px 10px rgba(0,0,0,0.1)"
};

const options = {
    styles: MapStyles,
    disableDefaultUI: true,
    zoomControl: true,
}

const ISSMap = ({markers, center, onClick, markerType, allowMarkerMovement}) => {

    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries
    });
    if(loadError) return "Error loading maps";
    if(!isLoaded) return "Loading...";
    return (
        <div className={styles.test}>
            {/* <h1 className={styles.mapTitle}>Select Your Viewing Location</h1> */}
            <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={13}
            center={center ? center : markers[0]}
            options={options}
            onClick={allowMarkerMovement ? onClick : (event) => {}}
            >
                {markers.map((location, key) => {
                    return (<Marker 
                    key={key}
                    position={location}
                    icon={markerType ? process.env.PUBLIC_URL + `/${markerType}` : ""}
                    />);
                }
                )}

            </GoogleMap>

        </div>
    )
}

export default ISSMap;