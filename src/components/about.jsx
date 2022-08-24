// import React, { useState, useEffect, useRef, LinkProps } from "react";
// import { HashLink } from "react-router-hash-link";
// import Slider from "react-slick";
// import { Link } from "react-router-dom";
// import GGworldBro from "../images/icons/community.png";
// import Korea from "../images/logokor.png";
// import Dubai from "../images/dubai.png";
// import GGR from "../images/game2.jpg";
// import logo1 from "../images/icons/Gogo_Racing_Logo_Straight.png";
// import logo2 from "../images/scionlogo.png";
// import logo3 from "../images/icons/gogoc.png";
// import icono from "../images/icons/logo.png";
// import logo4 from "../images/icons/gogoworld.png";
// import {
//   FaArrowAltCircleLeft,
//   FaMapMarked,
//   FaArrowAltCircleRight,
//   FaEnvelope,
//   FaFacebook,
//   FaRegEye,
//   FaTwitter,
//   FaReddit,
//   FaYoutube,
// } from "react-icons/fa";
// import { AiFillInstagram } from "react-icons/ai";
// import {
//   GiBrain,
//   GiCrownedHeart,
//   GiShakingHands,
//   GiHumanEar,
// } from "react-icons/gi";
// import { IoLogoAndroid, IoLogoApple } from "react-icons/io";
// import GGRLOGO from "../images/icons/gogoracing.png";
// import Ear from "../images/icons/Ear_gamers.png";
// import brain from "../images/icons/Heck_1.png";
// import Eye from "../images/icons/eye.png";
// import Heart from "../images/icons/Heart_QA.png";

// function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className="next"
//       style={{ ...style, display: "block" }}
//       onClick={onClick}
//     >
//       <FaArrowAltCircleRight />
//     </div>
//   );
// }

// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className="prev"
//       style={{ ...style, display: "block" }}
//       onClick={onClick}
//     >
//       <FaArrowAltCircleLeft />
//     </div>
//   );
// }
// const AboutComponent = ({ props, ref, currentRoute }) => {
//   // Title
//   useEffect(() => {
//     document.title = "Black Spot Studio | About Us";
//   }, []);
//   const settings = {
//     Infinite: true,
//     lazyload: true,
//     speed: 200,
//     slidesToShow: 1,
//     fade: true,
//     slidesToScroll: 1,
//     centerPadding: "0",
//     centerMode: true,
//     dots: false,
//     nextArrow: <SampleNextArrow />,
//     prevArrow: <SamplePrevArrow />,
//   };
//   return (
//     <div className="about wrapper">
//       <div className="container-about">
//         <div className="acontainer-1">
//           <h1>BLACK SPOT STUDIO PH</h1>
//           <h2>Online Game Publisher and Developer</h2>
//           <div id="line"></div>
//           <div className="list-nav">
//             <ul>
//               <li>
//                 <HashLink smooth to="/about#about" id="up">
//                   About Us
//                 </HashLink>
//               </li>
//               <li>
//                 <HashLink smooth to="/about#brands" id="up">
//                   Brands
//                 </HashLink>
//               </li>
//               <li>
//                 <HashLink smooth to="/about#partners" id="up">
//                   Partners
//                 </HashLink>
//               </li>
//             </ul>
//           </div>
//         </div>
//         <div className="acontainer-2">
//           <h2 id="about">Our Story</h2>
//           <div className="line"></div>
//           <div className="a-left">
//             <div className="astorie" data-aos="zoom-in" data-aos-duration="500">
//               <p>
//                 Black Spot Studio PH, was formed in December 2021 through the
//                 collaboration of Black Spot Studio Co., Ltd from South Korea and
//                 Dubai. We- BSS PH specializes in game developing and publishing
//                 which is suitable for all digital platforms.
//               </p>
//               <p>
//                 Today, BLACK SPOT STUDIO PH is developing a game that is a
//                 “non-fungible token” or NFT for its Filipino audience named GoGo
//                 Racing. Shortly, our mission is to be one of the biggest game
//                 developer companies in the Philippines that cater to the needs
//                 of all Filipino Gamers.
//               </p>
//             </div>
//           </div>
//           <h2>Our people</h2>
//           <div className="line"></div>
//           <div className="a-wrapper">
//             <div className="a-wrraps">
//               <Slider {...settings}>
//                 <div
//                   className="a-contents1"
//                   data-aos="flip-down"
//                   data-aos-duration="500"
//                 >
//                   <div className="slide-wrappers">
//                     <div className="left">
//                       <img src={brain} alt="" />
//                     </div>
//                     <div className="right">
//                       <h4>The Brain of the Game</h4>
//                       <div className="line"></div>
//                       <p>
//                         Our Game developers, the people behind the magic of all
//                         games. From making the theme to winning the game.
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//                 <div
//                   className="a-contents2"
//                   data-aos="flip-down"
//                   data-aos-duration="500"
//                 >
//                   <div className="slide-wrappers">
//                     <div className="left">
//                       <img src={Eye} alt="" />
//                     </div>
//                     <div className="right">
//                       <h4>An Eye for the life of Games</h4>
//                       <div className="line"></div>
//                       <p>
//                         The Marketing team, the creative people who have the eye
//                         to connect the game to its audience. From
//                         conceptualizing the brand to making art for the game.
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//                 <div
//                   className="a-contents3"
//                   data-aos="flip-down"
//                   data-aos-duration="500"
//                 >
//                   <div className="slide-wrappers">
//                     <div className="left">
//                       <img src={Heart} alt="" />
//                     </div>
//                     <div className="right">
//                       <h4>The Heart of the Perfect Game</h4>
//                       <div className="line"></div>
//                       <p>
//                         The Quality Assurance team, the perfectionist gamers of
//                         the company. Has love for the game, and checking it to
//                         give the player the best quality of entertainment.
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//                 <div
//                   className="a-contents4"
//                   data-aos="flip-down"
//                   data-aos-duration="500"
//                 >
//                   <div className="slide-wrappers">
//                     <div className="left">
//                       <img src={GGworldBro} alt="" />
//                     </div>
//                     <div className="right">
//                       <h4>The Lending Hands of the Game</h4>
//                       <div className="line"></div>
//                       <p>
//                         They grow with the players all around the gaming
//                         community. They help and give advice to all our players.
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//                 <div
//                   className="a-contents4"
//                   data-aos="flip-down"
//                   data-aos-duration="500"
//                 >
//                   <div className="slide-wrappers">
//                     <div className="left">
//                       <img src={Ear} alt="" />
//                     </div>
//                     <div className="right">
//                       <h4>The Ear for the Gamers</h4>
//                       <div className="line"></div>
//                       <p>
//                         They can hear you gamers! Our Customer Service team is
//                         here ready to listen and give you updates on all your
//                         inquiries.
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </Slider>
//             </div>
//           </div>

