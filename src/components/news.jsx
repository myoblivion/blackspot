import React, { useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
// banners
import Banner1 from "../images/banner4l.png";
import Banner2 from "../images/gogoraces.jpg";
import Banner3 from "../images/gogoworlds.jpg";
import Banner4 from "../images/game3.jpg";
import {
  FaEnvelope,
  FaFacebook,
  FaMapMarked,
  FaReddit,
  FaRegArrowAltCircleUp,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import icono from "../images/icons/logo.png";

const NewsComponent = ({props, ref, currentRoute }) => {
  // Title
  useEffect(() => {
    document.title = "Black Spot Studio | News & Announcement";
  }, []);
  return (
    <div className="news wrapper">
      <div className="accordion">
        <div className="news-title">
          <h1>News & Announcements</h1>
        </div>
        <div className="wrapper-bg">
          <section className="bg-1">
            <div className="blog-card card-1">
              <img className="blog-img" src={Banner1} />
              <div className="text-overlay">
                <h2>Scion Fist</h2>
                <p>
                  Read News, Game Updates, Announcements, and Guides..
                  <Link
                    to="/scionnews"
                    {...props}
                    ref={ref}
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    View all
                  </Link>
                </p>
              </div>
            </div>
          </section>
          <section className="bg-2">
            <div className="blog-card card-2">
              <img className="blog-img" src={Banner2} />
              <div className="text-overlay">
                <h2>GoGO Racing</h2>
                <p>
                  Read News, Game Updates, Announcements, and Guides..
                  <Link
                    to="/gogoracingnews"
                    {...props}
                    ref={ref}
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    View all
                  </Link>
                </p>
              </div>
            </div>
          </section>
          <section className="bg-3">
            <div className="blog-card card-3">
              <img className="blog-img" src={Banner3} />
              <div className="text-overlay">
                <h2>GoGo World</h2>
                <p>
                  Read News, Game Updates, Announcements, and Guides..
                  <Link
                    to="/gogoworldnews"
                    {...props}
                    ref={ref}
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    View all
                  </Link>
                </p>
              </div>
            </div>
          </section>
          <section className="bg-4">
            <div className="blog-card card-3">
              <img className="blog-img" src={Banner4} />
              <div className="text-overlay">
                <h2>GoGo Chain</h2>
                <p>
                  Read News, Game Updates, Announcements, and Guides..
                  <Link
                    to="/gogochainnews"
                    {...props}
                    ref={ref}
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    View all
                  </Link>
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
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
              <Link
                to="/privacy"
                {...props}
                ref={ref}
                onClick={() => window.scrollTo(0, 0)}
              >
                Privacy & Policy
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
          <HashLink smooth to="/news#" id="up">
            {" "}
            <FaRegArrowAltCircleUp />
          </HashLink>
        </div>
      </div>
    </div>
  );
};

export default NewsComponent;
