import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContextProvider";

const RegistrationPage = () => {
  <h1>Registration Page</h1>;
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const { register } = useAuth();

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <div className="loginBlock">
          <div className="accountTitle">
            <h2>Account Register</h2>
          </div>
          <div className="innerBlock">
            <div className="loginInp">
              <div>
                <h3>Create a STEAMPAY account</h3>
              </div>
              <div className="inputsBlock">
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                  className="loginInputs"
                />

                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  className="loginInputs"
                />
                <input
                  type="text"
                  placeholder="Age"
                  value={age}
                  onChange={e => setAge(e.target.value)}
                  className="loginInputs"
                />
                <input
                  type="text"
                  placeholder="Email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="loginInputs"
                />
              </div>
              <div>
                <button
                  class="btn-43"
                  onClick={() => register(username, password, age, email)}>
                  <span class="old">Sign up</span>
                  <span class="new">Register</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegistrationPage;
