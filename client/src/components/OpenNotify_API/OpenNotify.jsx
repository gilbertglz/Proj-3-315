import React, { useEffect, useState } from 'react';
import PassTimes from './PassTimes';
import withPassTimesLoading from './withPassTimesLoading';

const OpenNotify = () => {
    // TODO: Take in latitude/longitute input

    const PassTimesLoading = withPassTimesLoading(PassTimes);
    const [appState, setAppstate] = useState ({
        loading: false,
        pts: null,
    });

    var openURL = 'https://cors-anywhere.herokuapp.com/http://api.open-notify.org/iss-pass.json?lat=45.0&lon=-122.3&alt=20&n=5';

    // Get response Open Notify API and pass it to PassTimes.js's props
    useEffect (() => {
        setAppstate ({loading: true});
        fetch(openURL)
            .then(response => response.json())
            .then((pts) => {
                setAppstate({
                    loading: false,
                    pts: pts
                });
            });
    }, [setAppstate, openURL]);

    return (
        <PassTimesLoading isLoading = {appState.loading} pts = {appState.pts} />
    );
} 

export default OpenNotify;
