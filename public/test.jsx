import React, { useState, useEffect, useRef, LinkProps } from "react";
import { Form, Text } from "informed";
import { Link, withRouter, useHistory, useNavigate } from "react-router-dom";
import { useForm, ValidationError } from "@formspree/react";

const SPREADSHEET_ID = "1aj3fhDrOp1M_Qww8n8CC_TziNiYyhyifPKGGKSeNaUw"; //from the URL of your blank Google Sheet
const CLIENT_ID =
  "366890563540-41bike67bihilkifa0rscek54g3cmkt4.apps.googleusercontent.com"; //from https://console.developers.google.com/apis/credentials
const API_KEY = "AIzaSyApqrQ8aXiKeZbRkAxnhSY1eE-CROieVIU"; //https://console.developers.google.com/apis/credentials
const SCOPE = "https://www.googleapis.com/auth/spreadsheets";

const EarnToWinRaffle = ({ props, ref, currentRoute }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const data = {
      Name: name,
      Number: number,
      Email: email,
    }
    let handleSubmit = async (e) => {
      e.preventDefault();
      try {
        let res = await fetch("366890563540-41bike67bihilkifa0rscek54g3cmkt4.apps.googleusercontent.com", {
          method: "GET",
          body: JSON.stringify({data}),
        });
        let resJson = await res.json();
        if (res.status === 200) {
          setName("");
          setNumber("");
          setEmail("");
        } else {
          setName("Some error occured");
        }
      } catch (err) {
        console.log(err);
      }
    };

  useEffect(() => {
    document.title = "Black Spot Studio | Earn to win raffle";
  }, []);

  return (
    <div className="register wrapper">
      <div className="content1">Content1
      </div>
      <div className="content1">Content2</div>
      <div className="content1">Content3</div>
      <div className="content1">Content4</div>
      <input type="radio" id="game1" name="slider-game"/>
      <input type="radio" id="game2" name="slider-game"/>
      <input type="radio" id="game3" name="slider-game"/>
      <input type="radio" id="game4" name="slider-game"/>
      <div className="displayers">
      <label htmlFor="game1">
        <img src="https://64.media.tumblr.com/ae7dfd85ecb37f88adfdfc1f3adb3176/e18cfa5e91c738e4-b5/s1280x1920/cb381798533fb27092d2c0e29826ffdbf5e2ee2a.pnj" alt="" />
      </label>
      <label htmlFor="game2">
        <img src="https://64.media.tumblr.com/4d949557870d81d37486045a47773849/e18cfa5e91c738e4-28/s1280x1920/9ff8010e4a6fb35d5e93e7fd21ac24835f079309.pnj" alt="" />
      </label>
      <label htmlFor="game3">
        <img src="https://64.media.tumblr.com/734fd29aa1c0a3d612f15d82f45f09e8/e18cfa5e91c738e4-37/s1280x1920/dd945c2ac107205f0265d4922bce0e73cf2571fe.pnj" alt="" />
      </label>
      <label htmlFor="game4">
        <img src="https://64.media.tumblr.com/cc17c525f9d7b67a2db738a576982670/e18cfa5e91c738e4-45/s1280x1920/e8085b5d4bd2cddf78ece019af1140b2f6cde807.pnj" alt="" />
      </label>
      </div>
    </div>
  );
};

export default EarnToWinRaffle;
