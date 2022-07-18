import React, { useState, useEffect, useRef, LinkProps } from "react";
import image from "../images/banner4.png";
import image2 from "../images/gogochain-mobile.png";
import { HashLink } from "react-router-hash-link";
import icono from "../images/icons/logo.png";
import { Link } from "react-router-dom";
import {
  FaEnvelope,
  FaFacebook,
  FaMapMarked,
  FaReddit,
  FaRegArrowAltCircleUp,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const GoGoChainComponent = ({ props, ref, currentRoute }) => {
  // Title
  useEffect(() => {
    document.title = "Black Spot Studio | GoGo Chain";
  }, []);
  function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
      return "Windows Phone";
    }

    if (/android/i.test(userAgent)) {
      return "Android";
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      return "iOS";
    }
    console.log(userAgent);
  }
  function DetectAndServe() {
    let os = getMobileOperatingSystem();
    if (os == "Android") {
      window.location.href =
        "https://play.google.com/store/apps/details?id=com.blackspotstudio.gogoracing.ph";
    } else if (os == "iOS") {
      window.location.href =
        "https://apps.apple.com/ph/app/gogo-racing/id1623115563?fbclid=IwAR2o3x0fcL9yHW2BeMvHoEqn-ZDsT7d0EqyhZyGgvfP8oayODA4YU68FRKg";
    } else if (os == "Windows Phone") {
      window.location.href =
        "https://apps.apple.com/ph/app/gogo-racing/id1623115563?fbclid=IwAR2o3x0fcL9yHW2BeMvHoEqn-ZDsT7d0EqyhZyGgvfP8oayODA4YU68FRKg";
    } else {
      window.location.href =
        "https://play.google.com/store/apps/details?id=com.blackspotstudio.gogoracing.ph";
    }
  }
  return (
    <div className="gogochain wrapper">
      <section className="gogochain-wrapper">
        <h1>Coming Soon</h1>
        <img src={image} alt="" id="first-image" data-aos="fade-left" />
        <img
          src={image2}
          alt="Gogo Racing Mobile image"
          id="second-image"
          data-aos="fade-right"
        />
      </section>

      <div className="section">
        <button onClick={DetectAndServe}> Test</button>
        <footer className="gogochain-footer-distributed">
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
              <Link
                to="/privacy"
                {...props}
                ref={ref}
                onClick={() => window.scrollTo(0, 0)}
              >
                Privacy & Policy
              </Link>
              <Link
                to="/terms-of-use"
                {...props}
                ref={ref}
                onClick={() => window.scrollTo(0, 0)}
              >
                Terms of Use
              </Link>
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
          <HashLink smooth to="/gogochain#" id="up">
            <FaRegArrowAltCircleUp />
          </HashLink>
        </div>
      </div>
    </div>
  );
};

export default GoGoChainComponent;
