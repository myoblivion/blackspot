import React, { useState, useEffect, useRef, LinkProps } from "react";
import { Link } from "react-router-dom";
import ReCaptchaV2 from "react-google-recaptcha";
import VideoPlayer from "react-video-js-player";
// Animate on Scroll
import Aos from "aos";
// Animate on scroll css
import "aos/dist/aos.css";
import getit from "../images/app-download.png";
import ReCAPTCHA from "react-google-recaptcha";
import appstore from "../images/appstore.png";
import GifLoader from "react-gif-loader";
import playNow from "../images/icons/play_now.png";
import ggcm from "../images/icons/gogoc.png";
import game4 from "../images/gogoc.png";
import GoGoChainLogo from "../images/icons/gogochain.png";
import scionnnnn from "../images/icons/SF.png";
import GGRICON from "../images/gogoracing_icon.png";
import ScionLogo from "../images/scionlogo.png";
import Gogochain from "../images/icons/gogochain.png";
import Gogoworld from "../images/icons/gogoworld.svg";
import Gogoracing from "../images/icons/Gogo_Racing_Logo_Straight.png";
import GGworldBro from "../images/icons/gogo_world_backup.png";
import BLACKSPOTMB from "../images/icons/Black_Spot_MB.png";
// phone
import Phone from "../images/icons/phone.png";
// Black Spot Studio Logos
import Korealogo from "../images/icons/Black_Spot_KR.png";
import Dubailogo from "../images/icons/Black_Spot_DB.png";
import ggwbroskie from "../images/gogoracingbackground/desktop.png";
import icono from "../images/icons/logo.png";
import bg1 from "../images/gogoracingbackground/ggrbackground.png";
import sbg1 from "../images/gogoracingbackground/scionbg.png";

import ComingSoonGGW from "../images/gogoracingbackground/gogoworldcm.png";
// Shadow :D
import shadowLeft from "../images/gogoracingbackground/left.6cf31a98.png";
import shadowRight from "../images/gogoracingbackground/right.3d07e61b.png";
import shadowBottom from "../images/gogoracingbackground/bottom_1920.e08eb6f5.png";
import bshadowLeft from "../images/gogoracingbackground/bleft.png";
import bshadowRight from "../images/gogoracingbackground/bright.png";
import bshadowBottom from "../images/gogoracingbackground/bbottom.png";
import yshadowBottom from "../images/gogoracingbackground/ybottom.png";
import yshadowRight from "../images/gogoracingbackground/yright.png";
import yshadowLeft from "../images/gogoracingbackground/yleft.png";
import vshadowBottom from "../images/gogoracingbackground/vbottom.png";
import vshadowRight from "../images/gogoracingbackground/vright.png";
import vshadowLeft from "../images/gogoracingbackground/vleft.png";
// Slider
import video1 from "../images/video/Big Update Trailer FB (1).mp4";
import video2 from "../images/video/Scion Fist PH Trailer.mp4";
import Slider from "react-slick";
import { HashLink } from "react-router-hash-link";
import character1 from "../images/Icon_Character_0008_Reward.png";
import character2 from "../images/Icon_Character_6.png";
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

