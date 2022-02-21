import React, { useState, useEffect } from "react";
import image from "../images/goracing.png";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import {
  FaChartLine,
  FaDatabase,
  FaEnvelope,
  FaFacebook,
  FaGamepad,
  FaHandHolding,
  FaHeadset,
  FaInstagram,
  FaLaptopCode,
  FaMapMarked,
  FaPen,
  FaPhone,
  FaReddit,
  FaRegArrowAltCircleUp,
  FaSketch,
  FaTasks,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import icono from "../images/icons/logo.png";
import { AiFillInstagram } from "react-icons/ai";


const GoGoRacingComponent = ({ currentRoute }) => {
  // Title
  useEffect(() => {
    document.title = "Black Spot Studio | GoGo Racing";
  }, []);
  return (
    <div className="gogoracing wrapper">
      <section className="wrapper">
        <img src={image} alt="" />
        <h1>Coming Soon</h1>
      </section>
      <div className="bootons">
            <HashLink smooth to="/gogoracing#" id="up">
            <FaRegArrowAltCircleUp />

            </HashLink>
        </div>
    </div>
  );
};

export default GoGoRacingComponent;
