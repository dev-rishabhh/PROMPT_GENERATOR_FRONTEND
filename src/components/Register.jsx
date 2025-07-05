
import React,{ useState, useEffect } from "react";
import "./Auth.css";
import { BASE_URL } from "../apis/api.js";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from "@react-oauth/google";
import { loginWithGoogle } from "../apis/loginWithGoogle.js";

const Register = () => {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: "Rishabh Pandey",
    email: "rp265053@gmail.com",
    password: "abcd",
  });

  // serverError will hold the error message from the server
  const [serverError, setServerError] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);



  // Handler for input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Clear the server error as soon as the user starts typing in Email
    if (name === "email" && serverError) {
      setServerError("");
    }

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };


  // Handler for form submission
  const handleSubmit = async (e) => {
    // console.log("Running function");

    e.preventDefault();
    setIsSuccess(false); // reset success if any

    try {
      const response = await fetch(`${BASE_URL}/auth/register`, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (data.error) {
        // Show error below the email field (e.g., "Email already exists")
        setServerError(data.error);
        return
      }
      // Registration success
      setIsSuccess(true);
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      // In case fetch fails
      console.error("Error:", error);
      setServerError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="max-w-[400px] my-[50px] mx-auto p-[20px]">
      <h2 className="text-4xl text-center p-4 font-bold  ">Register</h2>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        {/* Name */}
        <div className="form-group">
          <label htmlFor="name" className="label">
            Name
          </label>
          <input
            className="input"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </div>

        {/* Email + Send OTP */}
        <div className="form-group">
          <label htmlFor="email" className="label">
            Email
          </label>
          <div className="otp-wrapper">
            <input
              className={`input ${serverError ? "input-error" : ""}`}
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>
          {serverError && <span className="error-msg">{serverError}</span>}
        </div>

        {/* Password */}
        <div className="form-group">
          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            className="input"
            type="password"
            id="password"
            minLength={8}
            maxLength={12}
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
          />
        </div>

        <button
          type="submit"
          className={`submit-button ${isSuccess ? "success" : ""}`}
        >
          {isSuccess ? "Registration Successful" : "Register"}
        </button>
      </form>

      {/* Link to the login page */}
      <p className="link-text">
        Already have an account? <Link to="/login">Login</Link>
      </p>
      <div className="or">
        <span>Or</span>
      </div>
      <div className="google-login">
        <GoogleLogin
          onSuccess={async (credentialResponse) => {
            const data = await loginWithGoogle(credentialResponse.credential);
            if (data.error) {
              console.log(data);
              return;
            }
            location.replace("/");
          }}
          theme="filled_blue"
          text="continue_with"
          onError={() => {
            console.log("Login Failed");
          }}
        useOneTap
        />
      </div>
    </div>
  );
};

export default Register;
