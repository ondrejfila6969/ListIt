import React, { useEffect, useState } from "react";
import "../../scss/Registration/Registration.scss";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider/AuthProvider";
import { registerUser } from "../../models/user/user";
import type { FormData } from "../../models/user/interfaces/user";
import Swal from "sweetalert2";

export const Registration: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({} as FormData);
  const [info, setInfo] = useState<string | null>(null);
  const navigate = useNavigate();
  const { login } = useAuth();

  const sendData = async () => {
    const emailRegex =
      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    if (!formData?.email || !emailRegex.test(formData?.email))
      return setInfo("All fields are required!");

    const res = await registerUser(formData);
    if (res.status === 201) {
      login(res.token);
      await Swal.fire({
        title: "Registration was succesful",
        icon: "success",
        confirmButtonText: "Continue"
      })
      return navigate("/");
    }
    setInfo(res.message);
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    sendData();
  }

  useEffect(() => {
    document.title = "ListIt <3"
  }, []);

  return (
    <>
      <div className="register-page">
        <div className="register-card">
          <h1 className="register-title">
            Create your <span className="register-title-start">List</span>It
            account
          </h1>
          <form className="form">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              name="first_name"
              placeholder="Enter your first name ..."
              onChange={handleInput}
              required
            />

            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              name="last_name"
              placeholder="Enter your last name ..."
              onChange={handleInput}
              required
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              onChange={handleInput}
              required
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              onChange={handleInput}
              required
            />
            <p style={{color: "red", textAlign: "center"}}>{info}</p>
            <button type="submit" className="register-button" onClick={handleButton}>
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
