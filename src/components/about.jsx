import React, { useState, useEffect, useRef, LinkProps } from "react";
import { HashLink } from "react-router-hash-link";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import GGworldBro from "../images/icons/community.png";
import Korea from "../images/logokor.png";
import Dubai from "../images/dubai.png";
import GGR from "../images/game2.jpg";
import logo1 from "../images/icons/Gogo_Racing_Logo_Straight.png";
import logo2 from "../images/scionlogo.png";
import logo3 from "../images/icons/gogoc.png";
import { FaRegArrowAltCircleUp } from "react-icons/fa";
import icono from "../images/icons/logo.png";
import logo4 from "../images/icons/gogoworld.png";
import {
  FaArrowAltCircleLeft,
  FaMapMarked,
  FaArrowAltCircleRight,
  FaEnvelope,
  FaFacebook,
  FaRegEye,
  FaTwitter,
  FaReddit,
  FaYoutube,
} from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import {
  GiBrain,
  GiCrownedHeart,
  GiShakingHands,
  GiHumanEar,
} from "react-icons/gi";
import { IoLogoAndroid, IoLogoApple } from "react-icons/io";
import GGRLOGO from "../images/icons/gogoracing.png";
import Ear from "../images/icons/Ear_gamers.png";
import brain from "../images/icons/Heck_1.png";
import Eye from "../images/icons/eye.png";
import Heart from "../images/icons/Heart_QA.png";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="next"
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <FaArrowAltCircleRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="prev"
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <FaArrowAltCircleLeft />
    </div>
  );
}
const AboutComponent = ({ props, ref, currentRoute }) => {
  const [botoons, setBotoons] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setBotoons(true);
    } else {
      setBotoons(false);
    }
  };

  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);
  });

  //logo scroll function

  window.addEventListener("scroll", changeBackground);
  // Title
  useEffect(() => {
    document.title = "Black Spot Studio | About Us";
  }, []);
  const settings = {
    Infinite: true,
    lazyload: true,
    speed: 200,
    slidesToShow: 1,
    fade: true,
    slidesToScroll: 1,
    centerPadding: "0",
    centerMode: true,
    dots: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="about wrapper">
      <div className="container-about">
        <div className="acontainer-1">
          <h1>BLACK SPOT STUDIO PH</h1>
          <h2>Online Game Publisher and Developer</h2>
          <div id="line"></div>
          <div className="list-nav">
            <ul>
              <li>
                <HashLink smooth to="/about#about" id="up">
                  About Us
                </HashLink>
              </li>
              <li>
                <HashLink smooth to="/about#brands" id="up">
                  Brands
                </HashLink>
              </li>
              <li>
                <HashLink smooth to="/about#partners" id="up">
                  Partners
                </HashLink>
              </li>
            </ul>
          </div>
          <div>
            <svg
              className="waves"
              viewBox="0 24 150 28"
              preserveAspectRatio="none"
              shapeRendering="auto"
            >
              <defs>
                <path
                  id="gentle-wave"
                  d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                />
              </defs>
              <g className="parallax">
                <use
                  href="#gentle-wave"
                  x="48"
                  y="0"
                  fill="rgba(255,255,255,0.7"
                />
                <use
                  href="#gentle-wave"
                  x="48"
                  y="3"
                  fill="rgba(255,255,255,0.5)"
                />
                <use
                  href="#gentle-wave"
                  x="48"
                  y="5"
                  fill="rgba(255,255,255,0.3)"
                />
                <use href="#gentle-wave" x="48" y="7" fill="#fff" />
              </g>
            </svg>
          </div>
        </div>
        <div className="acontainer-2">
          <h2 id="about">Our Story</h2>
          <div className="line"></div>
          <div className="a-left">
            <div className="astorie" data-aos="zoom-in" data-aos-duration="500">
              <p>
                Black Spot Studio PH, was formed in December 2021 through the
                collaboration of Black Spot Studio Co., Ltd from South Korea and
                Dubai. We- BSS PH specializes in game developing and publishing
                which is suitable for all digital platforms.
              </p>
              <p>
                Today, BLACK SPOT STUDIO PH is developing a game that is a
                “non-fungible token” or NFT for its Filipino audience named GoGo
                Racing. Shortly, our mission is to be one of the biggest game
                developer companies in the Philippines that cater to the needs
                of all Filipino Gamers.
              </p>
            </div>
          </div>
          <h2>Our people</h2>
          <div className="line"></div>
          <div className="a-wrapper">
            <div className="a-wrraps">
              <Slider {...settings}>
                <div
                  className="a-contents1"
                  data-aos="flip-down"
                  data-aos-duration="500"
                >
                  <div className="slide-wrappers">
                    <div className="left">
                      <img src={brain} alt="" />
                    </div>
                    <div className="right">
                      <h4>The Brain of the Game</h4>
                      <div className="line"></div>
                      <p>
                        Our Game developers, the people behind the magic of all
                        games. From making the theme to winning the game.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="a-contents2"
                  data-aos="flip-down"
                  data-aos-duration="500"
                >
                  <div className="slide-wrappers">
                    <div className="left">
                      <img src={Eye} alt="" />
                    </div>
                    <div className="right">
                      <h4>An Eye for the life of Games</h4>
                      <div className="line"></div>
                      <p>
                        The Marketing team, the creative people who have the eye
                        to connect the game to its audience. From
                        conceptualizing the brand to making art for the game.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="a-contents3"
                  data-aos="flip-down"
                  data-aos-duration="500"
                >
                  <div className="slide-wrappers">
                    <div className="left">
                      <img src={Heart} alt="" />
                    </div>
                    <div className="right">
                      <h4>The Heart of the Perfect Game</h4>
                      <div className="line"></div>
                      <p>
                        The Quality Assurance team, the perfectionist gamers of
                        the company. Has love for the game, and checking it to
                        give the player the best quality of entertainment.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="a-contents4"
                  data-aos="flip-down"
                  data-aos-duration="500"
                >
                  <div className="slide-wrappers">
                    <div className="left">
                      <img src={GGworldBro} alt="" />
                    </div>
                    <div className="right">
                      <h4>The Lending Hands of the Game</h4>
                      <div className="line"></div>
                      <p>
                        They grow with the players all around the gaming
                        community. They help and give advice to all our players.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="a-contents4"
                  data-aos="flip-down"
                  data-aos-duration="500"
                >
                  <div className="slide-wrappers">
                    <div className="left">
                      <img src={Ear} alt="" />
                    </div>
                    <div className="right">
                      <h4>The Ear for the Gamers</h4>
                      <div className="line"></div>
                      <p>
                        They can hear you gamers! Our Customer Service team is
                        here ready to listen and give you updates on all your
                        inquiries.
                      </p>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>

          {/*
          <h2>Our people</h2>
          <div className="line"></div>
          <div className="a-wrapper">
            <div className="right">
              <div className="atop">
                <div
                  className="a-contents1"
                  data-aos="flip-down"
                  data-aos-duration="500"
                >
                  <GiBrain />
                  <h4>The Brain of the Game</h4>
                  <p>
                    Our Game developers, the people behind the magic of all
                    games. From making the theme to winning the game.
                  </p>
                </div>
                <div
                  className="a-contents2"
                  data-aos="flip-down"
                  data-aos-duration="500"
                >
                  <FaRegEye />
                  <h4>An Eye for the life of Games</h4>
                  <p>
                    The Marketing team, the creative people who have the eye to
                    connect the game to its audience. From conceptualizing the
                    brand to making art for the game.
                  </p>
                </div>
              </div>
              <div className="amiddle">
                <div
                  className="a-contents3"
                  data-aos="flip-down"
                  data-aos-duration="500"
                >
                  <GiCrownedHeart />
                  <h4>The Heart of the Perfect Game</h4>
                  <p>
                    The Quality Assurance team, the perfectionist gamers of the
                    company. Has love for the game, and checking it to give the
                    player the best quality of entertainment.
                  </p>
                </div>
                <div
                  className="a-contents4"
                  data-aos="flip-down"
                  data-aos-duration="500"
                >
                  <GiShakingHands />
                  <h4>The Lending Hands of the Game</h4>
                  <p>
                    They grow with the players all around the gaming community.
                    They help and give advice to all our players.
                  </p>
                </div>
              </div>
              <div className="abottom">
                <div
                  className="a-contents5"
                  data-aos="flip-down"
                  data-aos-duration="500"
                >
                  <GiHumanEar />
                  <h4>The Ear for the Gamers</h4>
                  <p>
                    They can hear you gamers! Our Customer Service team is here
                    ready to listen and give you updates on all your inquiries.
                  </p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
        <div className="acontainer-3" id="brands">
          <h2>Our Brands</h2>
          <div className="line"></div>
          <div className="agames">
            <ul>
              <li>
                <Link to="/gogoracing">
                  <img src={logo1} alt="" />
                </Link>
                <ul>
                  <li>
                    <p>
                      <IoLogoAndroid />
                      <IoLogoApple />
                    </p>
                  </li>
                </ul>
                <p>
                  Ready your car, finish the line and win a coin and be
                  incentivized. Play to Earn? It’s a surprise.
                </p>
              </li>
              <li>
                <Link to="/scion">
                  <img src={logo2} alt="" />
                </Link>
                <ul>
                  <li>
                    <p>
                      <IoLogoAndroid />
                      <IoLogoApple />
                    </p>
                  </li>
                </ul>
                <p>
                  An Automatic First-Person Shooting game! The higher the rank,
                  the better performance. The battle is ready for you.
                </p>
              </li>
              <li>
                <Link to="/gogoworld">
                  <img src={logo4} alt="" />
                </Link>
                <small>Coming Soon</small>
              </li>
              <li>
                <Link to="/gogochain">
                  <img src={logo3} alt="" />
                </Link>
                <small>Coming Soon</small>
              </li>
            </ul>
          </div>
        </div>
        <div className="acontainer-4" id="partners">
          <h2>Our Parters </h2>
          <div className="line"></div>
          <div className="aour-partners-wrapper">
            <div className="kor">
              <a href="http://blackspotstudio.com/">
                <img src={Korea} alt="" />
              </a>
            </div>
            <div className="dub">
              <a href="http://blackspotstudio.com/">
                <img src={Dubai} alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-section">
          <footer className="footer-distributed">
            <div className="footer-left" data-aos="fade-up">
              <img src={icono} alt="" id="footer-logo" />
              <ul className="footer-links">
                <Link
                  to="/about"
                  {...props}
                  ref={ref}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <li>About Us</li>
                </Link>
                <Link
                  to="/privacy"
                  {...props}
                  ref={ref}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <li>Privacy & Policy</li>
                </Link>
                <Link
                  to="/terms-of-use"
                  {...props}
                  ref={ref}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <li>Terms of Use</li>
                </Link>
                <Link
                  to="/job"
                  {...props}
                  ref={ref}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <li>Career</li>
                </Link>

                <HashLink smooth to="/#contact">
                  <li>Contact Us</li>
                </HashLink>
              </ul>

              <p className="footer-company-name">
                Copyright © Black Spot Studio PH{" "}
              </p>
            </div>

            <div className="footer-center" data-aos="fade-up">
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
        <div className={botoons ? "botoons active" : "botoons"}>
          <HashLink smooth to="/about#" id="up">
            <FaRegArrowAltCircleUp />
          </HashLink>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
