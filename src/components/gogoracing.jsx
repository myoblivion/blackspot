import React, { useState, useEffect, useRef, LinkProps } from "react";
import Slider from "react-slick";
import LazyLoad from "react-lazy-load";
import image from "../images/goracing.png";
import image2 from "../images/gogorc.jpg";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
// Logo
import ggrlogo from "../images/icons/gogoracing.png";
import getit from "../images/app-download.png";
import appstore from "../images/appstore.png";
import prevv from "../images/gogoracingbackground/prev.png";
import nextt from "../images/gogoracingbackground/next.png";
import movingchar from "../images/edit/stuff.png";
import marketplace from "../images/goto.png";
// Characters
import character1 from "../images/ggr-characters/1-pengsuni-costume-1.png";
import character2 from "../images/ggr-characters/1-pengsuni-costume-2.png";
import character3 from "../images/ggr-characters/1-pengsuni-costume-3.png";
import character4 from "../images/ggr-characters/2-mongi-costume-1.png";
import character5 from "../images/ggr-characters/2-mongi-costume-2.png";
import character6 from "../images/ggr-characters/2-mongi-costume-3.png";
import character7 from "../images/ggr-characters/3-euik-costume-1.png";
import character8 from "../images/ggr-characters/3-euik-costume-2.png";
import character9 from "../images/ggr-characters/3-euik-costume-3.png";
import character10 from "../images/ggr-characters/4-tosuni-costume-1.png";
import character11 from "../images/ggr-characters/4-tosuni-costume-1.png";
import character12 from "../images/ggr-characters/4-tosuni-costume-1.png";
import character13 from "../images/ggr-characters/6-hekhek-costume-1.png";
import character14 from "../images/ggr-characters/6-hekhek-costume-2.png";
import character15 from "../images/ggr-characters/6-hekhek-costume-3.png";
import character16 from "../images/ggr-characters/8-eureungi-costume-1.png";
import character17 from "../images/ggr-characters/8-eureungi-costume-2.png";
import character18 from "../images/ggr-characters/8-eureungi-costume-3.png";
// end of characters
import playNow from "../images/icons/play_now.png";
import nftboi1 from "../images/gogoracingbackground/NFTcar_1.png";
import nftboi2 from "../images/gogoracingbackground/weeee.png";
import somedog from "../images/somedog.png";
import floor from "../images/floor.png";
// Cars
import car1 from "../images/ggr-cars/gogo-racing-car-02-1.png";
import car2 from "../images/ggr-cars/gogo-racing-car-02-2.png";
import car3 from "../images/ggr-cars/gogo-racing-car-02-3.png";
import car4 from "../images/ggr-cars/gogo-racing-car-03-1.png";
import car5 from "../images/ggr-cars/gogo-racing-car-03-2.png";
import car6 from "../images/ggr-cars/gogo-racing-car-03-3.png";
import car7 from "../images/ggr-cars/gogo-racing-car-04-1.png";
import car8 from "../images/ggr-cars/gogo-racing-car-04-2.png";
import car9 from "../images/ggr-cars/gogo-racing-car-04-3.png";
import car10 from "../images/ggr-cars/gogo-racing-car-05-1.png";
import car11 from "../images/ggr-cars/gogo-racing-car-05-2.png";
import car12 from "../images/ggr-cars/gogo-racing-car-05-3.png";
// Tires
import tire1 from "../images/ggr-tires/gogo-racing-tire-26-1.png";
import tire2 from "../images/ggr-tires/gogo-racing-tire-26-2.png";
import tire3 from "../images/ggr-tires/gogo-racing-tire-26-3.png";
import tire4 from "../images/ggr-tires/gogo-racing-tire-27-1.png";
import tire5 from "../images/ggr-tires/gogo-racing-tire-27-2.png";
import tire6 from "../images/ggr-tires/gogo-racing-tire-27-3.png";
import tire7 from "../images/ggr-tires/gogo-racing-tire-29-1.png";
import tire8 from "../images/ggr-tires/gogo-racing-tire-29-2.png";
import tire9 from "../images/ggr-tires/gogo-racing-tire-29-3.png";
import tire10 from "../images/ggr-tires/gogo-racing-tire-30-1.png";
import tire11 from "../images/ggr-tires/gogo-racing-tire-30-2.png";
import tire12 from "../images/ggr-tires/gogo-racing-tire-30-3.png";
import upCar from "../images/icons/Tosuni_CarrotStar_01.png";
import nftshop from "../images/gogoracingbackground/NFT_Shop.png";
import {
  FaChartLine,
  FaDatabase,
  FaEnvelope,
  FaFacebook,
  FaGamepad,
  FaHandHolding,
  FaHeadset,
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
  FaYoutube,
} from "react-icons/fa";
import icono from "../images/icons/logo.png";
import { AiFillInstagram } from "react-icons/ai";

