import React, { useState, useEffect, useRef, LinkProps } from "react";

import Slider from "react-slick";
import ScionLogo from "../images/scionlogo.png";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
// Promote
import promote1 from "../images/promote1.png";
import promote2 from "../images/promote2.png";
import promote3 from "../images/promote3.png";
import promote4 from "../images/promote4.png";
import promote5 from "../images/promote5.png";
import promote6 from "../images/promote6.png";
// Feautures
import feautures from "../images/background/feauture.png";
import feautures2 from "../images/background/feauture2.png";
import feautures3 from "../images/background/feauture3.png";
// Characters
import ch2 from "../images/characters/ch2.png";
import ch3 from "../images/characters/ch3.png";
import ch4 from "../images/characters/ch4.png";
import ch5 from "../images/characters/ch5.png";
import ch6 from "../images/characters/ch6.png";
import ch7 from "../images/characters/ch7.png";
import ch8 from "../images/characters/ch8.png";
import ch9 from "../images/characters/ch9.png";
import ch10 from "../images/characters/ch10.png";
import ch11 from "../images/characters/ch11.png";
import ch14 from "../images/characters/ch14.png";
import ch16 from "../images/characters/ch16.png";
import ch17 from "../images/characters/ch17.png";
import prev from "../images/arrow-left.png";
import next from "../images/arrow-right.png";
// Weapons
import w1 from "../images/weapons/w1.png";
import w2 from "../images/weapons/w2.png";
import w3 from "../images/weapons/w3.png";
import w4 from "../images/weapons/w4.png";
import w5 from "../images/weapons/w5.png";
import w6 from "../images/weapons/w6.png";
import w7 from "../images/weapons/w7.png";
import w8 from "../images/weapons/w8.png";
import w9 from "../images/weapons/w9.png";
import w10 from "../images/weapons/w10.png";
import w11 from "../images/weapons/w11.png";
import w12 from "../images/weapons/w12.png";
import w13 from "../images/weapons/w13.png";
import w14 from "../images/weapons/w14.png";
import w15 from "../images/weapons/w15.png";

import googleplay from "../images/icons/google.png";
import applestore from "../images/icons/i-os.png";

import icono from "../images/icons/logo.png";

import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaMapMarked,
  FaPhone,
  FaReddit,
  FaRegArrowAltCircleUp,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const NextArrow = ({ onClick }) => {
  return (
    <div className="arrow next" onClick={onClick} key={NextArrow}>
      <img src={next} alt="" />
    </div>
  );
};
const PrevArrow = ({ onClick }) => {
  return (
    <div className="arrow prev" onClick={onClick} key={PrevArrow}>
      <img src={prev} alt="" />
    </div>
  );
};

