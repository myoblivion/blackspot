import React, { useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

const SomethingComponent = ({ currentRoute }) => {
  // Title
  useEffect(() => {
    document.title = "Black Spot Studio | News ";
  }, []);
  return (
    <div className="something wrapper">
      <section className="something-wrapper">
        <div className="something-news">
          <h2 className="something-title">Game Title</h2>
        </div>
        <div className="something-news-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-md-10 offset-md-1">
                <ul className="job-list">
                  <li className="job-preview">
                    <div className="content float-left">
                      <label className="col-md-6 col-sm-6 col-xs-12" for="fullship">
                        <h4>Announcement</h4>
                      </label>
                      <h5 className="company">
                        Lorem, ipsum dolor sit amet consectetur.
                      </h5>
                    </div>
                  </li>
                  <li className="job-preview">
                    <div className="content float-left">
                      <label className="col-md-6 col-sm-6 col-xs-12" for="fullship">
                        <h4>Updates</h4>
                      </label>

                      <h5 className="company">
                        Lorem, ipsum dolor sit amet consectetur.
                      </h5>
                    </div>
                  </li>
                  <li className="job-preview">
                    <div className="content float-left">
                      <label className="col-md-6 col-sm-6 col-xs-12" for="fullship">
                        <h4>Game Guide</h4>
                      </label>
                      <h5 className="company">
                        Lorem, ipsum dolor sit amet consectetur.
                      </h5>
                    </div>
                  </li>
                  <li className="job-preview">
                    <div className="content float-left">
                      <label className="col-md-6 col-sm-6 col-xs-12" for="fullship">
                        <h4>Markets</h4>
                      </label>
                      <h5 className="company">
                        Lorem, ipsum dolor sit amet consectetur.
                      </h5>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="modal-container">
        <input type="checkbox" className="modal-checkbox" id="fullship" />
        <label for="fullship" className="modal-overlay"></label>
        <div className="modal-content">
          <label for="fullship" className="modal-close">
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
export default SomethingComponent;
