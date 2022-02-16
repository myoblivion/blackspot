import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";
import logo from "../images/icons/logo.png";
const JobComponent = ({ currentRoute }) => {
  // Email Js
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nh3pwyh",
        "template_xyvndrx",
        e.target,
        "user_DhVbKvTWQOQX3lDfGjGAj"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  // Title
  useEffect(() => {
    document.title = "Black Spot Studio | Job Posting";
  }, []);

  return (
    <div className="job wrapper">
      <section className="joblist">
        <div className="joblist-wrapper">
          <center>
            <img src={logo} alt="" />
          </center>
          <br />
          <center>
            <h1>Join our growing team!</h1>
          </center>

          <br />
          <br />
          <h3>Open Positions</h3>
          <hr />
          <section className="list-jobz">
            <div className="job-container">
              <div className="row">
                <div className="col-md-10 offset-md-1">
                  <ul className="job-list">
                    <li className="job-preview">
                      <div className="content float-left">
                        <h4 className="job-title">
                          Marketing Staff / Graphic Artist
                        </h4>
                        <h5 className="company">Full Time</h5>
                      </div>
                      <label htmlFor="custsuppspec">
                        <p className="btn btn-apply float-sm-right float-xs-left">
                          Apply
                        </p>
                      </label>
                    </li>
                    <li className="job-preview">
                      <div className="content float-left">
                        <h4 className="job-title">
                          Assistant Quality Assurance Manager
                        </h4>
                        <h5 className="company">Full Time</h5>
                      </div>
                      <label htmlFor="photosupp">
                        <p className="btn btn-apply float-sm-right float-xs-left">
                          Apply
                        </p>
                      </label>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <div className="modal-container">
            <input
              type="checkbox"
              className="modal-checkbox"
              id="custsuppspec"
            />
            <label for="custsuppspec" className="modal-overlay"></label>
            <div className="modal-content">
              <div className="content-modal">
                <label for="custsuppspec" className="modal-close">
                  &times;
                </label>
                <h3 className="modal-title">MARKETING STAFF/ GRAPHIC ARTIST</h3>
                <h4>Description</h4>
                <p>
                  As we are getting bigger, our company is now looking for the
                  MARKETING STAFF/ GRAPHIC ARTIST who’s fun and enjoy online
                  games.
                </p>
                <h4>Requirements</h4>
                <ul>
                  <li>Translates marketing strategy into visual content</li>
                  <li>
                    Conceptualize over all look and feel of marketing
                    collaterals
                  </li>
                  <li>Develops and edits graphics, videos and other format</li>
                  <li>
                    Work Closely with and offers variety of designs solutions to
                    the Marketing Department.
                  </li>
                  <li>
                    Pro-active with deliverables and keeps up with timelines
                  </li>
                  <li>Must be knowledgeable in any editing tools</li>
                  <li>With experience in 2D art</li>
                  <li>With experience in 3D art is a plus</li>
                  <li>Willing to work in BGC, Taguig</li>
                  <li>
                    Willing to work from Monday to Saturday [8:00 AM - 5:00PM]
                  </li>
                  <li>Must be FULLY VACINATED</li>
                </ul>
                <h4>Perks</h4>
                <ul>
                  <li>All Government Mandated Benefits</li>
                  <li>13th Month Pay</li>
                  <li>FREE LUNCH & SNACKS</li>
                </ul>
                <div className="form">
                  <h2>Application Form</h2>
                  <form className="apply-form" onSubmit={sendEmail}>
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Enter your aweseome name..."
                      required
                    />
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter your Email..."
                      required
                    />
                    <label htmlFor="number">Phone Number</label>
                    <input
                      type="tel"
                      id="number"
                      name="number"
                      placeholder="+63 912 345 6789"
                      required
                    />
                    <label htmlFor="file">Upload your CV</label>
                    <input type="file" name="file" id="file" />
                    <button type="submit">Submit</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-container">
            <input type="checkbox" className="modal-checkbox" id="photosupp" />
            <label for="photosupp" className="modal-overlay"></label>
            <div className="modal-content">
              <label for="photosupp" className="modal-close">
                &times;
              </label>
              <h3 className="modal-title">QUALITY ASSURANCE MANAGER </h3>
              <h4>Description</h4>
              <p>
                As we are getting bigger, our company is now looking for
                ASSISTANT QUALITY ASSURANCE MANAGER who’s fun and enjoy online
                games.
              </p>
              <h4>Requirements</h4>
              <ul>
                <li>
                  Must be knowledgeable in online video games. (Not related to
                  e-casino or POGO games)
                </li>
                <li>
                  Must be knowledgeable in different game genres such as FPS,
                  MMORPG, and Others
                </li>
                <li>Must be knowledgeable in NFT games.</li>
                <li>
                  Knowledgeable with PCs and mobile devices [Hardware &
                  Components]
                </li>
                <li>Can work ASAP.</li>
                <li>With intermediate to advanced English proficiency.</li>
                <li>Computer literate and tech savvy.</li>
                <li>Bachelor's Degree (Any Field)</li>
                <li>Proficient in using MS office applications</li>
                <li>Willing to work in BGC, Taguig</li>
                <li>
                  Willing to work from Monday to Saturday [8:00 AM - 5:00PM]
                </li>
                <li>Must be FULLY VACINATED</li>
              </ul>
              <h4>Perks</h4>
              <ul>
                <li> All Government Mandated Benefits</li>
                <li>13th Month Pay</li>
                <li>FREE LUNCH & SNACKS</li>
              </ul>
              <div className="form">
                <h2>Application Form</h2>
                <form className="apply-form" onSubmit={sendEmail}>
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your aweseome name..."
                    required
                  />
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your Email..."
                    required
                  />
                  <label htmlFor="number">Phone Number</label>
                  <input
                    type="tel"
                    id="number"
                    name="number"
                    placeholder="+63 912 345 6789"
                    required
                  />
                  <label htmlFor="file">Upload your CV</label>
                  <input type="file" name="file" id="file" />
                  <button type="submit">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JobComponent;
