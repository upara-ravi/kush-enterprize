import React from "react";
import "./style.css";
import logo from "../../../assets/images/logo.jpeg";
export default function index() {
  return (
    <>
      <section>
        <div className="login-main-div">
          <div className="login-box">
            <div className="left-section">
              <img className="logo-img" src={logo} alt="" />
              {/* <h1>Fashionable</h1> */}
            </div>
            <div className="right-section">
              <div className="login-container">
                <div className="login">
                  <h1 className="heading">Login</h1>
                  <input
                    className="input"
                    type="email"
                    placeholder="Enter your email"
                  />
                  <input
                    className="input"
                    type="password"
                    placeholder="Enter your password"
                  />
                  <button className="button" title="Log In">
                    Log In
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
