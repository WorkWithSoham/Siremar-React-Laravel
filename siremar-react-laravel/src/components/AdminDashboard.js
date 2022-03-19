import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import "../style/adminDashboard.css";

export default function AdminDashboard() {
  const greetings = ["Hello", "Namaste", "Bonjour", "Hola", "Welcome"];

  const [value, setValue] = useState("1");

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
          <div style={{ width: '100%', marginRight: '1rem' }}>
          <TabPanel value="1">
            <h1>Counties</h1>
          </TabPanel>
          </div>
        </TabContext>
      </Box>
    </div>
  );
}
