import React, { useState, useEffect } from "react";
import image from "../images/gogoracing.jpg";
const GoGoRacingComponent = () => {
  // Title
  useEffect(() => {
    document.title = "Black Spot Studio | GoGo Racing";
  }, []);
  return (
    <div className="gogoracing wrapper">
      <section className="wrapper">
        <img src={image} alt="" />
        <h1>Coming Soon</h1>
      </section>
    </div>
  );
};

export default GoGoRacingComponent;
