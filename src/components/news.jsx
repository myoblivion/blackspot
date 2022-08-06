import React, { useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
// banners
import image1 from "../images/gogoracingbackground/GGR_BG.png";
import image2 from "../images/Scion Fist Desktop 2.png";
import image3 from "../images/gogoracingbackground/GGR_BG.png";
import image4 from "../images/gogoracingbackground/GGR_BG.png";
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
            <div class="diamond-grid">
              <div></div>
              <img src={image1} alt="" class="diamond-grid__item" />
              <div></div>
              <img
                src="https://picsum.photos/300"
                alt=""
                class="diamond-grid__item"
              />
              <div></div>
              <img src={image2} alt="" class="diamond-grid__item" />
              <div></div>
              <img
                src="https://picsum.photos/500"
                alt=""
                class="diamond-grid__item"
              />
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsComponent;
