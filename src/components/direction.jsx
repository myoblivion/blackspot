import React, { useEffect } from "react";
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
} from "react-icons/fa";
import icono from "../images/icons/logo.png";
import bus from "../images/icons/Bus.png";
import walk from "../images/icons/walk.png";
import jeep from "../images/icons/Jeep.png";
import train from "../images/icons/Train.png";
import { AiFillInstagram } from "react-icons/ai";

const DirectionComponent = ({ currentRoute }) => {
  useEffect(() => {
    document.title = "Black Spot Studio | Direction";
  }, []);
  return (
    <div className="direction wrapper">
      <section className="map-wrapper">
        <section className="map">
          <GifLoader
            loading={true}
            imageSrc="https://media.giphy.com/media/XYHRwxYXXA68DhcAmF/giphy.gif"
            overlayBackground="transparent"
          />
        </section>
        <section className="description-map">
          <h1>Come Visit Us!</h1>
          <h2> 26th St, Taguig, 1634 Metro Manila</h2>
        </section>
      </section>
      <section className="for-direction">
        <div className="title-direction">
          <h1>For Direction </h1>
        </div>
        <div className="wrapper-directions">
          <div className="box-direction">
          <div className="image-direction">
              <img src={bus} alt="BUS" />
            </div>
            <div className="direction-content">
              <h2>
                Via Bus <br />
              </h2>
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
                  <strong>NAIA Terminal 1, 2, and 3</strong> <br />
                  Ride airport bus from the terminal to PITX (Paranaque
                  Integrated Terminal Exchange)
                </li>
                <li>
                  <strong> Paranaque Integrated Terminal Exchange</strong>{" "}
                  <br />
                  Ride an EDSA BUS CAROUSEL from PITX to Ayala Station
                </li>
                <li>
                  <strong> Ayala Station</strong> <br /> From Ayala Station,
                  just walk to BGC Bus Station and ride a bus going to West or
                  North Route
                </li>
                <li>
                  <strong>BGC Bus Station</strong> <br /> From BGC Bus Station,
                  get off to 25th St. or Finance Corporation Building/ Infinity
                  Building
                </li>
                <li>
                  {" "}
                  <strong>
                    25th Street (The Finance Corporation)
                  </strong> <br /> From 25th Street its just 2 minute walk to
                  Infinity Building or Black Spot Studio
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="section">
        <footer className="footer-distributed-direction">
          <div className="footer-left">
            <img src={icono} alt="" className="logso" />
            <p className="footer-links">
              <a href="#">About Us</a>

              <Link to="/privacy">Privacy & Policy</Link>
              <Link to="/job">Career</Link>

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
      </div>
    </div>
  );
};

export default DirectionComponent;
