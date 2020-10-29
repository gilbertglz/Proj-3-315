import React from 'react';

const SunTimes = (props) => {

    const { times } = props;

    if (!times || times.length === 0) return <p>No Times, an invalid api requst</p>;

    return (
    <ul>
        <h2>Available Sunrise/set Times</h2>
        <li> Sunrise: {times.results.sunrise}</li>
        <li> Sunset: {times.results.sunset}</li>
    </ul>
    );
};
export default SunTimes;