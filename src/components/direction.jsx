import React, { useState, useEffect, useRef, LinkProps } from "react";
import GifLoader from "react-gif-loader";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
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
  FaSketch,
  FaTasks,
  FaTwitter,
  FaYoutube,
  FaRegArrowAltCircleUp,
} from "react-icons/fa";
import icono from "../images/icons/logo.png";
import bus from "../images/icons/Bus.png";
import walk from "../images/icons/walk.png";
import jeep from "../images/icons/Jeep.png";
import train from "../images/icons/Train.png";
import { AiFillInstagram } from "react-icons/ai";

const DirectionComponent = ({ props, ref, currentRoute }) => {
  useEffect(() => {
    document.title = "Black Spot Studio | Direction";
  }, []);
  return (
    <div className="direction wrapper">
      <section className="map-wrapper" id="map-wrapper">
        <section className="map">
          <GifLoader
            loading={true}
            imageSrc="https://media.giphy.com/media/XYHRwxYXXA68DhcAmF/giphy.gif"
            overlayBackground="transparent"
          />
        </section>
        <section className="description-map">
          <div className="come-address">
            <h1>Come Visit Us!</h1>
            <h2>
              The Infinity Tower, 26th Street, Bonifacio Global City, Taguig,
              1630 Philippines.
            </h2>
          </div>
          <div className="direction-navigation">
            <ul>
              <li>
                <HashLink smooth to="/direction#bus">
                  {" "}
                  Via Bus
                </HashLink>
              </li>
              <li>
                <HashLink smooth to="/direction#train">
                  {" "}
                  Via Train
                </HashLink>
              </li>
              <li>
                <HashLink smooth to="/direction#jeep">
                  {" "}
                  Via Jeep
                </HashLink>
              </li>
              <li>
                <HashLink smooth to="/direction#walk">
                  {" "}
                  Via Walk/Grab
                </HashLink>
              </li>
            </ul>
          </div>
        </section>
      </section>
      <section className="for-direction">
        <div
          className="wrapper-directions"
          id="bus"
          data-aos="zoom-out"
          data-aos-duration="500"
        >
          <div className="box-direction">
            <div className="image-direction">
              <img src={bus} alt="BUS" />
            </div>
            <div className="direction-content">
              <h4>
                Via Bus <br />
              </h4>
              <span>
                {" "}
                <strong>From NAIA Terminal 1,2, and 3</strong>
              </span>
              <p>
                Travel time from NAIA Terminal 1, 2 and 3 to Black Spot Studio
                Philippines is about 1 hr 30 minutes to 2hrs depending on
                traffic.{" "}
              </p>
              <ul>
                <li>
                  <span>
                    <strong> NAIA Terminal 1, 2, and 3</strong>
                  </span>{" "}
                  <br />
                  <p>
                    {" "}
                    Ride airport bus from the terminal to PITX (Paranaque
                    Integrated Terminal Exchange)
                  </p>
                </li>
                <li>
                  <span>
                    <strong> Paranaque Integrated Terminal Exchange</strong>
                  </span>{" "}
                  <br />
                  <p> Ride an EDSA BUS CAROUSEL from PITX to Ayala Station</p>
                </li>
                <li>
                  <span>
                    <strong> Ayala Station</strong>
                  </span>{" "}
                  <br />
                  <p>
                    {" "}
                    From Ayala Station, just walk to BGC Bus Station and ride a
                    bus going to West or North Route
                  </p>
                </li>
                <li>
                  <span>
                    <strong> BGC Bus Station</strong>
                  </span>{" "}
                  <br />
                  <p>
                    {" "}
                    From BGC Bus Station, get off to 25th St. or Finance
                    Corporation Building/ Infinity Building
                  </p>
                </li>
                <li>
                  {" "}
                  <span>
                    <strong> 25th Street (The Finance Corporation)</strong>
                  </span>{" "}
                  <br />
                  <p>
                    {" "}
                    From 25th Street its just 2 minute walk to Infinity Building
                    or Black Spot Studio
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="wrapper-directions"
          id="train"
          data-aos="zoom-out"
          data-aos-duration="500"
        >
          <div className="box-direction">
            <div className="image-direction">
              <img src={train} alt="Train" />
            </div>
            <div className="direction-content" id="chuchu">
              <h4>
                Via Train <br />
              </h4>
              <span>
                {" "}
                <strong>From Ayala MRT Station</strong>
              </span>
              <p>
                Travel time from Ayala MRT Station to Black Spot Studio
                Philippines is about 15 to 20 minutes.{" "}
              </p>
              <ul>
                <li>
                  <span>
                    <strong>Ayala MRT Station</strong>
                  </span>{" "}
                  <br />
                  <p>
                    {" "}
                    From Ayala Station, just walk to BGC Bus Station and ride a
                    bus going to West or North Route
                  </p>
                </li>
                <li>
                  <p>
                    {" "}
                    BGC Bus Station From BGC Bus Station, get off to 25th St. or
                    Finance Corporation Building/ Infinity Building
                  </p>
                </li>
                <li>
                  <p>
                    {" "}
                    25th Street (The Finance Corporation) From 25th Street (The
                    Finance Corporation) its just 2 minute walk to Infinity
                    Building or Black Spot Studio
                  </p>
                </li>
                <li>
                  <span>
                    <strong>From SM North Edsa/ North Edsa MRT Station</strong>
                  </span>
                </li>
                <li>
                  <p>
                    {" "}
                    Travel time from SM North EDSA to Black Spot Studio
                    Philippines is about 1 hr to 1 hr and 20 minutes
                  </p>
                </li>
                <li>
                  <span>
                    <strong>SM North Edsa/ North Edsa MRT Station</strong>{" "}
                  </span>
                  <br />
                  <p>
                    {" "}
                    From North Edsa Station, take the MRT going to Ayala MRT
                    Station.
                  </p>
                </li>
                <li>
                  <span>
                    <strong>Ayala MRT Station</strong>
                  </span>{" "}
                  <br />
                  <p>
                    From Ayala Station, just walk to BGC Bus Station and ride a
                    bus going to West or North Route
                  </p>
                </li>
                <li>
                  <span>
                    <strong>BGC Bus Station</strong> <br />
                  </span>
                  <p>
                    {" "}
                    From BGC Bus Station, get off to 25th St. or Finance
                    Corporation Building/ Infinity Building
                  </p>
                </li>
                <li>
                  <span>
                    {" "}
                    <strong>25th Street (The Finance Corporation) </strong>{" "}
                  </span>
                  <br />
                  <p>
                    {" "}
                    From 25th Street its just 2 minute walk to Infinity Building
                    or Black Spot Studio
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="wrapper-directions"
          id="jeep"
          data-aos="zoom-out"
          data-aos-duration="500"
        >
          <div className="box-direction">
            <div>
              <img src={jeep} alt="Jeep" />
            </div>
            <div className="direction-content">
              <h4>
                VIA JEEP <br />
              </h4>
              <p className="direction-stuff">
                Travel time from Starmall Alabang to Black Spot Studio
                Philippines is about 1 hr to 1 hr and 20 minutes
              </p>
              <ul>
                <li>
                  <span>
                    {" "}
                    <strong>From Starmall Alabang</strong>{" "}
                  </span>
                  <br />
                  <p> Take a jeepney going to Tenement.</p>
                </li>
                <li>
                  <strong>Tenement</strong> <br />
                  <p> From Tenement ride a jeepney going to market market</p>
                </li>
                <li>
                  <span>
                    <strong> Market Market</strong>
                  </span>{" "}
                  <br />
                  <p>
                    {" "}
                    From Market market walk going to SM Aura and walk ahead
                    going to 26th Street corner 11th Street.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="wrapper-directions"
          id="walk"
          data-aos="zoom-out"
          data-aos-duration="500"
        >
          <div className="box-direction">
            <div className="image-direction">
              <img src={walk} alt="BUS" />
            </div>
            <div className="direction-content">
              <h4 id="walks">
                Via Walk / Grab <br />
              </h4>
              <span>
                {" "}
                <strong>From SM Aura</strong>
              </span>
              <p className="direction-stuff">
                Head on Mckinley Parkway and walk ahead thru 26th Street corner
                11th Street.
              </p>
              <h4 id="grab">Via Grab</h4>
              <p className="direction-stuff">
                Just pin “THE FINANCE CENTER” and just walk ahead to Infinity
                Corporate Building.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="footer-section">
        <footer className="footer-distributed-direction">
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
          <HashLink smooth to="/direction#" id="up">
            {" "}
            <FaRegArrowAltCircleUp />
          </HashLink>
        </div>
      </div>
    </div>
  );
};

export default DirectionComponent;
