import React, { useEffect } from 'react';

const ScionComponent = () => {
  useEffect(() => {
    document.title = "Scion Fist"
  }, [])
  return (
    <div className="scion wrapper">
      <h1>scion</h1>
    </div>
  );
};

export default ScionComponent;
