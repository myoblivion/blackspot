import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { FaUserCircle, FaSearch, FaWindowClose } from "react-icons/fa";
import AnnouncementsLinks from "./announcementlinks";
import Announcement from "./announcement";
import dudes from "../images/gogoracingbackground/Announcement.png";

const GogoRacingAnnouncementList = ({ props, ref, announcements }) => {
  // Title
  useEffect(() => {
    document.title = "Black Spot Studio | Gogo Racing Announcements";
  }, []);
  return (
    <div className="ggr-announcements wrapper">
      <div className="ggr-announcement-contents">
        <div className="gr-a-wrap">
          <img
            src={dudes}
            alt=""
            id="characters"
            data-aos="zoom-in"
            data-aos-duration="500"
          />
          <div
            className="ggr-alistgontents"
            data-aos="zoom-in"
            data-aos-duration="500"
          >
            <div className="ggr-header">
              <div className="ggr-top">
                <div className="ggr-left">
                  <Link
                    to="/ggr-announcement-list"
                    {...props}
                    ref={ref}
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    <IoIosArrowDropleftCircle />
                  </Link>
                  <h2>
                    <FaUserCircle /> User
                  </h2>
                </div>
                <div className="ggr-right">
                  <Link
                    to="/ggrsearch"
                    {...props}
                    ref={ref}
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    <FaSearch />
                  </Link>
                </div>
              </div>
            </div>
            <div className="ggr-announces">
              <Routes>
                <Route
                  path="/*"
                  element={<AnnouncementsLinks announcements={announcements} />}
                />
                <Route
                  path="/:announcementID/*"
                  element={<Announcement announcements={announcements} />}
                />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GogoRacingAnnouncementList;
