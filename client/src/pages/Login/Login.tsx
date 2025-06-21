import React from "react";
import "../../scss/Login/Login.scss";
import { Link } from "react-router-dom";

export const Login: React.FC = () => {
  return (
    <>
      <div className="login-page">
        <div className="login-card">
          <h1 className="login-title">List<span className="login-title-end">It</span></h1>
          <form className="form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              required
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              required
            />

            <button type="submit" className="login-button">
              Login
            </button>
          </form>
          <p className="login-register-text">
            Don't have an account? <Link to={"/register"}>Register</Link>
          </p>
        </div>
      </div>
    </>
  );
};
