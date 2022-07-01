import React, { useState, useEffect, useRef, LinkProps } from "react";
import { Link } from "react-router-dom";
import ReCaptchaV2 from "react-google-recaptcha";
import VideoPlayer from "react-video-js-player";
// Animate on Scroll
import Aos from "aos";
// Animate on scroll css
import "aos/dist/aos.css";
import cat from "../images/Icon_Character_0008_Reward.png";
import getit from "../images/app-download.png";
import Recaptcha from "react-recaptcha";
import appstore from "../images/appstore.png";
import Mongi from "../images/characters/Mongi.png";
import Pengsuni from "../images/characters/Pengsuni.png";
import Euik from "../images/characters/Euik.png";
import Eureungi from "../images/characters/Eureungi.png";
import ggrc1 from "../images/edit/nf-tcharacter.png";
import ggrc2 from "../images/edit/2.png";
import Temporary from "../images/testsample.png";
import mobile1 from "../images/game_mobile/phone1.png";
import mobile2 from "../images/game_mobile/phone2.png";
import mobile3 from "../images/game_mobile/Gogo World 350 x 600px.png";
import mobile4 from "../images/game_mobile/GogoChain 350 x600px.png";
import game1 from "../images/edit/banner1.png";
import game2 from "../images/edit/banner2.png";
import game3 from "../images/edit/banner3.png";
// Devices
import Phone from "../images/icons/phone.png";
import Laptop from "../images/icons/laptop.png";
// Characters
// Scion Fist
import Irina from "../images/characters/ch6.png";
import Risa from "../images/characters/ch11.png";

import ScionLogo from "../images/scionlogo.png";
import Gogochain from "../images/icons/gogochain.png";
import Gogoworld from "../images/icons/gogoworld.png";
import Gogoracing from "../images/icons/Gogo_Racing_Logo_Straight.png";

// Black Spot Studio Logos
import Korealogo from "../images/icons/Black_Spot_KR.png";
import Dubailogo from "../images/icons/Black_Spot_DB.png";

import icono from "../images/icons/logo.png";

// Shadow :D
import shadowLeft from "../images/gogoracingbackground/left.6cf31a98.png";
import shadowRight from "../images/gogoracingbackground/right.3d07e61b.png";
import shadowBottom from "../images/gogoracingbackground/bottom_1920.e08eb6f5.png";

// Slider
import video1 from "../images/video/Big Update Trailer FB (1).mp4";
import video2 from "../images/video/Scion Fist PH Trailer.mp4";
import Slider from "react-slick";
import { HashLink } from "react-router-hash-link";
import {
  GoogleReCaptchaProvider,
  GoogleReCaptcha,
} from "react-google-recaptcha-v3";
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
  FaRegArrowAltCircleUp,
  FaWindowClose,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
// Image Js
import emailjs from "emailjs-com";

// Captcha :D

function validateRecaptcha() {
  var response = grecaptcha.getResponse();
  if (response.length === 0) {
    alert("You need to fill the captcha");
    return false;
  } else {
    alert("validated");
    return true;
  }
}

