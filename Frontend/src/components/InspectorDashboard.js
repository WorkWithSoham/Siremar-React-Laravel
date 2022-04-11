import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import axios from "axios";
import { url } from '../utils/auth'
import Chat from "./Chat";

export default function InspectorDashboard() {
  const getList = async (table) => {
    return axios({
      url: url + 'get_list.php',
      method: "post",
      data: {
        table: table,
      },
    }).then((res) => {
      console.log(res.data);
      if (table === "county") {
        setCountyDetails(res.data);
      }
    });
  };

  useEffect(() => {
    getList("county");
  }, []);

  const greetings = ["Hello", "Namaste", "Bonjour", "Hola", "Welcome"];

  const [entity, setEntity] = useState("");
  const [value, setValue] = React.useState("1");
  const [countyDetails, setCountyDetails] = useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="inspectorDashboard">
      <div className="welcomeDiv">
        <h1>
          {greetings[Math.floor(Math.random() * greetings.length)]} Officer!
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
              <Tab
                label="Registration"
                style={{ fontSize: "large" }}
                value="1"
              />
              <Tab label="Management" style={{ fontSize: "large" }} value="2" />
              <Tab label="Chat" style={{ fontSize: "large" }} value="3" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <div style={{ display: "inline-flex", width: "100%" }}>
              <div
                className="form1"
                style={{
                  borderStyle: "solid",
                  borderRadius: "15px",
                  display: "block",
                  width: "120%",
                  margin: "2%",
                  marginInline: "2rem",
                  textAlign: "center",
                }}
              >
                <h2>Register Inspector</h2>
                <form>
                  <div className="row">
                    <div className="col-75">
                      <input type="text" id="name" placeholder="Full Name.." />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-75">
                      <input
                        type="text"
                        id="email"
                        placeholder="Mention email.."
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-75">
                      <input type="text" id="phNo" placeholder="Phone Number" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-75">
                      <input
                        type="date"
                        id="dob"
                        placeholder="Date of Birth.."
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-75">
                      <input
                        type="text"
                        id="pob"
                        placeholder="Place of Birth"
                      />
                    </div>
                  </div>
                  <br />
                  <div className="row">
                    <input
                      type="button"
                      id="submit"
                      value="Submit"
                      onClick={() => {
                        const data = {
                          name: document.getElementById("name").value,
                          date: document.getElementById("dob").value,
                          pob: document.getElementById("pob").value,
                          pass: "siremar123",
                          cpass: "siremar123",
                          email: document.getElementById("email").value,
                          phNo: document.getElementById("phNo").value,
                          userType: "IP",
                        };

                        console.log(data);

                        alert(`${entity} successfully created`);
                      }}
                    />
                  </div>
                </form>
              </div>
              <div
                className="form1"
                style={{
                  borderStyle: "solid",
                  borderRadius: "15px",
                  display: "block",
                  width: "120%",
                  margin: "2%",
                  marginInline: "2rem",
                  textAlign: "center",
                }}
              >
                <h2>Register Move Out</h2>
                <form>
                  <div className="row">
                    <div className="col-75">
                      <input
                        type="text"
                        id="c_add"
                        placeholder="Mention current address.."
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-75">
                      <input
                        type="text"
                        id="l_add"
                        placeholder="Mention next address.."
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-75">
                      <input
                        type="date"
                        id="mod"
                        placeholder="Date of moving out.."
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-75">
                      <textarea
                        id="feedback"
                        placeholder="We would love to know the reason for move out..."
                        style={{ height: "200px" }}
                      ></textarea>
                    </div>
                  </div>
                  <br />
                  <div className="row">
                    <input
                      type="button"
                      id="submit"
                      value="Submit"
                      onClick={() => {
                        setEntity("Inspector");
                        alert(`${entity} successfully created`);
                      }}
                    />
                  </div>
                </form>
              </div>
            </div>
            <div style={{ display: "inline-flex", width: "100%" }}>
              <div
                className="form1"
                style={{
                  borderStyle: "solid",
                  borderRadius: "15px",
                  display: "block",
                  width: "120%",
                  margin: "2%",
                  marginInline: "2rem",
                  textAlign: "center",
                }}
              >
                <h2>Register Facility</h2>
                <form>
                  <div className="row">
                    <div className="col-75">
                      <input type="text" id="fname" placeholder="Full Name.." />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-75">
                      <input
                        type="text"
                        id="freg"
                        placeholder="Registered by..."
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-75">
                      <select name="userType" id="fType">
                        <option value="business">Business</option>
                        <option value="school">School</option>
                        <option value="event">Event</option>
                        <option value="hospital">Hospital</option>
                      </select>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-75">
                      <input
                        type="date"
                        id="dor"
                        placeholder="Date of registration.."
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-75">
                      <input type="text" id="rloc" placeholder="Location" />
                    </div>
                  </div>
                  <br />
                  <div className="row">
                    <input
                      type="button"
                      id="submit"
                      value="Submit"
                      onClick={() => {
                        const data = {
                          name: document.getElementById("fname").value,
                          reg: document.getElementById("freg").value,
                          dor: document.getElementById("dor").value,
                          rloc: document.getElementById("rloc").value,
                          fType: document.getElementById("fType").value,
                        };

                        console.log(data);
                      }}
                    />
                  </div>
                </form>
              </div>
              <div
                className="form1"
                style={{
                  borderStyle: "solid",
                  borderRadius: "15px",
                  display: "block",
                  width: "120%",
                  margin: "2%",
                  marginInline: "2rem",
                  textAlign: "center",
                }}
              >
                <h2>Register Discount</h2>
                <form>
                  <div className="row">
                    <div className="col-75">
                      <input type="text" id="dis" placeholder="Amount" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-75">
                      <select name="userType" id="fType">
                        <option value="event">Event</option>
                        <option value="flight">Flights</option>
                      </select>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-75">
                      <input
                        type="date"
                        id="ed"
                        placeholder="Date of expiry.."
                      />
                    </div>
                  </div>
                  <br />
                  <div className="row">
                    <input
                      type="button"
                      id="submit"
                      value="Submit"
                      onClick={() => {
                        const data = {
                          amount: document.getElementById("dis").value,
                          ftype: document.getElementById("ftype").value,
                          expiry: document.getElementById("ed").value,
                        };

                        console.log(data);
                      }}
                    />
                  </div>
                </form>
              </div>
              <div
                className="form1"
                style={{
                  borderStyle: "solid",
                  borderRadius: "15px",
                  display: "block",
                  width: "120%",
                  margin: "2%",
                  marginInline: "2rem",
                  textAlign: "center",
                }}
              >
                <h2>Register Flights</h2>
                <form>
                  <div className="row">
                    <div className="col-75">
                      <input
                        type="text"
                        id="fnum"
                        placeholder="Flight number.."
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-75">
                      <input
                        type="text"
                        id="dloc"
                        placeholder="Mention Departure loc.."
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-75">
                      <input
                        type="text"
                        id="aloc"
                        placeholder="Arrival location.."
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-75">
                      <input
                        type="datetime-local"
                        id="dt"
                        placeholder="Departure time.."
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-75">
                      <input
                        type="datetime-local"
                        id="at"
                        placeholder="Time of arrival.."
                      />
                    </div>
                  </div>
                  <br />
                  <div className="row">
                    <input
                      type="button"
                      id="submit"
                      value="Submit"
                      onClick={() => {
                        setEntity("Inspector");
                        alert(`${entity} successfully created`);
                      }}
                    />
                  </div>
                </form>
              </div>
            </div>
          </TabPanel>
          <TabPanel value="2">
            <div className="countyDiv" style={{ paddingInline: "30%" }}>
              <table
                className="table"
                style={{
                  maxHeight: "44vh",
                  overflow: "scroll",
                  margin: "auto",
                }}
              >
                <tbody>
                  <tr>
                    <th>Name</th>
                    <th>Schools</th>
                    <th>Businesses</th>
                    <th>Hospitals</th>
                    <th>Population</th>
                    <th>Actions</th>
                  </tr>
                  {countyDetails.map((value, key) => {
                    return (
                      <tr key={key}>
                        <td>
                          <input defaultValue={value.name} />
                        </td>
                        <td>
                          <input defaultValue={value.school} />
                        </td>
                        <td>
                          <input defaultValue={value.business} />
                        </td>
                        <td>
                          <input defaultValue={value.hospital} />
                        </td>
                        <td>
                          <input defaultValue={value.population} />
                        </td>
                        <td>
                          <input
                            type="button"
                            id="update"
                            value="Update"
                            onClick={() => {
                              setEntity("Inspector");
                              alert(`${entity} successfully updated`);
                            }}
                          />
                          <input
                            type="button"
                            id="delete"
                            value="Delete"
                            onClick={() => {
                              countyDetails.splice(key, 1);
                              console.log(countyDetails);
                              setCountyDetails([...countyDetails]);
                              alert(`${entity} successfully deleted`);
                            }}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </TabPanel>
          <TabPanel value="3">
            <Chat />
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
}
