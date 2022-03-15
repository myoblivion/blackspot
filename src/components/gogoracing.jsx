import React, { useState, useEffect, useRef, LinkProps } from "react";
import Slider from "react-slick";

import image from "../images/goracing.png";
import image2 from "../images/gogorc.jpg";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
// Logo
import ggrlogo from "../images/icons/gogoracing.png";
import getit from "../images/edit/123.png";
import prevv from "../images/gogoracingbackground/prev.png";
import nextt from "../images/gogoracingbackground/next.png";
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

import nftboi1 from "../images/gogoracingbackground/NFTcar_1.png";
import nftboi2 from "../images/gogoracingbackground/weeee.png";

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
        <div className="ggrwelcome" data-aos="zoom-in" data-aos-duration="500">
          <img src={ggrlogo} alt="Gogo Racing Logo" id="ggrlogo" />
          <span>
            {" "}
            <p>
              A racing game where you compete with other users using your
              purchased and unique cars. Ready your car, finish the line and win
              a coin and be incentivized. Play to Earn? It’s a surprise.
            </p>
          </span>
          <div className="links">
            <a
              href="https://play.google.com/store/apps/details?id=com.blackspotstudio.gogoracing.ph"
              target="_blank"
            >
              {" "}
              <img src={getit} alt="" />
            </a>
          </div>
          <div className="socials">
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
          </div>
        </div>
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
        </div>
      </section>
      <section className="nft-des">
        <img src={nftboi1} alt="" id="char1" />
        <img src={nftboi2} alt="" id="char2" />
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
      <section className="features-select">
        <h1 id="titled">Tune your race</h1>
        <h2 className="disclaimer">
          Note: These characters will be available SOON.
        </h2>
        <div className="select-wrapper">
          <input type="radio" name="tabs" id="tab1" />
          <label htmlFor="tab1" id="control1">
            Cars
          </label>
          <input type="radio" name="tabs" id="tab2" />
          <label htmlFor="tab2" id="control2">
            Character
          </label>
          <input type="radio" name="tabs" id="tab3" />
          <label htmlFor="tab3" id="control3">
            Custom Parts
          </label>
          <div className="el-car">
            <div className="el-cars-containers">
              <img src={car1} alt="" />
              <img src={car2} alt="" />
              <img src={car3} alt="" />
              <img src={car4} alt="" />
              <img src={car5} alt="" />
              <img src={car6} alt="" />
              <img src={car7} alt="" />
              <img src={car8} alt="" />
              <img src={car9} alt="" />
              <img src={car10} alt="" />
              <img src={car11} alt="" />
              <img src={car12} alt="" />
            </div>
          </div>
          <div className="el-characters">
            <div className="el-characters-container">
              <img src={character1} alt="" className="gogocharacter" />
              <img src={character2} alt="" className="gogocharacter" />
              <img src={character3} alt="" className="gogocharacter" />
              <img src={character4} alt="" className="gogocharacter" />
              <img src={character5} alt="" className="gogocharacter" />
              <img src={character6} alt="" className="gogocharacter" />
              <img src={character7} alt="" className="gogocharacter" />
              <img src={character8} alt="" className="gogocharacter" />
              <img src={character9} alt="" className="gogocharacter" />
              <img src={character10} alt="" className="gogocharacter" />
              <img src={character11} alt="" className="gogocharacter" />
              <img src={character12} alt="" className="gogocharacter" />
              <img src={character13} alt="" className="gogocharacter" />
              <img src={character14} alt="" className="gogocharacter" />
              <img src={character15} alt="" className="gogocharacter" />
              <img src={character16} alt="" className="gogocharacter" />
              <img src={character17} alt="" className="gogocharacter" />
              <img src={character18} alt="" className="gogocharacter" />
            </div>
          </div>
          <div className="el-tires">
            <div className="el-tires-container">
              <img src={tire1} alt="" />
              <img src={tire2} alt="" />
              <img src={tire3} alt="" />
              <img src={tire4} alt="" />
              <img src={tire5} alt="" />
              <img src={tire6} alt="" />
              <img src={tire7} alt="" />
              <img src={tire8} alt="" />
              <img src={tire9} alt="" />
              <img src={tire10} alt="" />
              <img src={tire11} alt="" />
              <img src={tire12} alt="" />
            </div>
          </div>
        </div>

        <div className="mobile-selection">
          <Slider {...settings}>
            <div className="carss">
             <h1>Cars</h1>
            <img src={car1} alt="" className="mblcar" />
            </div>
            <div className="carss">
             <h1>Cars</h1>
            <img src={car2} alt="" className="mblcar" />
            </div>
            <div className="carss">
             <h1>Cars</h1>
            <img src={car3} alt="" className="mblcar" />
            </div>
            <div className="carss">
             <h1>Cars</h1>
            <img src={car4} alt="" className="mblcar" />
            </div>
            <div className="carss">
             <h1>Cars</h1>
            <img src={car5} alt="" className="mblcar" />
            </div>
            <div className="carss">
             <h1>Cars</h1>
            <img src={car6} alt="" className="mblcar" />
            </div>
            <div className="carss">
             <h1>Cars</h1>
            <img src={car7} alt="" className="mblcar" />
            </div>
            <div className="carss">
             <h1>Cars</h1>
            <img src={car8} alt="" className="mblcar" />
            </div>
            <div className="carss">
             <h1>Cars</h1>
            <img src={car9} alt="" className="mblcar" />
            </div>
            <div className="carss">
             <h1>Cars</h1>
            <img src={car10} alt="" className="mblcar" />
            </div>
            <div className="carss">
             <h1>Cars</h1>
            <img src={car11} alt="" className="mblcar" />
            </div>
            <div className="carss">
             <h1>Cars</h1>
            <img src={car12} alt="" className="mblcar" />
            </div>
            <div className="characterss">
              <h1>Characters</h1>
            <img src={character1} alt="" className="mblcharacter" />
            </div>
            <div className="characterss">
              <h1>Characters</h1>
            <img src={character2} alt="" className="mblcharacter" />
            </div>
            <div className="characterss">
              <h1>Characters</h1>
            <img src={character3} alt="" className="mblcharacter" />
            </div>
            <div className="characterss">
              <h1>Characters</h1>
            <img src={character4} alt="" className="mblcharacter" />
            </div>
            <div className="characterss">
              <h1>Characters</h1>
            <img src={character5} alt="" className="mblcharacter" />
            </div>
            <div className="characterss">
              <h1>Characters</h1>
            <img src={character6} alt="" className="mblcharacter" />
            </div>
            <div className="characterss">
              <h1>Characters</h1>
            <img src={character7} alt="" className="mblcharacter" />
            </div>
            <div className="characterss">
              <h1>Characters</h1>
            <img src={character8} alt="" className="mblcharacter" />
            </div>
            <div className="characterss">
              <h1>Characters</h1>
            <img src={character9} alt="" className="mblcharacter" />
            </div>
            <div className="characterss">
              <h1>Characters</h1>
            <img src={character10} alt="" className="mblcharacter" />
            </div>
            <div className="characterss">
              <h1>Characters</h1>
            <img src={character11} alt="" className="mblcharacter" />
            </div>
            <div className="characterss">
              <h1>Characters</h1>
            <img src={character12} alt="" className="mblcharacter" />
            </div>
            <div className="characterss">
              <h1>Characters</h1>
            <img src={character13} alt="" className="mblcharacter" />
            </div>
            <div className="characterss">
              <h1>Characters</h1>
            <img src={character14} alt="" className="mblcharacter" />
            </div>
            <div className="characterss">
              <h1>Characters</h1>
            <img src={character15} alt="" className="mblcharacter" />
            </div>
            <div className="characterss">
              <h1>Characters</h1>
            <img src={character16} alt="" className="mblcharacter" />
            </div>
            <div className="characterss">
              <h1>Characters</h1>
            <img src={character17} alt="" className="mblcharacter" />
            </div>
            <div className="characterss">
              <h1>Characters</h1>
            <img src={character18} alt="" className="mblcharacter" />
            </div>
            <div className="tiress">
            <h1>Tires</h1>
            <img src={tire2} alt="" className="mbltire" />
            </div>
            <div className="tiress">
            <h1>Tires</h1>
            <img src={tire3} alt="" className="mbltire" />
            </div>
            <div className="tiress">
            <h1>Tires</h1>
            <img src={tire4} alt="" className="mbltire" />
            </div>
            <div className="tiress">
            <h1>Tires</h1>
            <img src={tire5} alt="" className="mbltire" />
            </div>
            <div className="tiress">
            <h1>Tires</h1>
            <img src={tire6} alt="" className="mbltire" />
            </div>
            <div className="tiress">
            <h1>Tires</h1>
            <img src={tire7} alt="" className="mbltire" />
            </div>
            <div className="tiress">
            <h1>Tires</h1>
            <img src={tire8} alt="" className="mbltire" />
            </div>
            <div className="tiress">
            <h1>Tires</h1>
            <img src={tire9} alt="" className="mbltire" />
            </div>
            <div className="tiress">
            <h1>Tires</h1>
            <img src={tire10} alt="" className="mbltire" />
            </div>
            <div className="tiress">
            <h1>Tires</h1>
            <img src={tire11} alt="" className="mbltire" />
            </div>
            <div className="tiress">
            <h1>Tires</h1>
            <img src={tire12} alt="" className="mbltire" />
            </div>
          </Slider>
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
              {/* <Link to="/privacy"                   {...props}
                  ref={ref}
                  onClick={() => window.scrollTo(0, 0)}>Privacy & Policy</Link> */}
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
