import React, { useState } from "react";
import ResidentDashboard from "./ResidentDashboard";
import InspectorDashboard from "./InspectorDashboard";
import AdminDashboard from "./AdminDashboard";

export default function Dashboard() {
  const [userType, setUserType] = useState("AD");

  if (userType === "RE") {
    return <ResidentDashboard />;
  } else if (userType === "IP") {
    return <InspectorDashboard />;
  } else if (userType === "AD") {
    return <AdminDashboard />;
  } else {
    return <div></div>
  }
}