const HomeComponent = ({ props, ref, currentRoute }) => {
  const [isShown, setIsShown] = useState(true);
  // Aos (Animation On Scroll)
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  // slide show (banner)

  const radioButtons = document.querySelectorAll('input[name="control"]');
  console.log(radioButtons);

  const [count, setTimeout] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeout((c) => ++c % 4);
    }, 6000);
    return () => clearInterval(intervalId);
  }, []);

  // const [imageIndex, setImageIndex] = useState(0);
  // const settings = {
  //   Infinite: true,
  //   lazyload: true,
  //   speed: 300,
  //   slidesToShow: 1,
  //   centerMode: true,
  //   dots: true,
  //   centerPadding: 0,
  //   arrows: false,
  //   beforeChange: (current, next) => setImageIndex(next),
  // };
  const settings = {
    fade: true,
    infinite: true,
    vertical: true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    arrows: false,
    slidesToScroll: 1,
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

  const verifyCallback = function (response) {
    console.log(response);
    document.getElementById("someForm").submit();
  };
  return (
    // Home
    <div className="wrapper">
      <div className="home">
        {/* Slideshow */}
        <div className="slider">
          <input
            name="control"
            id="page1"
            type="radio"
            value={count}
            checked={count == 0}
          />
          <input
            name="control"
            id="page2"
            type="radio"
            value={count}
            checked={count == 1}
          />
          <input
            name="control"
            id="page3"
            type="radio"
            value={count}
            checked={count == 2}
          />
          <input
            name="control"
            id="page4"
            type="radio"
            value={count}
            checked={count == 3}
          />
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

        <div className="container-2" id="game">
          <div
            className="game-wrapper"
            data-aos="fade-up"
            data-aos-duration="700"
          >
            <div className="game-title">
              <h2>Black Spot Studio PH</h2>
              <h4 className="fourz">
                Four exciting games are being developed for your entertainment.
              </h4>
              <div className="line"></div>
            </div>
            <div className="sliders">
              <Slider {...settings}>
                <div className="slider-image">
                  <img alt="Game" id="desktop2" data-aos="fade-up" />
                  <img src={ggrc1} alt="" id="ggrc1" data-aos="fade-up" />
                  <img src={ggrc2} alt="" id="ggrc2" data-aos="fade-up" />
                  <img src={mobile2} alt="" id="mobile2" data-aos="fade-up" />
                  <Link
                    to="/gogoracing"
                    {...props}
                    ref={ref}
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    <img
                      src={Gogoracing}
                      alt="Gogo Racing Logo"
                      id="gogoracingsz"
                      data-aos="fade-up"
                    />
                  </Link>
                  <div className="gamedes">
                    <div className="logoz">
                      <div className="icons">
                        <div className="sccionlogo"></div>
                      </div>
                      <ul className="icon-list" id="ggr" data-aos="fade-up">
                        <li>
                          <a
                            href="https://play.google.com/store/apps/details?id=com.blackspotstudio.gogoracing.ph"
                            target="_blank"
                          >
                            <img src={getit} alt="" />
                          </a>
                        </li>
                        <li id="secondu">
                          <a
                            href="https://apps.apple.com/app/id1623115563?platform=iphone"
                            target="_blank"
                          >
                            <img src={appstore} alt="" />
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div className="video" id="gogoracevid" data-aos="fade-up">
                      <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/uwW4wjSUgSM"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </div>
                <div className="slider-image" id="firstgame">
                  <img src={game1} alt="" id="desktop1" />
                  <img src={Irina} alt="" id="irina" />
                  <img src={Risa} alt="" id="risa" />
                  <img src={mobile1} alt="" id="mobile1" />
                  <div className="gamedes">
                    <div className="logoz">
                      <div className="icons">
                        <div className="sccionlogo">
                          <Link
                            to="/scion"
                            {...props}
                            ref={ref}
                            onClick={() => window.scrollTo(0, 0)}
                          >
                            <img
                              src={ScionLogo}
                              alt="Scion Fist Logo"
                              id="logo1"
                            />
                          </Link>
                        </div>
                      </div>
                      <ul className="icon-list">
                        <li>
                          <a
                            href="https://play.google.com/store/apps/details?id=com.blackspotstudio.scionfist"
                            target="_blank"
                          >
                            <FaGooglePlay />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://apps.apple.com/ph/app/scion-fist/id1591386655"
                            target="_blank"
                          >
                            <FaAppStore />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="video" id="scionvid">
                      <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/pxSzRmCFqL0"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </div>
                <div className="slider-image">
                  <div className="slider-image" id="firstgame">
                    <img src={game2} alt="Game" id="desktop3" />
                    <img src={mobile3} alt="" id="mobile3" />
                    <div className="gamedes">
                      <div className="logoz">
                        <div className="icons">
                          <div className="sccionlogo">
                            <Link
                              to="/gogoworld"
                              {...props}
                              ref={ref}
                              onClick={() => window.scrollTo(0, 0)}
                            >
                              <img
                                src={Gogoworld}
                                alt="Scion Fist Logo"
                                id="gogoworld-logo"
                              />
                            </Link>
                          </div>
                        </div>
                        <ul className="icon-list" id="display-nones">
                          <li>
                            <a href="https://play.google.com/store/apps/details?id=com.blackspotstudio.scionfist">
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
                      <div className="video" id="hidden-video">
                        <iframe
                          width="560"
                          height="315"
                          src="https://www.youtube.com/embed/pxSzRmCFqL0"
                          title="YouTube video player"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slider-image">
                  <div className="slider-image" id="firstgame">
                    <img src={game3} alt="Game" id="desktop4" />
                    <img src={mobile4} alt="" id="mobile4" />
                    <div className="gamedes">
                      <div className="logoz">
                        <div className="icons">
                          <div className="sccionlogo">
                            <Link
                              to="/gogochain"
                              {...props}
                              ref={ref}
                              onClick={() => window.scrollTo(0, 0)}
                            >
                              <img
                                src={Gogochain}
                                alt="Scion Fist Logo"
                                id="gogochain-logo"
                              />
                            </Link>
                          </div>
                        </div>
                        <ul className="icon-list" id="display-nones">
                          <li>
                            <a href="https://play.google.com/store/apps/details?id=com.blackspotstudio.scionfist">
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
                      <div className="video" id="hidden-video">
                        <iframe
                          width="560"
                          height="315"
                          src="https://www.youtube.com/embed/pxSzRmCFqL0"
                          title="YouTube video player"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>

        {/* <div className="selectorz-wrapper">
          <input type="radio" id="game1" name="slider-game" defaultChecked />
          <input type="radio" id="game2" name="slider-game" />
          <input type="radio" id="game3" name="slider-game" />
          <input type="radio" id="game4" name="slider-game" />
          <div className="content1" data-aos="zoom-out" data-aos-duration="500">
            <div className="leftx">
              <Link
                to="/gogoracing"
                {...props}
                ref={ref}
                onClick={() => window.scrollTo(0, 0)}
              >
                <img src={Gogoracing} alt="" id="ggr-logz" />
              </Link>
              <h1>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                debitis impedit quibusdam amet et porro vitae ipsum assumenda
                repudiandae eligendi exercitationem, cumque neque, soluta, sunt
                veniam itaque fugit fugiat sint!{" "}
                <Link to="/gogoracingnews">read more.</Link>
              </h1>
              <a href="https://play.google.com/store/apps/details?id=com.blackspotstudio.gogoracing.ph">
                <img src={getit} alt="" id="getitt" />
              </a>
              <a href="https://apps.apple.com/ph/app/gogo-racing/id1623115563?fbclid=IwAR2o3x0fcL9yHW2BeMvHoEqn-ZDsT7d0EqyhZyGgvfP8oayODA4YU68FRKg">
                <img src={appstore} alt="" id="appstur" />
              </a>
              <div className="socialization">
                <ul>
                  <li>
                    {" "}
                    <a href="">
                      <FaFacebook />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <FaInstagram />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <FaTwitter />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <FaReddit />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="rightx">
              <div className="video">
                <video
                  src={video1}
                  width="750"
                  height="500"
                  autoPlay={true}
                  loop={true}
                  muted={true}
                />
                <img src={shadowLeft} alt="" id="leftu" />
                <img src={shadowRight} alt="" id="rightu" />
                <img src={shadowBottom} alt="" id="bottomtu" />
              </div>
            </div>
          </div>
          <div className="content2">
            <div className="leftx">
              <Link
                to="/scion"
                {...props}
                ref={ref}
                onClick={() => window.scrollTo(0, 0)}
              >
                <img src={ScionLogo} alt="" id="logo" />
              </Link>
              <h1>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                debitis impedit quibusdam amet et porro vitae ipsum assumenda
                repudiandae eligendi exercitationem, cumque neque, soluta, sunt
                veniam itaque fugit fugiat sint! <a href="">Read More</a>
              </h1>
              <a href="https://play.google.com/store/apps/details?id=com.blackspotstudio.gogoracing.ph">
                <img src={getit} alt="" id="getitt" />
              </a>
              <a href="https://apps.apple.com/ph/app/gogo-racing/id1623115563?fbclid=IwAR2o3x0fcL9yHW2BeMvHoEqn-ZDsT7d0EqyhZyGgvfP8oayODA4YU68FRKg">
                <img src={appstore} alt="" id="appstur" />
              </a>
              <div className="socialization">
                <ul>
                  <li>
                    {" "}
                    <a href="">
                      <FaFacebook />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <FaInstagram />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <FaTwitter />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <FaReddit />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="rightx">
              <div className="video">
                <video
                  src={video2}
                  width="750"
                  height="500"
                  autoPlay={true}
                  loop={true}
                  muted={true}
                />
              </div>
              <img src={shadowLeft} alt="" id="leftu" />
              <img src={shadowRight} alt="" id="rightu" />
              <img src={shadowBottom} alt="" id="bottomtu" />
            </div>
          </div>
          <div className="content3">
            <div className="leftx">
              <Link
                to="/scion"
                {...props}
                ref={ref}
                onClick={() => window.scrollTo(0, 0)}
              >
                <img src={Gogoworld} alt="" id="worldsk" />
              </Link>
              <h1>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                debitis impedit quibusdam amet et porro vitae ipsum assumenda
                repudiandae eligendi exercitationem, cumque neque, soluta, sunt
                veniam itaque fugit fugiat sint! <a href="">Read More</a>
              </h1>
              <a href="https://play.google.com/store/apps/details?id=com.blackspotstudio.gogoracing.ph">
                <img src={getit} alt="" id="getitt" />
              </a>
              <a href="https://apps.apple.com/ph/app/gogo-racing/id1623115563?fbclid=IwAR2o3x0fcL9yHW2BeMvHoEqn-ZDsT7d0EqyhZyGgvfP8oayODA4YU68FRKg">
                <img src={appstore} alt="" id="appstur" />
              </a>
              <div className="socialization">
                <ul>
                  <li>
                    {" "}
                    <a href="">
                      <FaFacebook />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <FaInstagram />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <FaTwitter />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <FaReddit />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="rightx">
              <div className="video">
                <img src={Temporary} alt="" />
              </div>
              <img src={shadowLeft} alt="" id="leftu" />
              <img src={shadowRight} alt="" id="rightu" />
              <img src={shadowBottom} alt="" id="bottomtu" />
            </div>
          </div>
          <div className="content4">
            <div className="leftx">
              <Link
                to="/scion"
                {...props}
                ref={ref}
                onClick={() => window.scrollTo(0, 0)}
              >
                <img src={Gogochain} alt="" id="chain" />
              </Link>
              <h1>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                debitis impedit quibusdam amet et porro vitae ipsum assumenda
                repudiandae eligendi exercitationem, cumque neque, soluta, sunt
                veniam itaque fugit fugiat sint! <a href="">Read More</a>
              </h1>
              <a href="https://play.google.com/store/apps/details?id=com.blackspotstudio.gogoracing.ph">
                <img src={getit} alt="" id="getitt" />
              </a>
              <a href="https://apps.apple.com/ph/app/gogo-racing/id1623115563?fbclid=IwAR2o3x0fcL9yHW2BeMvHoEqn-ZDsT7d0EqyhZyGgvfP8oayODA4YU68FRKg">
                <img src={appstore} alt="" id="appstur" />
              </a>
              <div className="socialization">
                <ul>
                  <li>
                    {" "}
                    <a href="">
                      <FaFacebook />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <FaInstagram />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <FaTwitter />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <FaReddit />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="rightx">
              <div className="video">
                <img src={Temporary} alt="" />
              </div>
              <img src={shadowLeft} alt="" id="leftu" />
              <img src={shadowRight} alt="" id="rightu" />
              <img src={shadowBottom} alt="" id="bottomtu" />
            </div>
          </div>
          <div className="displayers">
            <label htmlFor="game1">Gogo Racing</label>
            <label htmlFor="game2">Scion Fist</label>
            <label htmlFor="game3">Gogo World</label>
            <label htmlFor="game4">Gogo Chain</label>
          </div>
        </div>
        <div className="mobile-home">
          <Slider {...settings}>
            <div className="ggr-m">
              <div className="top">
                <video
                  src={video1}
                  width="750"
                  height="500"
                  autoPlay={true}
                  loop={true}
                  muted={true}
                />
                <img src={shadowLeft} alt="" id="leftu" />
                <img src={shadowRight} alt="" id="rightu" />
                <img src={shadowBottom} alt="" id="bottomtu" />
              </div>
              <div className="bottomzkie">
                <div className="play-nowskiez">
                  <a href="https://play.google.com/store/apps/details?id=com.blackspotstudio.gogoracing.ph">
                    <img src={getit} alt="" id="getitt" />
                  </a>
                  <a href="https://apps.apple.com/ph/app/gogo-racing/id1623115563?fbclid=IwAR2o3x0fcL9yHW2BeMvHoEqn-ZDsT7d0EqyhZyGgvfP8oayODA4YU68FRKg">
                    <img src={appstore} alt="" id="appstur" />
                  </a>
                </div>
                <div className="socialization">
                  <ul>
                    <li>
                      {" "}
                      <a href="">
                        <FaFacebook />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <FaInstagram />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <FaTwitter />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <FaReddit />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="scion-m">
              <div className="top">
                <video
                  src={video2}
                  width="750"
                  height="500"
                  autoPlay={true}
                  loop={true}
                  muted={true}
                />
                <img src={shadowLeft} alt="" id="leftu" />
                <img src={shadowRight} alt="" id="rightu" />
                <img src={shadowBottom} alt="" id="bottomtu" />
              </div>
              <div className="bottomzkie">
                <div className="play-nowskiez">
                  <a href="https://play.google.com/store/apps/details?id=com.blackspotstudio.gogoracing.ph">
                    <img src={getit} alt="" id="getitt" />
                  </a>
                  <a href="https://apps.apple.com/ph/app/gogo-racing/id1623115563?fbclid=IwAR2o3x0fcL9yHW2BeMvHoEqn-ZDsT7d0EqyhZyGgvfP8oayODA4YU68FRKg">
                    <img src={appstore} alt="" id="appstur" />
                  </a>
                </div>
                <div className="socialization">
                  <ul>
                    <li>
                      {" "}
                      <a href="">
                        <FaFacebook />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <FaInstagram />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <FaTwitter />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <FaReddit />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="ggworld-m">
              <div className="top">
                <video
                  src={video1}
                  width="750"
                  height="500"
                  autoPlay={true}
                  loop={true}
                  muted={true}
                />
                <img src={shadowLeft} alt="" id="leftu" />
                <img src={shadowRight} alt="" id="rightu" />
                <img src={shadowBottom} alt="" id="bottomtu" />
              </div>
              <div className="bottomzkie">
                <div className="play-nowskiez">
                  <a href="https://play.google.com/store/apps/details?id=com.blackspotstudio.gogoracing.ph">
                    <img src={getit} alt="" id="getitt" />
                  </a>
                  <a href="https://apps.apple.com/ph/app/gogo-racing/id1623115563?fbclid=IwAR2o3x0fcL9yHW2BeMvHoEqn-ZDsT7d0EqyhZyGgvfP8oayODA4YU68FRKg">
                    <img src={appstore} alt="" id="appstur" />
                  </a>
                </div>
                <div className="socialization">
                  <ul>
                    <li>
                      {" "}
                      <a href="">
                        <FaFacebook />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <FaInstagram />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <FaTwitter />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <FaReddit />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="ggc-m">
              <div className="top">
                <video
                  src={video1}
                  width="750"
                  height="500"
                  autoPlay={true}
                  loop={true}
                  muted={true}
                />
                <img src={shadowLeft} alt="" id="leftu" />
                <img src={shadowRight} alt="" id="rightu" />
                <img src={shadowBottom} alt="" id="bottomtu" />
              </div>
              <div className="bottomzkie">
                <div className="play-nowskiez">
                  <a href="https://play.google.com/store/apps/details?id=com.blackspotstudio.gogoracing.ph">
                    <img src={getit} alt="" id="getitt" />
                  </a>
                  <a href="https://apps.apple.com/ph/app/gogo-racing/id1623115563?fbclid=IwAR2o3x0fcL9yHW2BeMvHoEqn-ZDsT7d0EqyhZyGgvfP8oayODA4YU68FRKg">
                    <img src={appstore} alt="" id="appstur" />
                  </a>
                </div>
                <div className="socialization">
                  <ul>
                    <li>
                      {" "}
                      <a href="">
                        <FaFacebook />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <FaInstagram />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <FaTwitter />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <FaReddit />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Slider>
        </div> */}
        {/* Contact Us */}
        <div className="contactforms" id="contact">
          <div
            className="container contact-us-section"
            data-aos="fade-right"
            data-aos-offset="50"
            data-aos-duration="700"
          >
            <div className="contact-row h-100">
              <div className="col-md-3 section-title">
                <h2>
                  Contact Us <span>We'd love to hear from you!</span>
                </h2>
              </div>
              <div className="col-md-9">
                <GoogleReCaptchaProvider reCaptchaKey="[key]">
                  <form
                    className="contact-us-form"
                    id="someForm"
                    onSubmit={sendEmail}
                  >
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
                        id="message"
                        rows="2"
                        name="message"
                        maxLength={600}
                      ></textarea>
                    </div>
                    <div className="form-group clearfix">
                      <Recaptcha
                        sitekey="6LcganggAAAAALJfQ9X3YBRJGzcfUK1dUKsvnJPQ"
                        required
                      />
                      <button
                        id="submit"
                        type="sumbit"
                        data-id="#accessories-holder"
                        className="red-select-btn model-selector btn-send-message"
                      >
                        <span>Submit</span>
                      </button>
                    </div>
                  </form>
                </GoogleReCaptchaProvider>
              </div>
            </div>
          </div>
          <div
            className="partners-logo"
            data-aos="fade-left"
            data-aos-offset="200"
            data-aos-duration="700"
          >
            <div className="ourpartners-title">
              <h1>Partners</h1>
            </div>
            <div className="desktop-partners">
              {isShown && (
                <div className="korea">
                  <a
                    href="http://blackspotstudio.com/final/main/main.asp"
                    target="_blank"
                  >
                    <img src={Korealogo} alt="" />
                  </a>
                </div>
              )}
              <div className="dubai">
                <a
                  href="http://blackspotstudio.com/final/main/main.asp"
                  target="_blank"
                  onMouseEnter={() => setIsShown(false)}
                  onMouseLeave={() => setIsShown(true)}
                >
                  <img src={Dubailogo} alt="dubaidesktop" />
                </a>
              </div>
            </div>
          </div>
          <div
            className="mobile-partners"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-duration="700"
          >
            <div className="ourpartners-mobile-title">
              <h1>Partners</h1>
            </div>
            <div className="dubai-mobile">
              <a
                href="http://blackspotstudio.com/final/main/main.asp"
                target="_blank"
              >
                <img src={Dubailogo} alt="" id="dubaimobile" />
              </a>
            </div>
            <div className="korea-mobile">
              <a
                href="http://blackspotstudio.com/final/main/main.asp"
                target="_blank"
              >
                <img src={Korealogo} alt="" id="dubaimobile" />
              </a>
            </div>
          </div>
        </div>
        {/* Footer */}
        <div className="section">
          <footer className="footer-distributed">
            <div className="footer-left" data-aos="fade-up">
              <img src={icono} alt="" id="footer-logo" />
              <p className="footer-links">
                <Link
                  to="/about"
                  {...props}
                  ref={ref}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  About Us
                </Link>
                <Link
                  to="/privacy"
                  {...props}
                  ref={ref}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Privacy & Policy
                </Link>
                <Link
                  to="/terms-of-use"
                  {...props}
                  ref={ref}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Terms of Use
                </Link>
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
            <HashLink smooth to="/#" id="up">
              <FaRegArrowAltCircleUp />
            </HashLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
