import '../style/register.css';
import React from "react";

function Register() {
    return (
        <div className='main'>
            
            <div className="box-def">
            <h1 className="heading">Register</h1>
                <form className="form-body">
                    <input type="Loginid" name='login_Id' placeholder="Enter Login ID" required className="input-size" />
                    <input type="Password" name='password' placeholder="Enter Password" className="input-size" required />
                </form>
                <div className="btn">
                    <button className="button">
                        Sign In
                    </button>

                </div>
            </div>

        </div>
    )
}

export default Register;