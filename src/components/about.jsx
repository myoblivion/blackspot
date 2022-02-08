import React, { useEffect } from "react";
import { FaFacebook, FaInstagram, FaReddit, FaTwitter } from "react-icons/fa";
import character from "../images/characters/Tosuni.png";
const AboutComponent = () => {
  // Title
  useEffect(() => {
    document.title = "Black Spot Studio | About Us";
  }, []);
  return (
    <div className="about wrapper">
      <div className="container-about">
        <div className="title-about"></div>
        <section>
          <div className="image">
            <img src={character} alt="Tosuni" />
          </div>

          <div className="content">
            <h2>Black Spot Studio</h2>
        <div className="line2"></div>
            <span></span>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis
              aspernatur voluptas inventore ab voluptates nostrum minus illo
              laborum harum laudantium earum ut, temporibus fugiat sequi
              explicabo facilis unde quos corporis!
            </p>
            <ul className="linksz">
              <li>
                <a href="#">work</a>
              </li>
              <div className="vertical-line"></div>
              <li>
                <a href="#">service</a>
              </li>
              <div className="vertical-line"></div>
              <li>
                <a href="#">contact</a>
              </li>
            </ul>
            <ul className="icons">
              <li>
                <a href="https://twitter.com/BlackSpotPH">
                <FaTwitter />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/BlackspotstudioPH">
                <FaFacebook />
                </a>
              </li>
              <li>
                <a href="https://www.reddit.com/r/BlackSpotStudioPH/">
                <FaReddit />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/phblackspotstudio/">
                <FaInstagram />
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutComponent;
