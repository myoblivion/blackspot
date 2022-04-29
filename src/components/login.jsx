import React, { useState, useEffect, useRef, LinkProps } from "react";

const LogInComponent = (props) => {
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
        <input
          type="text"
          autoFocus
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className="errorMsg">{emailError}</p>
        <label>Password</label>
        <input
          type="password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="errorMsg">{passwordError}</p>
        <div
          className="btnContainer"
          onClick={() => setHasAccount(!hasAccount)}
        >
          <button onClick={handleLogin}>Sign In</button>
        </div>
      </div>
    </div>
  );
};

export default LogInComponent;
