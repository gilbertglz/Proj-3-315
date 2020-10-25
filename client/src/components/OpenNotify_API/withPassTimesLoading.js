import React from 'react';

function withPassTimesLoading(Component) {

  return function WihLoadingComponent({ isLoading, ...props }) {

    if (!isLoading) return <Component {...props} />;

    
    return (
      <p>
        Fetching data...
      </p>
    );
  };
}
export default withPassTimesLoading;