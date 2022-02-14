import React, { useState, useEffect } from "react";

const ApplyFormComponent = () => {
  // Title
  useEffect(() => {
    document.title = "Black Spot Studio | GoGo Chain";
  }, []);
  return (
    <div className="applyform wrapper">
      <section className="wrapper">
        <div id="survey-container">
          <h1 id="title">Job form</h1>

          <p id="description">Fill in to apply</p>

          <form id="survey-form">
            <label id="name-label" className="row-label" for="name">
              Name:
            </label>
            <input
              id="name"
              className="row-input"
              type="text"
              placeholder="Enter your name"
              required
            />

            <label id="email-label" className="row-label" for="email">
              Email:
            </label>
            <input
              id="email"
              className="row-input"
              type="email"
              placeholder="Enter your email"
              required
            />

            <label className="row-label" for="dropdown">
              Level of education:
            </label>
            <select id="dropdown" className="row-input" required>
              <option disabled selected>
                Select an option
              </option>
              <option value="primary">Primary education</option>
              <option value="secondary">Secondary education</option>
              <option value="higher">Higher education</option>
              <option value="na">No answer</option>
            </select>

            <label id="number-label" className="row-label" for="number">
              Years of experience (optional):
            </label>
            <input
              id="number"
              className="row-input"
              type="number"
              placeholder="Enter number of years of experience"
              min="0"
              max="50"
            />

            <p className="row-label">Known programs:</p>

            <label className="row-input small" for="box-windows">
              <input
                type="checkbox"
                id="box-windows"
                name="checkbox"
                value="windows"
              />
              <span className="inline-label">Windows</span>
            </label>

            <label className="row-input small" for="box-word">
              <input
                type="checkbox"
                id="box-word"
                name="checkbox"
                value="word"
              />
              <span className="inline-label">Word</span>
            </label>

            <label className="row-input small" for="box-excel">
              <input
                type="checkbox"
                id="box-excel"
                name="checkbox"
                value="excel"
              />
              <span className="inline-label">Excel</span>
            </label>

            <label className="row-input small" for="box-powerpoint">
              <input
                type="checkbox"
                id="box-powerpoint"
                name="checkbox"
                value="powerpoint"
              />
              <span className="inline-label">Power Point</span>
            </label>

            <label className="row-input small" for="box-outlook">
              <input
                type="checkbox"
                id="box-outlook"
                name="checkbox"
                value="outlook"
              />
              <span className="inline-label">Outlook</span>
            </label>

            <p className="row-label">Expected salary:</p>

            <label className="row-input small" for="below-3k">
              <input type="radio" id="below-3k" name="radio" value="below-3k" />
              <span className="inline-label">Below $3K</span>
            </label>

            <label className="row-input small" for="3k-4k">
              <input type="radio" id="3k-4k" name="radio" value="3k-4k" />
              <span className="inline-label">$3K - $4K</span>
            </label>

            <label className="row-input small" for="4k-5k">
              <input type="radio" id="4k-5k" name="radio" value="4k-5k" />
              <span className="inline-label">$4K - $5K</span>
            </label>

            <label className="row-input small" for="above-5k">
              <input type="radio" id="above-5k" name="radio" value="above-5k" />
              <span className="inline-label">Above $5K</span>
            </label>

            <label className="row-input small" for="dont-know">
              <input
                type="radio"
                id="dont-know"
                name="radio"
                value="dont know"
              />
              <span className="inline-label">Don't know</span>
            </label>

            <label className="row-label" for="comments">
              Upload your CV
            </label>
            <input type="file" name="comments" id="file" />

            <button id="submit" type="submit">
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ApplyFormComponent;