// Prev, Next
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
const GoGoRacingComponent = ({ props, ref, currentRoute }) => {
  const [isShown, setIsShown] = useState(true);
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick} key={NextArrow}>
        <img src={nextt} alt="" />
      </div>
    );
  };
  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick} key={PrevArrow}>
        <img src={prevv} alt="" />
      </div>
    );
  };
  // Slider
  const settings = {
    Infinite: true,
    lazyload: true,
    speed: 200,
    slidesToShow: 1,
    fade: true,
    slidesToScroll: 1,
    centerMode: true,
    arrows: true,
    autoplay: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  // Title
  useEffect(() => {
    document.title = "Black Spot Studio | GoGo Racing";
  }, []);
  return (
    <div className="gogoracing wrapper">
      <section className="gogoracing-wrapper">
        {/* <img src={upCar} alt="" id="upcar" /> */}
        <div className="ggrwelcome" data-aos="zoom-in" data-aos-duration="500">
          <img src={marketplace} alt="" id="ggrlogo" />
          <div className="links">
            <button onClick={DetectAndServe}>
              <img src={playNow} alt="" id="playimg" />
            </button>
          </div>
          <span>
            {" "}
            <p>
              A racing game where you compete with other users using your
              purchased and unique cars. Ready your car, finish the line and win
              a coin and be incentivized. Play to Earn? It’s a surprise.
            </p>
          </span>
        </div>
        <div className="market-ggr">
          <p>
            <img src={ggrlogo} alt="Gogo Racing Logo" />
          </p>
        </div>
        {/* <div className="socials">
            <ul>
              <li>
                <a href="https://www.facebook.com/GogoRacingPhilippines/">
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/gogoracingph/">
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/GogoRacingPhil">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href="https://www.reddit.com/r/GogoRacingPH/">
                  <FaReddit />
                </a>
              </li>
            </ul>
          </div> */}
      </section>
      <section className="gamedescription">
        <div
          className="gogodescription"
          data-aos="zoom-in"
          data-aos-duration="500"
        >
          <h2>Game Detail</h2>
          <span>
            <p>
              GoGo Racing is a P2E (Play To Earn) game that combines the NFT
              elements of the blockchain. The player will initially need to own
              a car(NFT) to start the game. (NFT) can be created through the R&D
              center. Players can earn GoGo Chain by winning in a PvP match or
              clearing the stage. Damaged car(NFT) should be repaired in the
              repair shop to continue playing. The TANK Token Stakers will get
              an authority to operate the repair shop.
            </p>
          </span>
          <img src={somedog} alt="" id="somedog" />
        </div>
      </section>
      <section className="nft-des">
        <LazyLoad>
          <img
            src={nftboi1}
            alt=""
            id="char1"
            data-aos="zoom-in"
            data-aos-offset="100"
            data-aos-duration="500"
          />
        </LazyLoad>
        <LazyLoad>
          <img
            src={nftboi2}
            alt=""
            id="char2"
            data-aos="zoom-in"
            data-aos-offset="100"
            data-aos-duration="500"
          />
        </LazyLoad>
        <div
          className="desc-nft"
          data-aos="zoom-in"
          data-aos-offset="100"
          data-aos-duration="500"
        >
          <h2>NFTs</h2>
          <span>
            <p>
              GoGo Racing is a P2E (Play To Earn) game that combines the NFT
              elements of the blockchain. The player will initially need to own
              a tank(NFT) to start the game. A new car(NFT) can be created
              through the R&D center. Players can earn GoGo Chain by winning ina
              PvP match or clearing the stage. Damaged car(NFT) should be
              repaired in the repair shop to continue playing. The GoGo Chain
              Stakers will get an authority to operate the repair shop.
            </p>
          </span>
        </div>
        <img src={nftshop} alt="" id="nftshop" />
      </section>
      {/* Tune Your Race */}
      <section className="features-select">
        <h1 id="titled">Tune your race</h1>
        <h2 className="disclaimer">Some of these will be available SOON.</h2>
        <div className="select-wrapper">
          <img src={floor} alt="" id="floor" />
          <img src={car1} alt="" id="testss" />
          <div className="selections">
            {/* Labels */}
            <div className="selections-wrapper">
              <input type="radio" id="select-1" name="selectors" />
              <input type="radio" id="select-2" name="selectors" />
              <input type="radio" id="select-3" name="selectors" />
              <div className="labels">
                <label htmlFor="select-1">Cars</label>
                <label htmlFor="select-2">Characters</label>
                <label htmlFor="select-3">Custom Parts</label>
              </div>
              <div className="cars-selection">
                <label htmlFor="">
                  <img src={car1} alt="" />
                </label>
                <label htmlFor="">
                  <img src={car2} alt="" />
                </label>
                <label htmlFor="">
                  <img src={car3} alt="" />
                </label>
                <label htmlFor="">
                  <img src={car4} alt="" />
                </label>
                <label htmlFor="">
                  <img src={car5} alt="" />
                </label>
                <label htmlFor="">
                  <img src={car6} alt="" />
                </label>
                <label htmlFor="">
                  <img src={car7} alt="" />
                </label>
                <label htmlFor="">
                  <img src={car8} alt="" />
                </label>
                <label htmlFor="">
                  <img src={car9} alt="" />
                </label>
                <label htmlFor="">
                  <img src={car10} alt="" />
                </label>
                <label htmlFor="">
                  <img src={car11} alt="" />
                </label>
                <label htmlFor="">
                  <img src={car12} alt="" />
                </label>
              </div>
              <div className="character-selection">
                <label htmlFor="">
                  <img src={character1} alt="" />
                </label>
                <label htmlFor="">
                  <img src={character2} alt="" />
                </label>
                <label htmlFor="">
                  <img src={character3} alt="" />
                </label>
                <label htmlFor="">
                  <img src={character4} alt="" />
                </label>
                <label htmlFor="">
                  <img src={character5} alt="" />
                </label>
                <label htmlFor="">
                  <img src={character6} alt="" />
                </label>
                <label htmlFor="">
                  <img src={character7} alt="" />
                </label>
                <label htmlFor="">
                  <img src={character8} alt="" />
                </label>
                <label htmlFor="">
                  <img src={character9} alt="" />
                </label>
                <label htmlFor="">
                  <img src={character10} alt="" />
                </label>
                <label htmlFor="">
                  <img src={character11} alt="" />
                </label>
                <label htmlFor="">
                  <img src={character12} alt="" />
                </label>
                <label htmlFor="">
                  <img src={character13} alt="" />
                </label>
                <label htmlFor="">
                  <img src={character14} alt="" />
                </label>
                <label htmlFor="">
                  <img src={character15} alt="" />
                </label>
                <label htmlFor="">
                  <img src={character16} alt="" />
                </label>
                <label htmlFor="">
                  <img src={character17} alt="" />
                </label>
                <label htmlFor="">
                  <img src={character18} alt="" />
                </label>
              </div>
              <div className="tire-selection">
                <label htmlFor="">
                  <img src={tire1} alt="" />
                </label>
                <label htmlFor="">
                  <img src={tire2} alt="" />
                </label>
                <label htmlFor="">
                  <img src={tire3} alt="" />
                </label>
                <label htmlFor="">
                  <img src={tire4} alt="" />
                </label>
                <label htmlFor="">
                  <img src={tire5} alt="" />
                </label>
                <label htmlFor="">
                  <img src={tire6} alt="" />
                </label>
                <label htmlFor="">
                  <img src={tire7} alt="" />
                </label>
                <label htmlFor="">
                  <img src={tire8} alt="" />
                </label>
                <label htmlFor="">
                  <img src={tire9} alt="" />
                </label>
                <label htmlFor="">
                  <img src={tire10} alt="" />
                </label>
              </div>
              <label htmlFor="">
                <img src={tire11} alt="" />
              </label>
              <label htmlFor="">
                <img src={tire12} alt="" />
              </label>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="section">
        <footer className="gogoracing-footer-distributed">
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

          <div className="footer-center">
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
          <HashLink smooth to="/gogoracing#" id="up">
            <FaRegArrowAltCircleUp />
          </HashLink>
        </div>
      </div>
    </div>
  );
};

export default GoGoRacingComponent;
