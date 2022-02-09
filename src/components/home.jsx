import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import ReCaptchaV2 from "react-google-recaptcha";

// Images
import game1 from "../images/cards/scionfist.jpg";
import game2 from "../images/cards/gogoracing.jpg";
import game3 from "../images/cards/gogochain.jpg";
import game4 from "../images/gogow.jpg";
import icono from "../images/icons/logo.png";
// Slider
import Slider from "react-slick";
import { HashLink } from "react-router-hash-link";

// Icons
import {
  FaEnvelope,
  FaFacebook,
  FaGamepad,
  FaInstagramSquare,
  FaMapMarked,
  FaPaperPlane,
  FaPhone,
  FaReddit,
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

// Image Js
import emailjs from "emailjs-com";

// Captcha :D
const handleToken = (token) => {
  setForm((currentForm) => {
    return { ...currentForm, token };
  });
};
const handleExpire = () => {
  setForm((currentForm) => {
    return { ...currentForm, token: null };
  });
};

const HomeComponent = ({ currentRoute }) => {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick} key={NextArrow}>
        <FaRegArrowAltCircleRight />
      </div>
    );
  };
  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick} key={PrevArrow}>
        <FaRegArrowAltCircleLeft />
      </div>
    );
  };
  const [imageIndex, setImageIndex] = useState(0);
  const settings = {
    Infinite: true,
    lazyload: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    dots: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  // Title
  useEffect(() => {
    document.title = "Black Spot Studio | Philippines";
  }, []);

  // Email Js
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nh3pwyh",
        "template_xyvndrx",
        e.target,
        "user_DhVbKvTWQOQX3lDfGjGAj"
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

  return (
    // Home
    <div className="wrapper">
      <div className="home">
        <div className="slidewrap">
          <ul className="slideshow">
            <li>
              <span></span>
            </li>
            <li>
              <span></span>
            </li>
            <li>
              <span></span>
            </li>
            <li>
              <span></span>
            </li>
          </ul>
        </div>
        <div className="container-1">
          <div className="container-wrapper"></div>
        </div>
        {/* Game */}
        <div className="container-2" id="game">
          <div className="game-wrapper">
            <div className="game-title">
              <h2>Black Spot Studio</h2>
              <h4>
                Four <span>PROECTS</span> are currently being developed at Black
                Spot Studio.
              </h4>
              <div className="line"></div>
            </div>
            <div className="sliders">
              <Slider {...settings}>
                <div className="slider-image">
                  <img src={game1} alt="Game" id="g1" />
                  <div className="link">
                    <ul>
                      <li>
                        <Link
                          id="scion"
                          to="/scion"
                          style={
                            currentRoute === "scion"
                              ? { borderBottom: "2px solid yellow" }
                              : { borderBottom: "2px solid transparent" }
                          }
                        >
                          <FaGamepad />
                        </Link>
                      </li>
                      <li>
                        <a
                          id="youtube"
                          href="https://youtu.be/_4EqPiPzc_I"
                          target="_blank"
                        >
                          <FaYoutube />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="slider-image">
                  <img src={game2} alt="Game" />
                  <div className="link">
                    <h2>Coming Soon</h2>
                  </div>
                </div>
                <div className="slider-image">
                  <img src={game3} alt="Game" />
                  <div className="link">
                    <h2>Coming Soon</h2>
                  </div>
                </div>
                <div className="slider-image">
                  <img src={game4} alt="Game" />
                  <div className="link">
                    <h2>Coming Soon</h2>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
        {/* Contact Us */}
        <div className="contactforms" id="contact">
          <div className="container contact-us-section">
            <div className="row h-100">
              <div className="col-md-3 section-title">
                <h2>
                  Contact Us <span>We'd love to hear from you!</span>
                </h2>
              </div>
              <div className="col-md-9">
                <form className="contact-us-form" onSubmit={sendEmail}>
                  <div className="form-group">
                    <label htmlFor="name">Name : *</label>
                    <input
                      placeholder="enter name"
                      type="text"
                      required
                      id="name"
                      name="name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address : *</label>
                    <input type="email" name="email" id="email" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message :</label>
                    <textarea
                      placeholder="Message"
                      required
                      id="message"
                      rows="2"
                      name="message"
                    ></textarea>
                  </div>
                  <div className="form-group clearfix">
                    <ReCaptchaV2
                      sitekey="6LdYi10eAAAAAHWU89tjxpmTA_aNeWMg8OXIHgpj"
                      onChange={handleToken}
                    />
                    <button
                      type="sumbit"
                      data-id="#accessories-holder"
                      className="red-select-btn model-selector btn-send-message"
                    >
                      <span>Submit</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* Footer */}
        <div className="section">
          <footer className="footer-distributed">
            <div className="footer-left">
              <img src={icono} alt="" />
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
                Copyright © Black Spot Studio{" "}
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
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
