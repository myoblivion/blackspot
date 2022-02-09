import React, { useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
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
import character from "../images/characters/Tosuni.png";
import icono from "../images/icons/logo.png";
import { AiFillInstagram } from "react-icons/ai";
const AboutComponent = ({ currentRoute }) => {
  // Title
  useEffect(() => {
    document.title = "Black Spot Studio | About Us";
  }, []);
  return (
    <div className="about wrapper">
      <div className="container-about">
        <div className="title-about"></div>
        <section>
          <div className="image">
            <img src={character} alt="Tosuni" />
          </div>
          <div className="content">
            <h2>Black Spot Studio PH</h2>
            <div className="line2"></div>
            <span></span>
            <p>
              {" "}
              <strong>Black Spot Studio PH</strong>, was formed in December 2021
              through the collaboration of <strong>Black Spot Studio Co</strong>
              ., Ltd from South Korea and Dubai. We-{" "}
              <strong>Black Spot Studio PH</strong> specializes in game
              developing and publishing which is suitable for all digital
              platforms. Today, BSS PH is developing a game that is a
              “non-fungible token” or NFT for its Filipino audience named Scion
              Fist Philippines. Shortly, BSS PH plans to be one of the biggest
              game developer companies in the Philippines that cater to the
              needs of all Filipino gamers.
            </p>
            <ul className="linksz">
              <li>
                <a href="#">work</a>
              </li>
              <div className="vertical-line"></div>
              <li>
                <a href="#">service</a>
              </li>
              <div className="vertical-line"></div>
              <li>
                <a href="#">Partners</a>
              </li>
            </ul>
            <ul className="icons">
              <li>
                <a href="https://twitter.com/BlackSpotPH" target="_blank">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/BlackspotstudioPH"
                  target="_blank"
                >
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a
                  href="https://www.reddit.com/r/BlackSpotStudioPH/"
                  target="_blank"
                >
                  <FaReddit />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/phblackspotstudio/"
                  target="_blank"
                >
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </div>
        </section>
        <br />
        <br />
      </div>
      <div className="section">
        <footer className="footer-distributed">
          <div className="footer-left">
            <img src={icono} alt="" className="logso" />
            <p className="footer-links">
              <a href="#">About Us</a>

              <a href="#">Privacy Policy</a>
              <a href="#">Career</a>

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
            <p className="footer-company-about">
              <span>About the company</span>
              Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce
              euismod convallis velit, eu auctor lacus vehicula sit amet.
            </p>

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
      </div>
    </div>
  );
};

export default AboutComponent;
