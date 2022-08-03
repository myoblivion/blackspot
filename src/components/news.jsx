import React, { useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
// banners
import Banner1 from "../images/banner4l.png";
import Banner2 from "../images/gogoraces.jpg";
import Banner3 from "../images/gogoworlds.jpg";
import Banner4 from "../images/game3.jpg";
import scionchar from "../images/characters/ch11.png";
import scionlogo from "../images/scionlogo.png";
import ggricon from "../images/icons/gogoracing.png";
import ggrcharacter from "../images/edit/ggrc-2.png";
import gogoworldicon from "../images/icons/gogoworld.png";
import gogoworldchar from "../images/characters/Jjiljjil.png";
import gogochainicon from "../images/icons/gogoc.png";
import gogochainchar from "../images/ggr-characters/6-hekhek-costume-1.png";
import {
  FaUserCircle,
  FaSearch,
  FaRegArrowAltCircleUp,
  FaWindowClose,
} from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import icono from "../images/icons/logo.png";
import { IoIosArrowDropleftCircle } from "react-icons/io";

const NewsComponent = ({ props, ref, currentRoute }) => {
  // Title
  useEffect(() => {
    document.title = "Black Spot Studio | News & Announcement";
  }, []);
  return (
    <div className="news wrapper">
      <div className="news-wrapper">
        <div
          className="news-contents"
          data-aos="zoom-in"
          data-aos-duration="700"
        >
          <div className="header">
            <h1>News & Announcements</h1>
          </div>
          <div className="news-cards">
            <div className="news-card1">Test</div>
            <div className="news-card2">Test</div>
            <div className="news-card3">Test</div>
            <div className="news-card4">Test</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsComponent;
