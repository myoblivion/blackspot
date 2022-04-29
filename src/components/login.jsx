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
        <label>Password</label>
        <input
          type="password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="errormssg">{passwordError}</p>
        <div className="btncontainer">
          {hasAccount ? (
            <>
              <button onClick={handleLogin}>Sign In</button>
              <p>Don't have account? <span>Sign Up</span></p>
            </>
          ) : (
            <>
              <button onClick={handleSignup}>Sign Up</button>
              <p>Have an Account? <span>Sign In</span></p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default LogInComponent;
