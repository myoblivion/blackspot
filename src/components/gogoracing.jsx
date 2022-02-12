import React, { useState, useEffect } from "react";

const GoGoRacingComponent = () => {
  // Title
  useEffect(() => {
    document.title = "Black Spot Studio | GoGo Racing";
  }, []);
  return (
    <div className="gogoracing wrapper">
      <h1>GoGo Racing</h1>
    </div>
  );
};

export default GoGoRacingComponent;