//           {/*
//           <h2>Our people</h2>
//           <div className="line"></div>
//           <div className="a-wrapper">
//             <div className="right">
//               <div className="atop">
//                 <div
//                   className="a-contents1"
//                   data-aos="flip-down"
//                   data-aos-duration="500"
//                 >
//                   <GiBrain />
//                   <h4>The Brain of the Game</h4>
//                   <p>
//                     Our Game developers, the people behind the magic of all
//                     games. From making the theme to winning the game.
//                   </p>
//                 </div>
//                 <div
//                   className="a-contents2"
//                   data-aos="flip-down"
//                   data-aos-duration="500"
//                 >
//                   <FaRegEye />
//                   <h4>An Eye for the life of Games</h4>
//                   <p>
//                     The Marketing team, the creative people who have the eye to
//                     connect the game to its audience. From conceptualizing the
//                     brand to making art for the game.
//                   </p>
//                 </div>
//               </div>
//               <div className="amiddle">
//                 <div
//                   className="a-contents3"
//                   data-aos="flip-down"
//                   data-aos-duration="500"
//                 >
//                   <GiCrownedHeart />
//                   <h4>The Heart of the Perfect Game</h4>
//                   <p>
//                     The Quality Assurance team, the perfectionist gamers of the
//                     company. Has love for the game, and checking it to give the
//                     player the best quality of entertainment.
//                   </p>
//                 </div>
//                 <div
//                   className="a-contents4"
//                   data-aos="flip-down"
//                   data-aos-duration="500"
//                 >
//                   <GiShakingHands />
//                   <h4>The Lending Hands of the Game</h4>
//                   <p>
//                     They grow with the players all around the gaming community.
//                     They help and give advice to all our players.
//                   </p>
//                 </div>
//               </div>
//               <div className="abottom">
//                 <div
//                   className="a-contents5"
//                   data-aos="flip-down"
//                   data-aos-duration="500"
//                 >
//                   <GiHumanEar />
//                   <h4>The Ear for the Gamers</h4>
//                   <p>
//                     They can hear you gamers! Our Customer Service team is here
//                     ready to listen and give you updates on all your inquiries.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div> */}
//         </div>
//         <div className="acontainer-3" id="brands">
//           <h2>Our Brands</h2>
//           <div className="line"></div>
//           <div className="agames">
//             <ul>
//               <li>
//                 <Link to="/gogoracing">
//                   <img src={logo1} alt="" />
//                 </Link>
//                 <ul>
//                   <li>
//                     <p>
//                       <IoLogoAndroid />
//                       <IoLogoApple />
//                     </p>
//                   </li>
//                 </ul>
//                 <p>
//                   Ready your car, finish the line and win a coin and be
//                   incentivized. Play to Earn? It’s a surprise.
//                 </p>
//               </li>
//               <li>
//                 <Link to="/scion">
//                   <img src={logo2} alt="" />
//                 </Link>
//                 <ul>
//                   <li>
//                     <p>
//                       <IoLogoAndroid />
//                       <IoLogoApple />
//                     </p>
//                   </li>
//                 </ul>
//                 <p>
//                   An Automatic First-Person Shooting game! The higher the rank,
//                   the better performance. The battle is ready for you.
//                 </p>
//               </li>
//               <li>
//                 <Link to="/gogoworld">
//                   <img src={logo4} alt="" />
//                 </Link>
//                 <small>Coming Soon</small>
//               </li>
//               <li>
//                 <Link to="/gogochain">
//                   <img src={logo3} alt="" />
//                 </Link>
//                 <small>Coming Soon</small>
//               </li>
//             </ul>
//           </div>
//         </div>
//         <div className="acontainer-4" id="partners">
//           <h2>Our Parters </h2>
//           <div className="line"></div>
//           <div className="aour-partners-wrapper">
//             <div className="kor">
//               <a href="http://blackspotstudio.com/">
//                 <img src={Korea} alt="" />
//               </a>
//             </div>
//             <div className="dub">
//               <a href="http://blackspotstudio.com/">
//                 <img src={Dubai} alt="" />
//               </a>
//             </div>
//           </div>
//         </div>
//         <div className="footer-section">
//           <footer className="footer-distributed">
//             <div className="footer-left" data-aos="fade-up">
//               <img src={icono} alt="" id="footer-logo" />
//               <p className="footer-links">
//                 <Link
//                   to="/about"
//                   {...props}
//                   ref={ref}
//                   onClick={() => window.scrollTo(0, 0)}
//                 >
//                   About Us
//                 </Link>
//                 <Link
//                   to="/privacy"
//                   {...props}
//                   ref={ref}
//                   onClick={() => window.scrollTo(0, 0)}
//                 >
//                   Privacy & Policy
//                 </Link>
//                 <Link
//                   to="/terms-of-use"
//                   {...props}
//                   ref={ref}
//                   onClick={() => window.scrollTo(0, 0)}
//                 >
//                   Terms of Use
//                 </Link>
//                 <Link
//                   to="/job"
//                   {...props}
//                   ref={ref}
//                   onClick={() => window.scrollTo(0, 0)}
//                 >
//                   Career
//                 </Link>

