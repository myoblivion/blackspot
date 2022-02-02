import React, { useState, useEffect } from "react";

const JobComponent = () => {
    // Title
    useEffect(() => {
      document.title = "Black Spot Studio | Job Posting"
    }, [])
  return (
    <div className="Job wrapper">
    <h1>Job</h1>
    </div>
  );
};

export default JobComponent;
