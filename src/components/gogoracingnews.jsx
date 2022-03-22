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
        <div
          className="something-news"
          data-aos="fade-down"
          data-aos-offset="500"
          data-aos-delay="300"
          data-aos-duration="500"
        >
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
                  <label className="labels" htmlFor="disabledbtn">
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

                        <h5 className="company">
                        <span>3/22/2022</span>
                        </h5>
                      </div>
                    </li>
                  </label>
                  <label className="labels" htmlFor="disabledbtn">
                    <li className="news-preview">
                      <div className="newscontent float-left">
                        <h4>Game Guide</h4>
                        <h5 className="company">Updating Soon</h5>
                      </div>
                    </li>
                  </label>
                  <label className="labels" htmlFor="disabledbtn">
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
          <div className="adoginacar">
            <img src={somedog} alt="bruh" />
          </div>
        </div>
      </section>
      <div className="close">
        <input type="checkbox" id="disabledbtn" name="disabledbtn" disabled />
      </div>
      <div className="gogoracing-modal-container">
        <input type="checkbox" className="modal-checkbox" id="fullship" />
        <label htmlFor="fullship" className="modal-overlay"></label>
        <div className="modal-content">
          <label htmlFor="fullship" className="modal-close">
            &times;
          </label>
          <h2>GOGO RACING</h2>
          <h3 className="modal-title">Updates</h3>
          <input type="radio" name="updates" id="maintenance" />
          <label htmlFor="maintenance" id="mainte">
            Maintenance{" "}
          </label>
          <input type="radio" name="updates" id="updates" />
          <label htmlFor="updates" id="upde">
            Patch{" "}
          </label>
          <input type="radio" name="updates" id="issue" />
          <label htmlFor="issue" id="isse">
            Known Issue{" "}
          </label>
          <div className="patch">
            <h2>1.0.1 Patch Note</h2>
            <h3>Patch content:</h3>
            <ul>
              <li>
                1. Revision was made on Product category, so expired products
                can't be install anymore.
              </li>
              <li>
                2. After purchasing fixed-term items, the expiration display has
                been modified to be displayed when the expiration date expires.{" "}
              </li>
              <li>
                3. [Game Mode] It has been modified so that the sound is output
                when the back button is touched.
              </li>
              <li>
                4. [Garage] The vehicle name display length has been modified.
              </li>
              <li>
                5. Revised to remove expired characters and vehicles when
                updating inventory.
              </li>
              <li>
                6. Fixed the alignment of the character above the in-game and
                the name display that were misplaced.
              </li>
              <li>7. Added Tapjoy Shop Event icon and function.</li>
              <li>
                8. Fixed an issue where store alignment did not work properly.
              </li>
              <li>
                9. Modified the profile to expose character vehicle stats and
                skill information.
              </li>
              <li>
                10. [Garage] We modified the items that is currently installing
                so that they are aligned at the front.
              </li>
              <li>
                11. [Garage] If Players have more than one same paint, we have
                improved it to indicate the quantity on one item.
              </li>
              <li>
                12. [Option] We adjusted the size of the web view window
                considering the sizes of the device.
              </li>
              <li>13. [Option] Fix related to web view back Button issue</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoGoRacingNewsComponent;
