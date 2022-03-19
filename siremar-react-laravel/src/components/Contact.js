import React from "react"
import '../style/contact.css';
import { Link } from "react-router-dom"
import { flexbox, width } from "@mui/system";

export default function Contact() {
    
    return (
       <div> 
<div
          className="form1"
          style={{
            borderStyle: "solid",
            borderRadius: "15px",
            height:'445px',
            width: "75%",
            margin: "2%",
            marginLeft: "12%" }} >
          <h1>Contact Us!</h1>
          <form className="formreg">

<div className="input-bodyreg">
        <label for="Name" style={{ marginTop: "4%",width: "110px" }} >Name</label>

        <input type="Name" name='Name' placeholder="Enter your Name" required className="input-sizereg1" />
</div>


<div className="input-bodyreg">
        <label for="Loginid" style={{ marginTop: "4%", width: "110px" }} >Login ID</label>

        <input type="Loginid" name='login_Id' placeholder="Enter Login ID" required className="input-sizereg1" />
</div>

<div className="input-bodyreg">
        <label for="EmailID" style={{ marginTop: "2.5%", width: "110px" }} >Email ID</label>

        <input type="Email" name='Email' placeholder="Enter your Email ID" required className="input-sizereg" />
</div>

<div className="input-bodyreg">
        <label for="Message" style={{ marginTop: "10.5%", width: "110px" }}>Message</label>
        <input type="Message" name='message' placeholder=" We would love to hear from you!" className="input-sizereg2" />
</div>



</form>
          </div>
        </div>













    )
    }