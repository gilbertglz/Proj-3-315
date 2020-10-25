import React from 'react';

function WithLatLngLoading(Component) {

  return function WithLoadingComponent({ isLoading, ...props }) {

    // only return the props' coords when isLoading is false
    // (whenever the second .then in Geocoding.jsx is done)
    if (!isLoading) return <Component {...props} />;
    
    // isLoading is true
    return (
      <p>Fetching data...</p>
    );
  };
}
export default WithLatLngLoading;