import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TabContext from "@mui/lab/TabContext";
import TabPanel from "@mui/lab/TabPanel";
import { getCountyDetails } from "../utils/data.service";

import Chat from "./Chat";

export default function AdminDashboard() {
  const greetings = ["Hello", "Namaste", "Bonjour", "Hola", "Welcome"];

  const [value, setValue] = useState("1");
  const [entity, setEntity] = useState("");

  const [countyDetails, setCountyDetails] = useState(getCountyDetails());

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="adminDashboard">
      <div className="welcomeDiv">
        <h1>
          {greetings[Math.floor(Math.random() * greetings.length)]} Admin!
        </h1>
      </div>
      <Box sx={{ width: "100%", display: "flex" }}>
        <TabContext value={value}>
          <Tabs
            style={{
              alignItems: "flex-start",
              marginLeft: "1rem",
              marginRight: "1rem",
              width: "min-content",
            }}
            orientation="vertical"
            value={value}
            onChange={handleChange}
            textColor="inherit"
            indicatorColor="primary"
          >
            <Tab value="1" label="Counties" />
            <Tab value="2" label="Business" />
            <Tab value="3" label="Schools" />
            <Tab value="4" label="Hospitals" />
            <Tab value="5" label="Events" />
            <Tab value="6" label="Flights" />
            <Tab value="7" label="Chat" />
          </Tabs>
          <hr style={{ marginRight: "1rem", marginLeft: "inherit" }} />

          <TabPanel value="1" sx={{ width: "100%" }}>
            <h1>County Section</h1>
            <div className="countyDiv">
              <table className="table">
                <tbody>
                  <tr>
                    <th>Name</th>
                    <th>Area</th>
                    <th>Schools</th>
                    <th>Businesses</th>
                    <th>Hospitals</th>
                    <th>Population</th>
                    <th>Events</th>
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
                              setCountyDetails([
                                ...countyDetails,
                                countyDetails.splice(key, 1),
                              ]);
                              console.log(countyDetails);
                              alert(`${entity} successfully deleted`);
                            }}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <div
                className="form1"
                style={{
                  float: "right",
                  borderStyle: "solid",
                  borderRadius: "15px",
                  display: "block",
                  width: "40%",
                  marginX: "2%",
                  marginInline: "2rem",
                  textAlign: "center",
                }}
              >
                <h2>Register County</h2>
                <form>
                  <div className="row">
                    <div className="col-75">
                      <input
                        type="text"
                        id="Cname"
                        placeholder="County Name.."
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-75">
                      <input
                        type="text"
                        id="Cpopulation"
                        placeholder="Total population"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-75">
                      <input
                        type="text"
                        id="Cschools"
                        placeholder="Number of Schools"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-75">
                      <input
                        type="text"
                        id="Cbusiness"
                        placeholder="Number of Businesses"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-75">
                      <input
                        type="text"
                        id="CHosp"
                        placeholder="Number of Hospitals"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-75">
                      <input
                        type="text"
                        id="Cevents"
                        placeholder="Number of Events"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <input
                      type="button"
                      id="submit"
                      value="Submit"
                      onClick={() => {
                        const county = {
                          name: document.getElementById("Cname").value,
                          area: "2132sqkm",
                          schools: document.getElementById("Cschools").value,
                          population: document.getElementById("Cpopulation").value,
                          businesses: document.getElementById("Cbusiness").value,
                          hospitals: document.getElementById("CHosp").value,
                          events: document.getElementById("Cevents").value,
                          registeredBy: JSON.parse(
                            window.sessionStorage.getItem("user")
                          ).username,
                        };

                        setCountyDetails([...countyDetails, county]);
                        console.log(countyDetails);
                      }}
                    />
                  </div>
                </form>
              </div>
            </div>
          </TabPanel>

          <TabPanel value="2" sx={{ width: "100%" }}>
            <h1>Bussiness Section</h1>
            <div className="countyDiv">
              <table className="table">
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
                              setEntity("Business");
                              alert(`${entity} successfully updated`);
                            }}
                          />
                          <input
                            type="button"
                            id="delete"
                            value="Delete"
                            onClick={() => {
                              setEntity("Business");
                              alert(`${entity} successfully deleted`);
                            }}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <div
                className="form1"
                style={{
                  float: "right",
                  borderStyle: "solid",
                  borderRadius: "15px",
                  display: "block",
                  width: "40%",
                  marginX: "2%",
                  marginInline: "2rem",
                  textAlign: "center",
                }}
              >
                <h2>Register Business</h2>
                <form>
                  <div className="row">
                    <div className="col-75">
                      <input type="text" id="CName" placeholder="Name.." />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-75">
                      <input
                        type="date"
                        id="dob"
                        placeholder="Date of Registration.."
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

          <TabPanel value="3" sx={{ width: "100%" }}>
            <h1>Schools Section</h1>
            <div className="countyDiv">
              <table
                className="table"
                style={{ width: "60%", maxHeight: "44vh", overflowY: "scroll" }}
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
                              setEntity("School");
                              alert(`${entity} successfully updated`);
                            }}
                          />
                          <input
                            type="button"
                            id="delete"
                            value="Delete"
                            onClick={() => {
                              setEntity("School");
                              alert(`${entity} successfully deleted`);
                            }}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <div
                className="form1"
                style={{
                  float: "right",
                  borderStyle: "solid",
                  borderRadius: "15px",
                  display: "block",
                  width: "40%",
                  marginX: "2%",
                  marginInline: "2rem",
                  textAlign: "center",
                }}
              >
                <h2>Register School</h2>
                <form>
                  <div className="row">
                    <div className="col-75">
                      <input type="text" id="CName" placeholder="Name.." />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-75">
                      <input
                        type="date"
                        id="dob"
                        placeholder="Date of Registration.."
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
                  <div className="row">
                    <input
                      type="button"
                      id="submit"
                      value="Submit"
                      onClick={() => {
                        setEntity("School");
                        alert(`${entity} successfully created`);
                      }}
                    />
                  </div>
                </form>
              </div>
            </div>
          </TabPanel>

          <TabPanel value="4" sx={{ width: "100%" }}>
            <h1>Hospital Section</h1>
            <div className="countyDiv">
              <table
                className="table"
                style={{ width: "60%", maxHeight: "44vh", overflowY: "scroll" }}
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
                              setEntity("Hospital");
                              alert(`${entity} successfully updated`);
                            }}
                          />
                          <input
                            type="button"
                            id="delete"
                            value="Delete"
                            onClick={() => {
                              setEntity("Hospital");
                              alert(`${entity} successfully deleted`);
                            }}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <div
                className="form1"
                style={{
                  float: "right",
                  borderStyle: "solid",
                  borderRadius: "15px",
                  display: "block",
                  width: "40%",
                  marginX: "2%",
                  marginInline: "2rem",
                  textAlign: "center",
                }}
              >
                <h2>Register Hospital</h2>
                <form>
                  <div className="row">
                    <div className="col-75">
                      <input type="text" id="CName" placeholder="Name.." />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-75">
                      <input
                        type="date"
                        id="dob"
                        placeholder="Date of Registration.."
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
                  <div className="row">
                    <input
                      type="button"
                      id="submit"
                      value="Submit"
                      onClick={() => {
                        setEntity("Hospital");
                        alert(`${entity} successfully created`);
                      }}
                    />
                  </div>
                </form>
              </div>
            </div>
          </TabPanel>

          <TabPanel value="5" sx={{ width: "100%" }}>
            <h1>Event Section</h1>
            <div className="countyDiv">
              <table
                className="table"
                style={{ width: "60%", maxHeight: "44vh", overflowY: "scroll" }}
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
                              setEntity("Event");
                              alert(`${entity} successfully updated`);
                            }}
                          />
                          <input
                            type="button"
                            id="delete"
                            value="Delete"
                            onClick={() => {
                              setEntity("Event");
                              alert(`${entity} successfully deleted`);
                            }}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <div
                className="form1"
                style={{
                  float: "right",
                  borderStyle: "solid",
                  borderRadius: "15px",
                  display: "block",
                  width: "40%",
                  marginX: "2%",
                  marginInline: "2rem",
                  textAlign: "center",
                }}
              >
                <h2>Register Event</h2>
                <form>
                  <div className="row">
                    <div className="col-75">
                      <input type="text" id="CName" placeholder="Name.." />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-75">
                      <input
                        type="date"
                        id="dob"
                        placeholder="Date of Registration.."
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
                  <div className="row">
                    <input
                      type="button"
                      id="submit"
                      value="Submit"
                      onClick={() => {
                        setEntity("Event");
                        alert(`${entity} successfully created`);
                      }}
                    />
                  </div>
                </form>
              </div>
            </div>
          </TabPanel>

          <TabPanel value="6" sx={{ width: "100%" }}>
            <h1>Flight Section</h1>
            <div className="countyDiv">
              <table
                className="table"
                style={{ width: "60%", maxHeight: "44vh", overflowY: "scroll" }}
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
                              setEntity("Flight");
                              alert(`${entity} successfully updated`);
                            }}
                          />
                          <input
                            type="button"
                            id="delete"
                            value="Delete"
                            onClick={() => {
                              setEntity("Flight");
                              alert(`${entity} successfully deleted`);
                            }}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <div
                className="form1"
                style={{
                  float: "right",
                  borderStyle: "solid",
                  borderRadius: "15px",
                  display: "block",
                  width: "40%",
                  marginX: "2%",
                  marginInline: "2rem",
                  textAlign: "center",
                }}
              >
                <h2>Register Flight</h2>
                <form>
                  <div className="row">
                    <div className="col-75">
                      <input type="text" id="CName" placeholder="Name.." />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-75">
                      <input
                        type="date"
                        id="dob"
                        placeholder="Date of Registration.."
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
                  <div className="row">
                    <input
                      type="button"
                      id="submit"
                      value="Submit"
                      onClick={() => {
                        setEntity("Flight");
                        alert(`${entity} successfully created`);
                      }}
                    />
                  </div>
                </form>
              </div>
            </div>
          </TabPanel>

          <TabPanel value="7" sx={{ width: "100%" }}>
            <Chat />
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
}
