import React, { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContextProvider";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  <h1>Login Page</h1>;

  const navigate = useNavigate();

  const { login, letter } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function getUser() {
    if (!username || !password) {
      alert("Some inputs are empty!");
      return;
    } else {
      let user = {
        username,
        password,
      };
      login(user);
    }
  }

  return (
    <div
      style={{
        marginTop: "80px",
      }}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />

      <input
        type="text"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />

      <button
        onClick={() => {
          getUser();
          navigate("/products");
        }}>
        Login
      </button>
    </div>
  );
};

export default LoginPage;
