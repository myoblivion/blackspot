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
import character1 from "../images/ggr-characters/ch1.webp";
import character2 from "../images/ggr-characters/ch2.webp";
import character3 from "../images/ggr-characters/ch3.webp";
import character4 from "../images/ggr-characters/ch4.webp";
import character5 from "../images/ggr-characters/ch5.webp";
import character6 from "../images/ggr-characters/ch6.webp";
import character7 from "../images/ggr-characters/ch7.webp";
import character8 from "../images/ggr-characters/ch8.webp";
import character9 from "../images/ggr-characters/ch9.webp";
import character10 from "../images/ggr-characters/ch10.webp";
// 3d Characters
import dcharacter1 from "../images/ingamecharacters/px-ch1.webp";
import dcharacter2 from "../images/ingamecharacters/px-ch2.webp";
import dcharacter3 from "../images/ingamecharacters/px-ch3.webp";
import dcharacter4 from "../images/ingamecharacters/px-ch4.webp";
import dcharacter5 from "../images/ingamecharacters/px-ch5.webp";
import dcharacter6 from "../images/ingamecharacters/px-ch6.webp";
import dcharacter7 from "../images/ingamecharacters/px-ch7.webp";
import dcharacter8 from "../images/ingamecharacters/px-ch8.webp";
import dcharacter9 from "../images/ingamecharacters/px-ch9.webp";
import dcharacter10 from "../images/ingamecharacters/px-ch10.webp";
// fade ch
import fade1 from "../images/ingamecharacters/px-fade1.webp";
import fade2 from "../images/ingamecharacters/px-fade2.webp";
import fade3 from "../images/ingamecharacters/px-fade3.webp";
import fade4 from "../images/ingamecharacters/px-fade4.webp";
import fade5 from "../images/ingamecharacters/px-fade5.webp";
import fade6 from "../images/ingamecharacters/px-fade6.webp";
import fade7 from "../images/ingamecharacters/px-fade7.webp";
import fade8 from "../images/ingamecharacters/px-fade8.webp";
import fade9 from "../images/ingamecharacters/px-fade9.webp";
import fade10 from "../images/ingamecharacters/px-fade10.webp";
// Name
import Name1 from "../images/characters/name1.webp";
import Name2 from "../images/characters/name2.webp";
import Name3 from "../images/characters/name3.webp";
import Name4 from "../images/characters/name4.webp";
import Name5 from "../images/characters/name5.webp";
import Name6 from "../images/characters/name6.webp";
import Name7 from "../images/characters/name7.webp";
import Name8 from "../images/characters/name8.webp";
import Name9 from "../images/characters/name9.webp";
import Name10 from "../images/characters/name10.webp";
// end of characters
import playNow from "../images/icons/play_now.png";
import nftboi1 from "../images/gogoracingbackground/NFTcar_1.png";
import nftboi2 from "../images/gogoracingbackground/weeee.png";
import somedog from "../images/somedog.png";
import floor from "../images/floor.png";
// Cars
import car1 from "../images/characters/car1.webp";
import car2 from "../images/characters/car2.webp";
import car3 from "../images/characters/car3.webp";
import car4 from "../images/characters/car4.webp";
import car5 from "../images/characters/car5.webp";
import car6 from "../images/characters/car6.webp";
import car7 from "../images/characters/car7.webp";
import car8 from "../images/characters/car8.webp";
import car9 from "../images/characters/car9.webp";
import car10 from "../images/characters/car10.webp";
import car11 from "../images/characters/car11.webp";

//Car Names
import Orca from "../images/ggr-cars/ncar1.webp";
import MadBear from "../images/ggr-cars/ncar2.webp";
import MastersStrix from "../images/ggr-cars/ncar3.webp";
import CarrotStar from "../images/ggr-cars/ncar4.webp";
import ILB from "../images/ggr-cars/ncar5.webp";
import DoggyVan from "../images/ggr-cars/ncar6.webp";
import GoldenCarriage from "../images/ggr-cars/ncar7.webp";
import Cactus from "../images/ggr-cars/ncar8.webp";
import Minimi from "../images/ggr-cars/ncar9.webp";
import SpeedStar from "../images/ggr-cars/ncar10.webp";
import TrainingCar from "../images/ggr-cars/ncar11.webp";

