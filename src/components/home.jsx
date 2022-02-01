import React from "react";

// Images

import logo from "../images/logorandom.png";
import game1 from "../images/cards/scionfist.png";
import game2 from "../images/cards/gogoracing.png";
import game3 from "../images/cards/gogochain.png";
import game4 from "../images/cards/gogoworld.png";
import android from "../images/icons/android.png";
import character from "../images/characters/Steven_blue.png";
import character2 from "../images/characters/Grace.png";
// Images for social
import facebook from "../images/icons/facebook.png";
import instagram from "../images/icons/instagram.png";
import twitter from "../images/icons/twitter.png";
import reddit from "../images/icons/reddit.png";

// Image Js
import emailjs from "emailjs-com";

const HomeComponent = () => {
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
            <ul className="game-list">
              <li className="game-item">
                <a href="#">
                  <img
                    className="game-banner"
                    src={game1}
                    alt="Scion Fist"
                    sizes="(min-width: 1890px) 855px,(min-width: 1280px) calc(50vw - 90px),(min-width: 960px) calc(50vw - 50px),calc(100vw - 40px)"
                  />
                  <div className="game-content">
                    <h3>Scion Fist</h3>
                    <span>Coming Soon</span>
                    <img src={android} alt="android" />
                  </div>
                </a>
              </li>
              <li className="game-item">
                <a href="#">
                  <img
                    className="game-banner"
                    src={game2}
                    alt="Go Go Racing"
                    sizes="(min-width: 1890px) 855px,(min-width: 1280px) calc(50vw - 90px),(min-width: 960px) calc(50vw - 50px),calc(100vw - 40px)"
                  />
                  <div className="game-content">
                    <h3>Go Go Racing</h3>
                    <span>Coming Soon</span>
                    <img src={android} alt="android" />
                  </div>
                </a>
              </li>
              <li className="game-item">
                <a href="#">
                  <img
                    className="game-banner"
                    src={game3}
                    alt="Go GO Chain"
                    sizes="(min-width: 1890px) 855px,(min-width: 1280px) calc(50vw - 90px),(min-width: 960px) calc(50vw - 50px),calc(100vw - 40px)"
                  />
                  <div className="game-content">
                    <h3>Go Go Chain</h3>
                    <span>Coming Soon</span>
                    <img src={android} alt="android" />
                  </div>
                </a>
              </li>
              <li className="game-item">
                <a href="#">
                  <img
                    className="game-banner"
                    src={game4}
                    alt="Scion Fist"
                    sizes="(min-width: 1890px) 855px,(min-width: 1280px) calc(50vw - 90px),(min-width: 960px) calc(50vw - 50px),calc(100vw - 40px)"
                  />
                  <div className="game-content">
                    <h3>Go Go World</h3>
                    <span>Coming Soon</span>
                    <img src={android} alt="android" />
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Brand */}
        <div className="brand">
          <h2>BRAND</h2>
          <span className="character1">
            <img src={character} alt="Scion Fist Character Elena" />
          </span>
          <span className="character2">
            <img src={character2} alt="Scion Fist Character Elena" />
          </span>
          <div className="video-responsive">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube-nocookie.com/embed/4yHhsZou5HY"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
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
