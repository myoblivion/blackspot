import React, { useState, useEffect } from "react";
import image from "../images/goracing.png";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import somedog from "../images/somedog.png";

const GoGoRacingNewsComponent = ({ currentRoute }) => {
  // Title
  useEffect(() => {
    document.title = "Black Spot Studio | GoGo Racing News";
  }, []);
  return (
    <div className="gogoracingnews wrapper">
      <section className="something-wrapper">
        <div className="something-news"           data-aos="fade-down"
          data-aos-offset="500"
          data-aos-delay="300"
          data-aos-duration="500">
          <h2 className="something-title">Gogo Racing News & Updates</h2>
        </div>
        <div
          className="something-news-wrapper"
          data-aos="zoom-in"
          data-aos-offset="500"
          data-aos-duration="500"
        >
          <div className="container">
            <div className="row">
              <div className="col-md-10 offset-md-1">
                <ul className="newsz-list">
                  <label className="labels" htmlFor="fullship">
                    <li className="news-preview">
                      <div className="newscontent float-left">
                        <h4>Announcement</h4>
                        <h5 className="company">Updating Soon</h5>
                      </div>
                    </li>
                  </label>
                  <label className="labels" htmlFor="fullship">
                    <li className="news-preview">
                      <div className="newscontent float-left">
                        <h4>Updates</h4>

                        <h5 className="company">Updating Soon</h5>
                      </div>
                    </li>
                  </label>
                  <label className="labels" htmlFor="fullship">
                    <li className="news-preview">
                      <div className="newscontent float-left">
                        <h4>Game Guide</h4>
                        <h5 className="company">Updating Soon</h5>
                      </div>
                    </li>
                  </label>
                  <label className="labels" htmlFor="fullship">
                    <li className="news-preview">
                      <div className="newscontent float-left">
                        <h4>Markets</h4>

                        <h5 className="company">Updating Soon</h5>
                      </div>
                    </li>
                  </label>
                </ul>
              </div>
            </div>
          </div>
          <div className="adoginacar" >
            <img src={somedog} alt="bruh" />
          </div>
        </div>
      </section>
      <div className="modal-container">
        <input
          type="checkbox"
          className="modal-checkbox"
          id="fullship"
          disabled
        />
        <label htmlFor="fullship" className="modal-overlay"></label>
        <div className="modal-content">
          <label htmlFor="fullship" className="modal-close">
            &times;
          </label>
          <h3 className="modal-title">Announcements</h3>
          <h4>Description</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            voluptate saepe molestiae, aut eum error praesentium dolorum.
            Similique necessitatibus, natus, iure perspiciatis cumque officiis
            molestiae quasi eius sint, dolore repudiandae?
          </p>
        </div>
      </div>
    </div>
  );
};

export default GoGoRacingNewsComponent;