// Car Displays
import cardisplay1 from "../images/ggr-cars/gogo-racing-car-02-1.webp";
import cardisplay2 from "../images/ggr-cars/gogo-racing-car-02-2.webp";
import cardisplay3 from "../images/ggr-cars/gogo-racing-car-02-3.webp";
// import cardisplay4 from "../images/ggr-cars/gogo-racing-car-03-1.png";
import cardisplay4 from "../images/ggr-cars/carc1.webp";
import cardisplay5 from "../images/ggr-cars/gogo-racing-car-03-2.webp";
import cardisplay6 from "../images/ggr-cars/gogo-racing-car-03-3.webp";
import cardisplay7 from "../images/ggr-cars/gogo-racing-car-04-1.webp";
import cardisplay8 from "../images/ggr-cars/gogo-racing-car-04-2.webp";
import cardisplay9 from "../images/ggr-cars/gogo-racing-car-04-3.webp";
import cardisplay10 from "../images/ggr-cars/Icon_CarSet_0006.webp";
import cardisplay11 from "../images/ggr-cars/image-removebg-preview_39.webp";

// Fade Cars bro
import FadeC1 from "../images/ggr-cars/cfade1.webp";
import FadeC2 from "../images/ggr-cars/cfade2.webp";
import FadeC3 from "../images/ggr-cars/cfade3.webp";
import FadeC4 from "../images/ggr-cars/cfade4.webp";
import FadeC5 from "../images/ggr-cars/cfade5.webp";
import FadeC6 from "../images/ggr-cars/cfade6.webp";
import FadeC7 from "../images/ggr-cars/cfade7.webp";
import FadeC8 from "../images/ggr-cars/cfade8.webp";
import FadeC9 from "../images/ggr-cars/cfade9.webp";
import FadeC10 from "../images/ggr-cars/cfade10.webp";
import FadeC11 from "../images/ggr-cars/cfade11.webp";

