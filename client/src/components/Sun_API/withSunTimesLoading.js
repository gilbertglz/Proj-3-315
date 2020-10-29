import React from 'react';

function withSunTimesLoading(Component) {

  return function WihLoadingComponent({ isLoading, ...props }) {

    if (!isLoading) return <Component {...props} />;

    
    return (
      <p>
        Fetching data...
      </p>
    );
  };
}
export default withSunTimesLoading;
