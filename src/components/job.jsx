import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";
import join from "../images/join.png";
import ReCaptchaV2 from "react-google-recaptcha";

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
const handleToken = (token) => {
  setForm((currentForm) => {
    return { ...currentForm, token };
  });
};
const JobComponent = ({ props, ref, currentRoute }) => {
  // Email Js
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_24nttve",
        "template_hewg50b",
        e.target,
        "4l8jEqSnRkOKHDIQB"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  function sendCanvasAsAttachment(canvas) {
    var base64 = canvas.toDataURL();
    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
      content: base64,
    });
  }

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
          <div className="bootons">
            <HashLink smooth to="/job#" id="up">
              {" "}
              <FaRegArrowAltCircleUp />
            </HashLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JobComponent;
