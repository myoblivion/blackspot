import React, { useState, useEffect, useRef, LinkProps, useMemo } from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import Pointing from "../images/icons/6cc.png";
import icono from "../images/icons/logo.png";
import Bus from "../images/directionmg/Bus.png";
import Train from "../images/directionmg/Train.png";
import Jeep from "../images/directionmg/Jeep.png";
import Walk from "../images/icons/walk.png";
import $ from "jquery";
import Pointing2 from "../images/icons/7cc.png";
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
const DirectionComponent = ({ props, ref, currentRoute }) => {
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
  console.log(changeBackground);
  $(function () {
    $(".btn-6")
      .on("mouseenter", function (e) {
        var parentOffset = $(this).offset(),
          relX = e.pageX - parentOffset.left,
          relY = e.pageY - parentOffset.top;
        $(this).find("span").css({ top: relY, left: relX });
      })
      .on("mouseout", function (e) {
        var parentOffset = $(this).offset(),
          relX = e.pageX - parentOffset.left,
          relY = e.pageY - parentOffset.top;
        $(this).find("span").css({ top: relY, left: relX });
      });
  });

  useEffect(() => {
    document.title = "Black Spot Studio | Direction";
  }, []);
  return (
    <div className="direction wrapper">
      <div className="direction-wrapper">
        <div className="upper-direction">
          <div className="left-direction">
            <div className="inner-dwrap">
              <h1>COME VISIT US!</h1>
              <h2>
                The Infinity Tower, 26th Street, Bonifacio Global City, Taguig,
                1630 Philippines.
              </h2>
            </div>
          </div>
          <section className="map-pointer">
            <iframe
              title="map"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=26th%20St,%20Taguig,%20The%20infinity%20Metro%20Manila&t=&z=19&ie=UTF8&iwloc=&output=embed"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
            ></iframe>
            <img src={Pointing} id="point" alt="" />
            <img src={Pointing2} id="pointpoint" alt="" />
          </section>
        </div>
        <div className="section2-wrapper">
          <div className="labels">
            <label htmlFor="train" class="btn">
              <span>Train</span>
            </label>
            <label htmlFor="bus" class="btn">
              <span> Bus</span>
            </label>
            <label htmlFor="jeep" class="btn">
              <span> Jeep</span>
            </label>
            <label htmlFor="walk" class="btn">
              <span>Walk/Grab</span>
            </label>
          </div>
          <div className="direction-wrappers">
            <input
              type="radio"
              name="direction-picker"
              id="train"
              defaultChecked
            />
            <input type="radio" name="direction-picker" id="bus" />
            <input type="radio" name="direction-picker" id="jeep" />
            <input type="radio" name="direction-picker" id="walk" />
            <div className="via-train">
              <div className="dleft">
                <img src={Train} alt="" />
              </div>
              <div className="dright">
                <h2>Via Train</h2>
                <h3>From Ayala MRT Station</h3>
                <p>
                  Travel time from Ayala MRT Station to Black Spot Studio
                  Philippines is about 15 to 20 minutes
                </p>
                <h3>Ayala MRT Station</h3>
                <ul>
                  <li>
                    From Ayala Station, walk to BGC Bus Station and ride a bus
                    going to West or North Route
                  </li>
                  <li>
                    From BGC Bus Station, get off to 25th St. or The Infinity
                    Building
                  </li>
                  <li>
                    25th Street (The Finance Corporation) From 25th Street its
                    just 2 minute walk to Infinity Building or Black Spot Studio
                  </li>
                </ul>
                <h3>From SM North Edsa/North Edsa MRT Station</h3>
                <ul>
                  <li>
                    Travel time from SM North EDSA to Black Spot Studio
                    Philippines is about 1 hr to 1 hr and 20 minutes
                  </li>
                </ul>
                <h3>SM North Edsa/North Edsa MRT Station</h3>
                <ul>
                  <li>
                    From North Edsa Station, take the MRT going to Ayala MRT
                    Station.
                  </li>
                </ul>
                <h3>Ayala MRT Station</h3>
                <ul>
                  <li>
                    From Ayala Station, just walk to BGC Bus Station and ride a
                    bus going to West or North Route
                  </li>
                </ul>
                <h3> BGC Bus Station</h3>
                <ul>
                  <li>
                    From BGC Bus Station, get off to 25th St. or Finance
                    Corporation Building/ Infinity Building
                  </li>
                </ul>
                <h3>25th Street (The Finance Corporation)</h3>
                <ul>
                  <li>
                    From 25th Street its just 2 minute walk to Infinity Building
                    or Black Spot Studio
                  </li>
                </ul>
              </div>
            </div>
            <div className="via-bus">
              <div className="dleft">
                <img src={Bus} alt="" />
              </div>
              <div className="dright">
                <h2>Via Bus</h2>
                <h3>From NAIA Terminal 1, 2, and 3</h3>
                <ul>
                  <li>
                    Travel time from NAIA Terminal 1, 2, and 3 to Black Spot
                    Studio Philippines is about 1 hour to 30 minutes to 2 hours
                    depending on traffic
                  </li>
                </ul>
                <h3>Paranaque Integrated Terminal Exchange</h3>
                <ul>
                  <li>Ride an EDSA BUS CAROUSEL from PITX to Ayala Station</li>
                </ul>
                <h3>Ayala Station</h3>
                <ul>
                  <li>
                    From Ayala Station, just walk to BGC Bus Station and ride a
                    bus going to West or North Route{" "}
                  </li>
                </ul>
                <h3>BGC Bus Station</h3>
                <ul>
                  <li>
                    From BGC Bus Station, get off to 25th St. or Finance
                    Corporation Building/Infinity Building
                  </li>
                </ul>
                <h3>25th Street (The Finance Corporation) </h3>
                <ul>
                  <li>
                    From 25th Street its just 2 minutes walk to Infinity
                    Building or Black Spot STudio PH{" "}
                  </li>
                </ul>
              </div>
            </div>
            <div className="via-jeep">
              <div className="dleft">
                <img src={Jeep} alt="" />
              </div>
              <div className="dright">
                <h2>Via Jeep</h2>
                <ul>
                  <li>
                    Travel time Starmall Alabang to Black Spot Studio PH is
                    about 1 hour
                  </li>
                </ul>
                <h3>From Starmall Alabang</h3>
                <ul>
                  <li>Take a Jeepney going to Tenement</li>
                </ul>
                <h3>Tenement</h3>
                <ul>
                  <li>From Tenement ride a jeepney going to market market</li>
                </ul>
                <h3>Market Market</h3>
                <ul>
                  <li>
                    From Market market walk going to SM Aura and walk ahead
                    going to 26th street corner with 11th street.
                  </li>
                </ul>
              </div>
            </div>
            <div className="via-walkgrab">
              <div className="dleft">
                <img src={Walk} alt="" />
              </div>
              <div className="dright">
                <h2>Via Walk/Grab</h2>
                <h3>From SM Aura</h3>
                <ul>
                  <li>
                    Head on to Mckinley Parkway and walk ahead through 26th
                    street corner 11th Street
                  </li>
                </ul>
                <h3>Via Grab </h3>
                <ul>
                  <li>
                    Just pin "THE FINANCE CENTER" and just walk ahead to
                    Infinity Corporate Building
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
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
      </div>
      <div className={botoons ? "botoons active" : "botoons"}>
        <HashLink smooth to="/direction#" id="up">
          <FaRegArrowAltCircleUp />
        </HashLink>
      </div>
    </div>
  );
};

export default DirectionComponent;
