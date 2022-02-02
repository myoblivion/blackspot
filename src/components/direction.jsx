import React, { useEffect } from 'react';

const DirectionComponent = () => {
  useEffect(() => {
    document.title = "Black Spot Studio | Direction"
  }, [])
  return (
    <div className="direction wrapper">
      <h1>Direction</h1>
    </div>
  );
};

export default DirectionComponent;
