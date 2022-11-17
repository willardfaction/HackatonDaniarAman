import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContextProvider";
import { useNavigate } from "react-router-dom";
import "../styles/Authorization.css";
const LoginPage = () => {
  <h1>Login Page</h1>;

  const navigate = useNavigate();

  const { login, user } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function getUser() {
    if (!username || !password) {
      alert("Some inputs are empty!");
      return;
    } else {
      let userIn = {
        username,
        password,
      };
      login(userIn);
      navigate("/products");
    }
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <div className="loginBlock">
        <div className="accountTitle">
          <h2>Account Login</h2>
        </div>
        <div className="innerBlock">
          <div className="loginInp">
            <div>
              <h3>Login to STEAMPAY account</h3>
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
            </div>
            <div>
              <button
                class="btn-43"
                onClick={() => {
                  getUser();
                }}>
                <span class="old">Sign in</span>
                <span class="new">Login</span>
              </button>
            </div>
          </div>
          <hr className="line" />
          <div className="regInp">
            <div
              style={{
                marginBottom: "10px",
              }}>
              <h3>Don't have a STEAMPAY account?</h3>
            </div>
            <button
              class="btn-43re"
              onClick={() => {
                navigate("/register");
              }}>
              <span class="oldre">Sign up</span>
              <span class="newre">Registration</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
