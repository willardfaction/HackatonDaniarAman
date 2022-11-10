import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContextProvider";

const LoginPage = () => {
  <h1>Login Page</h1>;

  const { login } = useAuth();

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

    let user = {
      username,
      password,
    };
    login(user);
  }

  return (
    <>
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

      <button onClick={() => getUser()}>Login</button>
    </>
  );
};

export default LoginPage;
