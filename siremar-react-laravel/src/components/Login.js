import React from "react"
import '../style/login.css';
import { Link } from "react-router-dom"

export default function Login() {
    return (
        <div className="main">
            <h1 className="heading">Siremar</h1>
            <div className="box">
                <form className="form-body">
                    <input type="Loginid" name='login_Id' placeholder="Enter Login ID" required className="input-size" />
                    <input type="Password" name='password' placeholder="Enter Password" className="input-size" required />
                </form>
                <div className="btn">
                    <button className="button">
                        Sign In
                    </button>
                    <Link to="/register">
                        <button type="button" className="">
                            Register
                        </button>
                    </Link>
                </div>
            </div>
        </div>

    )
}
