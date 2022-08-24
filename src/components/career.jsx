import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";
import join from "../images/join.png";
import ReCaptchaV2 from "react-google-recaptcha";
import ReCAPTCHA from "react-google-recaptcha";

import Palpetine from "../images/icons/palpatine.png";
import {
  FaEnvelope,
  FaFacebook,
  FaMapMarked,
  FaReddit,
  FaRegArrowAltCircleUp,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { HashLink } from "react-router-hash-link";
import { AiFillInstagram } from "react-icons/ai";
import icono from "../images/icons/logo.png";

const JobComponent = ({ props, ref, currentRoute }) => {
  const [captchaValido, changeCaptchaValid] = useState(null);
  const [usuarioValido, changeValidUser] = useState(false);
  const captcha = useRef(null);
  const onChange = () => {
    if (captcha.current.getValue()) {
      console.log("The User is not a Robot");
      changeCaptchaValid(true);
    }
  };
  // Email Js
  const submit = (e) => {
    e.preventDefault();
    if (captcha.current.getValue()) {
      console.log("El usuario no es un robot");
      changeValidUser(true);
      alert("Your message has been sent");
      changeCaptchaValid(true);
      emailjs
        .sendForm(
          "service_dhedxwz",
          "template_q1r5952",
          e.target,
          "nOqEMPnZOelgJtLCT"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    } else {
      console.log("Accept Recaptcha pls");
      changeValidUser(false);
      changeCaptchaValid(false);
    }
  };
  // Title
  useEffect(() => {
    document.title = "Black Spot Studio | Job Posting";
  }, []);

  return (
    <div className="job wrapper">
      <section className="joblist" data-aos="zoom-in" data-aos-duration="500">
        <div className="joblist-wrapper">
          <center>
            <img src={join} alt="" id="top1" />
          </center>
          <div className="career-wrapper">
            <div className="img-palpetine">
              <img src={Palpetine} alt="" />
            </div>
            <div className="message">
              <h1>
                SEND US YOUR UPDATED CV/RESUME & THE DESIRED POSITION YOU'RE
                APPLYING FOR AT : <span>recruitment@blackspotstudio.ph</span>
              </h1>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JobComponent;
