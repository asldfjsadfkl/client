import React from "react";
import "../css/signup.css";
import { NavLink, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Schema from "../schema";
import { useFormik } from "formik";
import axios from "axios";

const initialValues = {
  name: "",
  phone: "",
  email: "",
  password: "",
};

const Signup = () => {
  const novigate = useNavigate();
  const { values, handleChange, handleSubmit, errors } = useFormik({
    initialValues: initialValues,
    validationSchema: Schema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const postData = async (e) => {
    e.preventDefault();
    try {
      const { name, phone, email, password } = values;

       const config = {
        headers:{"Content-type":"application/json"},
        withCredentials:true
        }
      
      await axios.post("https://register-api-nine.vercel.app/register", {
        name,
        phone,
        email,
        password,
      },config);
      novigate('/signin')
      window.alert("Register Successfully!");
    } catch (error) {
    }
  };

  return (
    <>
      <main className="main">
        <form method="POST" className="form mx-auto" onSubmit={handleSubmit}>
          <div className="head_sign">
            <h3 className="text-center">Registration</h3>
          </div>

          <div className="main-fb">
            <h4>Sign Up </h4>
            <p>
              Already have an account? <NavLink to="/signin">Sign In</NavLink>{" "}
            </p>
          </div>

          <div className="padd">
            <input
              name="name"
              value={values.name}
              onChange={handleChange}
              type="text"
              className="form-control py-2"
              placeholder="UserName"
            />
            <small>{errors.name}</small>
          </div>
          <div className="padd">
            <input
              name="phone"
              value={values.phone}
              onChange={handleChange}
              type="number"
              className="form-control py-2"
              placeholder="Phone"
            />
            <small>{errors.phone}</small>
          </div>
          <div className="padd">
            <input
              name="email"
              value={values.email}
              onChange={handleChange}
              type="email"
              className="form-control py-2"
              placeholder="Email"
            />
            <small>{errors.email}</small>
          </div>

          <div className="padd">
            <input
              name="password"
              value={values.password}
              onChange={handleChange}
              type="password"
              className="form-control py-2"
              placeholder="Password"
            />
            <small>{errors.password}</small>
          </div>

          <div className="check">
            <div className="checkbox-wrapper-12">
              <div className="cbx">
                <input id="cbx-12" type="checkbox" />
                <label htmlFor="cbx-12"></label>
                <svg width="15" height="14" viewBox="0 0 15 14" fill="none">
                  <path d="M2 8.36364L6.23077 12L13 2"></path>
                </svg>
              </div>

              <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                <defs>
                  <filter id="goo-12">
                    <fegaussianblur
                      in="SourceGraphic"
                      stdDeviation="4"
                      result="blur"
                    ></fegaussianblur>
                    <fecolormatrix
                      in="blur"
                      mode="matrix"
                      values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -7"
                      result="goo-12"
                    ></fecolormatrix>
                    <feblend in="SourceGraphic" in2="goo-12"></feblend>
                  </filter>
                </defs>
              </svg>
            </div>
            <label htmlFor="cbx-12">Are you agree to share info ?</label>
          </div>

          <div className="mt-2 mx-auto">
            <button className="buttons fs-4 ">
              {" "}
              <span type="submit" onClick={postData}>
                Sign Up
              </span>{" "}
              <span type="submit" onClick={postData}>
                Sign Up
              </span>{" "}
            </button>
          </div>

          <div className="padd mx-auto">
            <div className="description">
              By joining MNA.CODECamp, you accept our{" "}
              <strong> Privacy Policy</strong> and{" "}
              <strong>Terms of Use.</strong>{" "}
            </div>
          </div>
        </form>
      </main>
    </>
  );
};

export default Signup;
