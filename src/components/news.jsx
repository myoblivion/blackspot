import React, { useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
// banners
import Banner1 from "../images/banner4.jpg";
import Banner2 from "../images/gogoraces.jpg";
import Banner3 from "../images/gogoch.jpg";
import Banner4 from "../images/game3.jpg";

const NewsComponent = ({ currentRoute }) => {
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
        <div className="expand-wrapp">
          <input type="checkbox" id="developer" className="expand-input" />
          <label htmlFor="developer" className="expand-label">
          Developer Insights
          </label>
          <div className="expand-content">
            <ul className="contentlist-announcement">
              <li className="job-preview">
                <div className="contents">
                  <h4 className="title-content">Announcements</h4>
                  <h5 className="company">Date</h5>
                </div>
                <label className="btn-stuff" htmlFor="custsuppspec">
                  <p className="btnzl">See more</p>
                </label>
              </li>
              <li className="job-preview">
                <div className="contents">
                  <h4 className="title-content">Announcements</h4>
                  <h5 className="company">Date</h5>
                </div>
                <label className="btn-stuff" htmlFor="custsuppspec">
                  <p className="btnzl">See more</p>
                </label>
              </li>
            </ul>
          </div>
        </div>
        <div className="expand-wrapp">
          <input type="checkbox" id="announcement" className="expand-input" />
          <label htmlFor="announcement" className="expand-label">
            Scion Fist
          </label>
          <div className="expand-content">
            <ul className="contentlist-announcement">
              <li className="job-preview">
                <div className="contents">
                  <h4 className="title-content">Announcements</h4>
                  <h5 className="company">Date</h5>
                </div>
                <label className="btn-stuff" htmlFor="custsuppspec">
                  <p className="btnzl">See more</p>
                </label>
              </li>
              <li className="job-preview">
                <div className="contents">
                  <h4 className="title-content">Announcements</h4>
                  <h5 className="company">Date</h5>
                </div>
                <label className="btn-stuff" htmlFor="custsuppspec">
                  <p className="btnzl">See more</p>
                </label>
              </li>
            </ul>
          </div>
        </div>
        {/* 2 */}
        <div className="expand-wrapp">
          <input type="checkbox" id="updates" className="expand-input" />
          <label htmlFor="updates" className="expand-label">
            GoGo Chain
          </label>
          <div className="expand-content">
            <ul className="contentlist-news">
              <li className="job-preview">
                <div className="contents">
                  <h4 className="title-content">News</h4>
                  <h5 className="company">Date</h5>
                </div>
                <label className="btn-stuff" htmlFor="newsz">
                  <p className="btnzl">See more</p>
                </label>
              </li>
              <li className="job-preview">
                <div className="contents">
                  <h4 className="title-content">News</h4>
                  <h5 className="company">Date</h5>
                </div>
                <label className="btn-stuff" htmlFor="newsz">
                  <p className="btnzl">See more</p>
                </label>
              </li>
            </ul>
          </div>
        </div>
        {/* 3 */}
        <div className="expand-wrapp">
          <input type="checkbox" id="gogoworld" className="expand-input" />
          <label htmlFor="gogoworld" className="expand-label">
            GoGo World
          </label>
          <div className="expand-content">
            <ul className="contentlist-news">
              <li className="job-preview">
                <div className="contents">
                  <h4 className="title-content">News</h4>
                  <h5 className="company">Date</h5>
                </div>
                <label className="btn-stuff" htmlFor="newsz">
                  <p className="btnzl">See more</p>
                </label>
              </li>
              <li className="job-preview">
                <div className="contents">
                  <h4 className="title-content">News</h4>
                  <h5 className="company">Date</h5>
                </div>
                <label className="btn-stuff" htmlFor="newsz">
                  <p className="btnzl">See more</p>
                </label>
              </li>
            </ul>
          </div>
        </div>
        {/* 4 */}
        <div className="expand-wrapp">
          <input type="checkbox" id="gogoracing" className="expand-input" />
          <label htmlFor="gogoracing" className="expand-label">
             GoGo Racing
          </label>
          <div className="expand-content">
            <ul className="contentlist-news">
              <li className="job-preview">
                <div className="contents">
                  <h4 className="title-content">News</h4>
                  <h5 className="company">Date</h5>
                </div>
                <label className="btn-stuff" htmlFor="newsz">
                  <p className="btnzl">See more</p>
                </label>
              </li>
              <li className="job-preview">
                <div className="contents">
                  <h4 className="title-content">News</h4>
                  <h5 className="company">Date</h5>
                </div>
                <label className="btn-stuff" htmlFor="newsz">
                  <p className="btnzl">See more</p>
                </label>
              </li>
            </ul>
          </div>
        </div>


        {/* Contents */}
        <div className="modal-container">
          <input type="checkbox" className="modal-checkbox" id="custsuppspec" />
          <label for="custsuppspec" className="modal-overlay"></label>
          <div className="modal-content">
            <div className="content-modal">
              <label for="custsuppspec" className="modal-close">
                &times;
              </label>
              <h3 className="modal-title">Announcements</h3>
              <h4>Description</h4>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam
                dolorum distinctio ullam voluptatibus optio neque, sunt sint
                recusandae sapiente non, nam est cumque amet tenetur,
                repudiandae voluptates explicabo at repellat.
              </p>
            </div>
          </div>
        </div>

        <div className="modal-container">
          <input type="checkbox" className="modal-checkbox" id="newsz" />
          <label for="newsz" className="modal-overlay"></label>
          <div className="modal-content">
            <div className="content-modal">
              <label for="newsz" className="modal-close">
                &times;
              </label>
              <h3 className="modal-title">BIG NEWS</h3>
              <h4>Description</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                qui vitae, pariatur maiores incidunt nobis nulla! Sit
                praesentium debitis, quae recusandae ipsa optio quos possimus
                unde dignissimos quam hic perspiciatis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsComponent;
