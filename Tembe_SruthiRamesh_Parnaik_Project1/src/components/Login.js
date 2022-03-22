import React from "react";
import { loginAuth } from "../utils/login.auth";


export default function Login() {
  const login = (email, password) => {
    var userType = window.sessionStorage.getItem("userType");
    if (userType) {
      alert("Please log out first!");
    } else {
      var user = loginAuth(email, password);
      if (!user) {
        alert("Invalid credentials!");
      } else {
        window.sessionStorage.setItem("user", JSON.stringify(user));
        window.location.assign("/dashboard");
      }
    }
  };

  return (
    <div className="Loginmain">
      <div className="loginH1">
        <div
          style={{
            backdropFilter: "blur(10px)",
            padding: "10%",
            backgroundColor: "rgba(0, 0, 0, 0.2)",
          }}
        >
          <h1>Siremar! </h1> <br />
          <h1>Your personal support for Margarita!</h1>
          <br />
          <h2>Log in to explore the exotic features of the Siremar Islands!</h2>
        </div>
      </div>

      <div className="login">
        <div className="box">
          <form className="form">
            <div className="input-body">
              <label
                htmlFor="Loginid"
                style={{ marginTop: "13%", width: "110px" }}
              >
                Email ID
              </label>

              <input
                type="Email"
                id="email"
                placeholder="Enter Email ID"
                required
                className="input-size"
              />
            </div>
            <div className="input-body">
              <label
                htmlFor="Password"
                style={{ marginTop: "13%", width: "110px" }}
              >
                Password
              </label>
              <input
                type="Password"
                id="password"
                placeholder="Enter Password"
                className="input-size"
                required
              />
            </div>
          </form>

          <div className="btn-box">
            <button
              className="button"
              onClick={() => {
                const email = document.getElementById("email").value;
                const password = document.getElementById("password").value;
                login(email, password);
              }}
            >
              Log In
            </button>
          </div>

          <div className="link">
            <a
              style={{
                color: "white",
                textDecoration: "none",
                fontSize: "12px",
              }}
              href="/register"
            >
              <br />
              Register an account
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}