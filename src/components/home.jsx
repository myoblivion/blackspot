import React, { useState, useEffect } from "react";
// Images

import logo from "../images/logorandom.png";
import game1 from "../images/cards/scionfist.jpg";
import game2 from "../images/cards/gogoracing.jpg";
import game3 from "../images/cards/gogochain.jpg";
import game4 from "../images/cards/gogoworld.jpg";
import scionlogo from "../images/scionlogo.png";
import gogoworld from "../images/icons/gogoworld.png";
import gogochain from "../images/icons/gogochain.png";
import gogoracing from "../images/icons/gogoracing.png";

// Images for social
import facebook from "../images/icons/facebook.png";
import instagram from "../images/icons/instagram.png";
import twitter from "../images/icons/twitter.png";
import reddit from "../images/icons/reddit.png";
import {
  FaRegArrowAltCircleRight,
  FaRegArrowAltCircleLeft,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaReddit,
  FaYoutube,
} from "react-icons/fa";

// Image Js
import emailjs from "emailjs-com";
import Slider from "react-slick";

const images = [game1, game2, game3, game4];

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
                {images.map((img, idx) => (
                  <div
                    className={
                      idx == imageIndex ? "slide activeSlide" : "slide"
                    }
                    key={images.map}
                  >
                    <img src={img} alt={img} />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
        {/* Contact */}
        <div className="contact">
        <h2>CONTACT US</h2>
          <div className="wrapper-co">
            <form className="form" onSubmit={sendEmail}>
              <div className="col-8">
                <input type="text" id="name" name="name" autoFocus required />
                <label htmlFor="name" className="name" >
                  <span className="label-text">Name</span>
                </label>
              </div>
              <div className="col-8">
                <input type="email" id="email" name="email" required />
                <label htmlFor="email" className="email">
                  <span className="label-text">Email</span>
                </label>
              </div>
              <div className="col-8">
                <textarea id="message" cols="30" rows="10" name="message"></textarea>
                <label htmlFor="message" className="message">
                  <span className="label-text">Message</span>
                </label>
              </div>
              <input type="submit" value="Send message" className="button" />
            </form>
            <div className="direct-contact-container">
              <h4> Keep In Touch</h4>
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
                    <FaInstagram />
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
    </div>
  );
};

export default HomeComponent;
