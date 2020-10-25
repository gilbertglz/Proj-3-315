import React, { useEffect, useState } from 'react';
import LatLng from './LatLng';
import withLatLngLoading from './WithLatLngLoading';
const Geocoding = () => {

    const LatLngLoading = withLatLngLoading(LatLng);

    const [appState, setAppState] = useState({
    loading: false,
    coords: null,
    });

    const geocodingURL = `https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyCHznLLf7X4xWkhpEsEEc1xXZwZKfCs6L8`;

    // get the response from the api url and send it to LatLng.js's props
    useEffect(() => {
        setAppState({loading: true});
        fetch(geocodingURL)
            .then((res) => res.json())
            .then((coords) => {
                setAppState({loading: false, coords: coords});
                });
    }, [setAppState, geocodingURL]);

    // the actual content that is returned is in LatLng.js
    return (
        <LatLngLoading isLoading = {appState.loading} coords = {appState.coords} />
    );
}
export default Geocoding;