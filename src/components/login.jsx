import React, { useState, useEffect, useRef, LinkProps } from "react";

const Form = (props) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignup,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
  } = props;
  return (
    <div className="login wrapper">
      <div className="login-container">
        <label>Email</label>
        <input type="text" autoFocus required />
        <p className="errorMsg"></p>
        <label>Password</label>
        <input type="password" required />
        <p className="errorMsg"></p>

        <button type="submit">Sign In</button>
      </div>
    </div>
  );
};

export default Form;
