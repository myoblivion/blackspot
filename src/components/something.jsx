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
          <div class="container">
            <div class="row">
              <div class="col-md-10 offset-md-1">
                <ul class="job-list">
                  <li class="job-preview">
                    <div class="content float-left">
                      <label class="col-md-6 col-sm-6 col-xs-12" for="fullship">
                        <h4>Announcement</h4>
                      </label>
                      <h5 class="company">
                        Lorem, ipsum dolor sit amet consectetur.
                      </h5>
                    </div>
                  </li>
                  <li class="job-preview">
                    <div class="content float-left">
                      <label class="col-md-6 col-sm-6 col-xs-12" for="fullship">
                        <h4>Updates</h4>
                      </label>

                      <h5 class="company">
                        Lorem, ipsum dolor sit amet consectetur.
                      </h5>
                    </div>
                  </li>
                  <li class="job-preview">
                    <div class="content float-left">
                      <label class="col-md-6 col-sm-6 col-xs-12" for="fullship">
                        <h4>Game Guide</h4>
                      </label>
                      <h5 class="company">
                        Lorem, ipsum dolor sit amet consectetur.
                      </h5>
                    </div>
                  </li>
                  <li class="job-preview">
                    <div class="content float-left">
                      <label class="col-md-6 col-sm-6 col-xs-12" for="fullship">
                        <h4>Markets</h4>
                      </label>
                      <h5 class="company">
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
      <div class="modal-container">
        <input type="checkbox" class="modal-checkbox" id="fullship" />
        <label for="fullship" class="modal-overlay"></label>
        <div class="modal-content">
          <label for="fullship" class="modal-close">
            &times;
          </label>
          <h3 class="modal-title">Announcements</h3>
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
