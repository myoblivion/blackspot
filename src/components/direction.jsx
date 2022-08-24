// import React, { useState, useEffect, useRef, LinkProps, useMemo } from "react";
// import { HashLink } from "react-router-hash-link";
// import { Link } from "react-router-dom";
// import Pointing from "../images/icons/6cc.png";
// import icono from "../images/icons/logo.png";
// import Bus from "../images/directionmg/Bus.png";
// import Train from "../images/directionmg/Train.png";
// import Jeep from "../images/directionmg/Jeep.png";
// import Walk from "../images/icons/walk.png";
// import $ from "jquery";
// import Pointing2 from "../images/icons/7cc.png";
// import {
//   FaEnvelope,
//   FaFacebook,
//   FaGamepad,
//   FaInstagramSquare,
//   FaMapMarked,
//   FaPaperPlane,
//   FaPhone,
//   FaReddit,
//   FaRegArrowAltCircleLeft,
//   FaRegArrowAltCircleRight,
//   FaTwitter,
//   FaYoutube,
//   FaWindows,
//   FaAppStore,
//   FaGooglePlay,
//   FaRegArrowAltCircleUp,
//   FaWindowClose,
//   FaInstagram,
//   FaTiktok,
// } from "react-icons/fa";
// import { AiFillInstagram } from "react-icons/ai";
// const DirectionComponent = ({ props, ref, currentRoute }) => {
//   const [botoons, setBotoons] = useState(false);

//   const changeBackground = () => {
//     console.log(window.scrollY);
//     if (window.scrollY >= 66) {
//       setBotoons(true);
//     } else {
//       setBotoons(false);
//     }
//   };

//   useEffect(() => {
//     changeBackground();
//     // adding the event when scroll change background
//     window.addEventListener("scroll", changeBackground);
//   });

//   //logo scroll function

//   window.addEventListener("scroll", changeBackground);
//   console.log(changeBackground);
//   $(function () {
//     $(".btn-6")
//       .on("mouseenter", function (e) {
//         var parentOffset = $(this).offset(),
//           relX = e.pageX - parentOffset.left,
//           relY = e.pageY - parentOffset.top;
//         $(this).find("span").css({ top: relY, left: relX });
//       })
//       .on("mouseout", function (e) {
//         var parentOffset = $(this).offset(),
//           relX = e.pageX - parentOffset.left,
//           relY = e.pageY - parentOffset.top;
//         $(this).find("span").css({ top: relY, left: relX });
//       });
//   });

