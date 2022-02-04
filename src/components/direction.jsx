import React, { useEffect } from 'react';

const DirectionComponent = () => {
  useEffect(() => {
    document.title = "Black Spot Studio | Direction"
  }, [])
  return (
    <div className="direction wrapper">
      <h1>Direction</h1>
      <h2>Direction</h2>
      <h3>Direction</h3>
      <h4>Direction</h4>
      <h5>Direction</h5>
      <h6>Direction</h6>
    </div>
  );
};

export default DirectionComponent;
