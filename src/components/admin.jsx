import React, { useState, useEffect, useRef, LinkProps } from "react";
import { HashLink } from "react-router-hash-link";
import icono from "../images/icons/logo.png";
import { Link } from "react-router-dom";


const Admin = ({ props, ref, currentRoute }) => {
  // Title
  useEffect(() => {
    document.title = "Black Spot Studio | Admin";
  }, []);
  return (
    <div className="admin wrapper">
        <div className="admin-wrapper">
            <div className="admin">
                <h1>admin</h1>
            </div>
        </div>
    </div>
    );
};

export default Admin;
