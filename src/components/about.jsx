import React, { useEffect } from "react";
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
  FaSketch,
  FaTasks,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import character from "../images/characters/Tosuni.png";
import icono from "../images/icons/logo.png";
import { AiFillInstagram } from "react-icons/ai";
import krlogo from "../images/logokor.png";
import dubai from "../images/dubai.png";
import ggc from "../images/icons/gogochain.png";
import ggw from "../images/icons/gogoworld.png";
import ggr from "../images/icons/gogoracing.png";
import sf from "../images/scionlogo.png";
const AboutComponent = ({ currentRoute }) => {
  // Title
  useEffect(() => {
    document.title = "Black Spot Studio | About Us";
  }, []);
  return (
    <div className="about wrapper">
      <div className="container-about">
        <div className="title-about"></div>
        <section className="wrappersk">
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
              developing and publishing which is suitable htmlFor all digital
              platforms. Today, BSS PH is developing a game that is a
              “non-fungible token” or NFT htmlFor its Filipino audience named
              Scion Fist Philippines. Shortly, BSS PH plans to be one of the
              biggest game developer companies in the Philippines that cater to
              the needs of all Filipino gamers.
            </p>
            <ul className="linksz">
              <li>
                <HashLink smooth to="/about#work">
                  Work
                </HashLink>
              </li>
              <div className="vertical-line"></div>
              <li>
                <HashLink smooth to="/about#services">
                  Services
                </HashLink>
              </li>
              <div className="vertical-line"></div>
              <li>
              <HashLink smooth to="/about#partners">
                  Partners
                </HashLink>
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
      <section className="work" id="work">
        <div className="section-title-work">
          <h1>Works</h1>
        </div>
        <div className="box-wrapper">
          <div className="baks box1">
            <div className="logo-game" id="g1">
              <Link to="/scion">
                <img src={sf} alt="" />
              </Link>
            </div>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              perferendis iste reprehenderit.
            </p>
          </div>
          <div className="baks box2">
            <div className="logo-game">
              <Link to="/gogoworld">
                <img src={ggw} alt="" />
              </Link>
            </div>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              perferendis iste reprehenderit.
            </p>
          </div>
          <div className="baks box3">
            <div className="logo-game" id="g2">
              <Link to="/gogochain">
                <img src={ggc} alt="" />
              </Link>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              perferendis iste reprehenderit.
            </p>
          </div>
          <div className="baks box4">
            <div className="logo-game">
              <Link to="/gogoracing">
                <img src={ggr} alt="" />
              </Link>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              perferendis iste reprehenderit.
            </p>
          </div>
        </div>
      </section>
      <section className="services" id="services">
        <div className="section-title-work">
          <h1>Services</h1>
        </div>
        <div className="row">
          <div className="service">
            <FaLaptopCode className="i" />
            <h2>Web Design</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi, quae?
            </p>
          </div>
          <div className="service">
            <FaChartLine className="i" />
            <h2>Marketing</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi, quae?
            </p>
          </div>
          <div className="service">
            <FaSketch className="i" />
            <h2>Graphics</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi, quae?
            </p>
          </div>
          <div className="service">
            <FaDatabase className="i" />
            <h2>Data Analysis</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi, quae?
            </p>
          </div>
        </div>
      </section>
      <section className="partners" id="partners">
        <div className="partnerz">
        <div className="section-title-work">
          <h1>Partners</h1>
        </div>
          <div className="links">
            <ul>
              <li>
                <a href="http://blackspotstudio.com/">
                  <img src={krlogo} alt="" />
                </a>
              </li>
              <li>
                <a href="http://blackspotstudio.com/">
                  <img src={dubai} alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="section">
        <footer className="footer-distributed">
          <div className="footer-left">
            <img src={icono} alt="" className="logso" />
            <p className="footer-links">
              <a href="#">About Us</a>

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
                <a href="play@blackspotstudio.ph">
                  {" "}
                  <FaEnvelope /> play@blackspotstudio.ph
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
      </div>
    </div>
  );
};

export default AboutComponent;
