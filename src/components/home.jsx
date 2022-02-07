import React, { useState, useEffect } from "react";
// Images
import ReCaptchaV2 from "react-google-recaptcha";
import game1 from "../images/cards/scionfist.jpg";
import game2 from "../images/gogorc.jpg";
import game3 from "../images/cards/gogochain.jpg";
import game4 from "../images/gogow.jpg";
import icono from "../images/icons/logo.png";

import {
  FaRegArrowAltCircleRight,
  FaRegArrowAltCircleLeft,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaReddit,
  FaYoutube,
  FaInstagramSquare,
  FaPaperPlane,
} from "react-icons/fa";

import { AiFillInstagram } from "react-icons/ai";

// Image Js
import emailjs from "emailjs-com";
import Slider from "react-slick";

const images = [game1, game2, game3, game4];
const handleExpire = () => {
  setForm((currentForm) => {
    return { ...currentForm, token: null };
  });
};

const handleToken = (token) => {
  setForm((currentForm) => {
    return { ...currentForm, token };
  });
};

const HomeComponent = () => {
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

  // img slider
  const settings = {
    Infinite: true,
    lazyload: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
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
        {/* slide show */}
        <div className="homewrapper">
          <ul className="cb-slideshow">
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
        {/* level 1 */}
        <div className="container-1">
          <div className="container-wrapper"></div>
        </div>
        {/* Games */}
        <div className="container-2" id="game">
          <div className="game-wrapper">
            <div className="game-title">
              <h2>Our Games</h2>
            </div>
            <div className="slider-game">
              <Slider {...settings}>
                <div
                  className={"slide activeSlide"}
                  id="game1"
                  key={images.map}
                >
                  <img src={game1} alt="image" />
                  <div className="buts">
                    <ul>
                      <li>
                        {" "}
                        <a href="#">Play Now</a>
                      </li>
                      <li>
                        {" "}
                        <a href="https://youtu.be/4yHhsZou5HY" target="_blank">
                          Watch Trailer
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className={"slide activeSlide"} key={images.map}>
                  <img src={game2} alt="image" />
                  <h3>COMING SOON</h3>
                </div>
                <div className={"slide activeSlide"} key={images.map}>
                  <img src={game3} alt="image" />
                  <h3>COMING SOON</h3>
                </div>
                <div className={"slide activeSlide"} key={images.map}>
                  <img src={game4} alt="image" />
                  <h3>COMING SOON</h3>
                </div>
              </Slider>
            </div>
          </div>
        </div>
        {/* Contact */}
        <div className="contact">
          <h2>CONTACT US</h2>
          <h4 id="above">We'd Love to hear from you!</h4>
          <div className="wrapper-co">
            <div className="form-container">
              <form className="form" onSubmit={sendEmail}>
                <div className="form-name">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name"
                    required
                  />
                </div>
                <div className="form-email">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="form-message">
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Message"
                    required=""
                  ></textarea>
                </div>
                <div className="center-align">
                  <ReCaptchaV2
                    sitekey="6LdYi10eAAAAAHWU89tjxpmTA_aNeWMg8OXIHgpj"
                    onChange={handleToken}
                    onExpire={handleExpire}
                  />
                  <button type="submit" id="btn">
                    <FaPaperPlane />{" "}
                  </button>
                </div>
              </form>
              <div className="direct-contact-container">
                <h4>Join Our Community</h4>
                <hr />
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
                <hr />
              </div>
            </div>
          </div>
        </div>
        <footer>
          <div className="footers">
            <a href="#">Privacy Policy</a>
            <hr />
            <div className="lower">
              <img src={icono} alt="icon" />
              <div className="text">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores repudiandae soluta maiores! </p>
                <p className="tel"><strong>Tel:</strong> 123-456-7890</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default HomeComponent;
