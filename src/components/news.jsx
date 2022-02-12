import React, { useEffect } from "react";

// banners
import Banner1 from "../images/banner4.jpg";
import Banner2 from "../images/gogoraces.jpg";
import Banner3 from "../images/gogoch.jpg";
import Banner4 from "../images/game3.jpg";


const NewsComponent = () => {
  // Title
  useEffect(() => {
    document.title = "Black Spot Studio | News & Announcement";
  }, []);
  return (
    <div className="news wrapper">
      <div className="cards">
        <div className="card">
          <div className="card__image-holder">
            <img
              className="card__image"
              src={Banner4}
              alt="wave"
            />
          </div>
          <div className="card-title">
            <a href="#" className="toggle-info btn">
              Read More
            </a>
            <h2>
              News Title
              <small>Description</small>
            </h2>
          </div>
          <div className="card-flap flap1">
            <div className="card-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              cum, eligendi aperiam, qui praesentium nostrum dolorem maiores
              cumque quisquam eum possimus illum vitae ipsum nisi neque
              voluptatem vel, natus earum!
            </div>
            <div className="card-flap flap2">
              <div className="card-actions">

              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card__image-holder">
            <img
              className="card__image"
              src={Banner1}
              alt="beach"
            />
          </div>
          <div className="card-title">
            <a href="#" className="toggle-info btn">
              Read More
            </a>
            <h2>
              News Title
              <small>Description</small>
            </h2>
          </div>
          <div className="card-flap flap1">
            <div className="card-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              cum, eligendi aperiam, qui praesentium nostrum dolorem maiores
              cumque quisquam eum possimus illum vitae ipsum nisi neque
              voluptatem vel, natus earum!
            </div>
            <div className="card-flap flap2">
              <div className="card-actions">

              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card__image-holder">
            <img
              className="card__image"
              src={Banner4}
              alt="mountain"
            />
          </div>
          <div className="card-title">
            <a href="#" className="toggle-info btn">
              Read More
            </a>
            <h2>
              News Title
              <small>Description</small>
            </h2>
          </div>
          <div className="card-flap flap1">
            <div className="card-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              cum, eligendi aperiam, qui praesentium nostrum dolorem maiores
              cumque quisquam eum possimus illum vitae ipsum nisi neque
              voluptatem vel, natus earum!
            </div>
            <div className="card-flap flap2">
              <div className="card-actions">

              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card__image-holder">
            <img
              className="card__image"
              src={Banner2}
              alt="field"
            />
          </div>
          <div className="card-title">
            <a href="#" className="toggle-info btn">
              Read More
            </a>
            <h2>
              News Title
              <small>Description</small>
            </h2>
          </div>
          <div className="card-flap flap1">
            <div className="card-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              cum, eligendi aperiam, qui praesentium nostrum dolorem maiores
              cumque quisquam eum possimus illum vitae ipsum nisi neque
              voluptatem vel, natus earum!
            </div>
            <div className="card-flap flap2">
              <div className="card-actions">

              </div>
            </div>
          </div>
        </div>

      </div>
      <hr />
    </div>
  );
};

export default NewsComponent;
