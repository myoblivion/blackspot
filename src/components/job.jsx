import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";
import join from "../images/join.png";
import ReCaptchaV2 from "react-google-recaptcha";

import {
  FaEnvelope,
  FaFacebook,
  FaMapMarked,
  FaReddit,
  FaRegArrowAltCircleUp,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { HashLink } from "react-router-hash-link";
import { AiFillInstagram } from "react-icons/ai";
import icono from "../images/icons/logo.png";
const handleToken = (token) => {
  setForm((currentForm) => {
    return { ...currentForm, token };
  });
};
const JobComponent = ({ currentRoute }) => {
  // Email Js
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nh3pwyh",
        "template_kei217q",
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
            <img src={join} alt="" id="top1" />
          </center>
          <br />
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
                    <li className="job-preview">
                      <div className="content float-left">
                        <h4 className="job-title">Customer Service Support</h4>
                        <h5 className="company">Full Time</h5>
                      </div>
                      <label htmlFor="costumah">
                        <p className="btn btn-apply float-sm-right float-xs-left">
                          Apply
                        </p>
                      </label>
                    </li>
                    <li className="job-preview">
                      <div className="content float-left">
                        <h4 className="job-title">Custumer Service Manager</h4>
                        <h5 className="company">Full Time</h5>
                      </div>
                      <label htmlFor="manager">
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
            <label htmlFor="custsuppspec" className="modal-overlay"></label>
            <div className="modal-content">
              <div className="content-modal">
                <label htmlFor="custsuppspec" className="modal-close">
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
                  <li>- Translates marketing strategy into visual content</li>
                  <li>
                    - Conceptualize over all look and feel of marketing
                    collaterals
                  </li>
                  <li>
                    - Develops and edits graphics, videos and other format
                  </li>
                  <li>
                    - Work Closely with and offers variety of designs solutions
                    to the Marketing Department.
                  </li>
                  <li>
                    - Pro-active with deliverables and keeps up with timelines
                  </li>
                  <li>- Must be knowledgeable in any editing tools</li>
                  <li>- With experience in 2D art</li>
                  <li>- With experience in 3D art is a plus</li>
                  <li>- Willing to work in BGC, Taguig</li>
                  <li>
                    - Willing to work from Monday to Saturday [8:00 AM - 5:00PM]
                  </li>
                  <li>- Must be FULLY VACINATED</li>
                </ul>
                <h4>Perks</h4>
                <ul>
                  <li>- All Government Mandated Benefits</li>
                  <li>- 13th Month Pay</li>
                  <li>- FREE LUNCH & SNACKS</li>
                </ul>
                <div className="form">
                  <h2>Application Form</h2>
                  <form className="apply-form" onSubmit={sendEmail}>
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Enter your awesome name..."
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
                    <ReCaptchaV2
                      sitekey="6LdYi10eAAAAAHWU89tjxpmTA_aNeWMg8OXIHgpj"
                      onChange={handleToken}
                    />
                    <button type="submit">Submit</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-container">
            <input type="checkbox" className="modal-checkbox" id="photosupp" />
            <label htmlFor="photosupp" className="modal-overlay"></label>
            <div className="modal-content">
              <label htmlFor="photosupp" className="modal-close">
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
                  - Must be knowledgeable in online video games. (Not related to
                  e-casino or POGO games)
                </li>
                <li>
                  - Must be knowledgeable in different game genres such as FPS,
                  MMORPG, and Others
                </li>
                <li>- Must be knowledgeable in NFT games.</li>
                <li>
                  - Knowledgeable with PCs and mobile devices [Hardware &
                  Components]
                </li>
                <li>- Can work ASAP.</li>
                <li>- With intermediate to advanced English proficiency.</li>
                <li>- Computer literate and tech savvy.</li>
                <li>- Bachelor's Degree (Any Field)</li>
                <li>- Proficient in using MS office applications</li>
                <li>- Willing to work in BGC, Taguig</li>
                <li>
                  - Willing to work from Monday to Saturday [8:00 AM - 5:00PM]
                </li>
                <li>- Must be FULLY VACINATED</li>
              </ul>
              <h4>Perks</h4>
              <ul>
                <li> - All Government Mandated Benefits</li>
                <li>- 13th Month Pay</li>
                <li>- FREE LUNCH & SNACKS</li>
              </ul>
              <div className="form">
                <h2>Application Form</h2>
                <form className="apply-form" onSubmit={sendEmail}>
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your awesome name..."
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
                  <ReCaptchaV2
                    sitekey="6LdYi10eAAAAAHWU89tjxpmTA_aNeWMg8OXIHgpj"
                    onChange={handleToken}
                  />
                  <button type="submit">Submit</button>
                </form>
              </div>
            </div>
          </div>
          <div className="modal-container">
            <input type="checkbox" className="modal-checkbox" id="costumah" />
            <label htmlFor="costumah" className="modal-overlay"></label>
            <div className="modal-content">
              <div className="content-modal">
                <label htmlFor="costumah" className="modal-close">
                  &times;
                </label>
                <h3 className="modal-title"> CUSTOMER SERVICE SUPPORT</h3>
                <h4>Description</h4>
                <p>
                  As our team is getting bigger, BSS PH is now looking for
                  CUSTOMER SERVICE SUPPORT.
                </p>
                <h4>Requirements</h4>
                <ul>
                  <li>
                    - Fresh Graduates are welcome to apply, applicant with at
                    least 6 months of experience is a plus
                  </li>
                  <li>
                    - Proficiency in Microsoft Office and customer service
                    software.
                  </li>
                  <li>- Outstanding written and verbal communication.</li>
                  <li>- Excellent and interpersonal skills</li>
                  <li>- With excellent knowledge in gaming industry.</li>
                  <li>- Ability to understand and follow instructions.</li>
                  <li>
                    - Ensuring that customers are satisfied with products or
                    services.
                  </li>
                  <li>
                    - Following up with clients or customers to check that
                    they’re still satisfied with any purchases.
                  </li>
                  <li>- Escalating queries and concerns</li>
                  <li>
                    - Determining the quickest, most effective ways to answer a
                    client’s or customer’s questions
                  </li>
                  <li>
                    - Determining the quickest, most effective ways to answer a
                    client’s or customer’s questions
                  </li>
                  <li>
                    - Working with a team of CSRs and other departments to find
                    appropriate solutions
                  </li>
                  <li>- Willing to work in BGC, Taguig</li>
                  <li>
                    - Willing to work from Monday to Saturday [8:00 AM - 5:00PM]
                  </li>
                  <li>- Must be FULLY VACINATED</li>
                </ul>
                <h4>Perks</h4>
                <ul>
                  <li>- All Government Mandated Benefits</li>
                  <li>- 13th Month Pay</li>
                  <li>- FREE LUNCH & SNACKS</li>
                </ul>
                <div className="form">
                  <h2>Application Form</h2>
                  <form className="apply-form" onSubmit={sendEmail}>
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Enter your awesome name..."
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
                    <ReCaptchaV2
                      sitekey="6LdYi10eAAAAAHWU89tjxpmTA_aNeWMg8OXIHgpj"
                      onChange={handleToken}
                    />
                    <button type="submit">Submit</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-container">
            <input type="checkbox" className="modal-checkbox" id="manager" />
            <label htmlFor="manager" className="modal-overlay"></label>
            <div className="modal-content">
              <div className="content-modal">
                <label htmlFor="manager" className="modal-close">
                  &times;
                </label>
                <h3 className="modal-title"> CUSTOMER SERVICE MANAGER.</h3>
                <h4>Description</h4>
                <p>
                  As our team is getting bigger, BSS PH is now looking for
                  CUSTOMER SERVICE MANAGER.
                </p>
                <h4>Requirements</h4>
                <ul>
                  <li>
                    Fresh Graduates are welcome to apply, applicant with at
                    least 6 months of experience is a plus
                  </li>
                  <li>
                    - Must have a customer service skill for at least 3 years.
                  </li>
                  <li>
                    - Proficiency in Microsoft Office and customer service
                    software.
                  </li>
                  <li>
                    - Proficiency in Microsoft Office and customer service
                    software.
                  </li>
                  <li>- Outstanding written and verbal communication.</li>
                  <li>- Good understanding of management practices.</li>
                  <li>- Excellent and interpersonal skills.</li>
                  <li>- With excellent knowledge in gaming industry.</li>
                  <li>
                    - Supervising the daily operations of the customer service
                    department
                  </li>
                  <li>- Creating a reliable customer loyalty program</li>
                  <li>
                    - Setting customer service goals for team members and
                    helping them reach those goals
                  </li>
                  <li>
                    - Interacting with customers and handling customer queries
                    and complaints in a timely manner
                  </li>
                  <li>- Maintaining relationships with profitable customers</li>
                  <li>- Making weekly and monthly reports and surveys</li>
                  <li>
                    - Staying current on the latest industry trends and
                    techniques
                  </li>
                  <li>- Willing to work in BGC, Taguig</li>
                  <li>
                    - Willing to work from Monday to Saturday [8:00 AM - 5:00PM]
                  </li>
                  <li>- Must be FULLY VACINATED</li>
                </ul>
                <h4>Perks</h4>
                <ul>
                  <li>- All Government Mandated Benefits</li>
                  <li>- 13th Month Pay</li>
                  <li>- FREE LUNCH & SNACKS</li>
                </ul>
                <div className="form">
                  <h2>Application Form</h2>
                  <form className="apply-form" onSubmit={sendEmail}>
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Enter your awesome name..."
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
                    <ReCaptchaV2
                      sitekey="6LdYi10eAAAAAHWU89tjxpmTA_aNeWMg8OXIHgpj"
                      onChange={handleToken}
                    />
                    <button type="submit">Submit</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-container">
            <input type="checkbox" className="modal-checkbox" id="costumah" />
            <label htmlFor="photosupp" className="modal-overlay"></label>
            <div className="modal-content">
              <label htmlFor="photosupp" className="modal-close">
                &times;
              </label>
              <h3 className="modal-title">QUALITY ASSURANCE MANAGER </h3>
              <h4>Description</h4>
              <p>
                As we are getting bigger, our company is now looking htmlFor
                ASSISTANT QUALITY ASSURANCE MANAGER who’s fun and enjoy online
                games.
              </p>
              <h4>Requirements</h4>
              <ul>
                <li>
                  - Must be knowledgeable in online video games. (Not related to
                  e-casino or POGO games)
                </li>
                <li>
                  - Must be knowledgeable in different game genres such as FPS,
                  MMORPG, and Others
                </li>
                <li>- Must be knowledgeable in NFT games.</li>
                <li>
                  - Knowledgeable with PCs and mobile devices [Hardware &
                  Components]
                </li>
                <li>- Can work ASAP.</li>
                <li>- With intermediate to advanced English proficiency.</li>
                <li>- Computer literate and tech savvy.</li>
                <li>- Bachelor's Degree (Any Field)</li>
                <li>- Proficient in using MS office applications</li>
                <li>- Willing to work in BGC, Taguig</li>
                <li>
                  - Willing to work from Monday to Saturday [8:00 AM - 5:00PM]
                </li>
                <li>- Must be FULLY VACINATED</li>
              </ul>
              <h4>Perks</h4>
              <ul>
                <li>- All Government Mandated Benefits</li>
                <li>- 13th Month Pay</li>
                <li>- FREE LUNCH & SNACKS</li>
              </ul>
              <div className="form">
                <h2>Application Form</h2>
                <form className="apply-form" onSubmit={sendEmail}>
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your awesome name..."
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
                  <ReCaptchaV2
                    sitekey="6LdYi10eAAAAAHWU89tjxpmTA_aNeWMg8OXIHgpj"
                    onChange={handleToken}
                  />
                  <button type="submit">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="section">
        <footer className="footer-distributed">
          <div className="footer-left">
            <img src={icono} alt="" className="logso" />
            <p className="footer-links">
              <Link to="/about">About Us</Link>
              <Link to="/privacy">Privacy & Policy</Link>
              <Link to="/job">Career</Link>

              <HashLink smooth to="/#contact">
                {" "}
                Contact Us
              </HashLink>
            </p>

            <p className="footer-company-name">
              Copyright © Black Spot Studio PH{" "}
            </p>
          </div>

          <div className="footer-center">
            <div className="desz">
              <p>
                <Link
                  to="/direction"
                  style={
                    currentRoute === "direction"
                      ? { borderBottom: "2px solid yellow" }
                      : { borderBottom: "2px solid transparent" }
                  }
                >
                  <FaMapMarked /> 26th St, Taguig, 1634 Metro Manila
                </Link>
              </p>
            </div>

            <div className="desz">
              <p>
                <a href="mailto:support@company.com">
                  {" "}
                  <FaEnvelope /> support@company.com
                </a>
              </p>
            </div>
          </div>

          <div className="footer-right">
            <div className="footer-icons">
              <ul className="social-media-list">
                <li>
                  <a
                    href="https://www.facebook.com/BlackspotstudioPH"
                    target="_blank"
                    className="contact-icon"
                  >
                    <FaFacebook />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/phblackspotstudio/"
                    target="_blank"
                    className="contact-icon"
                  >
                    <AiFillInstagram />
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/BlackSpotPH"
                    target="_blank"
                    className="contact-icon"
                  >
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.reddit.com/r/BlackSpotStudioPH/"
                    target="_blank"
                    className="contact-icon"
                  >
                    <FaReddit />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/channel/UCL9FkYZu775aKfJ1zv4gZJQ"
                    target="_blank"
                    className="contact-icon"
                  >
                    <FaYoutube />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
        <div className="bootons">
          <HashLink smooth to="/job#" id="up">
            {" "}
            <FaRegArrowAltCircleUp />
          </HashLink>
        </div>
      </div>
    </div>
  );
};

export default JobComponent;
