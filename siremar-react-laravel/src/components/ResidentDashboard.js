import React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import "../style/residentDashboard.css";
import { getFlightDetails, getEventDetails } from "../utils/data.service";

export default function ResidentDashboard() {
  const greetings = ["Hello", "Namaste", "Bonjour", "Hola", "Welcome"];
  const flightDetails = getFlightDetails();
  const eventDetails = getEventDetails();

  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="residentDashboard">
      <div className="welcomeDiv">
        <h1>
          {greetings[Math.floor(Math.random() * greetings.length)]} Resident
        </h1>
      </div>

      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 4, borderColor: "CaptionText" }}>
            <TabList
              onChange={handleChange}
              centered
              textColor="inherit"
              indicatorColor="primary"
            >
              <Tab label="Offers" style={{ fontSize: "large" }} value="1" />
              <Tab label="Near By" style={{ fontSize: "large" }} value="2" />
              <Tab label="Register" style={{ fontSize: "large" }} value="3" />
            </TabList>
          </Box>
          <TabPanel value="1">
            {/* Flight Details Table */}
            <div className="dashboardContent">
              <div className="tableBox">
                <table className="table">
                  <caption>Flight Details</caption>
                  <tbody>
                    <tr>
                      <th>Flight</th>
                      <th>Date</th>
                      <th>Destination</th>
                      <th>Departure</th>
                      <th>Price</th>
                      <th>Discount</th>
                    </tr>
                    {flightDetails.map((value, key) => {
                      return (
                        <tr key={key}>
                          <td>{value.flight}</td>
                          <td>{value.Date}</td>
                          <td>{value.Destination}</td>
                          <td>{value.Departure}</td>
                          <td>{value.Price}</td>
                          <td>{value.Discount}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {/* Ticket Discount Table */}
              <div className="tableBox">
                <table className="table">
                  <caption>Upcoming Events</caption>
                  <tbody>
                    <tr>
                      <th>Name</th>
                      <th>Event Type</th>
                      <th>Location</th>
                      <th>Date</th>
                      <th>Price</th>
                      <th>Discount</th>
                    </tr>
                    {eventDetails.map((value, key) => {
                      return (
                        <tr key={key}>
                          <td>{value.name}</td>
                          <td>{value.type}</td>
                          <td>{value.location}</td>
                          <td>{value.date}</td>
                          <td>{value.price}</td>
                          <td>{value.discount}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </TabPanel>
          <TabPanel value="2">
            <div>
              <h2 style={{ textAlign: "center" }}>
                Get connected with places at Margarita!
              </h2>
            </div>
            <div style={{ display: "inline-flex", width: "100%" }}>
              <div
                style={{
                  borderStyle: "solid",
                  borderRadius: "15px",
                  display: "block",
                  margin: "auto",
                }}
              >
                <h3 style={{ textAlign: "center" }}>Hospitals</h3>
                <hr />
                <ul style={{ margin: "1rem", padding: "1rem" }}>
                  <li>Hospital Name and Address 1</li>
                  <li>Hospital Name and Address 2</li>
                  <li>Hospital Name and Address 3</li>
                  <li>Hospital Name and Address 4</li>
                  <li>Hospital Name and Address 5</li>
                  <li>Hospital Name and Address 6</li>
                </ul>
              </div>
              <div
                style={{
                  borderStyle: "solid",
                  borderRadius: "15px",
                  display: "block",
                  margin: "auto",
                }}
              >
                <h3 style={{ textAlign: "center" }}>Schools</h3>
                <hr />
                <ul style={{ margin: "1rem", padding: "1rem" }}>
                  <li>School Name and Address 1</li>
                  <li>School Name and Address 2</li>
                  <li>School Name and Address 3</li>
                  <li>School Name and Address 4</li>
                  <li>School Name and Address 5</li>
                  <li>School Name and Address 6</li>
                </ul>
              </div>
              <div
                style={{
                  borderStyle: "solid",
                  borderRadius: "15px",
                  display: "block",
                  margin: "auto",
                }}
              >
                <h3 style={{ textAlign: "center" }}>Businesses</h3>
                <hr />
                <ul style={{ margin: "1rem", padding: "1rem" }}>
                  <li>Business Name and Address 1</li>
                  <li>Business Name and Address 2</li>
                  <li>Business Name and Address 3</li>
                  <li>Business Name and Address 4</li>
                  <li>Business Name and Address 5</li>
                  <li>Business Name and Address 6</li>
                </ul>
              </div>
            </div>
          </TabPanel>
          <TabPanel value="3">
            <div
              className="form1"
              style={{
                borderStyle: "solid",
                borderRadius: "15px",
                display: "block",
                width: "50%",
                marginLeft: "10%",
                marginBottom: "2rem",
                textAlign: "center",
              }}
            >
              <h2>Register School</h2>
              <form>
                <div className="row">
                  <div className="col-25">
                    <label htmlFor="fname">School Name</label>
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
                    <label htmlFor="lname">Location</label>
                  </div>
                  <div className="col-75">
                    <input
                      type="text"
                      id="loc"
                      name="location"
                      placeholder="School location.."
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-25">
                    <label htmlFor="country">Highest Degree</label>
                  </div>
                  <div className="col-75">
                    <select id="country" name="country">
                      <option value="5">Elementary School</option>
                      <option value="8">Middle School</option>
                      <option value="12">High School</option>
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="col-25">
                    <label htmlFor="subject">Description</label>
                  </div>
                  <div className="col-75">
                    <textarea
                      id="sdesc"
                      name="sdesc"
                      placeholder="Write something about your school.."
                      style={{ height: "200px" }}
                    ></textarea>
                  </div>
                </div>
                <br />
                <div className="row">
                  <input type="submit" value="Submit" />
                </div>
              </form>
            </div>
            <div
              className="form1"
              style={{
                borderStyle: "solid",
                borderRadius: "15px",
                display: "block",
                width: "50%",
                marginLeft: "40%",
                marginBottom: '2rem',
                textAlign: "center",
              }}
            >
              <h2>Register your Company</h2>
              <form>
                <div className="row">
                  <div className="col-25">
                    <label htmlFor="fname">Company Name</label>
                  </div>
                  <div className="col-75">
                    <input
                      type="text"
                      id="cname"
                      name="comname"
                      placeholder="Company name.."
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-25">
                    <label htmlFor="btype">Business Type</label>
                  </div>
                  <div className="col-75">
                    <input
                      type="text"
                      id="btype"
                      name="businessType"
                      placeholder="Business type.."
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-25">
                    <label htmlFor="country">Initial investment</label>
                  </div>
                  <div className="col-75">
                    <input
                      type="text"
                      id="initinv"
                      name="initInv"
                      placeholder="Initial Investment.."
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-25">
                    <label htmlFor="subject">Description</label>
                  </div>
                  <div className="col-75">
                    <textarea
                      id="bdesc"
                      name="bdesc"
                      placeholder="Write something about your company.."
                      style={{ height: "200px" }}
                    ></textarea>
                  </div>
                </div>
                <br />
                <div className="row">
                  <input type="submit" value="Submit" />
                </div>
              </form>
            </div>
            <div
              className="form1"
              style={{
                borderStyle: "solid",
                borderRadius: "15px",
                display: "block",
                width: "50%",
                marginLeft: "10%",
                textAlign: "center",
              }}
            >
              <h2>Register Move Out</h2>
              <form>
                <div className="row">
                  <div className="col-25">
                    <label htmlFor="fname">Current Address</label>
                  </div>
                  <div className="col-75">
                    <input
                      type="text"
                      id="c_add"
                      name="c_add"
                      placeholder="Mention your current address.."
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-25">
                    <label htmlFor="btype">Latest Address</label>
                  </div>
                  <div className="col-75">
                    <input
                      type="text"
                      id="l_add"
                      name="l_add"
                      placeholder="Mention your next address.."
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-25">
                    <label htmlFor="country">Move out Date</label>
                  </div>
                  <div className="col-75">
                    <input
                      type="date"
                      id="mod"
                      name="mod"
                      placeholder="Date of moving out.."
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-25">
                    <label htmlFor="subject">Feedback</label>
                  </div>
                  <div className="col-75">
                    <textarea
                      id="feedback"
                      name="feedback"
                      placeholder="We would love to have your feedback on Margarita..."
                      style={{ height: "200px" }}
                    ></textarea>
                  </div>
                </div>
                <br />
                <div className="row">
                  <input type="submit" value="Submit" />
                </div>
              </form>
            </div>
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
}
