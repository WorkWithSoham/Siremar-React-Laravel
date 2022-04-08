import React from "react";

export default function Chat() {
  return (
    <div style={{ width: "100%", textAlign: "center" }}>
      <h1>
        {" "}
        Connect Margarita!!{" "}
        <i style={{ fontSize: "3rem" }} class="fas">
          &#xf086;
        </i>{" "}
      </h1>

      <div className="chatDiv">
        <div className="userList">
          <h3>User List</h3>

          <ul>
            <li>Resident 1</li>
            <li>Resident 2</li>
            <li>Resident 3</li>
            <li>Inspector 1</li>
            <li>Inspector 2</li>
            <li>Resident 1</li>
            <li>Resident 2</li>
            <li>Resident 3</li>
            <li>Inspector 1</li>
            <li>Inspector 2</li>
            <li>Resident 1</li>
            <li>Resident 2</li>
            <li>Resident 3</li>
            <li>Inspector 1</li>
            <li>Inspector 2</li>
          </ul>
        </div>
        <hr />
        <div className="chatBox">
          <div className="chat">
            <p>Me: Hello! Can you please help me!</p>
            <p>User 1: Hello! How can I help you?</p>
            <p>Me: Hello! Can you please help me!</p>
            <p>User 1: Hello! How can I help you?</p>
            <p>Me: Hello! Can you please help me!</p>
            <p>User 1: Hello! How can I help you?</p>
            <p>Me: Hello! Can you please help me!</p>
            <p>User 1: Hello! How can I help you?</p>
            <p>Me: Hello! Can you please help me!</p>
            <p>User 1: Hello! How can I help you?</p>
            <p>Me: Hello! Can you please help me!</p>
            <p>User 1: Hello! How can I help you?</p>
            <p>Me: Hello! Can you please help me!</p>
            <p>User 1: Hello! How can I help you?</p>
            <p>Me: Hello! Can you please help me!</p>
            <p>User 1: Hello! How can I help you?</p>
            <p>Me: Hello! Can you please help me!</p>
            <p>User 1: Hello! How can I help you?</p>
            <p>Me: Hello! Can you please help me!</p>
            <p>User 1: Hello! How can I help you?</p>
          </div>
          <hr />
          <input type="text" name="chat" id="chat" />
          <i
            style={{
              marginTop: "1rem",
              fontSize: "2rem",
              marginLeft: "1rem",
              marginBottom: "0px",
            }}
            class="fa"
          >
            &#xf1d9;
          </i>
        </div>
      </div>
    </div>
  );
}