const ScionComponent = ({ props, ref, currentRoute }) => {
  const settings = {
    Infinite: true,
    lazyload: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    arrows: true,
    fade: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  // Title
  useEffect(() => {
    document.title = "Black Spot Studio PH | Scion Fist";
  }, []);
  return (
    <div className="scion wrapper">
      <section className="wrapper1">
        <div className="scion-links" data-aos="fade-up">
          <ul>
            <li>
              <a href="https://www.facebook.com/ScionFistPhilippines/">
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/scionfistphilippinesofficial/?hl=en">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/ScionFist_PH">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="https://www.reddit.com/r/ScionFistPHofficial/">
                <FaReddit />
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section className="wrapper2">
        <div className="titles" data-aos="fade-right">
          <h2>Prologue</h2>
        </div>
        <p className="story" data-aos="fade-left">
          The world has been devastated by nuclear war in the near future. The
          ruined world began to divide into two factions. As the struggle for
          resources for survival intensifies, War has become commonplace, and
          the massacre of civilians has been repeated. The civilian forces
          opposed this and planned resistance as a private squad, The code name
          <span className="orange"> Scientificist</span> will be{" "}
          <span className="orange">founded</span> ...
        </p>
      </section>
      <section className="wrapper3">
        <div className="titles">
          <h2 data-aos="fade-up">Game Intro</h2>
        </div>
        <div className="promotes">
          <div className="intro-wrap">
            <div className="intro-img">
              <img src={promote1} alt="" data-aos="zoom-in" />
            </div>
            <div className="intro-img">
              <img src={promote2} alt="" data-aos="zoom-in" />
            </div>
            <div className="intro-img">
              <img src={promote3} alt="" data-aos="zoom-in" />
            </div>
            <div className="intro-img">
              <img src={promote4} alt="" data-aos="zoom-in" />
            </div>
            <div className="intro-img">
              <img src={promote5} alt="" data-aos="zoom-in" />
            </div>
            <div className="intro-img">
              <img src={promote6} alt="" data-aos="zoom-in" />
            </div>
          </div>
        </div>
      </section>
      <section className="wrapper4">
        <div className="titles" data-aos="fade-down">
          <h2>Features</h2>
        </div>
        <div className="feauture-wrap" data-aos="fade-left">
          <div className="feauture-img">
            <img src={feautures} alt="" />
          </div>
          <div className="feauture-img">
            <img src={feautures2} alt="" />
          </div>
          <div className="feauture-img">
            <img src={feautures3} alt="" />
          </div>
        </div>
      </section>
      <section className="wrapper5">
        <h2 className="titles">Characters</h2>
        <div className="characters">
          <Slider {...settings}>
            <div className="character">
              <img src={ch2} alt="" />
              <div className="ch-description">
                <div className="name">
                  <h4>Crefford</h4>
                </div>
                <div className="story">
                  A poisonous species recognized even within the striker
                  platoon, known for its roughness. Rumor has it that there is
                  no mercy toward the enemy, and that the task given has never
                  failed.
                </div>
              </div>
            </div>
            <div className="character">
              <img src={ch3} alt="" />
              <div className="ch-description">
                <div className="name">
                  <h4>Dale</h4>
                </div>
                <div className="story">
                  The leader of an assault team that enjoys blood-splattering
                  wars and battles. When judged to be an enemy, he attacks
                  without thinking about the back, and his skills are as good as
                  his aggression.
                </div>
              </div>
            </div>
            <div className="character">
              <img src={ch4} alt="" />
              <div className="ch-description">
                <div className="name">
                  <h4>Elena</h4>
                </div>
                <div className="story">
                  Allied intelligence analyst and combatant. From an early age,
                  she completed the basic training of the Allied Forces with
                  genius intelligence, and is fluent in how to handle weapons.
                  She is a beauty from all sides, with information analysis,
                  advanced equipment, and combat.
                </div>
              </div>
            </div>
            <div className="character">
              <img src={ch5} alt="" />
              <div className="ch-description">
                <div className="name">
                  <h4>Grace</h4>
                </div>
                <div className="story">
                  A member of a sniper unit who has just started making a name
                  for himself as Snyder's apprentice. His skill in handling
                  snipers is outstanding, and there is an evaluation that his
                  skill surpasses that of Snyder.
                </div>
              </div>
            </div>
            <div className="character">
              <img src={ch6} alt="" id="irinaa" />
              <div className="ch-description">
                <div className="name">
                  <h4>Irina</h4>
                </div>
                <div className="story">
                  A spy belonging to the Secret Service. She is good at
                  collecting information, and her top area of expertise is
                  beauty. Although she is a member of the Secret Service, she
                  has completed the SAS training course, so her combat power is
                  high.
                </div>
              </div>
            </div>
            <div className="character">
              <img src={ch7} alt="" />
              <div className="ch-description">
                <div className="name">
                  <h4>Jack</h4>
                </div>
                <div className="story">
                  The leader of the striker platoon who is somewhat radical but
                  leads the members with excellent leadership. As well as
                  individual combat skills, he excels in situational judgment
                  and quick tactics.
                </div>
              </div>
            </div>
            <div className="character">
              <img src={ch8} alt="" />
              <div className="ch-description">
                <div className="name">
                  <h4>Maya</h4>
                </div>
                <div className="story">
                  A veteran who originally traveled the battlefield as a
                  freelance mercenary. After terminating the contract due to an
                  order to kill civilians to maintain security during the
                  mission, he joins the Scientific Fist.
                </div>
              </div>
            </div>
            <div className="character">
              <img src={ch9} alt="" />
              <div className="ch-description">
                <div className="name">
                  <h4>Murdoch</h4>
                </div>
                <div className="story">
                  The elite leader among the elite who participated in numerous
                  operations. Mainly in charge of field command,“He has
                  excellent individual skills and is trusted by his superiors.”
                </div>
              </div>
            </div>
            <div className="character">
              <img src={ch10} alt="" />
              <div className="ch-description">
                <div className="name">
                  <h4>Raven</h4>
                </div>
                <div className="story">
                  An elite special forces member who is very good at CQB and
                  handles all guns well. With a solid military spirit, he is a
                  professional among pros who can do any task given the orders
                  of his superiors.
                </div>
              </div>
            </div>
            <div className="character">
              <img src={ch11} alt="" id="risaa" />
              <div className="ch-description">
                <div className="name">
                  <h4>Risa</h4>
                </div>
                <div className="story">
                  A poisonous species recognized even within the striker
                  platoon, known for its roughness. Rumor has it that there is
                  no mercy toward the enemy, and that the task given has never
                  failed.
                </div>
              </div>
            </div>

            <div className="character">
              <img src={ch14} alt="" />
              <div className="ch-description">
                <div className="name">
                  <h4>Snyder</h4>
                </div>
                <div className="story">
                  Special Forces member in a veil. They are mainly in charge of
                  secret missions within the unit, and are very good at sniping.
                </div>
              </div>
            </div>

            <div className="character">
              <img src={ch16} alt="" id="small" />
              <div className="ch-description">
                <div className="name">
                  <h4>Steven</h4>
                </div>
                <div className="story">
                  The first-class power of the striker platoon with a natural
                  fighting sense. He has the ability of a monster to wield all
                  weapons proficiently
                </div>
              </div>
            </div>
            <div className="character">
              <img src={ch17} alt="" />
              <div className="ch-description">
                <div className="name">
                  <h4>Taylor</h4>
                </div>
                <div className="story">
                  A simple and ignorant extremist who doesn't think about
                  battles or actions. With hefty power, he treats very heavy
                  machine guns like toys.
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      <section className="wrapper6">
        <h2 className="titles">Weapons</h2>
        <div className="weapon-wrapper">
          <div className="weapon">
            <h4>
              <span>AR</span> AKM
            </h4>
            <img src={w1} alt="" data-aos="flip-down" />

            <div className="line1"></div>
          </div>
          <div className="weapon">
            <h4>
              <span>SR</span> AWM
            </h4>
            <img src={w2} alt="" data-aos="flip-down" />

            <div className="line2"></div>
          </div>
          <div className="weapon">
            <h4>
              <span>AR</span> FAMAS
            </h4>
            <img src={w4} alt="" data-aos="flip-down" />

            <div className="line3"></div>
          </div>
          <div className="weapon">
            <h4>
              <span>SMG</span> KRISS
            </h4>
            <img src={w6} alt="" data-aos="flip-down" />

            <div className="line"></div>
          </div>
          <div className="weapon">
            <h4>
              <span>AR</span> M4A3
            </h4>
            <img src={w7} alt="" data-aos="flip-down" />

            <div className="line"></div>
          </div>
          <div className="weapon">
            <h4>
              <span>SR</span> M110
            </h4>
            <img src={w8} alt="" data-aos="flip-down" />

            <div className="line"></div>
          </div>
          <div className="weapon">
            <h4>
              <span>MG</span> M249
            </h4>
            <img src={w9} alt="" data-aos="flip-down" />

            <div className="line"></div>
          </div>
          <div className="weapon">
            <h4>
              <span>SG</span> M1216
            </h4>
            <img src={w10} alt="" data-aos="flip-down" />

            <div className="line"></div>
          </div>
          <div className="weapon">
            <h4>
              <span>SMG</span> MP5
            </h4>
            <img src={w11} alt="" data-aos="flip-down" />

            <div className="line"></div>
          </div>
          <div className="weapon">
            <h4>
              <span>SMG</span> P90
            </h4>
            <img src={w12} alt="" data-aos="flip-down" />

            <div className="line"></div>
          </div>
          <div className="weapon">
            <h4>
              <span>SG</span> REMINGTON
            </h4>
            <img src={w13} alt="" data-aos="flip-down" />

            <div className="line"></div>
          </div>
          <div className="weapon">
            <h4>
              <span>SR</span> TAC15
            </h4>
            <img src={w14} alt="" data-aos="flip-down" />

            <div className="line"></div>
          </div>
        </div>
      </section>
      <section className="playnow">
        <h1 data-aos="flip-up">DOWNLOAD NOW</h1>
        <ul data-aos="flip-up">
          <li>
            <a
              href="https://play.google.com/store/apps/details?id=com.blackspotstudio.scionfist"
              target="_blank"
            >
              <img src={googleplay} alt="" />
            </a>
          </li>
          <li>
            <a
              href="https://apps.apple.com/ph/app/scion-fist/id1591386655"
              target="_blank"
            >
              <img src={applestore} alt="" />
            </a>
          </li>
        </ul>
      </section>
      <div className="section">
        <footer className="footer-distributed">
          <div className="footer-left" data-aos="fade-up">
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

              <HashLink smooth to="/#contact">
                {" "}
                Contact Us
              </HashLink>
            </p>

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
                <a href="mailto:support@company.com">
                  {" "}
                  <FaEnvelope /> support@company.com
                </a>
              </p>
            </div>
          </div>

          <div className="footer-right" data-aos="fade-up">
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
          <HashLink smooth to="/scion#" id="up">
            {" "}
            <FaRegArrowAltCircleUp />
          </HashLink>
        </div>
      </div>
    </div>
  );
};

export default ScionComponent;
