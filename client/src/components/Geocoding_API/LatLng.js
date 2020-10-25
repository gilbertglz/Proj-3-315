import React from 'react';

const LatLng = (props) => {

  const {coords} = props;

  // the api request was invalid
  if (!coords || coords.length === 0) return <p>No coords, likely an invalid API request</p>;

  return (
    <ul>
      <li>{coords.results[0].geometry.location.lat}</li>
      <li>{coords.results[0].geometry.location.lng}</li>
    </ul>
  );
};
export default LatLng;