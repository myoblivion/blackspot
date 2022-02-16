import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";

const JobComponent = ({ currentRoute }) => {
  // Email Js
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nh3pwyh",
        "template_xyvndrx",
        e.target,
        "user_DhVbKvTWQOQX3lDfGjGAj"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  const Results = () => (
    <div id="results">
      <form className="contact-us-form" onSubmit={sendEmail}></form>
      <input type="text" id="name" name="name"  placeholder="Name" required/>
      <input type="text" id="email" name="email" placeholder="Email" required />
      <input type="number" name="number" id="number" placeholder="Phone number" required/>
      <input type="number" name="salary" id="salary" placeholder="Expected Salary"/>
      <input type="file" name="file" id="file" />
      <button type="submit" className="submit">Submit</button>
    </div>
  );
  // Title
  useEffect(() => {
    document.title = "Black Spot Studio | Job Posting";
  }, []);
  const [showResults, setShowResults] = React.useState(false);
  const onClick = () => setShowResults(true);
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
              <div className="show">
                <input type="button" value="Apply Now" onClick={onClick} />
                {showResults ? <Results /> : null}
              </div>
            </div>
          </div>
          <div className="box22">
            <div className="box-col box-80">
              <h4>Business Development Manager</h4>
              <span className="function">Something</span>
              <span className="function">Something</span>
              <span className="function">Something</span>
            </div>

            <div className="box-col box-20 text-right">
            <div className="show">
                <input type="button" value="Apply Now" onClick={onClick} />
                {showResults && <Results />}
              </div>
            </div>
          </div>
          <div className="box33">
            <div className="box-col box-80">
              <h4>Business Development Manager</h4>
              <span className="function">Something</span>
              <span className="function">Something</span>
              <span className="function">Something</span>
            </div>

            <div className="box-col box-20 text-right">
            <div className="show">
                <input type="button" value="Apply Now" onClick={onClick} />
                {showResults ? <Results /> : null}
              </div>
            </div>
          </div>
          <div className="box44">
            <div className="box-col box-80">
              <h4>Customer Support</h4>
              <span className="function">Something</span>
              <span className="function">Something</span>
              <span className="function">Something</span>
            </div>

            <div className="box-col box-20 text-right">
            <div className="show">
                <input type="button" value="Apply Now" onClick={onClick} />
                {showResults ? <Results /> : null}
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default JobComponent;
