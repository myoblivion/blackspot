import React, { useEffect } from 'react'

const AboutComponent = () => {
    // Title
    useEffect(() => {
      document.title = "Black Spot Studio | About Us"
    }, [])
  return (
    <div className="about wrapper">
      <h1>About</h1>
    </div>
  );
};

export default AboutComponent;
