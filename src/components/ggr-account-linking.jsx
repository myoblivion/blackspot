import React, { useState, useEffect, useRef, LinkProps } from "react";

import image from "../images/banner4.png";
import image2 from "../images/gogochain-mobile.png";
import { HashLink } from "react-router-hash-link";
import icono from "../images/icons/logo.png";
import { Link } from "react-router-dom";
import {
  FaUserCircle,
  FaSearch,
  FaRegArrowAltCircleUp,
  FaWindowClose,
} from "react-icons/fa";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import backgroundimg from "../images/ggrguide/accountlinking.png";
import linkacc from "../images/ggrguide/stuff29.png";
import prefferd from "../images/ggrguide/stuff30.png";
import terms from "../images/ggrguide/stuff31.png";
import confirm from "../images/ggrguide/stuff32.png";
import priv from "../images/ggrguide/stuff33.png";
import confirm2 from "../images/ggrguide/stuff34.png";
import all from "../images/ggrguide/stuff35.png";
import download from "../images/ggrguide/stuff36.png";
import download2 from "../images/ggrguide/stuff37.png";
import tutorial from "../images/ggrguide/stuff38.png";
import completetut from "../images/ggrguide/stuff39.png";
import fblogin from "../images/ggrguide/stuff40.png";
import fbinput from "../images/ggrguide/stuff41.png";
import fbcontinue from "../images/ggrguide/stuff42.png";
import link from "../images/ggrguide/stuff43.png";
import link2 from "../images/ggrguide/stuff44.png";
import link3 from "../images/ggrguide/stuff45.png";
const GogoRacingAccountLinking = ({ props, ref, currentRoute }) => {
  // Title
  useEffect(() => {
    document.title = "Black Spot Studio | Gogo Racing Guide";
  }, []);
  return (
    <div className="gogoracing-acc wrapper">
      <div className="ggr-acc-contents">
        <div className="ggr-acdecontents">
          <div className="ggr-header">
            <div className="ggr-top">
              <div className="ggr-left">
                <Link
                  to="/ggr-guide-list"
                  {...props}
                  ref={ref}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <IoIosArrowDropleftCircle />
                </Link>
                <h2>
                  <FaUserCircle /> User
                </h2>
              </div>
              <div className="ggr-right">
                <Link
                  to="/ggrsearch"
                  {...props}
                  ref={ref}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <FaSearch />
                </Link>
              </div>
            </div>
            <img src={backgroundimg} alt="" />
          </div>
          <div className="ggr-accs">
            <div className="ggr-section-1">
              <div className="game-introduction">
                <div className="account-linking">
                  <h2 id="gmail-account-linking">Gmail Account Linking</h2>
                  <ul>
                    <li>
                      👉 Step 1: Select Google Login
                      <img src={linkacc} alt="" />
                    </li>
                    <li>
                      👉 Step 2: Select your preferred Google account.
                      <img src={prefferd} alt="" />
                    </li>
                    <li>
                      👉 Step 3: Read the Terms of Service
                      <img src={terms} alt="" />
                    </li>{" "}
                    <li>
                      👉 Step 4: Press “Confirm” when done.
                      <img src={confirm} alt="" />
                    </li>{" "}
                    <li>
                      👉 Step 5: Read the Agree to collect and use personal
                      information
                      <img src={priv} alt="" />
                    </li>
                    <li>
                      👉 Step 6: Press “Confirm” when done.
                      <img src={confirm2} alt="" />
                    </li>
                    <li>
                      👉 Step 7: Check “All agree” and press “Confirm”.
                      <img src={all} alt="" />
                    </li>
                    <li>
                      👉 Step 8: Additional download will be required. (Size
                      will depend on the update.) Press “Confirm” to continue.
                      <img src={download} alt="" />
                    </li>
                    <li>
                      👉Step 9: Complete the additional download. (Make sure to
                      download the patch under Wi-fi connection)
                      <img src={download2} alt="" />
                    </li>
                    <li>
                      👉 Step 10: Complete or Skip the tutorial
                      <img src={tutorial} alt="" />
                    </li>
                    <li>
                      👉 Step 11: Press “Confirm” to complete the tutorial.
                      <img src={completetut} alt="" />
                    </li>
                  </ul>
                  <h2 id="facebook-link">Facebook Account Linking</h2>
                  <ul>
                    <li>
                      ⭐ Step 1: Select Facebook Login{" "}
                      <img src={fblogin} alt="" />
                    </li>
                    <li>
                      ⭐ Step 2: Login your preferred Facebook account.
                      <img src={fbinput} alt="" />
                    </li>
                    <li>
                      ⭐ Step 3: Continue as your Facebook profile
                      <img src={fbcontinue} alt="" />
                    </li>
                    <li>
                      ⭐ Step 4: Read the Terms of Service
                      <img src={terms} alt="" />
                    </li>
                    <li>
                      ⭐ Step 5: Press “Confirm” when done.
                      <img src={confirm} alt="" />
                    </li>
                    <li>
                      ⭐ Step 6: Read the Agree to collect and use personal
                      information
                      <img src={priv} alt="" />
                    </li>
                    <li>
                      ⭐ Step 7: Press “Confirm” when done.
                      <img src={confirm2} alt="" />
                    </li>
                    <li>
                      ⭐ Step 8: Check “All agree” and press “Confirm”.
                      <img src={all} alt="" />
                    </li>
                    <li>
                      ⭐ Step 9: Additional download will be required. (Size
                      will depend on the update.) Press “Confirm” to continue.
                      <img src={download} alt="" />
                    </li>
                    <li>
                      ⭐ Step 10: Complete the additional download. (Make sure
                      to download the patch under Wi-fi connection)
                      <img src={download2} alt="" />
                    </li>
                    <li>
                      ⭐ Step 11: Complete or Skip the tutorial
                      <img src={tutorial} alt="" />
                    </li>
                    <li>
                      ⭐ Press “Confirm” to complete the tutorial.
                      <img src={completetut} alt="" />
                    </li>
                  </ul>
                </div>
                <div className="acc-transfer" id="acc-transfer">
                  <h2>Account Transfer</h2>
                  <ul>
                    <li>
                      🏎️ Step 1: Make sure that you are using a “Guest” account
                      where your IGN is consisting of BSS########.
                      <br />
                      <img src={link} alt="" />
                    </li>
                    <li>
                      🏎️ Step 2: Select the account transfer button on the game
                      lobby <br />
                      <img src={link2} alt="" />
                    </li>
                    <li>
                      🏎️ Step 3: Select the platform where you want to transfer
                      your account.
                      <img src={link3} alt="" />
                    </li>
                    <li>
                      🏎️ Step 4: You will be rewarded with 3,000 GoGo Tokens and
                      60 Diamonds after successfully transferring your account.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="ggr-section-2">
              <h2>Labels</h2>
              <ul>
                <li>
                  <HashLink
                    smooth
                    to="/ggr-account-linking#gmail-account-linking"
                  >
                    Gmail Account Linking
                  </HashLink>
                </li>
                <li>
                  <HashLink smooth to="/ggr-account-linking#facebook-link">
                    Facebook Account Linking
                  </HashLink>
                </li>
                <li>
                  <HashLink smooth to="/ggr-account-linking#acc-transfer">
                    Guess Transfer
                  </HashLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bootons">
          <HashLink smooth to="/ggr-account-linking#" id="up">
            <FaRegArrowAltCircleUp />
          </HashLink>
        </div>
      </div>
    </div>
  );
};

export default GogoRacingAccountLinking;
