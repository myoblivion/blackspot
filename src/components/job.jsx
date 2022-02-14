import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const JobComponent = ({ currentRoute }) => {
  // Title
  useEffect(() => {
    document.title = "Black Spot Studio | Job Posting";
  }, []);

  return (
    <div className="job wrapper">
      <section className="wrappers1">
        <h1 className="header">Work with us. Grow with us.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ut
          perspiciatis dicta culpa nesciunt eum corporis? Impedit molestias
          reprehenderit maiores iusto pariatur, odio sint dicta porro doloremque
          maxime neque quos?
        </p>
        <section className="wrappers2">
          <div className="box">
            <div className="box-col box-80">
              <h4>Business Development Manager</h4>
              <span className="function">Something</span>
              <span className="function">Something</span>
              <span className="function">Something</span>
            </div>

            <div className="box-col box-20 text-right">
              <Link to="/applyform" className="button">
                Apply
              </Link>
            </div>
          </div>

          <div className="box">
            <div className="box-col box-80">
              <h4>Customer Support</h4>
              <span className="function">Something</span>
              <span className="function">Something</span>
              <span className="function">Something</span>
            </div>

            <div className="box-col box-20 text-right">
              <Link to="/applyform" className="button">
                Apply
              </Link>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default JobComponent;
