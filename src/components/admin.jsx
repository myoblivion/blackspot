import React, { useState, useEffect, useRef, LinkProps } from "react";

import { HashLink } from "react-router-hash-link";
import { useHistory } from "react-router-dom";
import Draggable from "react-draggable"; // The default// ES6
import {
  FaTrash,
  FaImages,
  FaUserCircle,
  FaSearch,
  FaRegArrowAltCircleUp,
  FaWindowClose,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import axios from "axios";

import {
  FiFileText,
  FiMove,
  FiRotateCw,
  FiRotateCcw,
  FiZoomOut,
  FiZoomIn,
} from "react-icons/fi";
import backgroundimg from "../images/gogoracingbackground/ggrpatchnotesbanner.png";

const Admins = ({ record, handleLogout, props, ref }) => {
  const announcements = [
    {
      title: "Gogo Racing Play To Win Raffle Event",
    },
  ];
  const posts = [
    {
      id: 1,
      name: "Announcements",
      to: "/ggr-announcement-list",
      span: "See important in-game notice and announcements",
      image: "../images/gogoracingbackground/catto.png",
    },
    {
      id: 2,
      name: "Newsletter",
      span: "Hear what's new in Gogo Racing here!",
      image: "../images/gogoracingbackground/catto.png",
    },
    {
      id: 3,
      name: "Game Guide",
      to: "/ggr-guide-list",
      span: "New to Gogo Racing? Here is everything you need to know about the game!",
      image: "./images/gogoracingbackground/catto.png",
    },
    {
      id: 4,
      name: "Game Guide",
      to: "/gogoracing-guide",
      span: "New to Gogo Racing? Here is everything you need to know about the game!",
      image: "../images/gogoracingbackground/catto.png",
    },
    {
      id: 5,
      name: "Account Linking",
      to: "/ggr-account-linking",
      span: "Here's a guide about how you can link your account.",
      image: "../images/gogoracingbackground/catto.png",
    },
    {
      id: 6,
      name: "Purchase & Linking Guide",
      to: "/ggr-purchase-guide",
      span: "This will guide you on how to purchase items in GoGo Racing using different types of payment method.",
      image: "../images/gogoracingbackground/catto.png",
    },
    {
      id: 7,
      name: "Updates",
      to: "/ggr-update-list",
      span: "Keep updated with Gogo Racing!",
      image: "../images/gogoracingbackground/catto.png",
    },
    {
      id: 8,
      name: "1.0.3 Patch Note",
      to: "/ggr-patch3",
      span: "04.04.2022",
      image: "../images/gogoracingbackground/catto.png",
    },
    {
      id: 9,
      name: "1.0.2 Patch Note",
      to: "/ggr-patch2",
      span: "03.25.2022",
      image: "../images/gogoracingbackground/catto.png",
    },
    {
      id: 10,
      name: "1.0.1 Patch Note",
      to: "/ggr-updates",
      span: "03.23.2022",
      image: "../images/gogoracingbackground/catto.png",
    },
  ];
  return (
    <div className="admin wrapper">
      <div className="admin-wrapper">
        <div className="admin-left">
          <div className="sub-components">
            <button id="logout" onClick={handleLogout}>
              Log Out
            </button>
            <div className="admin-right">
              <h1>Welcome, Admin</h1>
              <div className="displayed-contents">
                <ul>
                  <li>{name}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admins;
