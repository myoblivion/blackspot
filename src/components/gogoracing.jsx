import React, { useState, useEffect, useRef, LinkProps } from "react";

import image from "../images/goracing.png";
import image2 from "../images/gogorc.jpg";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import f1 from "../images/collection1.png";
import f2 from "../images/collection2.jpg";
import f3 from "../images/collection3.png";
import f4 from "../images/collection4.png";
import f5 from "../images/collection5.png";
import f6 from "../images/collection6.png";
import f7 from "../images/collection7.png";
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

const GoGoRacingComponent = ({ props, ref, currentRoute }) => {
  // Title
  useEffect(() => {
    document.title = "Black Spot Studio | GoGo Racing";
  }, []);
  return (
    <div className="gogoracing wrapper">
      <section className="gogoracing-wrapper">
        <img src={image} alt="" id="first-image" />
        <img src={image2} alt="Gogo Racing Mobile image" id="second-image" />
        <h1>Coming Soon</h1>
      </section>
      <section className="gogoracing-features">
        <div className="gogoracing-collection">
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
      {/* Footer */}
      <div className="section">
        <footer className="gogoracing-footer-distributed">
          <div className="footer-left">
            <img src={icono} alt="" className="logso" />
            <p className="footer-links">
              <Link
                to="/about"
                {...props}
                ref={ref}
                onClick={() => window.scrollTo(0, 0)}
              >
                About Us
              </Link>
              {/* <Link to="/privacy"                   {...props}
                  ref={ref}
                  onClick={() => window.scrollTo(0, 0)}>Privacy & Policy</Link> */}
              <p>Privacy & Policy</p>

              <Link
                to="/job"
                {...props}
                ref={ref}
                onClick={() => window.scrollTo(0, 0)}
              >
                Career
              </Link>

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
                  {...props}
                  ref={ref}
                  onClick={() => window.scrollTo(0, 0)}
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
          <HashLink smooth to="/gogoracing#" id="up">
            <FaRegArrowAltCircleUp />
          </HashLink>
        </div>
      </div>
    </div>
  );
};

export default GoGoRacingComponent;
