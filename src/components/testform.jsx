import React, { useState, useEffect, useRef, LinkProps } from "react";
import image from "../images/banner4.png";
import image2 from "../images/gogochain-mobile.png";
import { HashLink } from "react-router-hash-link";
import icono from "../images/icons/logo.png";
import { Link } from "react-router-dom";
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

const TestForm = ({ props, ref, currentRoute }) => {
  // Title
  useEffect(() => {
    document.title = "Black Spot Studio | Raffle Registration";
  }, []);
  return (
    <div className="register wrapper">
      <div className="register-wrapper">
        <div className="form-wrapper">
          <form
            action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSfScxhbKW8tFPjIu7KUPVe_UATxav5UkfvAjSzUXacuf5fQkg/formResponse"
            method="post"
          >
            <input
              type="text"
              autoComplete="off"
              name="entry.944015103"
              placeholder="Your Account Name"
              required
            />
            <input
              type="nummer"
              autoComplete="off"
              name="entry.396245137"
              placeholder="Your Account Number"
              required
            />
            <input
              type="email"
              autoComplete="off"
              name="entry.49579415"
              placeholder="Your Email"
              required
            />
            <Link
              to="/"
              {...props}
              ref={ref}
              onClick={() => window.scrollTo(0, 0)}
            >
              <button type="submit">Submit</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TestForm;