//   useEffect(() => {
//     document.title = "Black Spot Studio | Direction";
//   }, []);
//   return (
//     <div className="direction wrapper">
//       <div className="direction-wrapper">
//         <div className="upper-direction">
//           <div className="left-direction">
//             <div className="inner-dwrap">
//               <h1>COME VISIT US!</h1>
//               <h2>
//                 The Infinity Tower, 26th Street, Bonifacio Global City, Taguig,
//                 1630 Philippines.
//               </h2>
//             </div>
//           </div>
//           <section className="map-pointer">
//             <iframe
//               title="map"
//               id="gmap_canvas"
//               src="https://maps.google.com/maps?q=26th%20St,%20Taguig,%20The%20infinity%20Metro%20Manila&t=&z=19&ie=UTF8&iwloc=&output=embed"
//               frameBorder="0"
//               scrolling="no"
//               marginHeight="0"
//               marginWidth="0"
//             ></iframe>
//             <img src={Pointing} id="point" alt="" />
//             <img src={Pointing2} id="pointpoint" alt="" />
//           </section>
//         </div>
//         <div className="section2-wrapper">
//           <div className="labels">
//             <label htmlFor="train" class="btn">
//               <span>Train</span>
//             </label>
//             <label htmlFor="bus" class="btn">
//               <span> Bus</span>
//             </label>
//             <label htmlFor="jeep" class="btn">
//               <span> Jeep</span>
//             </label>
//             <label htmlFor="walk" class="btn">
//               <span>Walk/Grab</span>
//             </label>
//           </div>
//           <div className="direction-wrappers">
//             <input
//               type="radio"
//               name="direction-picker"
//               id="train"
//               defaultChecked
//             />
//             <input type="radio" name="direction-picker" id="bus" />
//             <input type="radio" name="direction-picker" id="jeep" />
//             <input type="radio" name="direction-picker" id="walk" />
//             <div className="via-train">
//               <div className="dleft">
//                 <img src={Train} alt="" />
//               </div>
//               <div className="dright">
//                 <h2>Via Train</h2>
//                 <h3>From Ayala MRT Station</h3>
//                 <p>
//                   Travel time from Ayala MRT Station to Black Spot Studio
//                   Philippines is about 15 to 20 minutes
//                 </p>
//                 <h3>Ayala MRT Station</h3>
//                 <ul>
//                   <li>
//                     From Ayala Station, walk to BGC Bus Station and ride a bus
//                     going to West or North Route
//                   </li>
//                   <li>
//                     From BGC Bus Station, get off to 25th St. or The Infinity
//                     Building
//                   </li>
//                   <li>
//                     25th Street (The Finance Corporation) From 25th Street its
//                     just 2 minute walk to Infinity Building or Black Spot Studio
//                   </li>
//                 </ul>
//                 <h3>From SM North Edsa/North Edsa MRT Station</h3>
//                 <ul>
//                   <li>
//                     Travel time from SM North EDSA to Black Spot Studio
//                     Philippines is about 1 hr to 1 hr and 20 minutes
//                   </li>
//                 </ul>
//                 <h3>SM North Edsa/North Edsa MRT Station</h3>
//                 <ul>
//                   <li>
//                     From North Edsa Station, take the MRT going to Ayala MRT
//                     Station.
//                   </li>
//                 </ul>
//                 <h3>Ayala MRT Station</h3>
//                 <ul>
//                   <li>
//                     From Ayala Station, just walk to BGC Bus Station and ride a
//                     bus going to West or North Route
//                   </li>
//                 </ul>
//                 <h3> BGC Bus Station</h3>
//                 <ul>
//                   <li>
//                     From BGC Bus Station, get off to 25th St. or Finance
//                     Corporation Building/ Infinity Building
//                   </li>
//                 </ul>
//                 <h3>25th Street (The Finance Corporation)</h3>
//                 <ul>
//                   <li>
//                     From 25th Street its just 2 minute walk to Infinity Building
//                     or Black Spot Studio
//                   </li>
//                 </ul>
//               </div>
//             </div>
//             <div className="via-bus">
//               <div className="dleft">
//                 <img src={Bus} alt="" />
//               </div>
//               <div className="dright">
//                 <h2>Via Bus</h2>
//                 <h3>From NAIA Terminal 1, 2, and 3</h3>
//                 <ul>
//                   <li>
//                     Travel time from NAIA Terminal 1, 2, and 3 to Black Spot
//                     Studio Philippines is about 1 hour to 30 minutes to 2 hours
//                     depending on traffic
//                   </li>
//                 </ul>
//                 <h3>Paranaque Integrated Terminal Exchange</h3>
//                 <ul>
//                   <li>Ride an EDSA BUS CAROUSEL from PITX to Ayala Station</li>
//                 </ul>
//                 <h3>Ayala Station</h3>
//                 <ul>
//                   <li>
//                     From Ayala Station, just walk to BGC Bus Station and ride a
//                     bus going to West or North Route{" "}
//                   </li>
//                 </ul>
//                 <h3>BGC Bus Station</h3>
//                 <ul>
//                   <li>
//                     From BGC Bus Station, get off to 25th St. or Finance
//                     Corporation Building/Infinity Building
//                   </li>
//                 </ul>
//                 <h3>25th Street (The Finance Corporation) </h3>
//                 <ul>
//                   <li>
//                     From 25th Street its just 2 minutes walk to Infinity
//                     Building or Black Spot STudio PH{" "}
//                   </li>
//                 </ul>
//               </div>
//             </div>
//             <div className="via-jeep">
//               <div className="dleft">
//                 <img src={Jeep} alt="" />
//               </div>
//               <div className="dright">
//                 <h2>Via Jeep</h2>
//                 <ul>
//                   <li>
//                     Travel time Starmall Alabang to Black Spot Studio PH is
//                     about 1 hour
//                   </li>
//                 </ul>
//                 <h3>From Starmall Alabang</h3>
//                 <ul>
//                   <li>Take a Jeepney going to Tenement</li>
//                 </ul>
//                 <h3>Tenement</h3>
//                 <ul>
//                   <li>From Tenement ride a jeepney going to market market</li>
//                 </ul>
//                 <h3>Market Market</h3>
//                 <ul>
//                   <li>
//                     From Market market walk going to SM Aura and walk ahead
//                     going to 26th street corner with 11th street.
//                   </li>
//                 </ul>
//               </div>
//             </div>
//             <div className="via-walkgrab">
//               <div className="dleft">
//                 <img src={Walk} alt="" />
//               </div>
//               <div className="dright">
//                 <h2>Via Walk/Grab</h2>
//                 <h3>From SM Aura</h3>
//                 <ul>
//                   <li>
//                     Head on to Mckinley Parkway and walk ahead through 26th
//                     street corner 11th Street
//                   </li>
//                 </ul>
//                 <h3>Via Grab </h3>
//                 <ul>
//                   <li>
//                     Just pin "THE FINANCE CENTER" and just walk ahead to
//                     Infinity Corporate Building
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//         <footer className="footer-distributed">
//           <div className="footer-left" data-aos="fade-up">
//             <img src={icono} alt="" id="footer-logo" />
//             <p className="footer-links">
//               <Link
//                 to="/about"
//                 {...props}
//                 ref={ref}
//                 onClick={() => window.scrollTo(0, 0)}
//               >
//                 About Us
//               </Link>
//               <Link
//                 to="/privacy"
//                 {...props}
//                 ref={ref}
//                 onClick={() => window.scrollTo(0, 0)}
//               >
//                 Privacy & Policy
//               </Link>
//               <Link
//                 to="/terms-of-use"
//                 {...props}
//                 ref={ref}
//                 onClick={() => window.scrollTo(0, 0)}
//               >
//                 Terms of Use
//               </Link>
//               <Link
//                 to="/job"
//                 {...props}
//                 ref={ref}
//                 onClick={() => window.scrollTo(0, 0)}
//               >
//                 Career
//               </Link>

