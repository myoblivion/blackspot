import React, { useState, useEffect } from "react";

const GoGoChainComponent = () => {
  // Title
  useEffect(() => {
    document.title = "Black Spot Studio | GoGo Chain";
  }, []);
  return (
    <div className="gogochain wrapper">
        <h1>Gogo Chain</h1>
    </div>
  );
};

export default GoGoChainComponent;
