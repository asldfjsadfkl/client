import React from "react";
import "../index.css";
import { NavLink } from "react-router-dom";
import "../../src/index.css";
import axios from "axios";

const Home = () => {
  const logout = async () => {
    try {
      await axios.post("https://register-api-nine.vercel.app/logout");
      window.alert("Logout Successfully!");
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div className="mainHomeofthispage">
      <div>
        <NavLink className="logout" to="/signup">
          Register
        </NavLink>
      </div>

      <div>
        <NavLink className="logout" to="/signin">
          Login
        </NavLink>
      </div>

      <div className="logout">
        <NavLink onClick={logout}>Logout</NavLink>
      </div>
    </div>
  );
};
export default Home;