//               <HashLink smooth to="/#contact">
//                 {" "}
//                 Contact Us
//               </HashLink>
//             </p>

//             <p className="footer-company-name">
//               Copyright © Black Spot Studio PH{" "}
//             </p>
//           </div>

//           <div className="footer-center" data-aos="fade-up">
//             <div className="desz">
//               <p>
//                 <Link
//                   to="/direction"
//                   {...props}
//                   ref={ref}
//                   onClick={() => window.scrollTo(0, 0)}
//                 >
//                   <FaMapMarked /> 26th St, Taguig, 1634 Metro Manila
//                 </Link>
//               </p>
//             </div>

//             <div className="desz">
//               <p>
//                 <a href="play@blackspotstudio.ph">
//                   {" "}
//                   <FaEnvelope /> play@blackspotstudio.ph
//                 </a>
//               </p>
//             </div>
//           </div>

//           <div className="footer-right">
//             <div className="footer-icons">
//               <ul className="social-media-list">
//                 <li>
//                   <a
//                     href="https://www.facebook.com/BlackspotstudioPH"
//                     target="_blank"
//                     className="contact-icon"
//                   >
//                     <FaFacebook />
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="https://www.instagram.com/phblackspotstudio/"
//                     target="_blank"
//                     className="contact-icon"
//                   >
//                     <AiFillInstagram />
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="https://twitter.com/BlackSpotPH"
//                     target="_blank"
//                     className="contact-icon"
//                   >
//                     <FaTwitter />
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="https://www.reddit.com/r/BlackSpotStudioPH/"
//                     target="_blank"
//                     className="contact-icon"
//                   >
//                     <FaReddit />
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="https://www.youtube.com/channel/UCL9FkYZu775aKfJ1zv4gZJQ"
//                     target="_blank"
//                     className="contact-icon"
//                   >
//                     <FaYoutube />
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </footer>
//       </div>
//       <div className={botoons ? "botoons active" : "botoons"}>
//         <HashLink smooth to="/direction#" id="up">
//           <FaRegArrowAltCircleUp />
//         </HashLink>
//       </div>
//     </div>
//   );
// };

// export default DirectionComponent;
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
              <h4>Via Bus</h4>
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
                  <p> Ride an EDSA BUS CAROUSEL from PITX to Ayala Station</p>
                </li>
                <li>
                  <span>
                    <strong> Ayala Station</strong>
                  </span>{" "}
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
              <h4>Via Train</h4>
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
                    <strong> Ayala MRT Station</strong>
                  </span>{" "}
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
                    <strong> From SM North Edsa/ North Edsa MRT Station</strong>
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
                    <strong> SM North Edsa/ North Edsa MRT Station</strong>{" "}
                  </span>

                  <p>
                    {" "}
                    From North Edsa Station, take the MRT going to Ayala MRT
                    Station.
                  </p>
                </li>
                <li>
                  <span>
                    <strong> Ayala MRT Station</strong>
                  </span>{" "}
                  <p>
                    From Ayala Station, just walk to BGC Bus Station and ride a
                    bus going to West or North Route
                  </p>
                </li>
                <li>
                  <span>
                    <strong> BGC Bus Station</strong>
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
                    <strong>
                      {" "}
                      25th Street (The Finance Corporation){" "}
                    </strong>{" "}
                  </span>

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
              <h4>VIA JEEP</h4>
              <p className="direction-stuff">
                Travel time from Starmall Alabang to Black Spot Studio
                Philippines is about 1 hr to 1 hr and 20 minutes
              </p>
              <ul>
                <li>
                  <span>
                    {" "}
                    <strong> From Starmall Alabang</strong>{" "}
                  </span>
                  <p> Take a jeepney going to Tenement.</p>
                </li>
                <li>
                  <span>
                    <strong> Tenement</strong>
                  </span>{" "}
                  <p> From Tenement ride a jeepney going to market market</p>
                </li>
                <li>
                  <span>
                    <strong> Market Market</strong>
                  </span>{" "}
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
              <h4 id="walks">Via Walk / Grab</h4>
              <span>
                {" "}
                <strong>From SM Aura</strong>
              </span>
              <p className="direction-stuff">
                Head on Mckinley Parkway and walk ahead thru 26th Street corner
                11th Street.
              </p>
              <span>
                <strong>Via Grab</strong>
              </span>
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
