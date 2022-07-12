import React, { useState, useEffect, useRef, LinkProps } from "react";
import WheelComponent from "react-wheel-of-prizes";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Email = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    number: "",
  });
  const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        "https://sheet.best/api/sheets/1820416b-c564-479c-92b8-1bcfca74bcd9",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      if (res.ok) {
        navigate("/conquest-champions");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="emailsx wrapper">
      <form onSubmit={handleSubmit} autoComplete="off">
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            name="email"
            id="email"
            value={data.email}
            onChange={handleChange}
            required
            placeholder="E-mail"
          />
          <input
            type="number"
            id="numberl"
            className="form-control"
            name="number"
            placeholder="Account ID"
            required
            value={data.number}
            onChange={handleChange}
          />
        </div>
        <div className="text-center">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
};
export default Email;
