import React, { useState, useEffect, useRef, LinkProps } from "react";
import { Admin, Resource } from "react-admin";

const Admins = ({ props, ref, currentRoute }) => {
  // Title
  useEffect(() => {
    document.title = "Black Spot Studio | Admin";
  }, []);
  return (
    <div className="admin wrapper">
      <div className="admin-wrapper">
        <div className="admin">
          <h1>Admin Panel</h1>

          <form autoComplete="off" id="backendstuff">

            <label htmlFor="">Gogo Racing</label>
            <input type="radio" name="" id="" />
            <label htmlFor="">Scion Fist</label>
            <input type="radio" />
            <label htmlFor="">Gogo Chain</label>
            <input type="radio" />
            <label htmlFor="">Gogo World</label>
            <input type="radio" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Admins;
