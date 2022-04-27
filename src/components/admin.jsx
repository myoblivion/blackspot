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
                <div className="game-components">
                  <input type="radio" name="choose" id="choose1" />
                  <input type="radio" name="choose" id="choose2" />
                  <input type="radio" name="choose" id="choose3" />
                  <input type="radio" name="choose" id="choose4" />
                  <label htmlFor="choose1" id="lel">
                    Gogo Racing
                  </label>
                  <label htmlFor="choose2" id="lele">
                    Scion Fist
                  </label>
                  <label htmlFor="choose3" id="lelele">
                    Gogo World
                  </label>
                  <label htmlFor="choose4" id="lelelele">
                    Gogo Chain
                  </label>
                </div>
                <div className="sub-components">
                  <input type="radio" name="sub" id="sub1" />
                  <input type="radio" name="sub" id="sub2" />
                  <input type="radio" name="sub" id="sub3" />
                  <input type="radio" name="sub" id="sub4" />
                  <label htmlFor="sub1" id="submen1">
                    Sub menu
                  </label>
                  <label htmlFor="sub2" id="submen2">
                    Sub menu
                  </label>
                  <label htmlFor="sub3" id="submen3">
                    Sub menu
                  </label>
                  <label htmlFor="sub4" id="submen4">
                    Sub menu
                  </label>
                </div>
              </div>
              <div className="textfields">
                <label htmlFor="title">Title</label>
                <input type="text" id="title" />
              </div>
              <div className="button1">
                <button>Add new content</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Admins;
