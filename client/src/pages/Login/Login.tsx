import React, { useEffect, useState } from "react";
import "../../scss/Login/Login.scss";
import "../../scss/SweetAlert/SweetAlert.scss";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider/AuthProvider";
import { loginUser } from "../../models/user/user";
import type { UserFormData } from "../../models/user/interfaces/user";
import Swal from "sweetalert2";

export const Login: React.FC = () => {
  const [formData, setFormData] = useState<UserFormData>({} as UserFormData);
  const [info, setInfo] = useState<string | null>(null);
  const navigate = useNavigate();
  const { login } = useAuth();

  const sendData = async () => {
    const res = await loginUser(formData);
    if (res.status === 200) {
      login(String(res.token));
      await Swal.fire({
        title: "Login was successful",
        text: "Welcome back 😊",
        icon: "success",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        position: "top-end",
        background: "#ffffff",
        color: "#1f1f1f",
        iconColor: "#00b894",
        customClass: {
          popup: "custom-swal-popup animate-swal-slide",
          title: "custom-swal-title",
        },
        toast: true
      });
      navigate("/");
    }
    setInfo(res.message);
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev: any) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    sendData();
  };

  useEffect(() => {
      document.title = "ListIt!"
    }, []);

  return (
    <>
      <div className="login-page">
        <div className="login-card">
          <h1 className="login-title">
            List<span className="login-title-end">It</span>
          </h1>
          <form className="form">
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
            <p style={{ color: "red", textAlign: "center" }}>{info}</p>
            <button
              type="submit"
              className="login-button"
              onClick={handleButton}
            >
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
