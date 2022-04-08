import React from "react";

export default function Contact() {
  return (
    <div style={{ marginTop: "5%", textAlign: "center" }}>
      <div style={{ textAlign: "start" }}>
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
          <form className="residentDashboard" style={{ border: "hidden" }}>
            <div className="row">
              <div className="col-25">
                <label htmlFor="fname">Name</label>
              </div>
              <div className="col-75">
                <input
                  type="text"
                  id="sname"
                  name="schoolname"
                  placeholder="School name.."
                />
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label htmlFor="lname">Email</label>
              </div>
              <div className="col-75">
                <input
                  type="text"
                  id="loc"
                  name="location"
                  placeholder="Please enter your email.."
                  style={{ marginTop: "0.5rem" }}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label htmlFor="country">Feedback</label>
              </div>
              <textarea
                name="country"
                id="country"
                cols="10"
                rows="10"
                style={{ width: "60%", marginTop: "1rem" }}
              ></textarea>
            </div>
          </form>
        </div>
      </div>
      <h1>
        We appreciate your Feedback! Thank you!!
        <span style={{ fontSize: "80px", marginLeft: '1rem' }}>&#128515;</span>
      </h1>
    </div>
  );
}
