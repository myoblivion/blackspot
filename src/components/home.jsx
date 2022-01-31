import React from "react";

// Images
import game2 from "../images/game2.png";
import game1 from "../images/Screenshot8.png";
import game3 from "../images/game3.jpg";
import game4 from "../images/game4.png";
import logo from "../images/logorandom.png";
// Image Js
import emailjs from "emailjs-com";


const HomeComponent = () => {

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
  return (
    // Home
    <div className="wrapper">
      <div className="home">
        {/* slide show */}
        <div className="homewrapper">
          <ul className="cb-slideshow">
            <li>
              <span></span>
            </li>
            <li>
              <span></span>
            </li>
            <li>
              <span></span>
            </li>
            <li>
              <span></span>
            </li>
          </ul>
        </div>
        {/* level 1 */}
        <div className="container-1">
          <div className="container-wrapper">
            <div className="logo">
              <div className="logo-img">
                <img src={logo} alt="Black Spot Studio Philippines" />
              </div>
            </div>
          </div>
        </div>
        {/* Games */}
        <div className="container-2" id="game">
          <h2>Our Games</h2>
          <div className="card-wrapper">
            <div className="wrapper-cards">
              {/* game list */}

              <div className="first hero">
                <img className="hero-profile-img" src={game1} alt="" />
                <div className="hero-description-bk"></div>

                <div className="hero-description">
                  <p>SCION FIST</p>
                </div>
                <div className="hero-date">
                  <p>Coming soon</p>
                </div>
                <div className="hero-btn">
                  <a href="#">Learn More</a>
                </div>
              </div>
              <div className="second hero">
                <img className="hero-profile-img" src={game2} alt="" />
                <div className="hero-description-bk"></div>

                <div className="hero-description">
                  <p>GOGO RACING</p>
                </div>
                <div className="hero-date">
                  <p>Coming soon</p>
                </div>
                <div className="hero-btn">
                  <a href="#">Learn More</a>
                </div>
              </div>
              <div className="third hero">
                <img className="hero-profile-img" src={game3} alt="" />
                <div className="hero-description-bk"></div>
                <div className="hero-description">
                  <p>GOGO CHAIN</p>
                </div>
                <div className="hero-date">
                  <p>Coming soon</p>
                </div>
                <div className="hero-btn">
                  <a href="#">Learn More</a>
                </div>
              </div>
              <div className="fourth hero">
                <img className="hero-profile-img" src={game4} alt="" />
                <div className="hero-description-bk"></div>
                <div className="hero-description">
                  <p>GOGO WORLD</p>
                </div>
                <div className="hero-date">
                  <p>Coming soon</p>
                </div>
                <div className="hero-btn">
                  <a href="#">Learn More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="brand">
          <h2>BRAND</h2>
          <span className="box-1"></span>
          <span className="box-2"></span>
          <span className="box-3"></span>
          <div className="video-responsive">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube-nocookie.com/embed/4yHhsZou5HY"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="contact">
        <form className="form" onSubmit={sendEmail}>
        <div className="containers">
          <div className="rows">
            <div className="col-8">
              <label htmlFor="name">
                 Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                required
              />
              <span class="separator"> </span>
            </div>
            <div className="col-8">
              <label htmlFor="email">
                 Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                required
              />
              <span class="separator"> </span>
            </div>
            <div className="col-8">
              <label htmlFor="subject">
                 Subject
              </label>
              <input
                type="text"
                className="form-control"
                id="subject"
                name="subject"
                required
              />
              <span class="separator"> </span>
            </div>
          </div>
          <div className="message">
            <label htmlFor="message">
             Message
            </label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
            ></textarea>
            <span class="separator"> </span>
          </div>
          <div className="btn">
            <input type="submit" className="btn-btn" value="Send" />
          </div>
        </div>
      </form>
        </div>
      </div>
      {/* Brand */}
    </div>
  );
};

export default HomeComponent;
