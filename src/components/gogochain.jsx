import React, { useState, useEffect } from "react";
import image from "../images/banner4.png";

const GoGoChainComponent = () => {
  // Title
  useEffect(() => {
    document.title = "Black Spot Studio | GoGo Chain";
  }, []);
  return (
    <div className="gogochain wrapper">
      <section className="wrapper">
        <h1>Coming Soon</h1>
        <img src={image} alt="" />
      </section>
    </div>
  );
};

export default GoGoChainComponent;
