import React from "react";
import "../../scss/Registration/Registration.scss";
import { Link } from "react-router-dom";

export const Registration: React.FC = () => {
  return (
    <>
      <div className="register-page">
        <div className="register-card">
          <h1 className="register-title">Create your <span className="register-title-start">List</span>It account</h1>
          <form className="form">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" placeholder="Enter your first name ..." required />

            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" placeholder="Enter your last name ..." required />

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

            <button type="submit" className="register-button">
              Register
            </button>
          </form>
          <p className="login-text">
            Already have an account? <Link to={"/login"}>Log in</Link>
          </p>
        </div>
      </div>
    </>
  );
};
