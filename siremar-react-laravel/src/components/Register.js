import React from "react";
import { loginAuth } from "../utils/login.auth";
import "../style/register.css";

export default function Register() {
  return (
    <div className="main-register">
      <div className="register">
        <div className="boxreg1">
          <form className="formreg1">
            <div className="input-bodyreg">
              <label htmlFor="Name" style={{ marginTop: "4%", width: "110px" }}>
                Name
              </label>

              <input
                type="Name"
                name="Name"
                placeholder="Enter your Name"
                required
                className="input-sizereg"
              />
            </div>

            <div className="input-bodyreg">
              <label
                htmlFor="userType"
                style={{ marginTop: "4%", width: "110px" }}
              >
                User Type
              </label>

              <select name="userType" id="type" style={{ width: '180px' }}>
                <option value="inspector">Inspector</option>
                <option value="resident">Resident</option>
              </select>
            </div>

            <div className="input-bodyreg">
              <label
                htmlFor="EmailID"
                style={{ marginTop: "4%", width: "110px" }}
              >
                Email ID
              </label>

              <input
                type="Email"
                name="Email"
                placeholder="Enter your Email ID"
                required
                className="input-sizereg"
              />
            </div>

            <div className="input-bodyreg">
              <label
                htmlFor="Password"
                style={{ marginTop: "4%", width: "110px" }}
              >
                Password
              </label>
              <input
                type="Password"
                name="password"
                placeholder="Enter Password"
                className="input-sizereg"
                required
              />
            </div>

            <div className="input-bodyreg">
              <label
                htmlFor="DateOfBirth"
                style={{ marginTop: "4%", width: "105px" }}
              >
                Date of Birth
              </label>

              <input
                type="DateOfBirth"
                name="DateOfBirth"
                placeholder="MM/DD/YYYY"
                required
                className="input-sizereg"
              />
            </div>

            <div className="input-bodyreg">
              <label
                htmlFor="ConfirmPassword"
                style={{ marginTop: "4%", width: "110px" }}
              >
                Confirm Password
              </label>

              <input
                type="ConfirmPassword"
                name="ConfirmPassword"
                placeholder="Confirm Password"
                required
                className="input-sizereg"
              />
            </div>
          </form>

          <div className="btn-boxreg1">
            <button
              className="button"
              onClick={() => {
                const user = loginAuth(
                  document.getElementById("type").value,
                  ""
                );
                window.sessionStorage.setItem("user", JSON.stringify(user));
                window.location.assign("/dashboard");
              }}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
