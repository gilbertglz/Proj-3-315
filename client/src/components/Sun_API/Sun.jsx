import React, {useEffect, useState} from 'react';
import SunTimes from './SunTimes';
import withSunTimesLoading from './withSunTimesLoading';

const Sun = () => {
    // TODO: Take in latitude/longitude input

    const SunTimesLoading = withSunTimesLoading(SunTimes);
    const [appState, setAppstate] = useState ({
        loading: false,
        times: null,
    })

    var sunURL = 'https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400';

    // Get response from Sun API and pass it to SunTimes.js's props
    useEffect (() => {
        setAppstate ({loading: true});
        fetch(sunURL)
        .then(respose => respose.json())
        .then(times => {
            setAppstate ({
                loading: false,
                times: times
            });
        });
    }, [setAppstate, sunURL]);
    

    return ( 
        <SunTimesLoading isLoading = {appState.loading} times = {appState.times} />
    );
}

export default Sun;