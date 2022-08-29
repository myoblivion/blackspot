import React, { useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import GogoRacing from "../images/icons/Icon_IOS_192.png";
import GogoWorld from "../images/gogow.jpg";
import ScionFist from "../images/icons/scionn.png";
import GogoChain from "../images/icons/ggchain.png";
// banners

const NewsComponent = ({ props, ref, currentRoute }) => {
  // Title
  useEffect(() => {
    document.title = "Black Spot Studio | News & Announcement";
  }, []);
  return (
    <div className="news wrapper">
      <div className="news-wrapper">
        <h1>News & Announcements</h1>
        <div className="listn-wrapper">
          <ul className="news-list">
            <li>
              <div className="gleft"></div>
              <div className="gright">
                <h3>Gogo Racing</h3>
                <p>See latest news & updates</p>
                <Link
                  to="/gogoracingnews"
                  {...props}
                  ref={ref}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Read More
                </Link>
              </div>
            </li>
            <li>
              <div className="gleft"></div>
              <div className="gright">
                <h3>Scion Fist</h3>
                <p>See latest news & updates</p>
                <Link
                  to="/scionnews"
                  {...props}
                  ref={ref}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Read More
                </Link>
              </div>
            </li>
            <li>
              <div className="gleft"></div>
              <div className="gright">
                <h3>GogoWorld</h3>
                <p>See latest news & updates</p>
                <span>Read More</span>
              </div>
            </li>
            <li>
              <div className="gleft"></div>
              <div className="gright">
                <h3>Gogo Chain</h3>
                <p>See latest news & updates</p>
                <span>Read More</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NewsComponent;
