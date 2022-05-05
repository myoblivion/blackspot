import React, { useState, useEffect, useRef, LinkProps } from "react";

import { Link, withRouter, useHistory, useNavigate } from "react-router-dom";

import axios from "axios";

const EarnToWinRaffle = ({ props, ref, currentRoute }) => {
  let history = useHistory();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);
  const handleSubmit = (e) => {
    history.push("/");
    e.preventDefault();
    const data = {
      Name: name,
      Number: number,
      Email: email,
    };
    axios
      .post(
        "https://sheet.best/api/sheets/9eda958b-9a8f-44e2-a8bd-3a08338c31cc",
        data
      )
      .then((response) => {
        console.log(response);
        setName("");
        setNumber("");
        setEmail("");
      });
    alert(
      "Thank you for joining! our raffle, GoGo Racers! We will announce the winner on July 3, 2022 on our official facebook page. Don't forget to like and follow our official social media sites"
    );
    useEffect(() => {
      getData();
    }, [data]);
  };
  const getData = () => {
    axios
      .get("https://sheet.best/api/sheets/9eda958b-9a8f-44e2-a8bd-3a08338c31cc")
      .then((response) => {
        setData(response.data);
      });
  };

  const alertMessage = () => {
    alert(
      "Before you join the raffle “Win while you play”, you must register here online. Please note that you must be registered for the said raffle or you may not win. In registering here, you will provide personal information (e.i. email address) so Black Spot Studio Philippines may provide notices or correspondence to you via electronic Communication. Black Spot Studio Philippines complies with the Republic Act 10173- Data Privacy Act of 2012, as the guidelines ensuring the protection of personal information. This policy applies to all personal information collected, stored, used, and disclosed by BSS PH. By ”personal information” we mean information about an identifiable individual."
    );
  };

  useEffect(() => {
    document.title = "Black Spot Studio | Earn to win raffle";
  }, []);

  return (
    <div className="register wrapper">
      <div className="register-wrapper">
        <div className="form-wrapper">
          <h1>Gogo Racing Info</h1>
          <form onSubmit={handleSubmit} method="get" id="formwrap">
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
                <label htmlFor="check" id="checksz" onClick={alertMessage}>
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
