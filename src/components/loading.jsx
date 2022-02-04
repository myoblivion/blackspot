import React, { useState, useEffect } from "react";

const LoadingComponent = () => {
  return (
    <div id="loader-wrapper">
      <div id="loader"></div>
      <div className="loader-section section-left"></div>
      <div className="loader-section section-right"></div>
    </div>
  );
};

export default LoadingComponent;
