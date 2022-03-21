import React from "react";

export default function Contact() {
  return (
    <div style={{ 'marginTop': '5%', width: '80%' }}>
      <div
        className="form1"
        style={{
          borderStyle: "solid",
          borderRadius: "15px",
          height: "445px",
          width: "75%",
          margin: "2%",
          marginLeft: "12%",
        }}
      >
        <h1>Contact Us!</h1>
        <form className="formreg">
          <div className="input-bodyreg">
            <label for="Name" style={{ marginTop: "4%", width: "110px" }}>
              Name
            </label>

            <input
              type="text"
              name="Name"
              placeholder="Enter your Name"
              required
              className="input-sizereg1"
            />
          </div>

          <br />

          <div className="input-bodyreg">
            <label for="EmailID" style={{ marginTop: "2.5%", width: "110px" }}>
              Email ID
            </label>

            <input
              type="email"
              name="Email"
              placeholder="Enter your Email ID"
              required
              className="input-sizereg3"
            />
          </div>

          <div className="input-bodyreg">
            <label for="Message" style={{ marginTop: "7%" }}>
              Message
            </label>
            <textarea
              name="message"
              style={{ marginLeft: "4%", marginTop: "1%" }}
              placeholder="We would love to hear from you!"
              cols="97"
              rows="7"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
