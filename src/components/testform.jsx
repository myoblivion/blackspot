import React, { useState, useEffect, useRef, LinkProps } from "react";
import image from "../images/banner4.png";
import image2 from "../images/gogochain-mobile.png";
import { HashLink } from "react-router-hash-link";
import icono from "../images/icons/logo.png";
import { Link, withRouter, useHistory, useNavigate } from "react-router-dom";
import {
  FaEnvelope,
  FaFacebook,
  FaMapMarked,
  FaReddit,
  FaRegArrowAltCircleUp,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { render } from "react-dom";

const TestForm = ({ props, ref, currentRoute }) => {
  let history = useHistory();
  const onSubmit = (e) => {
    e.preventDefault()
    history.push('/');        
    alert("Thank you for joining!");
  }

 
  return (
    <div className="register wrapper">
      <div className="register-wrapper">
        <div className="form-wrapper">
          <h1>Gogo Racing Info</h1>
          <form
            onSubmit={onSubmit}
            action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSeN8EBrL1jV-QY7lXT1hfSoZvG9zLIxBRJ7wADpwlPvbd0ODA/formResponse"
            method="post"
            id="formwrap"
          >
            <input
              type="text"
              autoComplete="off"
              name="entry.2144389551"
              placeholder="Your Account Name"
              required
            />
            <input
              type="number"
              autoComplete="off"
              name="entry.631646724"
              placeholder="Your Account Number"
              required
            />
            <input
              type="email"
              autoComplete="off"
              name="entry.396245137"
              placeholder="Your Email"
              required
            />
            <div className="down-buddeh">
              <div className="up">
                <input type="checkbox" name="check" id="check" required/>
                <label htmlFor="check">
                  I have read and agree to the terms and conditions and privacy
                  policy.
                </label>
              </div>
              <div className="down">
                <input type="checkbox" name="check2" id="check2" required />
                <label htmlFor="check2">E-mail acceptance</label>
              </div>
            </div>
            <button type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TestForm;
