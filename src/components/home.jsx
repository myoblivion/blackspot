import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ReCaptchaV2 from "react-google-recaptcha";
import GifLoader from "react-gif-loader";

// Devices
import Phone from "../images/icons/phone.png";
import Laptop from "../images/icons/laptop.png";
// Characters
// Scion Fist
import Irina from "../images/characters/ch16.png";
import Risa from "../images/characters/ch11.png";

// Gogo Characters
import Mongi from "../images/characters/Mongi.png";
import Pengsuni from "../images/characters/Pengsuni.png";
import Euik from "../images/characters/Euik.png";
import Eureungi from "../images/characters/Eureungi.png";

// logo
import ScionLogo from "../images/scionlogo.png";
import Gogochain from "../images/icons/gogochain.png";
import Gogoworld from "../images/icons/gogoworld.png";
import Gogoracing from "../images/icons/gogoracing.png";

// Images
import game1 from "../images/edit/banner1.png";
import game2 from "../images/edit/banner2.png";
import game3 from "../images/edit/banner3.png";
import game4 from "../images/edit/banner4.png";
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
  FaWindows,
  FaAppStore,
  FaGooglePlay,
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
  // :D

  const [imageIndex, setImageIndex] = useState(0);
  const settings = {
    Infinite: true,
    lazyload: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    dots: true,
    centerPadding: 0,
    arrows: false,
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
        <div className="slider">
          <input name="control" id="page1" type="radio" defaultChecked />
          <input name="control" id="page2" type="radio" />
          <input name="control" id="page3" type="radio" />
          <input name="control" id="page4" type="radio" />
          <div className="slider--el slider--el-1 anim-4parts">
            <div className="slider--el-bg">
              <div className="part top left"></div>
              <div className="part top right"></div>
              <div className="part bot left"></div>
              <div className="part bot right"></div>
            </div>
            <div className="slider--el-content">
              <h2 className="slider--el-heading"></h2>
            </div>
          </div>
          <div className="slider--el slider--el-2 anim-9parts">
            <div className="slider--el-bg">
              <div className="part left-top"></div>
              <div className="part mid-top"></div>
              <div className="part right-top"></div>
              <div className="part left-mid"></div>
              <div className="part mid-mid"></div>
              <div className="part right-mid"></div>
              <div className="part left-bot"></div>
              <div className="part mid-bot"></div>
              <div className="part right-bot"></div>
            </div>
            <div className="slider--el-content">
              <h2 className="slider--el-heading"></h2>
            </div>
          </div>
          <div className="slider--el slider--el-3 anim-5parts">
            <div className="slider--el-bg">
              <div className="part part-1"></div>
              <div className="part part-2"></div>
              <div className="part part-3"></div>
              <div className="part part-4"></div>
              <div className="part part-5"></div>
            </div>
            <div className="slider--el-content">
              <h2 className="slider--el-heading"></h2>
            </div>
          </div>
          <div className="slider--el slider--el-4 anim-3parts">
            <div className="slider--el-bg">
              <div className="part left"></div>
              <div className="part mid"></div>
              <div className="part right"></div>
            </div>
            <div className="slider--el-content">
              <h2 className="slider--el-heading"></h2>
            </div>
          </div>
          <div className="slider--control left">
            <label className="page1-left" htmlFor="page1"></label>
            <label className="page2-left" htmlFor="page2"></label>
            <label className="page3-left" htmlFor="page3"></label>
            <label className="page4-left" htmlFor="page4"></label>
          </div>
          <div className="slider--control right">
            <label className="page1-right" htmlFor="page1"></label>
            <label className="page2-right" htmlFor="page2"></label>
            <label className="page3-right" htmlFor="page3"></label>
            <label className="page4-right" htmlFor="page4"></label>
          </div>
        </div>

        <div className="container-1">
          <div className="container-wrapper"></div>
        </div>
        {/* Game */}
        <div className="container-2" id="game">
          <div className="game-wrapper">
            <div className="game-title">
              <h2>Black Spot Studio PH</h2>
              <h4 className="fourz">
                Four exciting games are being developed for your entertainment.
              </h4>
              <div className="line"></div>
            </div>
            <div className="sliders">
              <Slider {...settings}>
                <div className="slider-image" id="firstgame">
                  <img src={game1} alt="" />
                  <div className="gamedes">
                    <div className="logoz">
                      <div className="icons">
                        <div className="sccionlogo">
                          <Link
                            to="/scion"
                            style={
                              currentRoute === "scion"
                                ? { borderBottom: "2px solid yellow" }
                                : { borderBottom: "2px solid transparent" }
                            }
                          >
                            <img src={ScionLogo} alt="Scion Fist Logo" />
                          </Link>
                        </div>
                      </div>
                      <ul className="icon-list">
                        <li>
                          <a href="#">
                            <FaGooglePlay />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <FaAppStore />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <FaWindows />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="video">
                      <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube-nocookie.com/embed/3uAqBci_Yog"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </div>
                <div className="slider-image">
                  <img src={game2} alt="Game" />
                </div>
                <div className="slider-image">
                  <img src={game3} alt="Game" />
                </div>
                <div className="slider-image">
                  <img src={game4} alt="Game" />
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
                <h4>Join Our Community!</h4>
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
