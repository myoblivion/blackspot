import React, { useEffect } from "react";
import Slider from "react-slick";
import ScionLogo from "../images/scionlogo.png";
// Promote
import promote1 from "../images/promote1.png";
import promote2 from "../images/promote2.png";
import promote3 from "../images/promote3.png";
import promote4 from "../images/promote4.png";
import promote5 from "../images/promote5.png";
import promote6 from "../images/promote6.png";
// Feautures
import feautures from "../images/background/feauture.png";
import feautures2 from "../images/background/feauture2.png";
import feautures3 from "../images/background/feauture3.png";
const ScionComponent = () => {
  // EmailJs
  const settings = {
    Infinite: true,
    lazyload: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    dots: true,
    centerPadding: 0,
    arrows: false,
    beforeChange: (current, next) => setImageIndex(next),
  };

  // Title
  useEffect(() => {
    document.title = "Scion Fist";
  }, []);
  return (
    <div className="scion wrapper">
      <section className="wrapper1"></section>
      <section className="wrapper2">
        <div className="titles">
          <h2>Prologue</h2>
        </div>
        <p>
          The world has been devastated by nuclear war in the near future. The
          ruined world began to divide into two factions. As the struggle for
          resources for survival intensifies, War has become commonplace, and
          the massacre of civilians has been repeated. The civilian forces
          opposed this and planned resistance as a private squad, The code name
          <span className="orange"> Scientificist</span> will be{" "}
          <span className="orange">founded</span>...
        </p>
      </section>
      <section className="wrapper3">
        <div className="titles">
          <h2>Game Intro</h2>
        </div>
        <div className="promotes">
          <div className="intro-wrap">
            <div className="intro-img">
              <img src={promote1} alt="" />
            </div>
            <div className="intro-img">
              <img src={promote2} alt="" />
            </div>
            <div className="intro-img">
              <img src={promote3} alt="" />
            </div>
            <div className="intro-img">
              <img src={promote4} alt="" />
            </div>
            <div className="intro-img">
              <img src={promote5} alt="" />
            </div>
            <div className="intro-img">
              <img src={promote6} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="wrapper4">
        <div className="titles">
          <h2>Features</h2>
        </div>
        <div className="feauture-wrap">
          <div className="feauture-img">
            <img src={feautures} alt="" />
          </div>
          <div className="feauture-img">
            <img src={feautures2} alt="" />
          </div>
          <div className="feauture-img">
            <img src={feautures3} alt="" />
          </div>
        </div>
      </section>
      <section className="wrapper5">
        <div className="characters">
        <Slider {...settings}>
          
        </Slider>
        </div>
      </section>
    </div>
  );
};

export default ScionComponent;
