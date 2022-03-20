import React from "react"
import '../style/register.css';
import { Link } from "react-router-dom"
import { width } from "@mui/system";


export default function Register() {
    return (
        <div className="main-register">

            <div className="register">

                <div className="boxreg1">
                    <form className="formreg1">

                    <div className="input-bodyreg">
                            <label for="Name" style={{ marginTop: "4%",width: "110px" }} >Name</label>

                            <input type="Name" name='Name' placeholder="Enter your Name" required className="input-sizereg" />
                    </div>

                    
                    <div className="input-bodyreg">
                            <label for="Loginid" style={{ marginTop: "4%", width: "110px" }} >Login ID</label>

                            <input type="Loginid" name='login_Id' placeholder="Enter Login ID" required className="input-sizereg" />
                    </div>
                    
                    <div className="input-bodyreg">
                            <label for="EmailID" style={{ marginTop: "4%", width: "110px" }} >Email ID</label>

                            <input type="Email" name='Email' placeholder="Enter your Email ID" required className="input-sizereg" />
                    </div>

                    <div className="input-bodyreg">
                            <label for="Password" style={{ marginTop: "4%", width: "110px" }}>Password</label>
                            <input type="Password" name='password' placeholder="Enter Password" className="input-sizereg" required />
                    </div>
                    
                    <div className="input-bodyreg">
                            <label for="DateOfBirth" style={{ marginTop: "4%", width: "105px" }} >Date of Birth</label>

                            <input type="DateOfBirth" name='DateOfBirth' placeholder="MM/DD/YYYY" required className="input-sizereg" />
                    </div>
                    
                    <div className="input-bodyreg">
                            <label for="ConfirmPassword" style={{ marginTop: "4%",width: "110px" }} >Confirm Password</label>

                            <input type="ConfirmPassword" name='ConfirmPassword' placeholder="Confirm Password" required className="input-sizereg" />
                    </div>
                    
                    </form>

                    <div className="btn-boxreg1">
                        <button className="button">Register</button>
                    </div>
                </div>

            </div>
        </div>
    )
}