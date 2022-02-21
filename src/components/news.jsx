import React, { useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
// banners
import Banner1 from "../images/banner4l.png";
import Banner2 from "../images/gogoraces.jpg";
import Banner3 from "../images/gogoch.jpg";
import Banner4 from "../images/game3.jpg";

const NewsComponent = ({ currentRoute }) => {
  // Title
  useEffect(() => {
    document.title = "Black Spot Studio | News & Announcement";
  }, []);
  return (
    <div className="news wrapper">
      <div className="accordion">
        <div className="news-title">
          <h1>News & Announcements</h1>
        </div>
        <div className="wrapper-bg">
          <section className="bg-1">
            <div className="blog-card card-1">
              <img className="blog-img" src={Banner1} />
              <div className="text-overlay">
                <h2>Scion Fist</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus sodales posuere felis non efficitur. Mauris mollis
                  elit urna, id tempus...
                  <Link
                    to="/something"
                    style={
                      currentRoute === "scion"
                        ? { borderBottom: "2px solid yellow" }
                        : { borderBottom: "2px solid transparent" }
                    }
                  >
                    Read more
                  </Link>
                </p>
              </div>
            </div>
          </section>
          <section className="bg-2">
            <div className="blog-card card-2">
              <img className="blog-img" src={Banner2} />
              <div className="text-overlay">
                <h2>GoGO Racing</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus sodales posuere felis non efficitur. Mauris mollis
                  elit urna, id tempus...
                  <Link
                    to="/something"
                    style={
                      currentRoute === "scion"
                        ? { borderBottom: "2px solid yellow" }
                        : { borderBottom: "2px solid transparent" }
                    }
                  >
                    Read more
                  </Link>
                </p>
              </div>
            </div>
          </section>
          <section className="bg-3">
            <div className="blog-card card-3">
              <img className="blog-img" src={Banner3} />
              <div className="text-overlay">
                <h2>GoGo World</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus sodales posuere felis non efficitur. Mauris mollis
                  elit urna, id tempus...
                  <Link
                    to="/something"
                    style={
                      currentRoute === "scion"
                        ? { borderBottom: "2px solid yellow" }
                        : { borderBottom: "2px solid transparent" }
                    }
                  >
                    Read more
                  </Link>
                </p>
              </div>
            </div>
          </section>
          <section className="bg-4">
            <div className="blog-card card-3">
              <img className="blog-img" src={Banner4} />
              <div className="text-overlay">
                <h2>GoGo Chain</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus sodales posuere felis non efficitur. Mauris mollis
                  elit urna, id tempus...
                  <Link
                    to="/something"
                    style={
                      currentRoute === "scion"
                        ? { borderBottom: "2px solid yellow" }
                        : { borderBottom: "2px solid transparent" }
                    }
                  >
                    Read more
                  </Link>
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default NewsComponent;