// Tires
// import tire1 from "../images/ggr-tires/gogo-racing-tire-26-1.png";
// import tire2 from "../images/ggr-tires/gogo-racing-tire-26-2.png";
// import tire3 from "../images/ggr-tires/gogo-racing-tire-26-3.png";
// import tire4 from "../images/ggr-tires/gogo-racing-tire-27-1.png";
// import tire5 from "../images/ggr-tires/gogo-racing-tire-27-2.png";
// import tire6 from "../images/ggr-tires/gogo-racing-tire-27-3.png";
// import tire7 from "../images/ggr-tires/gogo-racing-tire-29-1.png";
// import tire8 from "../images/ggr-tires/gogo-racing-tire-29-2.png";
// import tire9 from "../images/ggr-tires/gogo-racing-tire-29-3.png";
// import tire10 from "../images/ggr-tires/gogo-racing-tire-30-1.png";
// import tire11 from "../images/ggr-tires/gogo-racing-tire-30-2.png";
// import tire12 from "../images/ggr-tires/gogo-racing-tire-30-3.png";
// import upCar from "../images/icons/Tosuni_CarrotStar_01.png";
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
        <div className="select-wrapper">
          {/* <img src={floor} alt="" id="floor" /> */}
          <div className="selections">
            {/* Labels */}
            <div className="selections-wrapper">
              <input
                type="radio"
                id="select-1"
                name="selectors"
                defaultChecked
              />
              <input type="radio" id="select-2" name="selectors" />
              {/* <input type="radio" id="select-3" name="selectors" /> */}
              <div className="labels">
                <label htmlFor="select-1" id="lblcars">
                  Cars
                </label>
                <label htmlFor="select-2" id="lblchars">
                  Characters
                </label>
                {/* <label htmlFor="select-3">Custom Parts</label> */}
              </div>
              <div className="cars-selection">
                <input type="radio" name="sltchar" id="slt1" defaultChecked />
                <input type="radio" name="sltchar" id="slt2" />
                <input type="radio" name="sltchar" id="slt3" />
                <input type="radio" name="sltchar" id="slt4" />
                <input type="radio" name="sltchar" id="slt5" />
                <input type="radio" name="sltchar" id="slt6" />
                <input type="radio" name="sltchar" id="slt7" />
                <input type="radio" name="sltchar" id="slt8" />
                <input type="radio" name="sltchar" id="slt9" />
                <input type="radio" name="sltchar" id="slt10" />
                <input type="radio" name="sltchar" id="slt11" />
                <label htmlFor="slt1" id="lblcar1">
                  <img src={car1} alt="" />
                </label>
                <label htmlFor="slt2" id="lblcar2">
                  <img src={car2} alt="" />
                </label>
                <label htmlFor="slt3" id="lblcar3">
                  <img src={car3} alt="" />
                </label>
                <label htmlFor="slt4" id="lblcar4">
                  <img src={car4} alt="" />
                </label>
                <label htmlFor="slt5" id="lblcar5">
                  <img src={car5} alt="" />
                </label>
                <label htmlFor="slt6" id="lblcar6">
                  <img src={car6} alt="" />
                </label>
                <label htmlFor="slt7" id="lblcar7">
                  <img src={car7} alt="" />
                </label>
                <label htmlFor="slt8" id="lblcar8">
                  <img src={car8} alt="" />
                </label>
                <label htmlFor="slt9" id="lblcar9">
                  <img src={car9} alt="" />
                </label>
                <label htmlFor="slt10" id="lblcar10">
                  <img src={car10} alt="" />
                </label>
                <label htmlFor="slt11" id="lblcar11">
                  <img src={car11} alt="" />
                </label>
                <img src={cardisplay1} alt="" id="shwcar1" />
                <img src={FadeC1} alt="" id="cfade1" />
                <img src={TrainingCar} alt="" id="ncar1" />
                <img src={cardisplay2} alt="" id="shwcar2" />
                <img src={FadeC2} alt="" id="cfade2" />
                <img src={Minimi} alt="" id="ncar2" />
                <img src={cardisplay3} alt="" id="shwcar3" />
                <img src={SpeedStar} alt="" id="ncar3" />
                <img src={FadeC3} alt="" id="cfade3" />
                <img src={cardisplay4} alt="" id="shwcar4" />
                <img src={Orca} alt="" id="ncar4" />
                <img src={FadeC4} alt="" id="cfade4" />
                <img src={cardisplay5} alt="" id="shwcar5" />
                <img src={MadBear} alt="" id="ncar5" />
                <img src={FadeC5} alt="" id="cfade5" />
                <img src={cardisplay6} alt="" id="shwcar6" />
                <img src={MastersStrix} alt="" id="ncar6" />
                <img src={FadeC6} alt="" id="cfade6" />
                <img src={cardisplay7} alt="" id="shwcar7" />
                <img src={CarrotStar} alt="" id="ncar7" />
                <img src={FadeC7} alt="" id="cfade7" />
                <img src={cardisplay8} alt="" id="shwcar8" />
                <img src={DoggyVan} alt="" id="ncar8" />
                <img src={FadeC8} alt="" id="cfade8" />
                <img src={cardisplay9} alt="" id="shwcar9" />
                <img src={Cactus} alt="" id="ncar9" />
                <img src={FadeC9} alt="" id="cfade9" />
                <img src={cardisplay10} alt="" id="shwcar10" />
                <img src={ILB} alt="" id="ncar10" />
                <img src={FadeC10} alt="" id="cfade10" />
                <img src={cardisplay11} alt="" id="shwcar11" />
                <img src={FadeC11} alt="" id="cfade11" />
                <img src={GoldenCarriage} alt="" id="ncar11" />
                {/* <img src={car10} alt="" id="shwcar10" />
                <img src={car11} alt="" id="shwcar11" />
                <img src={car12} alt="" id="shwcar12" /> */}
              </div>
              <div className="character-selection">
                <input
                  type="radio"
                  name="char-selector"
                  id="chrslt1"
                  defaultChecked
                />
                <input type="radio" name="char-selector" id="chrslt2" />
                <input type="radio" name="char-selector" id="chrslt3" />
                <input type="radio" name="char-selector" id="chrslt4" />
                <input type="radio" name="char-selector" id="chrslt5" />
                <input type="radio" name="char-selector" id="chrslt6" />
                <input type="radio" name="char-selector" id="chrslt7" />
                <input type="radio" name="char-selector" id="chrslt8" />
                <input type="radio" name="char-selector" id="chrslt9" />
                <input type="radio" name="char-selector" id="chrslt10" />
                <label htmlFor="chrslt1" id="cl1">
                  <img src={character1} alt="" />
                </label>
                <label htmlFor="chrslt2" id="cl2">
                  <img src={character2} alt="" />
                </label>
                <label htmlFor="chrslt3" id="cl3">
                  <img src={character3} alt="" />
                </label>
                <label htmlFor="chrslt4" id="cl4">
                  <img src={character4} alt="" />
                </label>
                <label htmlFor="chrslt5" id="cl5">
                  <img src={character5} alt="" />
                </label>
                <label htmlFor="chrslt6" id="cl6">
                  <img src={character6} alt="" />
                </label>
                <label htmlFor="chrslt7" id="cl7">
                  <img src={character7} alt="" />
                </label>
                <label htmlFor="chrslt8" id="cl8">
                  <img src={character8} alt="" />
                </label>
                <label htmlFor="chrslt9" id="cl9">
                  <img src={character9} alt="" />
                </label>
                <label htmlFor="chrslt10" id="cl10">
                  <img src={character10} alt="" />
                </label>
                <img src={dcharacter1} alt="" id="chshw1" />
                <img src={fade1} alt="" id="fade1" />
                <img src={Name1} alt="" id="name1" />
                <img src={dcharacter2} alt="" id="chshw2" />
                <img src={fade2} alt="" id="fade2" />
                <img src={Name2} alt="" id="name2" />
                <img src={dcharacter3} alt="" id="chshw3" />
                <img src={fade3} alt="" id="fade3" />
                <img src={Name3} alt="" id="name3" />
                <img src={dcharacter4} alt="" id="chshw4" />
                <img src={fade4} alt="" id="fade4" />
                <img src={Name4} alt="" id="name4" />
                <img src={dcharacter5} alt="" id="chshw5" />
                <img src={fade5} alt="" id="fade5" />
                <img src={Name5} alt="" id="name5" />
                <img src={dcharacter6} alt="" id="chshw6" />
                <img src={fade6} alt="" id="fade6" />
                <img src={Name6} alt="" id="name6" />
                <img src={dcharacter7} alt="" id="chshw7" />
                <img src={fade7} alt="" id="fade7" />
                <img src={Name7} alt="" id="name7" />
                <img src={dcharacter8} alt="" id="chshw8" />
                <img src={fade8} alt="" id="fade8" />
                <img src={Name8} alt="" id="name8" />
                <img src={dcharacter9} alt="" id="chshw9" />
                <img src={fade9} alt="" id="fade9" />
                <img src={Name9} alt="" id="name9" />
                <img src={dcharacter10} alt="" id="chshw10" />
                <img src={fade10} alt="" id="fade10" />
                <img src={Name10} alt="" id="name10" />
              </div>
              {/* <div className="tire-selection">
                <input type="radio" name="tires" id="trch1" defaultChecked />
                <input type="radio" name="tires" id="trch2" />
                <input type="radio" name="tires" id="trch3" />
                <input type="radio" name="tires" id="trch4" />
                <input type="radio" name="tires" id="trch5" />
                <input type="radio" name="tires" id="trch6" />
                <input type="radio" name="tires" id="trch7" />
                <input type="radio" name="tires" id="trch8" />
                <input type="radio" name="tires" id="trch9" />
                <input type="radio" name="tires" id="trch10" />
                <input type="radio" name="tires" id="trch11" />
                <input type="radio" name="tires" id="trch12" />
                <label htmlFor="trch1">
                  <img src={tire1} alt="" />
                </label>
                <label htmlFor="trch2">
                  <img src={tire2} alt="" />
                </label>
                <label htmlFor="trch3">
                  <img src={tire3} alt="" />
                </label>
                <label htmlFor="trch4">
                  <img src={tire4} alt="" />
                </label>
                <label htmlFor="trch5">
                  <img src={tire5} alt="" />
                </label>
                <label htmlFor="trch6">
                  <img src={tire6} alt="" />
                </label>
                <label htmlFor="trch7">
                  <img src={tire7} alt="" />
                </label>
                <label htmlFor="trch8">
                  <img src={tire8} alt="" />
                </label>
                <label htmlFor="trch9">
                  <img src={tire9} alt="" />
                </label>
                <label htmlFor="trch10">
                  <img src={tire10} alt="" />
                </label>
                <label htmlFor="trch11">
                  <img src={tire11} alt="" />
                </label>
                <label htmlFor="trch12">
                  <img src={tire12} alt="" />
                </label>
                <img src={tire1} alt="" id="trshw1" />
                <img src={tire2} alt="" id="trshw2" />
                <img src={tire3} alt="" id="trshw3" />
                <img src={tire4} alt="" id="trshw4" />
                <img src={tire5} alt="" id="trshw5" />
                <img src={tire6} alt="" id="trshw6" />
                <img src={tire7} alt="" id="trshw7" />
                <img src={tire8} alt="" id="trshw8" />
                <img src={tire9} alt="" id="trshw9" />
                <img src={tire10} alt="" id="trshw10" />
                <img src={tire11} alt="" id="trshw11" />
                <img src={tire12} alt="" id="trshw12" />
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="gogoracing-footer-distributed">
        <div className="footer-left">
          <img src={icono} alt="" className="logso" />
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
      <div className={botoons ? "botoons active" : "botoons"}>
        <HashLink smooth to="/gogoracing#" id="up">
          <FaRegArrowAltCircleUp />
        </HashLink>
      </div>
    </div>
  );
};

export default GoGoRacingComponent;