const HomeComponent = ({ props, ref, currentRoute }) => {
  const [isShown, setIsShown] = useState(true);
  // Aos (Animation On Scroll)
  useEffect(() => {
    Aos.init({ duration: 1000 });
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
    dots: true,
  };
  useEffect(() => {
    document.title = "Black Spot Studio | Philippines";
  }, []);

  // Email Js

  function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
      return "Windows Phone";
    }

    if (/android/i.test(userAgent)) {
      return "Android";
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      return "iOS";
    }
  }
  function DetectAndServe() {
    let os = getMobileOperatingSystem();
    if (os == "Android") {
      window.location.href =
        "https://play.google.com/store/apps/details?id=com.blackspotstudio.gogoracing.ph";
    } else if (os == "iOS") {
      window.location.href =
        "https://apps.apple.com/ph/app/gogo-racing/id1623115563?fbclid=IwAR2o3x0fcL9yHW2BeMvHoEqn-ZDsT7d0EqyhZyGgvfP8oayODA4YU68FRKg";
    } else if (os == "Windows Phone") {
      window.location.href =
        "https://play.google.com/store/apps/details?id=com.blackspotstudio.gogoracing.ph";
    } else {
      window.location.href =
        "https://apps.apple.com/ph/app/gogo-racing/id1623115563?fbclid=IwAR2o3x0fcL9yHW2BeMvHoEqn-ZDsT7d0EqyhZyGgvfP8oayODA4YU68FRKg";
    }
  }

  function getMobileOperatingSystems() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
      return "Windows Phone";
    }

    if (/android/i.test(userAgent)) {
      return "Android";
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      return "iOS";
    }
  }
  function DetectAndServes() {
    let os = getMobileOperatingSystems();
    if (os == "Android") {
      window.location.href =
        "https://play.google.com/store/apps/details?id=com.blackspotstudio.scionfist";
    } else if (os == "iOS") {
      window.location.href =
        "https://apps.apple.com/ph/app/scion-fist/id1591386655";
    } else if (os == "Windows Phone") {
      window.location.href =
        "https://play.google.com/store/apps/details?id=com.blackspotstudio.scionfist";
    } else {
      window.location.href =
        "https://apps.apple.com/ph/app/scion-fist/id1591386655";
    }
  }
  // CaptCha
  const [captchaValido, changeCaptchaValid] = useState(null);
  const [usuarioValido, changeValidUser] = useState(false);
  const captcha = useRef(null);
  const onChange = () => {
    if (captcha.current.getValue()) {
      console.log("The User is not a Robot");
      changeCaptchaValid(true);
    }
  };

  // Email Js
  const submit = (e) => {
    e.preventDefault();
    if (captcha.current.getValue()) {
      console.log("El usuario no es un robot");
      changeValidUser(true);
      alert("Your message has been sent");
      changeCaptchaValid(true);
      emailjs
        .sendForm(
          "service_5bqvvsa",
          "template_g2broht",
          e.target,
          "LrSieM1pE_SBGX6Us"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    } else {
      console.log("Accept Recaptcha pls");
      changeValidUser(false);
      changeCaptchaValid(false);
    }
  };
  const [botoons, setBotoons] = useState(false);

  const changeBackground = () => {
    console.log(window.scrollY);
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
  return (
    // Home
    <div className="wrapper">
      <div className="home">
        {/* Slideshow */}

        <div className="selectorz-wrapper">
          <input type="radio" id="game1" name="slider-game" defaultChecked />
          <input type="radio" id="game2" name="slider-game" />
          <input type="radio" id="game3" name="slider-game" />
          <input type="radio" id="game4" name="slider-game" />

          <div className="content1">
            <div className="leftx">
              <div className="video">
                {/* <img src={bg1} alt="" id="background" /> */}
                <video src={video1} autoPlay={true} loop={true} muted={true} />
                <img src={Phone} alt="" id="phone" />
              </div>
              <div className="socialization">
                <ul>
                  <li>
                    {" "}
                    <a
                      href="https://www.facebook.com/GogoRacingPhilippines"
                      target="_blank"
                    >
                      <FaFacebook />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/gogoracingph/"
                      target="_blank"
                    >
                      <FaInstagram />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/GogoRacingPhil"
                      target="_blank"
                    >
                      <FaTwitter />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.reddit.com/r/GogoRacingPH/"
                      target="_blank"
                    >
                      <FaReddit />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="rightx">
              <Link
                to="/gogoracing"
                {...props}
                ref={ref}
                onClick={() => window.scrollTo(0, 0)}
              >
                <img src={Gogoracing} alt="" id="ggr-logz" />
              </Link>
              <h1>
                Ready your car, finish the line and win a coin and be
                incentivized. Play to Earn? It’s a surprise.
                <Link to="/gogoracingnews"> read more.</Link>
              </h1>
              <a
                href="https://play.google.com/store/apps/details?id=com.blackspotstudio.gogoracing.ph"
                target="_blank"
                id="playnowss"
              >
                <img src={playNow} alt="" />
              </a>
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
                An Automatic First-Person Shooting game! The higher the rank,
                the better performance. The battle is ready for you.{" "}
                <a href="">Read More</a>
              </h1>
              <a
                href="https://play.google.com/store/apps/details?id=com.blackspotstudio.scionfist"
                id="playnowsss"
                target="_blank"
              >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <p>Play Now</p>
              </a>
              <div className="socialization">
                <ul>
                  <li>
                    {" "}
                    <a
                      href="https://www.facebook.com/ScionFistPhilippines"
                      target="_blank"
                    >
                      <FaFacebook />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/scionfistphilippinesofficial/"
                      target="_blank"
                    >
                      <FaInstagram />
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/ScionFist_PH" target="_blank">
                      <FaTwitter />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.reddit.com/r/ScionFistPHofficial/"
                      target="_blank"
                    >
                      <FaReddit />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="rightx">
              <div className="video">
                <img src={sbg1} alt="" id="background" />
                <video
                  src={video2}
                  width="750"
                  height="500"
                  autoPlay={true}
                  loop={true}
                  muted={true}
                />
                {/* <img src={shadowLeft} alt="" id="leftu" />
              <img src={shadowRight} alt="" id="rightu" />
              <img src={shadowBottom} alt="" id="bottomtu" /> */}
                <img src={Phone} alt="" id="phone" />
              </div>
            </div>
          </div>
          <div className="content3">
            <div className="leftx">
              <Link
                to="/scion"
                {...props}
                ref={ref}
                onClick={() => window.scrollTo(0, 0)}
                id="world"
              >
                <GifLoader
                  loading={true}
                  imageSrc="https://media4.giphy.com/media/gLTsodp3sOc3UJcbjE/giphy.gif?cid=790b7611091c34dba3661d782d555aeff543a267620cb3b3&rid=giphy.gif&ct=s"
                  overlayBackground="transparent"
                />
              </Link>
              <h1 id="onenonly">
                Adorable characters living in their own world. Check out how
                they make your world more entertaining. <a href="">Read More</a>
              </h1>
              <div className="socialization">
                <ul>
                  <li>
                    {" "}
                    <a
                      href="https://www.facebook.com/BlackspotstudioPH"
                      target="_blank"
                    >
                      <FaFacebook />
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
                  <li>
                    <a href="https://twitter.com/BlackSpotPH" target="_blank">
                      <FaTwitter />
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
                </ul>
              </div>
            </div>
            <div className="rightx">
              <div className="video">
                <img src={ComingSoonGGW} alt="" id="ggwcms" />
                <img src={ggwbroskie} alt="" className="background" />
              </div>
              {/* <img src={yshadowLeft} alt="" id="leftu" />
              <img src={yshadowRight} alt="" id="rightu" />
              <img src={yshadowBottom} alt="" id="bottomtu" /> */}
            </div>
          </div>
          <div className="content4">
            <div className="leftx">
              <Link
                to="/gogochain"
                {...props}
                ref={ref}
                onClick={() => window.scrollTo(0, 0)}
                id="chain"
              >
                <GifLoader
                  loading={true}
                  imageSrc="https://media1.giphy.com/media/essaF8bzvC3rra18sP/giphy.gif?cid=790b76111f299a6898d899429189b7e8ac6adaf3b9c80e60&rid=giphy.gif&ct=s"
                  overlayBackground="transparent"
                />
              </Link>
              <h1 id="ggchainh1">
                Are you ready to explore the dimension of these cute characters?
                They are coming soon to play with you. <a href="">Read More</a>
              </h1>
              <div className="socialization">
                <ul>
                  <li>
                    {" "}
                    <a
                      href="https://www.facebook.com/BlackspotstudioPH"
                      target="_blank"
                    >
                      <FaFacebook />
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
                  <li>
                    <a href="https://twitter.com/BlackSpotPH" target="_blank">
                      <FaTwitter />
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
                </ul>
              </div>
            </div>
            <div className="rightx">
              <div className="video">
                <img src={game4} alt="" />
              </div>
              {/* <img src={vshadowLeft} alt="" id="leftu" />
              <img src={vshadowRight} alt="" id="rightu" />
              <img src={vshadowBottom} alt="" id="bottomtu" /> */}
            </div>
          </div>
          <div className="displayers">
            <label htmlFor="game1">
              <img src={GGRICON} alt="" />
            </label>
            <label htmlFor="game2">
              {" "}
              <img src={scionnnnn} alt="ScionFist" />
            </label>
            <label htmlFor="game3">
              {" "}
              <img src={GGworldBro} alt="GogoWorld" />
            </label>
            <label htmlFor="game4">
              {" "}
              <img src={GoGoChainLogo} alt="GogoChain" />
            </label>
          </div>
        </div>
        <div className="mobile-home">
          <div className="game-mobile-wrapper">
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
                  <img src={Gogoracing} alt="" id="mggr-logz" />
                </div>
                <div className="bottomzkie">
                  <h1>
                    Ready your car, finish the line and win a coin and be
                    incentivized. Play to Earn? It’s a surprise.
                    <Link to="/gogoracingnews"> read more.</Link>
                  </h1>
                  <div className="play-nowskiez">
                    <button onClick={DetectAndServe}>
                      <img src={playNow} alt="" id="playimg" />
                    </button>
                  </div>
                  <div className="socialization">
                    <ul>
                      <li>
                        <a href="https://bit.ly/3PjM6pL" target="_blank">
                          <FaFacebook />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.instagram.com/gogoracingph/"
                          target="_blank"
                        >
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
                  <img src={ScionLogo} alt="" id="mlogo" />
                  <video
                    src={video2}
                    width="750"
                    height="500"
                    autoPlay={true}
                    loop={true}
                    muted={true}
                  />
                </div>
                <div className="bottomzkie">
                  <h1>
                    An Automatic First-Person Shooting game! The higher the
                    rank, the better performance. The battle is ready for you.{" "}
                    <a href="">Read More</a>
                  </h1>
                  <div className="play-nowskiez">
                    <button onClick={DetectAndServes} id="playnowsssss">
                      Play Now
                    </button>
                  </div>
                  <div className="socialization">
                    <ul>
                      <li>
                        {" "}
                        <a href="https://www.facebook.com/ScionFistPhilippines">
                          <FaFacebook />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/scionfistphilippinesofficial/">
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
                </div>
              </div>
              <div className="ggworld-m">
                <div className="top">
                  <img src={Gogoworld} alt="" id="mworldsk" />
                </div>
                <div className="bottomzkie">
                  <div className="play-nowskiez">
                    <img src={ComingSoonGGW} alt="" id="comgson" />
                  </div>
                  <div className="socialization">
                    <ul>
                      <li>
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
                  <img src={ggcm} alt="" id="ggc-img" />
                </div>
                <div className="bottomzkie">
                  <div className="play-nowskiez">
                    <img src={ComingSoonGGW} alt="" id="comgson" />
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
          </div>
        </div>
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
                {!usuarioValido && (
                  <form
                    className="contact-us-form"
                    id="someForm"
                    onSubmit={submit}
                    autoComplete="off"
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
                      <ReCAPTCHA
                        ref={captcha}
                        sitekey="6LfgXA4hAAAAAEKncvsfngTiqZPPRlv3903vapiP"
                        onChange={onChange}
                        size={"normal"}
                        theme="dark"
                      />
                      {captchaValido === false && (
                        <div className="error-captcha">
                          You must verify the captcha
                        </div>
                      )}
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
                )}
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
                    href="https://blackspotstudio.com/final/main/main.asp"
                    target="_blank"
                  >
                    <img src={Korealogo} alt="" />
                  </a>
                </div>
              )}
              <div className="dubai">
                <a
                  href="https://blackspotstudio.com/final/main/main.asp"
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
            data-aos-offset="100"
            data-aos-duration="700"
          >
            <div className="ourpartners-mobile-title">
              <h1>Partners</h1>
            </div>
            <div className="dubai-mobile">
              <a
                href="https://blackspotstudio.com/final/main/main.asp"
                target="_blank"
              >
                <img src={BLACKSPOTMB} alt="" id="dubaimobile" />
              </a>
            </div>
          </div>
        </div>
        {/* Footer */}
        <div className="section">
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
      </div>
      <div className={botoons ? "botoons active" : "botoons"}>
        <HashLink smooth to="/#" id="up">
          <FaRegArrowAltCircleUp />
        </HashLink>
      </div>
    </div>
  );
};

export default HomeComponent;
