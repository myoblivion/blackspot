import React, { useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import risa from "../images/risa.png";
import grace from "../images/grace.png";

const ScionNewsComponent = ({ currentRoute }) => {
  // Title
  useEffect(() => {
    document.title = "Black Spot Studio | Scion Fist News ";
  }, []);
  return (
    <div className="something wrapper">
      <section className="something-wrapper">
        <div className="something-news">
          <h2 className="something-title">Scion Fist News & Updates</h2>
        </div>
        <div className="something-news-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-md-10 offset-md-1">
                <ul className="newsz-list">
                  <label className="labels" htmlFor="fullship">
                    <li className="news-preview">
                      <div className="newscontent float-left">
                        <h4>Announcement</h4>
                        <h5 className="company">
                          Lorem, ipsum dolor sit amet consectetur.
                        </h5>
                      </div>
                    </li>
                  </label>
                  <label className="labels" htmlFor="fullship">
                    <li className="news-preview">
                      <div className="newscontent float-left">
                        <h4>Updates</h4>

                        <h5 className="company">
                          Lorem, ipsum dolor sit amet consectetur.
                        </h5>
                      </div>
                    </li>
                  </label>
                  <label className="labels" htmlFor="fullship">
                    <li className="news-preview">
                      <div className="newscontent float-left">
                        <h4>Game Guide</h4>
                        <h5 className="company">
                          Lorem, ipsum dolor sit amet consectetur.
                        </h5>
                      </div>
                    </li>
                  </label>
                  <label className="labels" htmlFor="fullship">
                    <li className="news-preview">
                      <div className="newscontent float-left">
                        <h4>Markets</h4>

                        <h5 className="company">
                          Lorem, ipsum dolor sit amet consectetur.
                        </h5>
                      </div>
                    </li>
                  </label>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="girl-1">
          <img src={risa} alt="aa" />
        </div>
        <div className="girl-2">
          <img src={grace} alt="aa" />
        </div>
      </section>

      <div className="modal-container">
        <input type="checkbox" className="modal-checkbox" id="fullship" />
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
// Hope this works
export default ScionNewsComponent;
