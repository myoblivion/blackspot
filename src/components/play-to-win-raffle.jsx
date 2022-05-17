import React, { useState, useEffect, useRef, LinkProps } from "react";
import { Form, Text } from "informed";
import { Link, withRouter, useHistory, useNavigate } from "react-router-dom";

const SPREADSHEET_ID = "1aj3fhDrOp1M_Qww8n8CC_TziNiYyhyifPKGGKSeNaUw"; //from the URL of your blank Google Sheet
const CLIENT_ID =
  "366890563540-41bike67bihilkifa0rscek54g3cmkt4.apps.googleusercontent.com"; //from https://console.developers.google.com/apis/credentials
const API_KEY = "AIzaSyApqrQ8aXiKeZbRkAxnhSY1eE-CROieVIU"; //https://console.developers.google.com/apis/credentials
const SCOPE = "https://www.googleapis.com/auth/spreadsheets";

const EarnToWinRaffle = ({ props, ref, currentRoute }) => {

  useEffect(() => {
    document.title = "Black Spot Studio | Earn to win raffle";
  }, []);
  

  return (
    <div className="register wrapper">
      <div className="register-wrapper">
        <div className="form-wrapper">
          <h1>Gogo Racing Info</h1>
          <form method="get" id="formwrap" >
            <input
              type="text"
              autoComplete="off"
              name="name"
              placeholder="Enter your Account Name"
              required
            />
            <input
              type="text"
              autoComplete="off"
              name="number"
              placeholder="Enter Your Account ID"
              maxLength="6"
              required
            />
            <input
              type="email"
              autoComplete="off"
              name="email"
              placeholder="Enter Your Email"
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
