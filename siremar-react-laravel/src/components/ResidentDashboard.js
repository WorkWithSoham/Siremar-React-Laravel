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
              textColor="antiquewhite"
              indicatorColor="primary"
            >
              <Tab label="Offers" value="1" />
              <Tab label="Your Place" value="2" />
              <Tab label="Registration" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1">
            {/* Flight Details Table */}
            <div className="dashboardContent">
              <div className="tableBox">
                <table className="table">
                  <caption>Flight Details</caption>
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
                </table>
              </div>

              {/* Ticket Discount Table */}
              <div className="tableBox">
                <table className="table">
                  <caption>Upcoming Events</caption>
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
                </table>
              </div>
            </div>
          </TabPanel>
          <TabPanel value="2">Hospitals nearby and schools</TabPanel>
          <TabPanel value="3">Registration</TabPanel>
        </TabContext>
      </Box>
    </div>
  );
}
