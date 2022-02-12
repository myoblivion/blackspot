import React, { useEffect } from "react";
import ScionLogo from "../images/scionlogo.png";
import promote1 from "../images/promote1.png";
import promote2 from "../images/promote2.png";
import promote3 from "../images/promote3.png";
import promote4 from "../images/promote4.png";
import promote5 from "../images/promote5.png";
import promote6 from "../images/promote6.png";

const ScionComponent = () => {
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
    </div>
  );
};

export default ScionComponent;
