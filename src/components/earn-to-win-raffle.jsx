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
import axios from "axios";

const EarnToWinRaffle = ({ props, ref, currentRoute }) => {
  let history = useHistory();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    history.push("/");
    console.log(name, number, email);
    const data = {
      Name: name,
      Number: number,
      Email: email,
    };
    axios
      .post(
        "https://sheet.best/api/sheets/92edf6b2-47cf-4210-b748-4540768dff4b",
        data
      )
      .then((response) => {
        setName("");
        setNumber("");
        setEmail("");
      });
    alert(
      "Thank you for joining! our raffle, GoGo Racers! We will announce the winner on July 3, 2022 on our official facebook page. Don't forget to like and follow our official social media sites"
    );
  };
  // GUMANA KA

  useEffect(() => {
    document.title = "Black Spot Studio | Earn to win raffle";
  }, []);

  return (
    <div className="register wrapper">
      <div className="register-wrapper">
        <div className="form-wrapper">
          <h1>Gogo Racing Info</h1>
          <form onSubmit={onSubmit} method="get" id="formwrap">
            <input
              type="text"
              autoComplete="off"
              name="entry.944015103"
              placeholder="Enter your account name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
            <input
              type="number"
              autoComplete="off"
              name="entry.396245137"
              placeholder="Enter Your Account Number"
              onChange={(e) => setNumber(e.target.value)}
              value={number}
              required
            />
            <input
              type="email"
              autoComplete="off"
              name="entry.49579415"
              placeholder="Enter Your Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
            <div className="down-buddeh">
              <div className="up">
                <input type="checkbox" name="check" id="check" required />
                <label htmlFor="check" id="checksz">
                  I have read and agree to the terms and conditions and privacy
                  policy.
                </label>
              </div>
              <div className="down">
                <input type="checkbox" name="check2" id="check2" required />
                <label htmlFor="check2" id="checksz">
                  Sign up to our newsletter to receive our latest news and
                  offers
                </label>
              </div>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EarnToWinRaffle;
