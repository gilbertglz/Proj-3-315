import React, { useEffect, useState } from 'react';
import PassTimes from './PassTimes';
import withPassTimesLoading from './withPassTimesLoading';

const OpenNotify = () => {
    
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

// fetch('https://cors-anywhere.herokuapp.com/http://api.open-notify.org/iss-pass.json?lat=45.0&lon=-122.3&alt=20&n=5')
//     .then(response => response.json())
//     .then(data => console.log(data));




// var request = new XMLHttpRequest()

// request.open('GET', 'https://cors-anywhere.herokuapp.com/http://api.open-notify.org/iss-pass.json?lat=45.0&lon=-122.3&alt=20&n=5', true)

// request.onload = function () {
//     var data = JSON.parse(this.response)
//     var arr = []

//     if (request.status >= 200 && request.status < 400) {
//        Object.keys(data).forEach( (k) => {
//            console.log(data[k])
//            arr.push(data[k])
//        });
//     }
//     else {
//         console.log ('error')
//     }

//     var obj = [] // Contains ISS passover time objects
//     Object.keys(arr[2]).forEach( (n) => {
//         console.log(arr[2].[n])
//         obj.push(arr[2].[n]) 
//     });

//     // Printing out duration and risetime for each object
//     obj.forEach( (element) => {
//         console.log("duration: " + element.duration + " risetime: " + element.risetime)
//     });
    
// }

// request.send ()