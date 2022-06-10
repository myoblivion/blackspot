import React, { useState, useEffect, useRef, LinkProps } from "react";
import LogRocket from "logrocket";
LogRocket.init("hlb5ho/black-spot");
import "whatwg-fetch";

import { useHistory } from "react-router-dom";
LogRocket.identify("THE_USER_ID_IN_YOUR_APP", {
  name: "James Morrison",
  email: "jamesmorrison@example.com",

  // Add your own custom user variables here, ie:
  subscriptionType: "pro",
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
    const options = {
      method: "POST",
      url: "http://localhost:4000/",
      headers: {
        "Content-type": "	application/json, text/plain, */*",
        Accept: "application/json",
      },
    };

    console.log(fetch);
    axios.post("http://localhost:4000/", range).then(async (response) => {
      console.log(response);
      refer_user_id("");
      uuid("");
      setEmail("");
      event_index("1");
    }, options),
      alert(
        "Thank you for joining! our raffle, GoGo Racers! We will announce the winner on July 3, 2022 on our official facebook page. Don't forget to like and follow our official social media sites"
      ),
      fetch(`${"http://localhost:4000/"}`, options);
    function reqListener() {
      var range = JSON.parse(this.responseText);
      console.log(range);
    }

    function reqError(err) {
      console.log("Fetch Error :-S", err);
    }

    const oReq = new XMLHttpRequest();
    oReq.onload = reqListener;
    oReq.onerror = reqError;
    oReq.open("Get", "http://localhost:4000/", true, console.log(oReq.open));
    oReq.send();
  };
  const request = async () => {
    try {
      const response = await test_api.get("/");
      console.log("response = ", response.data);
    } catch (error) {
      console.log("error = ", error);
    }
  };
  const [puser, setUsers] = useState({});

  useEffect(() => {
    if ((number, name)) {
      axios
        .get(
          `http://3.37.118.67/api/event/join?event_index=1&uuid=72&refer_user_id=your_site_user_id`
        )
        .then((res) => {
          console.log(res);
          setUsers(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [number, name]),
    useEffect(() => setUsers(), []);
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
