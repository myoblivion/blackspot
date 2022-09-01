import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import notFoundPic from "../images/Yellow - 404.png";
import Pengsuni from "../images/icons/Pengsuni_portrait3.png";
import Sad from "../images/ggr-characters/jijijiji.png";
const NotFoundComponent = ({}) => {
  // Title
  useEffect(() => {
    document.title = "Black Spot Studio | 404 Not Found";
  }, []);
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/`;
    navigate(path);
  };
  return (
    <div className="notfound wrapper">
      <section className="wrappers">
        <div className="container">
          <div id="scene" className="scene" data-hover-only="false">
            <div className="circle" data-depth="1.2">
              <img src={Pengsuni} alt="" id="pengsuni" />
              <img src={Sad} alt="" id="sadness" />
            </div>
            <div className="one" data-depth="0.9">
              <div className="content">
                <span className="piece"></span>
                <span className="piece"></span>
                <span className="piece"></span>
              </div>
            </div>
            <div className="two" data-depth="0.60">
              <div className="content">
                <span className="piece"></span>
                <span className="piece"></span>
                <span className="piece"></span>
              </div>
            </div>
            <div className="three" data-depth="0.40">
              <div className="content">
                <span className="piece"></span>
                <span className="piece"></span>
                <span className="piece"></span>
              </div>
            </div>
            <p className="p404" id="b4" data-depth="0.50">
              404
            </p>
          </div>

          <div className="text">
            <article>
              <p>Woops. looks like this page doesn't exist.</p>
              <button onClick={routeChange}>Home Page</button>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotFoundComponent;
