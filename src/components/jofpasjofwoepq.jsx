import React, { useState, useEffect, useRef, LinkProps } from "react";
import Axios from "axios";
const TestComponent = ({ props, ref, currentRoute }) => {
  const [title, setTitle] = useState("");
  const [descrtiption, setDescription] = useState("");
  const Submit = () => {
    Axios.post("http://localhost:3001/");
  };
  return (
    <div className="test wrapper">
      <h1>Testinggggg</h1>
      <input
        type="text"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <input
        type="text"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <button onClick={Submit}>Submit</button>
    </div>
  );
};

export default TestComponent;
