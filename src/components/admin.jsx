import React, { useState, useEffect, useRef, LinkProps } from "react";
import { Admin, Resource } from "react-admin";

const Admins = ({ record }) => {
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
            <div className="admin_contents">
              <div className="components">
                <label htmlFor="choose1">Gogo Racing</label>
                <input type="radio" name="choose" id="choose1" />
                <label htmlFor="choose2">Scion Fist</label>
                <input type="radio" name="choose" id="choose2" />
                <label htmlFor="choose3">Gogo Chain</label>
                <input type="radio" name="choose" id="choose3" />
                <label htmlFor="choose4">Gogo World</label>
                <input type="radio" name="choose" id="choose4" />
              </div>
              <div className="textfields">
                <label htmlFor="title">Title</label>
                <input type="text" id="title" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Admins;
