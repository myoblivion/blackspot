import React, { useState, useEffect } from "react";
import { FaRegArrowAltCircleUp } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import f1 from "../images/collection1.png";
import f2 from "../images/collection2.jpg";
import f3 from "../images/collection3.png";
import f4 from "../images/collection4.png";
import f5 from "../images/collection5.png";
import f6 from "../images/collection6.png";
import f7 from "../images/collection7.png";
import image from "../images/banner1.png";
import image2 from "../images/gogoworlds.jpg";
import icono from "../images/icons/logo.png";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaMapMarked,
  FaPhone,
  FaReddit,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";


const GoGoWorldComponent = ({ currentRoute }) => {
  // Title
  useEffect(() => {
    document.title = "Black Spot Studio | GoGo World";
  }, []);
  return (
    <div className="gogoworld wrapper">
      <section className="gogoworld-wrapper">
        <h1>Coming Soon</h1>
        <img src={image} alt="Gogo World" id="first-image" />
        <img src={image2} alt="Gogo World Mobile image" id="second-image" />
      </section>

      <section className="gogoworld-features">
        <div className="gogoworld-collection">
          <ul>
            <li>
              <img src={f1} alt="" />
            </li>
            <li>
              <img src={f2} alt="" />
            </li>
            <li>
              <img src={f3} alt="" />
            </li>
            <li>
              <img src={f4} alt="" />
            </li>
            <li>
              <img src={f5} alt="" />
            </li>
            <li>
              <img src={f6} alt="" />
            </li>
            <li>
              <img src={f7} alt="" />
            </li>
          </ul>
        </div>
      </section>
      <div className="section">
        <footer className="gogoworld-footer-distributed">
          <div className="footer-left">
            <img src={icono} alt="" className="logso" />
            <p className="footer-links">
              <Link to="/about">About Us</Link>
              <Link to="/privacy">Privacy & Policy</Link>
              <Link to="/job">Career</Link>

              <HashLink smooth to="/#contact">
                {" "}
                Contact Us
              </HashLink>
            </p>

            <p className="footer-company-name">
              Copyright © Black Spot Studio PH{" "}
            </p>
          </div>

          <div className="footer-center">
            <div className="desz">
              <p>
                <Link
                  to="/direction"
                  style={
                    currentRoute === "direction"
                      ? { borderBottom: "2px solid yellow" }
                      : { borderBottom: "2px solid transparent" }
                  }
                >
                  <FaMapMarked /> 26th St, Taguig, 1634 Metro Manila
                </Link>
              </p>
            </div>

            <div className="desz">
              <p>
                <a href="mailto:support@company.com">
                  {" "}
                  <FaEnvelope /> support@company.com
                </a>
              </p>
            </div>
          </div>

          <div className="footer-right">
            <div className="footer-icons">
              <ul className="social-media-list">
                <li>
                  <a
                    href="https://www.facebook.com/BlackspotstudioPH"
                    target="_blank"
                    className="contact-icon"
                  >
                    <FaFacebook />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/phblackspotstudio/"
                    target="_blank"
                    className="contact-icon"
                  >
                    <AiFillInstagram />
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/BlackSpotPH"
                    target="_blank"
                    className="contact-icon"
                  >
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.reddit.com/r/BlackSpotStudioPH/"
                    target="_blank"
                    className="contact-icon"
                  >
                    <FaReddit />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/channel/UCL9FkYZu775aKfJ1zv4gZJQ"
                    target="_blank"
                    className="contact-icon"
                  >
                    <FaYoutube />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
        <div className="bootons">
          <HashLink smooth to="/gogoworld#" id="up">
            <FaRegArrowAltCircleUp />
          </HashLink>
        </div>
      </div>
    </div>
  );
};

export default GoGoWorldComponent;