//                 <HashLink smooth to="/#contact">
//                   {" "}
//                   Contact Us
//                 </HashLink>
//               </p>

//               <p className="footer-company-name">
//                 Copyright © Black Spot Studio PH{" "}
//               </p>
//             </div>

//             <div className="footer-center" data-aos="fade-up">
//               <div className="desz">
//                 <p>
//                   <Link
//                     to="/direction"
//                     {...props}
//                     ref={ref}
//                     onClick={() => window.scrollTo(0, 0)}
//                   >
//                     <FaMapMarked /> 26th St, Taguig, 1634 Metro Manila
//                   </Link>
//                 </p>
//               </div>

//               <div className="desz">
//                 <p>
//                   <a href="play@blackspotstudio.ph">
//                     {" "}
//                     <FaEnvelope /> play@blackspotstudio.ph
//                   </a>
//                 </p>
//               </div>
//             </div>

//             <div className="footer-right">
//               <div className="footer-icons">
//                 <ul className="social-media-list">
//                   <li>
//                     <a
//                       href="https://www.facebook.com/BlackspotstudioPH"
//                       target="_blank"
//                       className="contact-icon"
//                     >
//                       <FaFacebook />
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="https://www.instagram.com/phblackspotstudio/"
//                       target="_blank"
//                       className="contact-icon"
//                     >
//                       <AiFillInstagram />
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="https://twitter.com/BlackSpotPH"
//                       target="_blank"
//                       className="contact-icon"
//                     >
//                       <FaTwitter />
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="https://www.reddit.com/r/BlackSpotStudioPH/"
//                       target="_blank"
//                       className="contact-icon"
//                     >
//                       <FaReddit />
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="https://www.youtube.com/channel/UCL9FkYZu775aKfJ1zv4gZJQ"
//                       target="_blank"
//                       className="contact-icon"
//                     >
//                       <FaYoutube />
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </footer>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutComponent;

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
