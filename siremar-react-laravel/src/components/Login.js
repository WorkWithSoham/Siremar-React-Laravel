import React from "react";
import "../style/login.css";
import { Link } from "react-router-dom";
import { width } from "@mui/system";

export default function Login() {
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
              <label for="Loginid" style={{ marginTop: "13%", width: "110px" }}>
                Login ID
              </label>

              <input
                type="Loginid"
                name="login_Id"
                placeholder="Enter Login ID"
                required
                className="input-size"
              />
            </div>
            <div className="input-body">
              <label
                for="Password"
                style={{ marginTop: "13%", width: "110px" }}
              >
                Password
              </label>
              <input
                type="Password"
                name="password"
                placeholder="Enter Password"
                className="input-size"
                required
              />
            </div>
          </form>

          <div className="btn-box">
            <button className="button">Log In</button>
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
              {" "}
              Register an account
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
