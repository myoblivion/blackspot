import React, { useState, useEffect, useRef, LinkProps } from "react";
import WheelComponent from "react-wheel-of-prizes";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Email = () => {
  const history = useNavigate();
  const [data, setData] = useState({
    email: "https://sheet.best/api/sheets/1820416b-c564-479c-92b8-1bcfca74bcd9",
  });

  const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        navigate.replace("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="emailsx wrapper">
      <form style={{ maxWidth: 500, margin: "auto" }} onSubmit={handleSubmit}>
        <h1 className="text-muted text-center">Add</h1>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={data.email}
            onChange={handleChange}
          />
        </div>
        <div className="text-center">
          <button className="btn btn-primary">Add</button>
        </div>
      </form>
    </div>
  );
};

export default Email;
