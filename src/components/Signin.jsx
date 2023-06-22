import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../css/signup.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import axios from "axios";
const Signin = () => {
  let [data, setData] = useState({
    email: "",
    password: "",
  });

  const inputE = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    console.log(e.target.value);
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    
    const { email, password } = data;
    console.log(data);
    try {
      await axios.post("https://register-api-nine.vercel.app/login", {
        email,
        password,
      });
      window.alert("Login Successfully!");

    } catch (error) {
    }
  };

  return (
    <>
      <main className="main">
        <form className="form_singin mx-auto" onSubmit={handleSubmit}>
          <div className="head_sign">
            <h3 className="text-center">MNA.CODECamp</h3>
          </div>

          <div className="main-fb">
            <h4>Sign In </h4>
            <p>
              Are you new? <NavLink to="/">Sign In</NavLink>{" "}
            </p>
          </div>

          <div className="padd">
            <input
              onChange={inputE}
              name="email"
              value={data.email}
              type="email"
              className="form-control py-2"
              placeholder="Email"
            />
          </div>

          <div className="padd">
            <input
              onChange={inputE}
              name="password"
              value={data.password}
              type="password"
              className="form-control py-2"
              placeholder="Password"
            />
          </div>

          <div className="mt-4 mx-auto">
            <button type="submit" className="buttons fs-4">
              <span>Sign In</span>
              <span>Sign In</span>
            </button>
          </div>
          <div className="forgot">
            <a href="/">Forgot your password?</a>
          </div>
        </form>
      </main>
    </>
  );
};

export default Signin;
