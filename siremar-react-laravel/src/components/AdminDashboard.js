import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TabContext from "@mui/lab/TabContext";
import TabPanel from "@mui/lab/TabPanel";
import { getCountyDetails } from "../utils/data.service";
import "../style/adminDashboard.css";

export default function AdminDashboard() {
  const greetings = ["Hello", "Namaste", "Bonjour", "Hola", "Welcome"];

  const [value, setValue] = useState("1");
  const [entity, setEntity] = useState("");

  const countyDetails = getCountyDetails();

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
            <Tab value="5" label="Population" />
            <Tab value="6" label="Flights" />
          </Tabs>
          <hr style={{ marginRight: "1rem", marginLeft: "inherit" }} />

          <TabPanel value="1" sx={{ width: "100%" }}>
            <h1>Counties</h1>
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
                  </tr>
                  {countyDetails.map((value, key) => {
                    return (
                      <tr key={key}>
                        <td>{value.name}</td>
                        <td>{value.area}</td>
                        <td>{value.schools}</td>
                        <td>{value.businesses}</td>
                        <td>{value.hospitals}</td>
                        <td>{value.population}</td>
                        <td>{value.registeredBy}</td>
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
                        id="CName"
                        placeholder="Name.."
                      />
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

          <TabPanel value="2" sx={{ width: "100%" }}>
            <h1>Counties</h1>
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
                  </tr>
                  {countyDetails.map((value, key) => {
                    return (
                      <tr key={key}>
                        <td>{value.name}</td>
                        <td>{value.area}</td>
                        <td>{value.schools}</td>
                        <td>{value.businesses}</td>
                        <td>{value.hospitals}</td>
                        <td>{value.population}</td>
                        <td>{value.registeredBy}</td>
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
            <h1>Counties</h1>
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
                  </tr>
                  {countyDetails.map((value, key) => {
                    return (
                      <tr key={key}>
                        <td>{value.name}</td>
                        <td>{value.area}</td>
                        <td>{value.schools}</td>
                        <td>{value.businesses}</td>
                        <td>{value.hospitals}</td>
                        <td>{value.population}</td>
                        <td>{value.registeredBy}</td>
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

          <TabPanel value="4" sx={{ width: "100%" }}>
            <h1>Counties</h1>
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
                  </tr>
                  {countyDetails.map((value, key) => {
                    return (
                      <tr key={key}>
                        <td>{value.name}</td>
                        <td>{value.area}</td>
                        <td>{value.schools}</td>
                        <td>{value.businesses}</td>
                        <td>{value.hospitals}</td>
                        <td>{value.population}</td>
                        <td>{value.registeredBy}</td>
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

          <TabPanel value="5" sx={{ width: "100%" }}>
            <h1>Counties</h1>
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
                  </tr>
                  {countyDetails.map((value, key) => {
                    return (
                      <tr key={key}>
                        <td>{value.name}</td>
                        <td>{value.area}</td>
                        <td>{value.schools}</td>
                        <td>{value.businesses}</td>
                        <td>{value.hospitals}</td>
                        <td>{value.population}</td>
                        <td>{value.registeredBy}</td>
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

          <TabPanel value="6" sx={{ width: "100%" }}>
            <h1>Counties</h1>
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
                  </tr>
                  {countyDetails.map((value, key) => {
                    return (
                      <tr key={key}>
                        <td>{value.name}</td>
                        <td>{value.area}</td>
                        <td>{value.schools}</td>
                        <td>{value.businesses}</td>
                        <td>{value.hospitals}</td>
                        <td>{value.population}</td>
                        <td>{value.registeredBy}</td>
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
        </TabContext>
      </Box>
    </div>
  );
}
