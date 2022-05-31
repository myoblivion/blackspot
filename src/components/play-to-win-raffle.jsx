import React, { useState, useEffect, useRef, LinkProps } from "react";

import { useHistory } from "react-router-dom";
const api = axios.create({
  baseUrl: "http://3.37.118.67/api/event/join?event_index=1&uuid=72&refer_user_id=your_site_user_id",
});
import axios from "axios";
const EarnToWinRaffle = ({ props, ref, currentRoute }) => {
  let history = useHistory();
  const [name, refer_user_id] = useState("");
  const [number, uuid] = useState("");
  const [email, setEmail] = useState("");
  const [event, event_index] = useState("1");
  const [range, setData] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    // history.push("/");
    const range = {
      refer_user_id: name,
      uuid: number,
      setEmail: email,
      event_index: event,
    };
    axios.post("http://localhost:4000", range).then(async (response) => {
      console.log(response);
      refer_user_id("");
      uuid("");
      setEmail("");
      event_index("1");
    }),
      alert(
        "Thank you for joining! our raffle, GoGo Racers! We will announce the winner on July 3, 2022 on our official facebook page. Don't forget to like and follow our official social media sites"
      );

    const Fetch = () => {
      fetch("http://3.37.118.67/api/event/join?event_index=1&uuid=72&refer_user_id=your_site_user_id")
    };
    function reqListener() {
      var range = JSON.parse(this.responseText);
      console.log(range);
    }

    function reqError(err) {
      console.log("Fetch Error :-S", err);
    }

    const oReq = new XMLHttpRequest(Fetch);
    oReq.onload = reqListener;
    oReq.onerror = reqError;
    oReq.open(
      "get",
      "http://3.37.118.67/api/event/join?event_index=1&uuid=72&refer_user_id=your_site_user_id",
      true
    );
    oReq.send(
      "post",
      "http://3.37.118.67/api/event/join?event_index=1&uuid=72&refer_user_id=your_site_user_id",
      true
    );
  };

  function alertMessage() {
    alert(
      "Before you join the raffle “Win while you play”, you must register here online. Please note that you must be registered for the said raffle or you may not win. In registering here, you will provide personal information (e.i. email address) so Black Spot Studio Philippines may provide notices or correspondence to you via electronic Communication. Black Spot Studio Philippines complies with the Republic Act 10173- Data Privacy Act of 2012, as the guidelines ensuring the protection of personal information. This policy applies to all personal information collected, stored, used, and disclosed by BSS PH. By ”personal information” we mean information about an identifiable individual."
    );
  }
  useEffect(() => {
    setData();
    return () => {
      [range];
    };
  });

  useEffect(() => {
    document.title = "Black Spot Studio | Earn to win raffle";
  }, []);



  return (
    <div className="register wrapper">
      <div className="register-wrapper">
        <div className="form-wrapper">
          <h1>Gogo Racing Info</h1>
          <form onSubmit={handleSubmit} method="post" id="formwrap">
            <input
              type="text"
              autoComplete="off"
              placeholder="Enter your Account Name"
              onChange={(e) => refer_user_id(e.target.value)}
              value={name}
              required
            />
            <input
              type="text"
              autoComplete="off"
              placeholder="Enter Your Account ID"
              maxLength="6"
              onChange={(e) => uuid(e.target.value)}
              value={number}
              required
            />
            <input
              type="email"
              autoComplete="off"
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
