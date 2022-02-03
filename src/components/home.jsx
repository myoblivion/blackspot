import React, { useState, useEffect } from "react";
// Images

import logo from "../images/logorandom.png";
import game1 from "../images/cards/scionfist.jpg";
import game2 from "../images/cards/gogoracing.jpg";
import game3 from "../images/cards/gogochain.jpg";
import game4 from "../images/cards/gogoworld.jpg";
import android from "../images/icons/android.png";
// import character from "../images/characters/Steven_blue.png";
// import character2 from "../images/characters/Grace.png";
// Images for social
import facebook from "../images/icons/facebook.png";
import instagram from "../images/icons/instagram.png";
import twitter from "../images/icons/twitter.png";
import reddit from "../images/icons/reddit.png";
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from "react-icons/fa"

// Image Js
import emailjs from "emailjs-com";
import Slider from "react-slick";

const images = [game1, game2, game3, game4];

const HomeComponent = () => {

  const NextArrow = ({onClick}) => {
    return (
      <div className="arrow next" onClick={onClick} key={NextArrow}>
        <FaArrowAltCircleRight />
      </div>
    )
  }
  const PrevArrow = ({onClick}) => {
    return (
      <div className="arrow prev" onClick={onClick} key={PrevArrow}>
        <FaArrowAltCircleLeft />
      </div>
    )
  }
  const [imageIndex, setImageIndex] = useState(0)

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
          <div className="container-wrapper">
            <div className="logo">
              <div className="logo-img">
                <img src={logo} alt="Black Spot Studio Philippines" />
              </div>
            </div>
          </div>
        </div>
        {/* Games */}
        <div className="container-2" id="game">
          <div className="game-wrapper">
            <div className="game-title">
              <h2>Our Games</h2>
            </div>
            <Slider {...settings}>
              {images.map((img, idx) => (
                <div className={idx == imageIndex ? "slide activeSlide" : "slide"}>
                  <img src={img} alt={img} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
        {/* Contact */}
        <div className="contact">
          <form className="form" onSubmit={sendEmail}>
            <div className="containers">
              <h2>CONTACT US</h2>
              <div className="rows">
                <div className="col-8">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    required
                  />
                  <span className="separator"> </span>
                </div>
                <div className="col-8">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    required
                  />
                  <span className="separator"> </span>
                </div>
              </div>
              <div className="message">
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                ></textarea>
                <span className="separator"> </span>
              </div>
              <div className="btn">
                <input type="submit" className="btn-btn" value="Send" />
              </div>
            </div>
          </form>
          <div className="socials">
            <h2>Socials</h2>
            <div className="sc-container">
              <a
                href="https://www.facebook.com/BlackspotstudioPH"
                target="_blank"
              >
                <img src={facebook} alt="Facebook" />
              </a>
              <a
                href="https://www.instagram.com/phblackspotstudio/"
                target="_blank"
              >
                <img src={instagram} alt="Instagram" />
              </a>
              <a
                href="https://www.reddit.com/r/BlackSpotStudioPH/"
                target="_blank"
              >
                <img src={reddit} alt="Reddit" />
              </a>
              <a href="https://twitter.com/BlackSpotPH" target="_blank">
                <img src={twitter} alt="Twitter" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
