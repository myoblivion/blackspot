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
import backgroundimg from "../images/ggrguide/purchase.png";

// Images
import purchase1 from "../images/ggrpurchaseguide/scp1.png";
import purchase2 from "../images/ggrpurchaseguide/scp2.png";
import purchase3 from "../images/ggrpurchaseguide/scp3.png";
import purchase4 from "../images/ggrpurchaseguide/scp4.png";
import purchase5 from "../images/ggrpurchaseguide/scp5.png";
import purchase6 from "../images/ggrpurchaseguide/scp6.png";
import purchase7 from "../images/ggrpurchaseguide/scp7.png";
import purchase8 from "../images/ggrpurchaseguide/scp8.png";
import purchase9 from "../images/ggrpurchaseguide/scp9.png";
import purchase10 from "../images/ggrpurchaseguide/scp10.png";
import purchase11 from "../images/ggrpurchaseguide/scp11.png";
import purchase12 from "../images/ggrpurchaseguide/scp12.png";
import purchase13 from "../images/ggrpurchaseguide/scp13.png";
import purchase14 from "../images/ggrpurchaseguide/scp14.png";
import purchase15 from "../images/ggrpurchaseguide/scp15.png";
import purchase16 from "../images/ggrpurchaseguide/scp16.png";

const GogoRacingPurchaseGuide = ({ props, ref, currentRoute }) => {
  // Title
  useEffect(() => {
    document.title = "Black Spot Studio | Gogo Racing Purchase & Linking GUide";
  }, []);
  return (
    <div className="gogoracing-purchase wrapper">
      <div className="ggr-purchase-contents">
        <div className="ggr-pcrecontents">
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
                <form>
                  <input type="checkbox" name="searched" id="search" required />
                  <input type="checkbox" name="searched" id="close" />
                  <select name="select" id="selection">
                    <option value="title">Title</option>
                    <option value="contents">Contents</option>
                    <option value="tags">Tags</option>
                  </select>
                  <input type="submit" name="submit" id="submit" />
                  <label htmlFor="submit" id="submitted">
                    <FaSearch />
                  </label>
                  <label htmlFor="search" id="searchs">
                    <FaSearch />
                  </label>

                  <label htmlFor="search" id="close">
                    <FaWindowClose />
                  </label>
                  <input
                    type="text"
                    id="text-search"
                    placeholder="Enter the word to search for.."
                    required
                  />
                </form>
              </div>
            </div>
            <img src={backgroundimg} alt="" />
          </div>
          <div className="ggr-purchases">
            <h1>Selecting a payment method</h1>
            <h4>
              The game will ask you to select your preferred payment method in
              order to successfully purchase into the game.
            </h4>
            <img src={purchase1} alt="" id="ihateyou"/>
            <h2>Types of payment methods:</h2>
            <h3>GCash</h3>
            <ul>
              <li>🌟 Select GCash as your payment method and tap “Continue”.</li>
              <li>
                <img src={purchase2} alt="" />
              </li>
              <li>🌟 Enter your GCash MPIN if you have any.</li>
              <li>
                <img src={purchase3} alt="" />
              </li>
              <li>
                🌟 Check the checkbox for GCash Terms and Conditions and tap
                “Authorize”.
              </li>
              <li>
                <img src={purchase4} alt="" />
              </li>
              <li>
                🌟 An authentication code will be sent to your GCash. Input the
                code and tap “Next”.
              </li>
              <li>
                <img src={purchase5} alt="" />
              </li>
              <li>🌟 When linking is successful. Press “OKAY”.</li>
              <li>
                <img src={purchase6} alt="" />
              </li>
              <li>
                🌟 When GCash is selected as a payment method, press “Buy” to
                proceed on purchasing.
              </li>
              <li>
                <img src={purchase7} alt="" />
              </li>
            </ul>
            <h3>Debit/Credit Card</h3>
            <ul>
              <li>🌟 Input your Debit/Credit Card number.</li>
              <li>
                <img src={purchase8} alt="" />
              </li>
              <li>Input your other Credit/Debit card details</li>
              <li>
                <img src={purchase9} alt="" />
              </li>
              <li>🌟 Once done, tap “Save”.</li>
              <li>
                <img src={purchase10} alt="" />
              </li>
              <li>
                🌟 When Debit/Credit card is selected as a payment method, press
                “Buy” to proceed on purchasing.
              </li>
              <li>
                <img src={purchase11} alt="" />
              </li>
            </ul>
            <h3>Paypal</h3>
            <ul>
              <li>🌟 Input your PayPal email address.</li>
              <li>
                <img src={purchase12} alt="" />
              </li>
              <li>🌟 Input your PayPal phone number.</li>
              <li>
                <img src={purchase12} alt="" />
              </li>
              <li>
                🌟 Verify your PayPal account using by requesting a code by tapping
                “Request Code”.
              </li>
              <li>
                <img src={purchase13} alt="" />
              </li>
              <li>🌟 A security code will be sent to your PayPal number to input it to the text box and tap “Verify”.</li>
              <li>
                  <img src={purchase13} alt="" />
              </li>
              <li>🌟 When PayPal is selected as a payment method, press “Buy” to proceed on purchasing.</li>
              <li>
                  <img src={purchase14} alt="" />
              </li>
            </ul>
          </div>
        </div>
        <div className="bootons">
          <HashLink smooth to="/ggr-purchase-guide#" id="up">
            <FaRegArrowAltCircleUp />
          </HashLink>
        </div>
      </div>
    </div>
  );
};

export default GogoRacingPurchaseGuide;
