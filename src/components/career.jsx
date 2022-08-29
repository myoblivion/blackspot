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
  // Email Js

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
                The BlackSpot WorkForce Is A Pathway To Many Abilities Some
                Consider To Be Unnatural. Young one, let the blackspot flow
                through you and send your CV here at:
                <span>recruitment@blackspotstudio.ph</span>
              </h1>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JobComponent;
