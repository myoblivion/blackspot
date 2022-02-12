import React, { useState, useEffect } from "react";

const GoGoWorldComponent = () => {
  // Title
  useEffect(() => {
    document.title = "Black Spot Studio | GoGo World";
  }, []);
  return (
    <div className="job wrapper">
        <h1>GoGo World</h1>
    </div>
  );
};

export default GoGoWorldComponent;
