import React, { useState, useEffect, useRef, LinkProps } from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import {
  FaAssistiveListeningSystems,
  FaBrain,
  FaChartLine,
  FaDatabase,
  FaEnvelope,
  FaEye,
  FaFacebook,
  FaGamepad,
  FaHandHolding,
  FaHeadset,
  FaHeart,
  FaInstagram,
  FaLaptopCode,
  FaMapMarked,
  FaPen,
  FaPhone,
  FaReddit,
  FaRegArrowAltCircleUp,
  FaSketch,
  FaTasks,
  FaTwitter,
  FaUsers,
  FaYoutube,
} from "react-icons/fa";
import character from "../images/characters/Tosuni.png";
import icono from "../images/icons/logo.png";
import { AiFillInstagram } from "react-icons/ai";
import krlogo from "../images/logokor.png";
import dubai from "../images/dubai.png";
import ggc from "../images/icons/gogoc.png";
import ggnft from "../images/icons/gogochain.png";
import ggw from "../images/icons/gogoworld.png";
import ggr from "../images/icons/gogoracing.png";
import sf from "../images/scionlogo.png";
const AboutComponent = ({ props, ref, currentRoute }) => {
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
            <img src={character} alt="Tosuni" data-aos="zoom-out" />
          </div>
          <div className="content">
            <h2 data-aos="fade-down">Black Spot Studio PH</h2>
            <div className="line2"></div>
            <span></span>
            <p data-aos="fade-right" data-aos-duration="500">
              {" "}
              <strong>Black Spot Studio PH</strong>, was formed in December 2021
              through the collaboration of <strong>Black Spot Studio Co</strong>
              ., Ltd from South Korea and Dubai. We-{" "}
              <strong>Black Spot Studio PH</strong> specializes in game
              developing and publishing which is suitable for all digital
              platforms. Today, BLACK SPOT STUDIO PH is developing a game that
              is a “non-fungible token” or NFT for its Filipino audience named
              Scion Fist Philippines. Shortly, our mission is to be one of the
              biggest game developer companies in the Philippines that cater to
              the needs of all Filipino Gamers.
            </p>
            <ul className="linksz">
              <li data-aos="flip-down" data-aos-duration="500">
                <HashLink smooth to="/about#work">
                  Work
                </HashLink>
              </li>
              <div className="vertical-line"></div>
              <li data-aos="flip-down" data-aos-duration="500">
                <HashLink smooth to="/about#services">
                  Services
                </HashLink>
              </li>
              <div className="vertical-line"></div>
              <li data-aos="flip-down" data-aos-duration="500">
                <HashLink smooth to="/about#partners">
                  Partners
                </HashLink>
              </li>
            </ul>
            <ul className="icons" data-aos="fade-up" data-aos-duration="500">
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
        <div
          className="section-title-work"
          data-aos="fade-down"
          data-aos-duration="500"
        >
          <h1>Works</h1>
        </div>
        <div className="box-wrapper">
          <div className="baks box1">
            <div
              className="logo-game"
              id="g1"
              data-aos="zoom-in"
              data-aos-duration="500"
            >
              <Link
                to="/scion"
                {...props}
                ref={ref}
                onClick={() => window.scrollTo(0, 0)}
              >
                <img src={sf} alt="" />
              </Link>
            </div>

            <p data-aos="zoom-out">
              An Automatic First-Person Shooting game! The higher the rank, the
              better performance. The battle is ready for you.
            </p>
          </div>
          <div className="baks box2">
            <div
              className="logo-game"
              data-aos="zoom-in"
              data-aos-duration="500"
            >
              <Link
                to="/gogoworld"
                {...props}
                ref={ref}
                onClick={() => window.scrollTo(0, 0)}
              >
                <img src={ggw} alt="" />
              </Link>
            </div>

            <p data-aos="zoom-out">
              Adorable characters living in their own world. Check out how they
              make your world more entertaining.
            </p>
          </div>
          <div className="baks box3">
            <div
              className="logo-game"
              id="g2"
              data-aos="zoom-in"
              data-aos-duration="500"
            >
              <Link
                to="/gogochain"
                {...props}
                ref={ref}
                onClick={() => window.scrollTo(0, 0)}
              >
                <img src={ggc} alt="" />
              </Link>
            </div>
            <p data-aos="zoom-out" data-aos-duration="500">
              Are you ready to explore the dimension of these cute characters?
              They are coming soon to play with you.
            </p>
          </div>
          <div className="baks box4">
            <div
              className="logo-game"
              data-aos="zoom-in"
              data-aos-duration="500"
            >
              <Link
                to="/gogoracing"
                {...props}
                ref={ref}
                onClick={() => window.scrollTo(0, 0)}
              >
                <img src={ggr} alt="" />
              </Link>
            </div>
            <p data-aos="zoom-out" data-aos-duration="500">
              A racing game where you compete with other users using your
              purchased and unique cars. Ready your car, finish the line and win
              a coin and be incentivized. Play to Earn? It’s a surprise.
            </p>
          </div>
        </div>
        <div className="baks box5" id="should">
          <div className="logo-game" data-aos="zoom-in" data-aos-duration="500">
            <img src={ggnft} alt="" />
          </div>
          <p data-aos="zoom-out" data-aos-duration="500">
            Because all Black Spot Studio Philippines games have gogo coins,
            save it and it may turn into a real one!
          </p>
        </div>
      </section>
      <section className="services" id="services">
        <div
          className="section-title-work"
          data-aos="fade-down"
          data-aos-duration="500"
        >
          <h1>Services</h1>
        </div>
        <div className="row-about">
          <div className="service" data-aos="flip-up" data-aos-duration="500">
            <FaBrain className="i" />
            <h2>The Brain of the Game</h2>
            <p>
              Our Game developers, the people behind the magic of all games.
              From making the theme to winning the game.
            </p>
          </div>
          <div className="service" data-aos="flip-up" data-aos-duration="500">
            <FaEye className="i" />
            <h2>An Eye for the life of Games</h2>
            <p>
              The Marketing team, the creative people who have the eye to
              connect the game to its audience. From conceptualizing the brand
              to making art for the game.
            </p>
          </div>
          <div className="service" data-aos="flip-up" data-aos-duration="500">
            <FaHeart className="i" />
            <h2>The Heart of the Perfect Game</h2>
            <p>
              The Quality Assurance team, the perfectionist gamers of the
              company. Has love for the game, and checking it to give the player
              the best quality of entertainment.
            </p>
          </div>
          <div className="service" data-aos="flip-up" data-aos-duration="500">
            <FaUsers className="i" />
            <h2>The Lending Hands of the Game</h2>
            <p>
              They grow with the players all around the gaming community. They
              help and give advice to all our players.
            </p>
          </div>
        </div>
        <div
          className="service"
          id="middle-spot"
          data-aos="flip-up"
          data-aos-duration="500"
        >
          <FaAssistiveListeningSystems className="i" />
          <h2>The Ear for the Gamers</h2>
          <p>
            They can hear you gamers! Our Customer Service team is here ready to
            listen and give you updates on all your inquiries.
          </p>
        </div>
      </section>
      <section className="partners" id="partners">
        <div className="partnerz">
          <div className="section-title-work" data-aos="fade-down">
            <h1>Partners</h1>
          </div>
          <div className="links">
            <ul>
              <li data-aos="fade-right">
                <a href="http://blackspotstudio.com/">
                  <img src={krlogo} alt="" />
                </a>
              </li>
              <li data-aos="fade-left">
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
              <Link
                to="/about"
                {...props}
                ref={ref}
                onClick={() => window.scrollTo(0, 0)}
              >
                About Us
              </Link>
              {/* <Link
                to="/privacy"
                {...props}
                ref={ref}
                onClick={() => window.scrollTo(0, 0)}
              >
                Privacy & Policy
              </Link> */}
              <p>Privacy & Policy</p>
              <Link
                to="/job"
                {...props}
                ref={ref}
                onClick={() => window.scrollTo(0, 0)}
              >
                Career
              </Link>

              <HashLink smooth to="/home#contact">
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
        <div className="bootons">
          <HashLink smooth to="/about#" id="up">
            <FaRegArrowAltCircleUp />
          </HashLink>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
