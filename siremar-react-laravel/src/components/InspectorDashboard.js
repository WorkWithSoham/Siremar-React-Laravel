import React, { useState } from "react";

import "../style/inspectorDashboard.css";

export default function InspectorDashboard() {
  const greetings = ["Hello", "Namaste", "Bonjour", "Hola", "Welcome"];

  const [entity, setEntity] = useState("");

  return (
    <div className="inspectorDashboard">
      <div className="welcomeDiv">
        <h1>
          {greetings[Math.floor(Math.random() * greetings.length)]} Officer!
        </h1>
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
                      <h2>Register Inspector</h2>
                      <form>
                        <div className="row">
                          <div className="col-75">
                            <input type="text" id="insName" placeholder="Full Name.." />
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
                            <input type="text" id="l_add" placeholder="Mention address.." />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-75">
                            <input type="date" id="dob" placeholder="Date of Birth.." />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-75">
                            <input type="date" id="mid" placeholder="Date of moving in.." />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-75">
                            <input type="text" id="pob" placeholder="Place of Birth..." />
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
          <h2>Register Inspector</h2>
          <form>
            <div className="row">
              <div className="col-75">
                <input type="text" id="insName" placeholder="Full Name.." />
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
                <input type="text" id="l_add" placeholder="Mention address.." />
              </div>
            </div>
            <div className="row">
              <div className="col-75">
                <input type="date" id="dob" placeholder="Date of Birth.." />
              </div>
            </div>
            <div className="row">
              <div className="col-75">
                <input type="date" id="mid" placeholder="Date of moving in.." />
              </div>
            </div>
            <div className="row">
              <div className="col-75">
                <input type="text" id="pob" placeholder="Place of Birth..." />
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
      </div>
    </div>
  );
}
