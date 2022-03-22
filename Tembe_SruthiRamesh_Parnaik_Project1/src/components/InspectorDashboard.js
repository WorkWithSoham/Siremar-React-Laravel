import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import Chat from "./Chat";
import { getCountyDetails } from '../utils/data.service'

export default function InspectorDashboard() {
  const greetings = ["Hello", "Namaste", "Bonjour", "Hola", "Welcome"];

  const [entity, setEntity] = useState("");
  const [value, setValue] = React.useState("1");

  const countyDetails = getCountyDetails();

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
                      <input
                        type="text"
                        id="insName"
                        placeholder="Full Name.."
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-75">
                      <input
                        type="text"
                        id="insEmail"
                        placeholder="Mention email.."
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-75">
                      <input
                        type="text"
                        id="l_add"
                        placeholder="Mention address.."
                      />
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
                        type="date"
                        id="mid"
                        placeholder="Date of moving in.."
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-75">
                      <input
                        type="text"
                        id="pob"
                        placeholder="Place of Birth..."
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-75">
                      <input
                        type="text"
                        id="phoneNo"
                        placeholder="Please enter a phone number..."
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
                        placeholder="We would love to have your feedback on Margarita..."
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
                <h2>Register Resident</h2>
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
                        placeholder="We would love to have your feedback on Margarita..."
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
                      <input
                        type="text"
                        id="insName"
                        placeholder="Full Name.."
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-75">
                      <input
                        type="text"
                        id="insEmail"
                        placeholder="Mention email.."
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-75">
                      <input
                        type="text"
                        id="l_add"
                        placeholder="Mention address.."
                      />
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
                        type="date"
                        id="mid"
                        placeholder="Date of moving in.."
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-75">
                      <input
                        type="text"
                        id="pob"
                        placeholder="Place of Birth..."
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-75">
                      <input
                        type="text"
                        id="phoneNo"
                        placeholder="Please enter a phone number..."
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
                <h2>Register Event</h2>
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
                        placeholder="We would love to have your feedback on Margarita..."
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
                        placeholder="We would love to have your feedback on Margarita..."
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
          </TabPanel>
          <TabPanel value="2">
            <div className="countyDiv">
              <table
                className="table"
                style={{ width: "60%", maxHeight: "44vh", overflowY: "scroll", margin: 'auto' }}
              >
                <tbody>
                  <tr>
                    <th>Name</th>
                    <th>Area</th>
                    <th>Schools</th>
                    <th>Businesses</th>
                    <th>Hospitals</th>
                    <th>Population</th>
                    <th>Registered By</th>
                    <th>Actions</th>
                  </tr>
                  {countyDetails.map((value, key) => {
                    return (
                      <tr key={key}>
                        <td>
                          <input defaultValue={value.name} />
                        </td>
                        <td>
                          <input defaultValue={value.area} />
                        </td>
                        <td>
                          <input defaultValue={value.schools} />
                        </td>
                        <td>
                          <input defaultValue={value.businesses} />
                        </td>
                        <td>
                          <input defaultValue={value.hospitals} />
                        </td>
                        <td>
                          <input defaultValue={value.population} />
                        </td>
                        <td>
                          <input defaultValue={value.registeredBy} />
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
                              setEntity("Inspector");
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
